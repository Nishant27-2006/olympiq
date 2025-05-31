import { supabase } from '@/lib/supabase/client';
import { UserSubmission } from '@/lib/database.types';

export const createSubmission = async (submission: Omit<UserSubmission, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('user_submissions')
    .insert(submission)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getSubmission = async (submissionId: string) => {
  const { data, error } = await supabase
    .from('user_submissions')
    .select('*')
    .eq('id', submissionId)
    .single();

  if (error) throw error;
  return data as UserSubmission;
};

export const getUserSubmissions = async ({
  userId,
  problemId,
  limit = 20,
  offset = 0,
}: {
  userId: string;
  problemId?: string;
  limit?: number;
  offset?: number;
}) => {
  let query = supabase
    .from('user_submissions')
    .select('*', { count: 'exact' })
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (problemId) {
    query = query.eq('problem_id', problemId);
  }

  const { data, error, count } = await query;

  if (error) throw error;
  return { data: data as UserSubmission[], count: count || 0 };
};

export const updateSubmission = async (
  submissionId: string,
  updates: Partial<Omit<UserSubmission, 'id' | 'created_at'>>
) => {
  const { data, error } = await supabase
    .from('user_submissions')
    .update(updates)
    .eq('id', submissionId)
    .select()
    .single();

  if (error) throw error;
  return data;
};
