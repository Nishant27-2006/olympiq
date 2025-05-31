import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/auth-context"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Olympia - Olympiad Preparation Platform",
  description: "Prepare for academic olympiads with comprehensive resources and practice problems.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen w-full">
              <Header />
              <main className="flex-1 w-full flex justify-center">
                <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
