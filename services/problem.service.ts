import { supabase } from '@/lib/supabase/client';
import { Problem, ProblemDifficulty, ProblemStatus, TestCase } from '@/lib/database.types';

export const createProblem = async (problem: Omit<Problem, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('problems')
    .insert(problem)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getProblemBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('problems')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data as Problem;
};

export const listProblems = async ({
  difficulty,
  status = 'published',
  limit = 20,
  offset = 0,
}: {
  difficulty?: ProblemDifficulty;
  status?: ProblemStatus;
  limit?: number;
  offset?: number;
}) => {
  let query = supabase
    .from('problems')
    .select('*', { count: 'exact' })
    .eq('status', status)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (difficulty) {
    query = query.eq('difficulty', difficulty);
  }

  const { data, error, count } = await query;

  if (error) throw error;
  return { data: data as Problem[], count: count || 0 };
};

export const updateProblem = async (
  id: string,
  updates: Partial<Omit<Problem, 'id' | 'created_at' | 'updated_at'>>
) => {
  const { data, error } = await supabase
    .from('problems')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const addTestCases = async (testCases: Omit<TestCase, 'id'>[]) => {
  const { data, error } = await supabase
    .from('test_cases')
    .insert(testCases)
    .select();

  if (error) throw error;
  return data;
};

export const getProblemTestCases = async (problemId: string, includeHidden = false) => {
  let query = supabase
    .from('test_cases')
    .select('*')
    .eq('problem_id', problemId)
    .order('order', { ascending: true });

  if (!includeHidden) {
    query = query.eq('is_hidden', false);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data as TestCase[];
};
