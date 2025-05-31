"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import type { Session, User } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"

interface AuthContextType {
  user: User | null
  session: Session | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string) => Promise<{ error: any; data: any }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check active session
    const getSession = async () => {
      setIsLoading(true)
      try {
        const { data, error } = await supabase.auth.getSession()
        if (error) {
          console.error("Error getting session:", error)
          setIsLoading(false)
          return
        }

        setSession(data.session)
        setUser(data.session?.user || null)
      } catch (error) {
        console.error("Error getting session:", error)
      } finally {
        setIsLoading(false)
      }
    }

    getSession()

    try {
      // Listen for auth changes
      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        console.log("Auth state changed:", event)
        setSession(session)
        setUser(session?.user || null)
        setIsLoading(false)
      })

      return () => {
        try {
          authListener?.subscription.unsubscribe()
        } catch (error) {
          console.error("Error unsubscribing from auth listener:", error)
        }
      }
    } catch (error) {
      console.error("Error setting up auth listener:", error)
      setIsLoading(false)
      return () => {}
    }
  }, [])

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        setIsLoading(true)
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })

        if (!error) {
          setSession(data.session)
          setUser(data.user)

          // Navigate to home page after successful login
          router.push("/")
        }

        return { error }
      } catch (error: any) {
        console.error("Error signing in:", error)
        return { error }
      } finally {
        setIsLoading(false)
      }
    },
    [router],
  )

  const signUp = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase.auth.signUp({ email, password })

      if (!error && data?.user) {
        // Create a user profile
        const { error: profileError } = await supabase.from("user_profiles").insert({
          id: data.user.id,
          full_name: "",
          school: "",
          grade: "",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })

        if (profileError) {
          console.error("Error creating user profile:", profileError)
        }
      }

      return { data, error }
    } catch (error: any) {
      console.error("Error signing up:", error)
      return { data: null, error }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signOut = useCallback(async () => {
    try {
      setIsLoading(true)
      await supabase.auth.signOut()
      setUser(null)
      setSession(null)
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
    } finally {
      setIsLoading(false)
    }
  }, [router])

  const resetPassword = useCallback(async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })
      return { error }
    } catch (error: any) {
      console.error("Error resetting password:", error)
      return { error }
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, session, isLoading, signIn, signUp, signOut, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
