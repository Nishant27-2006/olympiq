"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Settings, LayoutDashboard } from "lucide-react"

import { cn } from "@/lib/utils"

export function AccountNav() {
  const pathname = usePathname()

  const isSettingsActive = pathname === "/settings"
  const isDashboardActive = pathname === "/dashboard"

  return (
    <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
      <Link
        href="/settings"
        className={cn(
          "inline-flex items-center justify-start rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
          isSettingsActive ? "bg-muted" : "text-muted-foreground",
        )}
      >
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Link>
      <Link
        href="/dashboard"
        className={cn(
          "inline-flex items-center justify-start rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
          isDashboardActive ? "bg-muted" : "text-muted-foreground",
        )}
      >
        <LayoutDashboard className="mr-2 h-4 w-4" />
        Dashboard
      </Link>
    </nav>
  )
}
