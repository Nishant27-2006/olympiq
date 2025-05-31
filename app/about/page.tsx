import { Award, BookOpen, Brain, Lightbulb, Target, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Olympia</h1>
          <p className="text-lg text-muted-foreground">
            Empowering students to excel in STEM olympiads through AI-enhanced practice
          </p>
        </div>

        <div className="space-y-4 text-left">
          <p>
            Olympia is an AI-enhanced web platform designed specifically for high school students preparing for premier
            U.S. STEM olympiads. Our mission is to make high-quality olympiad preparation accessible to all students,
            regardless of their background or resources.
          </p>
          <p>
            We believe that with the right tools and guidance, any dedicated student can achieve excellence in these
            prestigious competitions. Our platform combines comprehensive problem sets, intelligent feedback, and
            personalized learning paths to help students reach their full potential.
          </p>
        </div>
      </div>

      <div className="my-16">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">Our Mission</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="text-center">
              <Target className="mx-auto h-10 w-10 text-blue-600 dark:text-blue-500" />
              <CardTitle>Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Make high-quality olympiad preparation accessible to all students, regardless of their background or
                resources.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Brain className="mx-auto h-10 w-10 text-blue-600 dark:text-blue-500" />
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Foster a culture of academic excellence and intellectual curiosity in STEM fields through challenging
                problem-solving.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Users className="mx-auto h-10 w-10 text-blue-600 dark:text-blue-500" />
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                Build a supportive community of students, educators, and mentors passionate about STEM olympiads.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="my-16">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">Why Choose Olympia?</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Comprehensive Coverage</h3>
              <p className="text-muted-foreground">
                Access thousands of problems from all major U.S. STEM olympiads, carefully curated and organized by
                topic, difficulty, and competition.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">AI-Enhanced Learning</h3>
              <p className="text-muted-foreground">
                Receive intelligent feedback and hints tailored to each olympiad type, helping you understand concepts
                and improve your problem-solving skills.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Personalized Practice</h3>
              <p className="text-muted-foreground">
                Get problem suggestions based on your performance to focus on areas that need improvement and track your
                progress over time.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Competition Readiness</h3>
              <p className="text-muted-foreground">
                Prepare effectively for competitions with realistic practice environments, timed challenges, and
                comprehensive performance analytics.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 rounded-lg bg-blue-50 p-8 dark:bg-blue-950/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Join Olympia Today</h2>
          <p className="mb-6 text-muted-foreground">
            Start your journey to olympiad excellence with Olympia. Join thousands of students who are already improving
            their skills and achieving their goals.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
            Sign Up for Free
          </Button>
        </div>
      </div>

      <div className="my-16">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">Our Team</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Olympia was founded by a team of olympiad medalists, educators, and technology experts passionate about making
          STEM education accessible to all.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-muted">
                <div className="flex h-full items-center justify-center">
                  <Users className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </div>
              <h3 className="text-lg font-bold">Team Member {i}</h3>
              <p className="text-sm text-muted-foreground">
                {i % 2 === 0 ? "Olympiad Medalist & Educator" : "Technology Expert & Mentor"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
