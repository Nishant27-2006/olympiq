import { createClient } from '@supabase/supabase-js';
import { executeCode } from './code-execution.service';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Track currently processing submissions to prevent duplicate processing
const processingSubmissions = new Set<string>();

// Process pending submissions
export async function processPendingSubmissions() {
  try {
    // Get all pending submissions that aren't being processed
    const { data: submissions, error } = await supabase
      .from('user_submissions')
      .select('id')
      .eq('status', 'pending')
      .not('id', 'in', `(${Array.from(processingSubmissions).join(',') || "''"})`)
      .limit(5); // Process up to 5 submissions at a time

    if (error) {
      console.error('Error fetching pending submissions:', error);
      return;
    }

    if (!submissions || submissions.length === 0) {
      return; // No pending submissions
    }

    // Process each submission
    for (const submission of submissions) {
      if (processingSubmissions.has(submission.id)) {
        continue; // Skip if already being processed
      }

      processingSubmissions.add(submission.id);
      
      try {
        console.log(`Processing submission ${submission.id}`);
        await executeCode(submission.id);
      } catch (error) {
        console.error(`Error processing submission ${submission.id}:`, error);
        
        // Mark as error if something went wrong
        await supabase
          .from('user_submissions')
          .update({ 
            status: 'runtime_error',
            updated_at: new Date().toISOString() 
          })
          .eq('id', submission.id);
      } finally {
        processingSubmissions.delete(submission.id);
      }
    }
  } catch (error) {
    console.error('Error in submission worker:', error);
  }
}

// Start the worker
if (process.env.NODE_ENV !== 'test') {
  // Run immediately, then every 5 seconds
  processPendingSubmissions();
  const interval = setInterval(processPendingSubmissions, 5000);

  // Cleanup on exit
  process.on('SIGTERM', () => {
    clearInterval(interval);
  });
  
  process.on('SIGINT', () => {
    clearInterval(interval);
  });
}
