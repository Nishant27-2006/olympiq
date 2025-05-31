import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Get submission by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
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
    const { data: submission, error } = await supabase
      .from('user_submissions')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    
    // Check if the user is the owner of the submission or an admin
    if (submission.user_id !== session.user.id) {
      // Check if user is admin
      const { data: userData } = await supabase
        .from('user_profiles')
        .select('is_admin')
        .eq('id', session.user.id)
        .single();
      
      if (!userData?.is_admin) {
        return NextResponse.json(
          { error: 'Forbidden' },
          { status: 403 }
        );
      }
    }

    return NextResponse.json(submission);
  } catch (error) {
    console.error('Error fetching submission:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submission' },
      { status: 500 }
    );
  }
}
