import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Get user's submissions
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const problemId = searchParams.get('problemId');
  const userId = searchParams.get('userId');
  const limit = parseInt(searchParams.get('limit') || '20');
  const offset = parseInt(searchParams.get('offset') || '0');

  const supabase = createRouteHandlerClient({ cookies });
  
  // Check if user is authenticated
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // If userId is provided, check if the user is an admin
  if (userId && userId !== session.user.id) {
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

  try {
    const targetUserId = userId || session.user.id;
    
    let query = supabase
      .from('user_submissions')
      .select('*', { count: 'exact' })
      .eq('user_id', targetUserId)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (problemId) {
      query = query.eq('problem_id', problemId);
    }

    const { data, error, count } = await query;

    if (error) throw error;

    return NextResponse.json({
      data,
      pagination: {
        total: count,
        limit,
        offset,
      },
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
