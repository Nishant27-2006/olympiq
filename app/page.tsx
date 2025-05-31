import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  Code,
  FlaskRoundIcon as Flask,
  Microscope,
  Rocket,
  Star,
  Telescope,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Master STEM Olympiads with <span className="text-blue-600 dark:text-blue-500">Olympia</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Practice for premier U.S. STEM olympiads with AI-enhanced feedback, personalized problem sets, and
                  comprehensive resources.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] rounded-full bg-blue-100/50 dark:bg-blue-900/20">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="flex h-[300px] w-[300px] items-center justify-center rounded-full bg-white shadow-lg dark:bg-gray-800">
                    <Award className="h-32 w-32 text-blue-600 dark:text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Olympiad Categories */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Supported Olympiads</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Practice for a wide range of premier U.S. STEM competitions
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <OlympiadCard
              title="Mathematics"
              description="AMC, AIME, USAMO/USAJMO"
              icon={<Star className="h-10 w-10 text-yellow-500" />}
              color="bg-yellow-50 dark:bg-yellow-950/30"
            />
            <OlympiadCard
              title="Computing"
              description="USACO, NACLO"
              icon={<Code className="h-10 w-10 text-emerald-500" />}
              color="bg-emerald-50 dark:bg-emerald-950/30"
            />
            <OlympiadCard
              title="Physics"
              description="F=ma Exam, USAPhO"
              icon={<Rocket className="h-10 w-10 text-blue-500" />}
              color="bg-blue-50 dark:bg-blue-950/30"
            />
            <OlympiadCard
              title="Chemistry"
              description="USNCO"
              icon={<Flask className="h-10 w-10 text-purple-500" />}
              color="bg-purple-50 dark:bg-purple-950/30"
            />
            <OlympiadCard
              title="Biology"
              description="USABO"
              icon={<Microscope className="h-10 w-10 text-green-500" />}
              color="bg-green-50 dark:bg-green-950/30"
            />
            <OlympiadCard
              title="Astronomy"
              description="USAAAO"
              icon={<Telescope className="h-10 w-10 text-indigo-500" />}
              color="bg-indigo-50 dark:bg-indigo-950/30"
            />
            <OlympiadCard
              title="Earth Science"
              description="USESO"
              icon={<BookOpen className="h-10 w-10 text-orange-500" />}
              color="bg-orange-50 dark:bg-orange-950/30"
            />
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-6 text-center dark:border-gray-700">
              <p className="text-lg font-medium">More Coming Soon</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">We're constantly expanding our platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 dark:bg-gray-900 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Key Features</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Everything you need to excel in STEM olympiads
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Comprehensive Problem Hub"
              description="Access thousands of problems from past olympiads, organized by competition, difficulty, and topic."
            />
            <FeatureCard
              title="AI-Assisted Practice"
              description="Receive intelligent feedback and hints tailored to each olympiad type to improve your problem-solving skills."
            />
            <FeatureCard
              title="Personalized Learning"
              description="Get problem suggestions based on your performance to focus on areas that need improvement."
            />
            <FeatureCard
              title="Interactive Problem Solving"
              description="Solve problems with specialized interfaces for each olympiad type, including code execution for USACO."
            />
            <FeatureCard
              title="Progress Tracking"
              description="Monitor your improvement with detailed statistics and performance analytics."
            />
            <FeatureCard
              title="Community Support"
              description="Connect with fellow olympiad participants to share strategies and insights."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Excel?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Join thousands of students preparing for STEM olympiads with Olympia.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                Sign Up Now
              </Button>
              <Button size="lg" variant="outline">
                Explore Problems
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function OlympiadCard({ title, description, icon, color }) {
  return (
    <Link href={`/olympiads/${title.toLowerCase()}`}>
      <div
        className={`flex cursor-pointer flex-col items-center rounded-lg p-6 text-center transition-all hover:shadow-md ${color}`}
      >
        <div className="mb-4">{icon}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  )
}

function FeatureCard({ title, description }) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}
