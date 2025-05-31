import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, ChevronRight, FileText, Star, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MathematicsOlympiadPage() {
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
          <span>Mathematics</span>
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Mathematics Olympiad</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Develop problem-solving skills and mathematical reasoning through challenging competitions
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
                <h2 className="text-2xl font-bold">About Mathematics Olympiad</h2>
                <p>
                  The Mathematics Olympiad is a prestigious competition that challenges students to solve complex
                  mathematical problems. It aims to identify and nurture mathematical talent, promote mathematical
                  creativity, and develop problem-solving skills.
                </p>
                <p>
                  Participants engage with problems that require deep mathematical thinking, creativity, and rigorous
                  proof techniques. The olympiad covers various areas of mathematics, including algebra, geometry,
                  number theory, combinatorics, and probability.
                </p>
                <p>
                  Success in the Mathematics Olympiad requires not only a strong foundation in mathematical concepts but
                  also the ability to think critically, recognize patterns, and develop innovative approaches to
                  problem-solving.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Benefits of Participation</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>Enhanced Problem-Solving Skills:</strong> Develop the ability to approach complex problems
                      methodically and creatively.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>Deep Mathematical Understanding:</strong> Gain insights into advanced mathematical
                      concepts beyond the standard curriculum.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>College Admissions Advantage:</strong> Stand out in college applications, especially for
                      STEM-focused programs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>Recognition and Awards:</strong> Earn certificates, medals, and scholarships based on
                      performance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-yellow-500" />
                    <span>
                      <strong>Community of Like-minded Peers:</strong> Connect with other mathematically talented
                      students from across the country.
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="competitions" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Mathematics Competitions</h2>
                <p>
                  The U.S. Mathematics Olympiad pathway consists of several competitions of increasing difficulty,
                  designed to identify and develop mathematical talent.
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">AMC 10/12 (American Mathematics Competitions)</h3>
                    <p className="mt-2">
                      The entry-level competitions open to all students. AMC 10 is for students in grade 10 or below,
                      and AMC 12 is for students in grade 12 or below.
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: 25 multiple-choice questions in 75 minutes</li>
                      <li>Held in February each year</li>
                      <li>Top scorers qualify for the AIME</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">AIME (American Invitational Mathematics Examination)</h3>
                    <p className="mt-2">
                      The second stage of the olympiad pathway, open to top scorers from the AMC 10/12.
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: 15 short-answer questions in 3 hours</li>
                      <li>Held in March each year</li>
                      <li>Combined scores from AMC and AIME determine USAMO/USAJMO qualification</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">
                      USAMO/USAJMO (United States of America Mathematical Olympiad / Junior Mathematical Olympiad)
                    </h3>
                    <p className="mt-2">
                      The highest level of national competition. USAMO is for students who took the AMC 12, and USAJMO
                      is for students who took the AMC 10.
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: 6 proof-based questions over 2 days (4.5 hours each day)</li>
                      <li>Held in April each year</li>
                      <li>Top USAMO scorers are invited to the Mathematical Olympiad Program (MOP)</li>
                      <li>MOP participants are considered for the International Mathematical Olympiad (IMO) team</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="topics" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Key Mathematical Topics</h2>
                <p>
                  The Mathematics Olympiad covers a wide range of topics, with an emphasis on creative problem-solving
                  rather than computational skills. Key areas include:
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-blue-600" />
                        Number Theory
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Properties of integers, divisibility, prime numbers, modular arithmetic, Diophantine equations,
                        and number-theoretic functions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-blue-600" />
                        Algebra
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Polynomials, functional equations, inequalities, sequences and series, complex numbers, and
                        elementary group theory.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-blue-600" />
                        Geometry
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Euclidean geometry, coordinate geometry, transformations, projective geometry, and geometric
                        inequalities.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-blue-600" />
                        Combinatorics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Counting principles, binomial coefficients, recursion, graph theory, pigeonhole principle, and
                        extremal combinatorics.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="sm:col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5 text-blue-600" />
                        Probability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Basic probability concepts, expected value, conditional probability, and probabilistic methods
                        in combinatorics.
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
                  The Mathematics Olympiad is open to students based on their grade level and academic status. Here are
                  the general eligibility requirements:
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">AMC 10</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Students must be in grade 10 or below</li>
                      <li>Under 17.5 years of age on the day of the competition</li>
                      <li>Not enrolled in any high school level courses at a college or university</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">AMC 12</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Students must be in grade 12 or below</li>
                      <li>Under 19.5 years of age on the day of the competition</li>
                      <li>Not enrolled full-time at a college or university</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">AIME</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Qualification based on AMC 10/12 scores</li>
                      <li>Typically, students need to score in the top 2.5% on AMC 10 or top 5% on AMC 12</li>
                      <li>Must meet the age and enrollment requirements of the qualifying AMC exam</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">USAMO/USAJMO</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Qualification based on combined AMC and AIME scores</li>
                      <li>Approximately 500 students qualify for each competition</li>
                      <li>USAJMO is for AMC 10 participants, USAMO is for AMC 12 participants</li>
                      <li>Must be U.S. citizens or legal residents</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Note:</strong> Eligibility requirements may vary slightly from year to year. Please check
                    the official Mathematical Association of America (MAA) website for the most up-to-date information.
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
              <CardDescription>Begin your Mathematics Olympiad journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span>Competitions from AMC 10/12 to USAMO</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <span>Comprehensive study materials</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-500" />
                <span>Practice with past problems</span>
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
                  <li>Art of Problem Solving (Volumes 1 & 2)</li>
                  <li>Problem-Solving Strategies by Arthur Engel</li>
                  <li>Mathematical Olympiad Challenges by Titu Andreescu</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Websites</h3>
                <ul className="space-y-1 text-sm">
                  <li>Art of Problem Solving (AoPS)</li>
                  <li>Brilliant.org</li>
                  <li>MAA AMC Resources</li>
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
