import { supabase } from '@/lib/supabase/client';
import { UserSubmission } from '@/lib/database.types';

// This is a simplified version. In a real app, you would:
// 1. Use a secure code execution service or sandbox
// 2. Queue jobs for execution
// 3. Handle timeouts and resource limits properly

export async function executeCode(submissionId: string) {
  try {
    // Get the submission
    const { data: submission, error: submissionError } = await supabase
      .from('user_submissions')
      .select('*')
      .eq('id', submissionId)
      .single();

    if (submissionError || !submission) {
      console.error('Submission not found:', submissionError);
      return;
    }

    // Update status to running
    await supabase
      .from('user_submissions')
      .update({ status: 'running' })
      .eq('id', submissionId);

    // Get test cases for the problem
    const { data: testCases, error: testCaseError } = await supabase
      .from('test_cases')
      .select('*')
      .eq('problem_id', submission.problem_id)
      .order('order', { ascending: true });

    if (testCaseError || !testCases || testCases.length === 0) {
      console.error('No test cases found:', testCaseError);
      await updateSubmissionStatus(submissionId, 'runtime_error', 0, testCases?.length || 0);
      return;
    }

    // In a real app, you would:
    // 1. Send the code and test cases to a secure execution environment
    // 2. Process the results
    // 3. Update the submission status

    // This is a mock implementation
    let passed = 0;
    const results = [];
    
    for (const testCase of testCases) {
      try {
        // In a real app, this would execute the code with the test case input
        // and compare the output with expected_output
        const isPassed = Math.random() > 0.3; // 70% pass rate for demo
        
        if (isPassed) {
          passed++;
        }
        
        results.push({
          testCaseId: testCase.id,
          passed: isPassed,
          time: Math.random() * 100, // mock time in ms
          memory: Math.floor(Math.random() * 10000), // mock memory in KB
        });
      } catch (error) {
        console.error('Error executing test case:', error);
        results.push({
          testCaseId: testCase.id,
          passed: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }

    // Calculate final status
    const status = passed === testCases.length ? 'accepted' : 'wrong_answer';
    const totalTime = results.reduce((sum, r) => sum + (r.time || 0), 0);
    const avgMemory = results.reduce((sum, r) => sum + (r.memory || 0), 0) / results.length;

    // Update submission with results
    await updateSubmissionStatus(
      submissionId,
      status,
      passed,
      testCases.length,
      Math.ceil(totalTime),
      Math.ceil(avgMemory)
    );

  } catch (error) {
    console.error('Error in code execution service:', error);
    await updateSubmissionStatus(
      submissionId,
      'runtime_error',
      0,
      0,
      0,
      0
    );
  }
}

async function updateSubmissionStatus(
  submissionId: string,
  status: UserSubmission['status'],
  testCasesPassed: number,
  totalTestCases: number,
  timeUsed?: number,
  memoryUsed?: number
) {
  const updateData: any = {
    status,
    test_cases_passed: testCasesPassed,
    total_test_cases: totalTestCases,
    updated_at: new Date().toISOString(),
  };

  if (timeUsed !== undefined) updateData.time_used = timeUsed;
  if (memoryUsed !== undefined) updateData.memory_used = memoryUsed;

  const { error } = await supabase
    .from('user_submissions')
    .update(updateData)
    .eq('id', submissionId);

  if (error) {
    console.error('Error updating submission status:', error);
  }
}
