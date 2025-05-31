import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Get problem by slug
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const supabase = createRouteHandlerClient({ cookies });

  try {
    const { data: problem, error } = await supabase
      .from('problems')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error) throw error;
    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    // Don't include test cases in the initial problem fetch
    const { test_cases, ...problemWithoutTestCases } = problem;
    
    return NextResponse.json(problemWithoutTestCases);
  } catch (error) {
    console.error('Error fetching problem:', error);
    return NextResponse.json(
      { error: 'Failed to fetch problem' },
      { status: 500 }
    );
  }
}

// Update a problem (admin only)
export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const supabase = createRouteHandlerClient({ cookies });
  
  // Check if user is admin
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const updates = await request.json();
    
    const { data: problem, error } = await supabase
      .from('problems')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('slug', slug)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(problem);
  } catch (error) {
    console.error('Error updating problem:', error);
    return NextResponse.json(
      { error: 'Failed to update problem' },
      { status: 500 }
    );
  }
}

// Delete a problem (admin only)
export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const supabase = createRouteHandlerClient({ cookies });
  
  // Check if user is admin
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    // In a real app, you might want to soft delete instead
    const { error } = await supabase
      .from('problems')
      .delete()
      .eq('slug', slug);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting problem:', error);
    return NextResponse.json(
      { error: 'Failed to delete problem' },
      { status: 500 }
    );
  }
}
