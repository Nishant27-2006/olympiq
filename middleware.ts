import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

export async function middleware(req: NextRequest) {
  // Create a response object that we'll modify and return
  const res = NextResponse.next()

  try {
    // Create the Supabase middleware client
    const supabase = createMiddlewareClient({ req, res })

    // Refresh the session - this is crucial to ensure we have the most up-to-date auth state
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Set critical headers to prevent caching issues
    res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate")
    res.headers.set("Pragma", "no-cache")
    res.headers.set("Expires", "0")
    res.headers.set("Surrogate-Control", "no-store")
    
    // For debugging - track authentication state in headers
    res.headers.set("x-auth-state", session ? "authenticated" : "unauthenticated")

    // The current URL path
    const path = req.nextUrl.pathname
    
    // We'll consider the user authenticated if we have a session
    const isAuthenticated = !!session
    
    // Define routes that are only for unauthenticated users
    const authRoutes = ["/login", "/signup", "/forgot-password"]
    
    // NOTE: Dashboard and Settings are now public pages with demo data,
    // so we don't need to restrict access to them anymore
    
    // Handle auth routes - redirect to dashboard if already logged in
    if (authRoutes.some(route => path === route || path.startsWith(`${route}/`))) {
      if (isAuthenticated) {
        // User is already logged in, send them to dashboard
        return NextResponse.redirect(new URL("/dashboard", req.url))
      }
      // Otherwise, allow access to auth pages
      return res
    }

    // For all other routes, just proceed normally
    return res
  } catch (error) {
    console.error("Middleware error:", error)
    // In case of error, allow the request to proceed
    return res
  }
}

export const config = {
  matcher: ["/login", "/signup", "/forgot-password"],
}
