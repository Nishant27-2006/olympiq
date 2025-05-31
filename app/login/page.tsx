"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [redirectError, setRedirectError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const { signIn, user, isLoading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  // Redirect to home page if already logged in
  useEffect(() => {
    let redirectTimeout: NodeJS.Timeout | null = null

    if (user && !isLoading) {
      try {
        // Clear any previous errors
        setRedirectError(null)

        // Use a timeout to ensure the UI has time to update
        redirectTimeout = setTimeout(() => {
          router.push("/")
        }, 100)
      } catch (error) {
        console.error("Redirection error:", error)
        setRedirectError("Failed to redirect. Please try navigating manually.")
      }
    }

    return () => {
      if (redirectTimeout) clearTimeout(redirectTimeout)
    }
  }, [user, isLoading, router])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setRedirectError(null)

    try {
      const { error } = await signIn(email, password)

      if (error) {
        toast({
          title: "Login Failed",
          description: error.message || "Invalid email or password",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }

      toast({
        title: "Success",
        description: "You have been logged in successfully!",
      })

      // Redirect will happen in the useEffect
    } catch (error: any) {
      console.error("Login error:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  // Show loading state when checking authentication
  if (isLoading) {
    return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Award className="h-12 w-12 animate-pulse text-blue-600 dark:text-blue-500" />
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  // Show redirecting state when user is authenticated
  if (user) {
    return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Award className="h-12 w-12 animate-pulse text-blue-600 dark:text-blue-500" />
          <p className="text-lg">Redirecting to home page...</p>
          {redirectError && (
            <Alert variant="destructive" className="mt-4 max-w-md">
              <AlertDescription>
                {redirectError}
                <div className="mt-2">
                  <Link
                    href="/"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Click here to go to the home page
                  </Link>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto flex items-center justify-center">
            <Award className="h-8 w-8 text-blue-600 dark:text-blue-500" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
        </div>
        <div className="grid gap-4">
          <form onSubmit={handleLogin} className="space-y-4">
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
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? "border-red-500" : ""}
                disabled={isSubmitting}
              />
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" disabled={isSubmitting} />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
