import Link from "next/link"
import { ArrowRight, BookOpen, ChevronRight, FileText, Rocket, Star, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PhysicsOlympiadPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/olympiads" className="hover:text-foreground">
            Olympiads
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Physics</span>
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Physics Olympiad</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Apply physical principles to solve complex theoretical and experimental problems
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Resources
            </Button>
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
              Practice Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-4 w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="competitions">Competitions</TabsTrigger>
              <TabsTrigger value="topics">Topics</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About Physics Olympiad</h2>
                <p>
                  The Physics Olympiad is a prestigious competition that challenges students to apply physical
                  principles to solve complex theoretical and experimental problems. It aims to identify and nurture
                  physics talent, promote scientific thinking, and develop problem-solving skills.
                </p>
                <p>
                  Participants engage with problems that require deep understanding of physical concepts, mathematical
                  modeling, and experimental design. The olympiad covers various areas of physics, including mechanics,
                  electromagnetism, thermodynamics, waves and optics, and modern physics.
                </p>
                <p>
                  Success in the Physics Olympiad requires not only a strong foundation in physical concepts but also
                  the ability to think critically, analyze complex systems, and apply mathematical tools to physical
                  problems.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Benefits of Participation</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-blue-500" />
                    <span>
                      <strong>Advanced Physics Knowledge:</strong> Develop a deep understanding of physical principles
                      beyond the standard curriculum.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-blue-500" />
                    <span>
                      <strong>Problem-Solving Skills:</strong> Enhance your ability to analyze complex physical systems
                      and develop mathematical models.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-blue-500" />
                    <span>
                      <strong>College and Career Opportunities:</strong> Stand out in college applications for physics,
                      engineering, and other STEM fields.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-blue-500" />
                    <span>
                      <strong>Recognition and Awards:</strong> Earn certificates, medals, and potential scholarships
                      based on performance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-blue-500" />
                    <span>
                      <strong>Community of Peers:</strong> Connect with other talented physics students from across the
                      country.
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="competitions" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Physics Competitions</h2>
                <p>
                  The U.S. Physics Olympiad pathway consists of several competitions of increasing difficulty, designed
                  to identify and develop physics talent.
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">F=ma Exam</h3>
                    <p className="mt-2">The entry-level competition that focuses primarily on mechanics concepts.</p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: 25 multiple-choice questions in 75 minutes</li>
                      <li>Held in January/February each year</li>
                      <li>Covers kinematics, Newton's laws, energy, momentum, rotation, and simple harmonic motion</li>
                      <li>Top scorers qualify for the USAPhO</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">USAPhO (United States of America Physics Olympiad)</h3>
                    <p className="mt-2">
                      The second stage of the olympiad pathway, open to top scorers from the F=ma Exam.
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: 2 parts (theoretical and experimental), approximately 3 hours total</li>
                      <li>Held in March/April each year</li>
                      <li>Covers mechanics, electromagnetism, thermodynamics, waves and optics, and modern physics</li>
                      <li>Top performers are invited to the U.S. Physics Team training camp</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">U.S. Physics Team Training Camp</h3>
                    <p className="mt-2">An intensive training program for the top ~20 students from the USAPhO.</p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: 10-day residential camp with lectures, problem-solving sessions, and lab work</li>
                      <li>Held in May/June each year</li>
                      <li>Provides advanced training in all areas of physics</li>
                      <li>
                        Selection of the 5-member team to represent the USA at the International Physics Olympiad (IPhO)
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">International Physics Olympiad (IPhO)</h3>
                    <p className="mt-2">
                      The highest level of competition, bringing together the best physics students from around the
                      world.
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: Theoretical exam (5 hours) and experimental exam (5 hours)</li>
                      <li>Held in July each year in a different host country</li>
                      <li>Covers advanced topics in all areas of physics</li>
                      <li>Medals and special prizes awarded based on performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="topics" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Key Physics Topics</h2>
                <p>
                  The Physics Olympiad covers a wide range of physics topics, with an emphasis on deep conceptual
                  understanding and mathematical problem-solving. Key areas include:
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-blue-600" />
                        Mechanics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Kinematics, Newton's laws, work and energy, momentum, rotational motion, gravitation, and
                        oscillations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-blue-600" />
                        Electromagnetism
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Electric fields and potentials, circuits, magnetic fields, electromagnetic induction, and
                        Maxwell's equations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-blue-600" />
                        Thermodynamics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Temperature, heat, thermal properties of matter, laws of thermodynamics, kinetic theory, and
                        statistical mechanics.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-blue-600" />
                        Waves and Optics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Wave phenomena, sound, light, reflection, refraction, interference, diffraction, and
                        polarization.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="sm:col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-blue-600" />
                        Modern Physics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Special relativity, quantum mechanics, atomic and nuclear physics, and elementary particles.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="eligibility" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Eligibility Criteria</h2>
                <p>
                  The Physics Olympiad is open to students based on their academic status and citizenship. Here are the
                  general eligibility requirements:
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">F=ma Exam</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Open to all high school students in the United States</li>
                      <li>No age restrictions for participation</li>
                      <li>Students must register through their schools or as individuals</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">USAPhO</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Qualification based on F=ma Exam scores</li>
                      <li>Typically, students need to score in the top 10% nationally</li>
                      <li>Must be U.S. citizens or legal residents</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">U.S. Physics Team</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Selection based on USAPhO performance</li>
                      <li>Must be U.S. citizens or legal residents</li>
                      <li>Must be enrolled in high school or below</li>
                      <li>Under 20 years of age on June 30th of the competition year</li>
                      <li>Have not participated in the IPhO more than once previously</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">International Physics Olympiad (IPhO) Team</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Selection based on performance at the U.S. Physics Team training camp</li>
                      <li>Must be U.S. citizens or legal residents</li>
                      <li>Must be enrolled in high school or below</li>
                      <li>Under 20 years of age on June 30th of the competition year</li>
                      <li>Have not participated in the IPhO more than once previously</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Note:</strong> Eligibility requirements may vary slightly from year to year. Please check
                    the official American Association of Physics Teachers (AAPT) website for the most up-to-date
                    information.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>Begin your Physics Olympiad journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span>From F=ma Exam to International Olympiad</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <span>Theoretical and experimental challenges</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-500" />
                <span>Comprehensive study materials</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                Start Practicing
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Resources</CardTitle>
              <CardDescription>Materials to help you prepare</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Books</h3>
                <ul className="space-y-1 text-sm">
                  <li>Introduction to Classical Mechanics by David Morin</li>
                  <li>Electricity and Magnetism by Edward Purcell</li>
                  <li>Physics Olympiad: Basic to Advanced Exercises</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Websites</h3>
                <ul className="space-y-1 text-sm">
                  <li>AAPT Physics Olympiad Resources</li>
                  <li>PhysicsWOOT</li>
                  <li>Khan Academy Physics</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/resources" className="w-full">
                <Button variant="outline" className="w-full">
                  View All Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
