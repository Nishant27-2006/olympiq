# Olympiad Coding Platform - Backend

This is the backend for the Olympiad coding platform, providing LeetCode-like functionality for programming competitions and practice problems.

## Features

- Problem management (CRUD operations)
- User authentication and authorization
- Code submission and execution
- Test case management
- Submission history and results
- Olympiad/contest support

## Tech Stack

- **Framework**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Code Execution**: (To be implemented with a secure sandbox)

## Database Schema

### Main Tables

1. **problems** - Stores coding problems with metadata
2. **test_cases** - Test cases for problems
3. **problem_tags** - Categories/tags for problems
4. **olympiads** - Coding competitions/olympiads
5. **olympiad_problems** - Many-to-many relationship between olympiads and problems
6. **user_submissions** - User code submissions and results

## API Endpoints

### Problems

- `GET /api/problems` - List problems (with pagination)
- `POST /api/problems` - Create a new problem (admin only)
- `GET /api/problems/[slug]` - Get problem by slug
- `PUT /api/problems/[slug]` - Update a problem (admin only)
- `DELETE /api/problems/[slug]` - Delete a problem (admin only)

### Submissions

- `GET /api/submissions` - List user submissions (with filtering)
- `POST /api/submit` - Submit code for a problem
- `GET /api/submissions/[id]` - Get submission details

## Setup

1. Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

2. Run the database migrations in `supabase/migrations` to set up the database schema.

3. Start the development server:
   ```bash
   npm run dev
   ```

## Code Execution

The code execution service is currently a mock implementation. In production, you should:

1. Use a secure sandboxed environment (like Docker containers)
2. Implement proper resource limits (CPU, memory, execution time)
3. Use a job queue for processing submissions
4. Implement proper isolation between submissions

## Security Considerations

- All database operations use Row Level Security (RLS)
- Users can only access their own submissions unless they are admins
- Sensitive operations require authentication
- API endpoints validate user permissions

## Deployment

1. Deploy your Next.js application to your preferred hosting provider
2. Set up environment variables in your hosting environment
3. Ensure your database connection is properly configured
4. Set up a process manager (like PM2) to run the submission worker

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (server-side only)
- `NODE_ENV`: Environment (development, production, test)
