"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Mail, Lock, User, School, GraduationCap, AlertTriangle, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/contexts/auth-context"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/components/ui/use-toast"
import { AccountNav } from "@/components/account-nav"
import { AccountLayout } from "@/components/account-layout"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSearchParams, useRouter } from "next/navigation"

interface ProfileData {
  full_name: string
  school: string
  grade: string
}

export default function SettingsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialTab = searchParams.get("tab") || "profile"

  // Profile state
  const [profileData, setProfileData] = useState<ProfileData>({
    full_name: "",
    school: "",
    grade: "",
  })
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false)
  const [profileErrors, setProfileErrors] = useState<Record<string, string>>({})

  // Email state
  const [newEmail, setNewEmail] = useState("")
  const [currentPasswordForEmail, setCurrentPasswordForEmail] = useState("")
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false)
  const [emailErrors, setEmailErrors] = useState<Record<string, string>>({})

  // Password state
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)
  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>({})

  const { user, signOut } = useAuth()
  const { toast } = useToast()

  // Fetch profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      if (!user) return

      try {
        const { data, error } = await supabase
          .from("user_profiles")
          .select("full_name, school, grade")
          .eq("id", user.id)
          .single()

        if (error) {
          console.error("Error fetching profile:", error)
          return
        }

        if (data) {
          setProfileData({
            full_name: data.full_name || "",
            school: data.school || "",
            grade: data.grade || "",
          })
        }
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchProfileData()
  }, [user])

  const validateProfileForm = () => {
    const newErrors: Record<string, string> = {}

    if (!profileData.full_name.trim()) {
      newErrors.full_name = "Name is required"
    }

    setProfileErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateEmailForm = () => {
    const newErrors: Record<string, string> = {}

    if (!newEmail.trim()) {
      newErrors.newEmail = "New email is required"
    } else if (!/\S+@\S+\.\S+/.test(newEmail)) {
      newErrors.newEmail = "Please enter a valid email address"
    }

    if (!currentPasswordForEmail) {
      newErrors.currentPasswordForEmail = "Current password is required"
    }

    setEmailErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validatePasswordForm = () => {
    const newErrors: Record<string, string> = {}

    if (!currentPassword) {
      newErrors.currentPassword = "Current password is required"
    }

    if (!newPassword) {
      newErrors.newPassword = "New password is required"
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters"
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password"
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setPasswordErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateProfileForm()) {
      return
    }

    setIsUpdatingProfile(true)

    try {
      if (!user) {
        throw new Error("User not authenticated")
      }

      const { error } = await supabase.from("user_profiles").upsert({
        id: user.id,
        full_name: profileData.full_name,
        school: profileData.school,
        grade: profileData.grade,
        updated_at: new Date().toISOString(),
      })

      if (error) {
        throw error
      }

      toast({
        title: "Success",
        description: "Your profile has been updated successfully!",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      })
    } finally {
      setIsUpdatingProfile(false)
    }
  }

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmailForm()) {
      return
    }

    setIsUpdatingEmail(true)

    try {
      // First verify the current password
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user?.email || "",
        password: currentPasswordForEmail,
      })

      if (signInError) {
        throw new Error("Current password is incorrect")
      }

      // Then update the email
      const { error } = await supabase.auth.updateUser({ email: newEmail })

      if (error) {
        throw error
      }

      toast({
        title: "Success",
        description: "Verification email sent. Please check your inbox to confirm your new email address.",
      })

      setNewEmail("")
      setCurrentPasswordForEmail("")
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update email",
        variant: "destructive",
      })
    } finally {
      setIsUpdatingEmail(false)
    }
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validatePasswordForm()) {
      return
    }

    setIsUpdatingPassword(true)

    try {
      // First verify the current password
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user?.email || "",
        password: currentPassword,
      })

      if (signInError) {
        throw new Error("Current password is incorrect")
      }

      // Then update the password
      const { error } = await supabase.auth.updateUser({ password: newPassword })

      if (error) {
        throw error
      }

      toast({
        title: "Success",
        description: "Your password has been updated successfully.",
      })

      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update password",
        variant: "destructive",
      })
    } finally {
      setIsUpdatingPassword(false)
    }
  }

  const handleDeleteAccount = async () => {
    try {
      // In a real application, you would need to implement a secure way to delete the account
      // This is a simplified example
      const { error } = await supabase.functions.invoke("delete-user", {
        body: { user_id: user?.id },
      })

      if (error) {
        throw error
      }

      await signOut()
      toast({
        title: "Account Deleted",
        description: "Your account has been successfully deleted.",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete account",
        variant: "destructive",
      })
    }
  }

  const handleTabChange = (value: string) => {
    // Update URL without full page reload
    const params = new URLSearchParams(searchParams)
    if (value === "profile") {
      params.set("tab", "profile")
    } else {
      params.delete("tab")
    }

    router.push(`/settings?${params.toString()}`, { scroll: false })
  }

  return (
    <AccountLayout title="Settings" description="Manage your account settings and preferences">
      <div className="mb-8">
        <AccountNav />
      </div>

      <Tabs defaultValue={initialTab} className="w-full" onValueChange={handleTabChange}>
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <form onSubmit={handleProfileUpdate}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      value={profileData.full_name}
                      onChange={(e) => setProfileData({ ...profileData, full_name: e.target.value })}
                      className={`pl-10 ${profileErrors.full_name ? "border-red-500" : ""}`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {profileErrors.full_name && <p className="text-xs text-red-500">{profileErrors.full_name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school">School</Label>
                  <div className="relative">
                    <School className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="school"
                      value={profileData.school}
                      onChange={(e) => setProfileData({ ...profileData, school: e.target.value })}
                      className="pl-10"
                      placeholder="Enter your school name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Grade</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Select
                      value={profileData.grade}
                      onValueChange={(value) => setProfileData({ ...profileData, grade: value })}
                    >
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select your grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6th Grade</SelectItem>
                        <SelectItem value="7">7th Grade</SelectItem>
                        <SelectItem value="8">8th Grade</SelectItem>
                        <SelectItem value="9">9th Grade</SelectItem>
                        <SelectItem value="10">10th Grade</SelectItem>
                        <SelectItem value="11">11th Grade</SelectItem>
                        <SelectItem value="12">12th Grade</SelectItem>
                        <SelectItem value="college">College</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                  disabled={isUpdatingProfile}
                >
                  {isUpdatingProfile ? (
                    <>Updating...</>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Profile
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {/* Account Tab */}
        <TabsContent value="account" className="space-y-6">
          {/* Email Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Email Address</CardTitle>
              <CardDescription>Update your email address</CardDescription>
            </CardHeader>
            <form onSubmit={handleUpdateEmail}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentEmail">Current Email</Label>
                  <Input id="currentEmail" value={user?.email || ""} disabled className="bg-muted" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newEmail">New Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="newEmail"
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className={`pl-10 ${emailErrors.newEmail ? "border-red-500" : ""}`}
                      placeholder="Enter your new email address"
                    />
                  </div>
                  {emailErrors.newEmail && <p className="text-xs text-red-500">{emailErrors.newEmail}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentPasswordForEmail">Current Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="currentPasswordForEmail"
                      type="password"
                      value={currentPasswordForEmail}
                      onChange={(e) => setCurrentPasswordForEmail(e.target.value)}
                      className={`pl-10 ${emailErrors.currentPasswordForEmail ? "border-red-500" : ""}`}
                      placeholder="Enter your current password"
                    />
                  </div>
                  {emailErrors.currentPasswordForEmail && (
                    <p className="text-xs text-red-500">{emailErrors.currentPasswordForEmail}</p>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                  disabled={isUpdatingEmail}
                >
                  {isUpdatingEmail ? (
                    <>Updating...</>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Update Email
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          {/* Password Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <form onSubmit={handleUpdatePassword}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="currentPassword"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className={`pl-10 ${passwordErrors.currentPassword ? "border-red-500" : ""}`}
                      placeholder="Enter your current password"
                    />
                  </div>
                  {passwordErrors.currentPassword && (
                    <p className="text-xs text-red-500">{passwordErrors.currentPassword}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="newPassword"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className={`pl-10 ${passwordErrors.newPassword ? "border-red-500" : ""}`}
                      placeholder="Enter your new password"
                    />
                  </div>
                  {passwordErrors.newPassword && <p className="text-xs text-red-500">{passwordErrors.newPassword}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`pl-10 ${passwordErrors.confirmPassword ? "border-red-500" : ""}`}
                      placeholder="Confirm your new password"
                    />
                  </div>
                  {passwordErrors.confirmPassword && (
                    <p className="text-xs text-red-500">{passwordErrors.confirmPassword}</p>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                  disabled={isUpdatingPassword}
                >
                  {isUpdatingPassword ? (
                    <>Updating...</>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Update Password
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200 dark:border-red-900">
            <CardHeader>
              <CardTitle className="text-red-500 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete Account</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account and remove your data from
                      our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-500 hover:bg-red-600">
                      Delete Account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Notification settings will be implemented in a future update.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize how the application looks</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Appearance settings will be implemented in a future update.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AccountLayout>
  )
}
