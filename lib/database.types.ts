export type ProblemDifficulty = 'easy' | 'medium' | 'hard';
export type ProblemStatus = 'draft' | 'published' | 'archived';

export interface Problem {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: ProblemDifficulty;
  status: ProblemStatus;
  constraints: string[];
  created_at: string;
  updated_at: string;
  author_id: string;
  time_limit: number; // in seconds
  memory_limit: number; // in MB
}

export interface TestCase {
  id: string;
  problem_id: string;
  input: any; // JSON string of input
  expected_output: any; // JSON string of expected output
  is_hidden: boolean;
  order: number;
}

export interface ProblemTag {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface ProblemTagRelation {
  id: string;
  problem_id: string;
  tag_id: string;
}

export interface Olympiad {
  id: string;
  name: string;
  slug: string;
  description: string;
  start_time: string;
  end_time: string;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface OlympiadProblem {
  id: string;
  olympiad_id: string;
  problem_id: string;
  order: number;
  points: number;
}

export interface UserSubmission {
  id: string;
  user_id: string;
  problem_id: string;
  code: string;
  language: string;
  status: 'pending' | 'running' | 'accepted' | 'wrong_answer' | 'time_limit_exceeded' | 'runtime_error' | 'compilation_error';
  time_used: number; // in milliseconds
  memory_used: number; // in KB
  created_at: string;
  test_cases_passed: number;
  total_test_cases: number;
}
