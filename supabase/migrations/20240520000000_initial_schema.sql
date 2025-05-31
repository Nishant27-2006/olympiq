-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create problem_tags table
create table if not exists problem_tags (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create problems table
create table if not exists problems (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  description text not null,
  difficulty text not null check (difficulty in ('easy', 'medium', 'hard')),
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  constraints text[] default '{}'::text[],
  time_limit integer not null default 2, -- in seconds
  memory_limit integer not null default 256, -- in MB
  author_id uuid references auth.users(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create problem_tag_relations table
create table if not exists problem_tag_relations (
  id uuid primary key default uuid_generate_v4(),
  problem_id uuid not null references problems(id) on delete cascade,
  tag_id uuid not null references problem_tags(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(problem_id, tag_id)
);

-- Create test_cases table
create table if not exists test_cases (
  id uuid primary key default uuid_generate_v4(),
  problem_id uuid not null references problems(id) on delete cascade,
  input jsonb not null,
  expected_output jsonb not null,
  is_hidden boolean not null default false,
  "order" integer not null default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create olympiads table
create table if not exists olympiads (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  description text,
  start_time timestamp with time zone not null,
  end_time timestamp with time zone not null,
  is_public boolean not null default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  check (end_time > start_time)
);

-- Create olympiad_problems table
create table if not exists olympiad_problems (
  id uuid primary key default uuid_generate_v4(),
  olympiad_id uuid not null references olympiads(id) on delete cascade,
  problem_id uuid not null references problems(id) on delete cascade,
  "order" integer not null default 0,
  points integer not null default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(olympiad_id, problem_id)
);

-- Create user_submissions table
create table if not exists user_submissions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  problem_id uuid not null references problems(id) on delete cascade,
  code text not null,
  language text not null,
  status text not null default 'pending' check (status in (
    'pending', 'running', 'accepted', 'wrong_answer', 
    'time_limit_exceeded', 'runtime_error', 'compilation_error'
  )),
  time_used integer, -- in milliseconds
  memory_used integer, -- in KB
  test_cases_passed integer not null default 0,
  total_test_cases integer not null default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes for better query performance
create index if not exists idx_problems_slug on problems(slug);
create index if not exists idx_problems_difficulty on problems(difficulty);
create index if not exists idx_problems_status on problems(status);
create index if not exists idx_test_cases_problem_id on test_cases(problem_id);
create index if not exists idx_user_submissions_user_id on user_submissions(user_id);
create index if not exists idx_user_submissions_problem_id on user_submissions(problem_id);
create index if not exists idx_user_submissions_created_at on user_submissions(created_at);

-- Set up Row Level Security (RLS)
alter table problems enable row level security;
alter table test_cases enable row level security;
alter table user_submissions enable row level security;

-- Create policies for problems
create policy "Problems are viewable by everyone"
  on problems for select
  using (status = 'published');

create policy "Users can view their own problems"
  on problems for select
  using (auth.uid() = author_id);

create policy "Admins can manage all problems"
  on problems for all
  using (exists (
    select 1 from auth.users
    where id = auth.uid() 
    and raw_user_meta_data->>'role' = 'admin'
  ));

-- Create policies for test_cases
create policy "Test cases are viewable by admins"
  on test_cases for select
  using (exists (
    select 1 from auth.users
    where id = auth.uid() 
    and raw_user_meta_data->>'role' = 'admin'
  ));

-- Create policies for user_submissions
create policy "Users can view their own submissions"
  on user_submissions for select
  using (auth.uid() = user_id);

create policy "Users can create their own submissions"
  on user_submissions for insert
  with check (auth.uid() = user_id);

-- Create a function to update the updated_at column
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language 'plpgsql';

-- Create triggers to update updated_at columns
create or replace trigger update_problems_updated_at
  before update on problems
  for each row
  execute function update_updated_at_column();

create or replace trigger update_olympiads_updated_at
  before update on olympiads
  for each row
  execute function update_updated_at_column();
