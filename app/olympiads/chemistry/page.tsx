import Link from "next/link"
import {
  ArrowRight,
  Beaker,
  BookOpen,
  Calendar,
  FlaskRoundIcon as Flask,
  GraduationCap,
  Lightbulb,
  Trophy,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChemistryOlympiadPage() {
  return (
    <div className="container px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
            <Flask className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Chemistry Olympiad</h1>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Explore chemical concepts and laboratory techniques through challenging problems and experiments. Develop
            your analytical skills and prepare for prestigious chemistry competitions.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="mx-auto flex w-full max-w-md justify-center">
            <TabsTrigger value="overview" className="flex-1">
              Overview
            </TabsTrigger>
            <TabsTrigger value="curriculum" className="flex-1">
              Curriculum
            </TabsTrigger>
            <TabsTrigger value="competitions" className="flex-1">
              Competitions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Beaker className="h-5 w-5 text-blue-600" />
                    <CardTitle>Analytical Chemistry</CardTitle>
                  </div>
                  <CardDescription>Master techniques for analyzing chemical compounds and reactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn qualitative and quantitative analysis methods, spectroscopy, chromatography, and more.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                    <CardTitle>Organic Chemistry</CardTitle>
                  </div>
                  <CardDescription>Study carbon-based compounds and their reactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Explore functional groups, reaction mechanisms, stereochemistry, and synthesis strategies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Flask className="h-5 w-5 text-blue-600" />
                    <CardTitle>Physical Chemistry</CardTitle>
                  </div>
                  <CardDescription>Understand the physical principles underlying chemical phenomena</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Study thermodynamics, kinetics, quantum mechanics, and electrochemistry.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950/30">
              <div className="mx-auto max-w-3xl space-y-4">
                <h2 className="text-2xl font-bold">Why Study Chemistry?</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900/50">
                      <GraduationCap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Academic Excellence</h3>
                      <p className="text-sm text-muted-foreground">
                        Develop advanced problem-solving skills that will help you excel in school and university.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900/50">
                      <Trophy className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Competitive Edge</h3>
                      <p className="text-sm text-muted-foreground">
                        Stand out in college applications and gain recognition through prestigious competitions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900/50">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Deep Understanding</h3>
                      <p className="text-sm text-muted-foreground">
                        Gain insights into the molecular world and how chemistry shapes our everyday lives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900/50">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Future Careers</h3>
                      <p className="text-sm text-muted-foreground">
                        Prepare for careers in medicine, pharmaceuticals, materials science, and research.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Ready to Begin Your Chemistry Journey?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Start with our carefully curated curriculum and practice problems designed to build your skills from the
                fundamentals to advanced topics.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/problems?olympiad=chemistry">Practice Problems</Link>
                </Button>
                <Button className="gap-2">
                  <span>Start Learning</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Chemistry Olympiad Curriculum</h2>
                <p className="text-muted-foreground">
                  Our comprehensive curriculum covers all the topics you need to excel in chemistry competitions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border p-6">
                  <h3 className="mb-4 text-xl font-bold">Fundamentals</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Atomic Structure</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Atomic models and theories</li>
                        <li>Electron configurations</li>
                        <li>Periodic trends</li>
                        <li>Quantum numbers</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Chemical Bonding</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Ionic and covalent bonds</li>
                        <li>Lewis structures</li>
                        <li>VSEPR theory</li>
                        <li>Molecular orbital theory</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Stoichiometry</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Mole concept</li>
                        <li>Reaction calculations</li>
                        <li>Limiting reagents</li>
                        <li>Percent yield</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">States of Matter</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Gas laws</li>
                        <li>Intermolecular forces</li>
                        <li>Phase diagrams</li>
                        <li>Solutions and colligative properties</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="mb-4 text-xl font-bold">Advanced Topics</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Thermodynamics</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Laws of thermodynamics</li>
                        <li>Enthalpy, entropy, and free energy</li>
                        <li>Hess's law</li>
                        <li>Spontaneity of reactions</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Kinetics</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Rate laws and rate constants</li>
                        <li>Reaction mechanisms</li>
                        <li>Activation energy</li>
                        <li>Catalysis</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Equilibrium</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Equilibrium constants</li>
                        <li>Le Chatelier's principle</li>
                        <li>Acid-base equilibria</li>
                        <li>Solubility equilibria</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Electrochemistry</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Redox reactions</li>
                        <li>Electrochemical cells</li>
                        <li>Nernst equation</li>
                        <li>Electrolysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="mb-4 text-xl font-bold">Specialized Areas</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Organic Chemistry</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Functional groups and nomenclature</li>
                        <li>Reaction mechanisms</li>
                        <li>Stereochemistry</li>
                        <li>Synthesis strategies</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Inorganic Chemistry</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Coordination compounds</li>
                        <li>Crystal field theory</li>
                        <li>Transition metals</li>
                        <li>Organometallic chemistry</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Analytical Chemistry</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Spectroscopy (IR, NMR, MS)</li>
                        <li>Chromatography</li>
                        <li>Titrations</li>
                        <li>Instrumental analysis</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Biochemistry</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Proteins and enzymes</li>
                        <li>Carbohydrates and lipids</li>
                        <li>Nucleic acids</li>
                        <li>Metabolism</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Ready to Test Your Knowledge?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Practice with our extensive collection of problems ranging from beginner to international olympiad
                level.
              </p>
              <Button asChild>
                <Link href="/problems?olympiad=chemistry">Start Practicing</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="competitions" className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Chemistry Competitions</h2>
                <p className="text-muted-foreground">
                  Prepare for these prestigious chemistry competitions with our targeted resources and practice
                  materials.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>U.S. National Chemistry Olympiad (USNCO)</CardTitle>
                    <CardDescription>
                      National competition for high school students in the United States
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="font-medium">Format:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Multiple-choice, free-response, and laboratory practical
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Eligibility:</span>
                      <span className="ml-2 text-sm text-muted-foreground">U.S. high school students</span>
                    </div>
                    <div>
                      <span className="font-medium">Timeline:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Local exams (March), National exam (April)
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>International Chemistry Olympiad (IChO)</CardTitle>
                    <CardDescription>Prestigious international competition for high school students</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="font-medium">Format:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Theoretical and experimental examinations
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Eligibility:</span>
                      <span className="ml-2 text-sm text-muted-foreground">Top performers from national olympiads</span>
                    </div>
                    <div>
                      <span className="font-medium">Timeline:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Held annually in July in different host countries
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Chemistry Olympiad Study Camp</CardTitle>
                    <CardDescription>Intensive training for top USNCO performers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="font-medium">Format:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Two-week intensive study program with lectures and laboratory work
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Eligibility:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Top 20 performers in the USNCO National Exam
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Timeline:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Held in June, with selection of the U.S. IChO team
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Chemistry Competitions for Middle School</CardTitle>
                    <CardDescription>Introductory competitions for younger students</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="font-medium">Format:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Multiple-choice questions on fundamental chemistry concepts
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Eligibility:</span>
                      <span className="ml-2 text-sm text-muted-foreground">Middle school students (grades 6-8)</span>
                    </div>
                    <div>
                      <span className="font-medium">Timeline:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Various competitions throughout the academic year
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950/30">
              <div className="mx-auto max-w-3xl space-y-4">
                <h2 className="text-2xl font-bold">Preparation Resources</h2>
                <p className="text-muted-foreground">
                  We offer comprehensive resources to help you prepare for chemistry competitions:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900/50">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Study Materials</h3>
                      <p className="text-sm text-muted-foreground">
                        Access textbooks, lecture notes, and problem sets covering all competition topics.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900/50">
                      <Beaker className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Practice Problems</h3>
                      <p className="text-sm text-muted-foreground">
                        Solve problems from past competitions with detailed solutions and explanations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900/50">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Mock Exams</h3>
                      <p className="text-sm text-muted-foreground">
                        Test your knowledge with timed practice exams simulating competition conditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900/50">
                      <GraduationCap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Mentorship</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect with experienced coaches and former olympiad participants for guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Ready to Compete?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Start your journey toward chemistry competition success with our structured learning path.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/problems?olympiad=chemistry">Practice Problems</Link>
                </Button>
                <Button className="gap-2">
                  <span>Start Learning</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
