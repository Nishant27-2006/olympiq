export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          full_name: string | null
          school: string | null
          grade: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          school?: string | null
          grade?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          school?: string | null
          grade?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      olympiads: {
        Row: {
          id: string
          name: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_at?: string
        }
      }
      concepts: {
        Row: {
          id: string
          olympiad_id: string
          name: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          olympiad_id: string
          name: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          olympiad_id?: string
          name?: string
          description?: string | null
          created_at?: string
        }
      }
      problems: {
        Row: {
          id: string
          olympiad_id: string
          concept_id: string | null
          title: string
          statement: string
          solution: string | null
          difficulty: "Easy" | "Medium" | "Hard"
          created_at: string
        }
        Insert: {
          id?: string
          olympiad_id: string
          concept_id?: string | null
          title: string
          statement: string
          solution?: string | null
          difficulty: "Easy" | "Medium" | "Hard"
          created_at?: string
        }
        Update: {
          id?: string
          olympiad_id?: string
          concept_id?: string | null
          title?: string
          statement?: string
          solution?: string | null
          difficulty?: "Easy" | "Medium" | "Hard"
          created_at?: string
        }
      }
      user_practice: {
        Row: {
          id: string
          user_id: string
          problem_id: string
          submission: string | null
          result: "Correct" | "Incorrect" | "Partially Correct"
          submitted_at: string
        }
        Insert: {
          id?: string
          user_id: string
          problem_id: string
          submission?: string | null
          result: "Correct" | "Incorrect" | "Partially Correct"
          submitted_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          problem_id?: string
          submission?: string | null
          result?: "Correct" | "Incorrect" | "Partially Correct"
          submitted_at?: string
        }
      }
      diagnostic_tests: {
        Row: {
          id: string
          user_id: string
          olympiad_id: string
          score: number | null
          test_date: string
        }
        Insert: {
          id?: string
          user_id: string
          olympiad_id: string
          score?: number | null
          test_date?: string
        }
        Update: {
          id?: string
          user_id?: string
          olympiad_id?: string
          score?: number | null
          test_date?: string
        }
      }
      diagnostic_test_results: {
        Row: {
          id: string
          test_id: string
          concept_id: string
          score: number | null
          created_at: string
        }
        Insert: {
          id?: string
          test_id: string
          concept_id: string
          score?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          test_id?: string
          concept_id?: string
          score?: number | null
          created_at?: string
        }
      }
    }
  }
}
