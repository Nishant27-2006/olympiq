"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Award, Menu, X, User, LogOut, LayoutDashboard, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"
import { supabase } from "@/lib/supabase"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userName, setUserName] = useState("")
  const pathname = usePathname()
  const router = useRouter()
  const { user, signOut, isLoading } = useAuth()

  // Fetch user profile data to get the name
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) return

      try {
        const { data, error } = await supabase.from("user_profiles").select("full_name").eq("id", user.id).single()

        if (error) {
          console.error("Error fetching user profile:", error)
          return
        }

        if (data && data.full_name) {
          setUserName(data.full_name)
        } else {
          // Fallback to email username if no name is set
          setUserName(user.email?.split("@")[0] || "User")
        }
      } catch (error) {
        console.error("Error:", error)
        // Fallback to email username if there's an error
        setUserName(user.email?.split("@")[0] || "User")
      }
    }

    fetchUserProfile()
  }, [user])

  const routes = [
    { name: "Home", path: "/" },
    { name: "Olympiads", path: "/olympiads" },
    { name: "Problems", path: "/problems" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/blog" },
  ]

  // Display name fallback logic
  const displayName = userName || "User"

  const handleNavigation = (path: string) => {
    // Close the menu first
    setIsMenuOpen(false)
    
    // Use both methods for more reliable navigation
    // First try the router
    router.push(path)
    
    // Then use a timeout with direct navigation as fallback
    // This helps ensure navigation works even if router encounters issues
    setTimeout(() => {
      window.location.href = path
    }, 100)
  }

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm", className)}>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                <span className="text-xl font-bold">Olympia</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/dashboard"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/problems"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname.startsWith("/problems") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Problems
              </Link>
              <Link
                href="/leaderboard"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/leaderboard" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Leaderboard
              </Link>
              <Link
                href="/pricing"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === "/about" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                About
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              {!isLoading && (
                <div className="hidden md:flex md:gap-2">
                  {user ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                          <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{displayName}</p>
                            <p className="text-xs leading-none text-muted-foreground">
                              {user.email}
                            </p>
                          </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href="/dashboard" className="w-full cursor-pointer">
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/settings" className="w-full cursor-pointer">
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => signOut()} className="text-red-500">
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <>
                      <Button variant="outline" size="sm" onClick={() => handleNavigation("/login")}>
                        Log In
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                        onClick={() => handleNavigation("/signup")}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              )}
              <ModeToggle />
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <div className="container flex h-full flex-col p-4">
            <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
            <nav className="flex flex-col gap-4 py-8">
              {routes.map((route) => (
                <Button
                  key={route.path}
                  variant="ghost"
                  className={cn(
                    "justify-start text-lg font-medium",
                    pathname === route.path ? "text-foreground" : "text-muted-foreground",
                  )}
                  onClick={() => handleNavigation(route.path)}
                >
                  {route.name}
                </Button>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 pb-8">
              {!isLoading && (
                <>
                  {user ? (
                    <>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => handleNavigation("/settings")}
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                      <Button
                        className="w-full justify-start text-red-500"
                        variant="outline"
                        onClick={() => {
                          signOut()
                          setIsMenuOpen(false)
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="w-full" onClick={() => handleNavigation("/login")}>
                        Log In
                      </Button>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                        onClick={() => handleNavigation("/signup")}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
