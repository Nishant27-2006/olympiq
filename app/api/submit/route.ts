import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Submit code for a problem
export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  
  // Check if user is authenticated
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { problemId, code, language } = await request.json();
    
    if (!problemId || !code || !language) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a new submission
    const { data: submission, error } = await supabase
      .from('user_submissions')
      .insert({
        user_id: session.user.id,
        problem_id: problemId,
        code,
        language,
        status: 'pending',
        test_cases_passed: 0,
        total_test_cases: 0, // Will be updated by the worker
      })
      .select()
      .single();

    if (error) throw error;

    // In a real app, you would add the submission to a queue for processing
    // For now, we'll just return the submission
    
    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error('Error submitting code:', error);
    return NextResponse.json(
      { error: 'Failed to submit code' },
      { status: 500 }
    );
  }
}
