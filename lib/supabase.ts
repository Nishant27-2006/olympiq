import { createClient } from "@supabase/supabase-js"

// Get Supabase URL and anon key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create a singleton instance of the Supabase client
let supabaseInstance: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (!supabaseInstance) {
    try {
      if (!supabaseUrl || !supabaseAnonKey) {
        console.error("Supabase URL or anon key is missing")
        throw new Error("Supabase configuration is incomplete")
      }

      supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      })
    } catch (error) {
      console.error("Failed to initialize Supabase client:", error)
      // Return a mock client that won't throw errors
      return {
        auth: {
          getSession: async () => ({ data: { session: null }, error: null }),
          onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } }, error: null }),
          signInWithPassword: async () => ({ data: null, error: null }),
          signUp: async () => ({ data: null, error: null }),
          signOut: async () => ({ error: null }),
        },
        from: () => ({
          select: () => ({
            eq: () => ({
              single: async () => ({ data: null, error: null }),
            }),
          }),
          insert: async () => ({ error: null }),
          update: async () => ({ error: null }),
        }),
      } as any
    }
  }

  return supabaseInstance
}

// Export the Supabase client
export const supabase = getSupabaseClient()

export async function storeUserOlympiads(userId: string, olympiads: string[]) {
  const { data, error } = await supabaseInstance
    .from('user_olympiads')
    .upsert({ user_id: userId, olympiads: olympiads }, { onConflict: 'user_id' });
  if (error) {
    console.error('Error storing user olympiads:', error);
    throw error;
  }
  return data;
}
