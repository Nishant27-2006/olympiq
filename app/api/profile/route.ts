import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Get the userId from the query parameters
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    // Instead of using server-side Supabase, let's return a simple response
    // This will help us determine if the issue is with Supabase or something else
    return NextResponse.json({
      full_name: "",
      school: "",
      grade: "",
    })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
