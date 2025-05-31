"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/use-toast"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const { resetPassword } = useAuth()
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
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
      const { error } = await resetPassword(email)

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
        setIsLoading(false)
        return
      }

      setIsSubmitted(true)
      toast({
        title: "Success",
        description: "Check your email for the password reset link!",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred",
        variant: "destructive",
      })
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
          <h1 className="text-2xl font-semibold tracking-tight">Forgot password</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        {isSubmitted ? (
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/50">
            <p className="text-center text-sm text-blue-700 dark:text-blue-300">
              Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your
              spam folder.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send reset link"}
              </Button>
            </form>
          </div>
        )}

        <div className="mt-4 text-center text-sm">
          Remember your password?{" "}
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
