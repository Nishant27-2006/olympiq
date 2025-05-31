"use client"

import { useRouter as useNextRouter } from "next/navigation"

// This is a wrapper around Next.js's useRouter to make it more similar to react-router-dom's useNavigate
export function useNavigate() {
  const router = useNextRouter()

  const navigate = (path: string, options?: { replace?: boolean }) => {
    if (options?.replace) {
      router.replace(path)
    } else {
      router.push(path)
    }
  }

  return navigate
}
