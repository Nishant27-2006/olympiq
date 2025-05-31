"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/components/ui/use-toast"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    // Check if we have a hash in the URL (from the reset password email)
    const hash = window.location.hash.substring(1)
    if (!hash) {
      toast({
        title: "Error",
        description: "Invalid or expired password reset link",
        variant: "destructive",
      })
      router.push("/login")
    }
  }, [router, toast])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
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
      const { error } = await supabase.auth.updateUser({
        password,
      })

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
        setIsLoading(false)
        return
      }

      toast({
        title: "Success",
        description: "Your password has been reset successfully!",
      })

      // Redirect to login page
      router.push("/login")
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
          <h1 className="text-2xl font-semibold tracking-tight">Reset password</h1>
          <p className="text-sm text-muted-foreground">Enter your new password below</p>
        </div>
        <div className="grid gap-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="password">New Password</Label>
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
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
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
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
