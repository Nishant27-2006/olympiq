import Link from "next/link"
import { Award } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t bg-background w-full mt-auto", className)}>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px] px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                <span className="text-xl font-bold">Olympia</span>
              </div>
              <p className="text-sm text-muted-foreground">
                An AI-enhanced platform for students to practice for premier U.S. STEM olympiads.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Olympiads</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/olympiads/mathematics" className="text-muted-foreground hover:text-foreground">
                    Mathematics
                  </Link>
                </li>
                <li>
                  <Link href="/olympiads/computing" className="text-muted-foreground hover:text-foreground">
                    Computing
                  </Link>
                </li>
                <li>
                  <Link href="/olympiads/physics" className="text-muted-foreground hover:text-foreground">
                    Physics
                  </Link>
                </li>
                <li>
                  <Link href="/olympiads/chemistry" className="text-muted-foreground hover:text-foreground">
                    Chemistry
                  </Link>
                </li>
                <li>
                  <Link href="/olympiads/biology" className="text-muted-foreground hover:text-foreground">
                    Biology
                  </Link>
                </li>
                <li>
                  <Link href="/olympiads/astronomy" className="text-muted-foreground hover:text-foreground">
                    Astronomy
                  </Link>
                </li>
                <li>
                  <Link href="/olympiads/earth-science" className="text-muted-foreground hover:text-foreground">
                    Earth Science
                  </Link>
                </li>
                <li>
                  <Link href="/olympiads" className="text-muted-foreground hover:text-foreground">
                    All Olympiads
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/problems" className="text-muted-foreground hover:text-foreground">
                    Problem Hub
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                    Study Materials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Olympia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
