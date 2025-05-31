import Link from "next/link"
import { Award, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CheckEmailPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto flex items-center justify-center">
            <Award className="h-8 w-8 text-blue-600 dark:text-blue-500" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Check your email</h1>
          <p className="text-sm text-muted-foreground">
            We've sent you a verification link. Please check your email to verify your account.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="rounded-full bg-blue-100 p-6 dark:bg-blue-900">
            <Mail className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              If you don't see the email in your inbox, check your spam folder.
            </p>
          </div>

          <Link href="/login" className="w-full">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
              Back to Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
