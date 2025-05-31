"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/auth-context"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/components/ui/use-toast"

export default function SignupPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const { signUp } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const { error } = await signUp(email, password, fullName)

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
        setIsLoading(false)
        return
      }

      // Create user profile in the database
      const { data: userData } = await supabase.auth.getUser()

      if (userData.user) {
        const { error: profileError } = await supabase.from("user_profiles").insert({
          id: userData.user.id,
          full_name: fullName,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })

        if (profileError) {
          console.error("Error creating user profile:", profileError)
        }
      }

      toast({
        title: "Success",
        description: "Please check your email to confirm your account.",
      })

      router.push("/login")
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during signup",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto flex items-center justify-center">
            <Award className="h-8 w-8 text-blue-600 dark:text-blue-500" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your details to create an account</p>
        </div>
        <div className="grid gap-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                type="text"
                autoCapitalize="words"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={errors.fullName ? "border-red-500" : ""}
              />
              {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={errors.confirmPassword ? "border-red-500" : ""}
              />
              {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword}</p>}
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Sign Up"}
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
