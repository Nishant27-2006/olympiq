import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Problem } from '@/lib/database.types';

// Get all problems (paginated)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const difficulty = searchParams.get('difficulty') as Problem['difficulty'] | null;
  const limit = parseInt(searchParams.get('limit') || '20');
  const offset = parseInt(searchParams.get('offset') || '0');

  const supabase = createRouteHandlerClient({ cookies });

  try {
    let query = supabase
      .from('problems')
      .select('*', { count: 'exact' })
      .eq('status', 'published')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (difficulty) {
      query = query.eq('difficulty', difficulty);
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
    console.error('Error fetching problems:', error);
    return NextResponse.json(
      { error: 'Failed to fetch problems' },
      { status: 500 }
    );
  }
}

// Create a new problem (admin only)
export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  
  // Check if user is admin
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  // In a real app, you would check if the user has admin role
  // For now, we'll just check if the user is authenticated

  try {
    const problemData = await request.json();
    
    const { data, error } = await supabase
      .from('problems')
      .insert({
        ...problemData,
        author_id: session.user.id,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating problem:', error);
    return NextResponse.json(
      { error: 'Failed to create problem' },
      { status: 500 }
    );
  }
}
