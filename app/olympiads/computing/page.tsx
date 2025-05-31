import Link from "next/link"
import { ArrowRight, BookOpen, ChevronRight, Code, FileCode, Star, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ComputingOlympiadPage() {
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
          <span>Computing</span>
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Computing Olympiad</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Master algorithms and programming techniques through competitive coding challenges
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
                <h2 className="text-2xl font-bold">About Computing Olympiad</h2>
                <p>
                  The Computing Olympiad is a prestigious competition that challenges students to solve computational
                  problems using algorithms, data structures, and programming skills. It aims to identify and nurture
                  computing talent, promote computational thinking, and develop problem-solving abilities.
                </p>
                <p>
                  Participants engage with problems that require algorithmic thinking, efficient coding, and innovative
                  approaches to computational challenges. The olympiad covers various areas of computer science,
                  including algorithms, data structures, graph theory, dynamic programming, and computational geometry.
                </p>
                <p>
                  Success in the Computing Olympiad requires not only strong programming skills but also the ability to
                  think critically, analyze problems, and develop efficient algorithmic solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Benefits of Participation</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-emerald-500" />
                    <span>
                      <strong>Advanced Programming Skills:</strong> Develop expertise in algorithms, data structures,
                      and efficient coding practices.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-emerald-500" />
                    <span>
                      <strong>Computational Thinking:</strong> Enhance your ability to break down complex problems and
                      develop systematic solutions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-emerald-500" />
                    <span>
                      <strong>College and Career Opportunities:</strong> Stand out in college applications and job
                      interviews for computer science and related fields.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-emerald-500" />
                    <span>
                      <strong>Recognition and Awards:</strong> Earn certificates, medals, and potential scholarships
                      based on performance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="mt-1 h-4 w-4 text-emerald-500" />
                    <span>
                      <strong>Community of Peers:</strong> Connect with other talented programmers and computer
                      scientists from across the country.
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="competitions" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Computing Competitions</h2>
                <p>
                  The U.S. Computing Olympiad (USACO) consists of a series of competitions of increasing difficulty,
                  designed to identify and develop computational talent.
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">USACO Bronze Division</h3>
                    <p className="mt-2">
                      The entry-level division for beginners in competitive programming. Problems focus on basic
                      algorithms and data structures.
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: 3-4 problems to solve in 3-5 hours</li>
                      <li>Held four times per year (December, January, February, and US Open in March/April)</li>
                      <li>Top performers are promoted to the Silver Division</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">USACO Silver Division</h3>
                    <p className="mt-2">
                      The intermediate division that introduces more advanced algorithms and data structures.
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: 3 problems to solve in 3-5 hours</li>
                      <li>
                        Requires knowledge of graph algorithms, dynamic programming basics, and efficient data
                        structures
                      </li>
                      <li>Top performers are promoted to the Gold Division</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">USACO Gold Division</h3>
                    <p className="mt-2">
                      The advanced division that tests sophisticated algorithmic knowledge and problem-solving skills.
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: 3 problems to solve in 4-5 hours</li>
                      <li>
                        Covers advanced dynamic programming, complex graph algorithms, and optimization techniques
                      </li>
                      <li>Top performers are promoted to the Platinum Division</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">USACO Platinum Division</h3>
                    <p className="mt-2">
                      The highest division that challenges students with the most difficult algorithmic problems.
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: 3 problems to solve in 4-5 hours</li>
                      <li>Requires expertise in advanced algorithms, data structures, and mathematical concepts</li>
                      <li>Top performers in the US Open are invited to the USACO training camp</li>
                      <li>
                        The training camp selects the 4-member team to represent the USA at the International Olympiad
                        in Informatics (IOI)
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">NACLO (North American Computational Linguistics Olympiad)</h3>
                    <p className="mt-2">
                      A competition focused on computational linguistics and natural language processing.
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>Format: Open Round (3 hours) and Invitational Round (4 hours) for top performers</li>
                      <li>Problems involve analyzing patterns in language data and solving linguistic puzzles</li>
                      <li>No prior knowledge of linguistics or programming is required</li>
                      <li>
                        Top performers may be selected to represent the USA at the International Linguistics Olympiad
                        (IOL)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="topics" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Key Computing Topics</h2>
                <p>
                  The Computing Olympiad covers a wide range of computer science topics, with an emphasis on algorithmic
                  thinking and efficient problem-solving. Key areas include:
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-emerald-600" />
                        Algorithms
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Searching, sorting, greedy algorithms, divide and conquer, recursion, and algorithmic complexity
                        analysis.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-emerald-600" />
                        Data Structures
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Arrays, linked lists, stacks, queues, trees, heaps, hash tables, and advanced data structures
                        like segment trees and Fenwick trees.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-emerald-600" />
                        Dynamic Programming
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Memoization, tabulation, state design, optimization problems, and applications to various
                        problem domains.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-emerald-600" />
                        Graph Theory
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Graph representations, traversal algorithms (BFS, DFS), shortest path algorithms, minimum
                        spanning trees, and network flow.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-emerald-600" />
                        Computational Geometry
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Points, lines, polygons, convex hull, line sweep algorithms, and geometric algorithms.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-emerald-600" />
                        String Algorithms
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>String matching, string processing, tries, suffix arrays, and text manipulation algorithms.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="eligibility" className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Eligibility Criteria</h2>
                <p>
                  The Computing Olympiad is open to students based on their academic status and citizenship. Here are
                  the general eligibility requirements:
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">USACO (All Divisions)</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Open to pre-college students worldwide</li>
                      <li>No age restrictions for participation in the online contests</li>
                      <li>Students can start at any division, but most begin with Bronze</li>
                      <li>Promotion to higher divisions is based on performance</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">USACO Training Camp</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Top-performing U.S. citizens or permanent residents</li>
                      <li>Must be enrolled in high school or below</li>
                      <li>Under 20 years of age on July 1st of the competition year</li>
                      <li>Selection based on performance in the Platinum Division, especially the US Open</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">International Olympiad in Informatics (IOI) Team</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Must be a U.S. citizen or permanent resident</li>
                      <li>Must be enrolled in high school or below</li>
                      <li>Under 20 years of age on July 1st of the competition year</li>
                      <li>Selection based on performance at the USACO training camp</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-bold">NACLO</h3>
                    <ul className="mt-2 space-y-1">
                      <li>Open to all pre-college students in the U.S. and Canada</li>
                      <li>No prior knowledge of linguistics or programming required</li>
                      <li>Open Round available to all eligible students</li>
                      <li>Invitational Round for top performers from the Open Round</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Note:</strong> Eligibility requirements may vary slightly from year to year. Please check
                    the official USACO and NACLO websites for the most up-to-date information.
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
              <CardDescription>Begin your Computing Olympiad journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span>Progress through Bronze to Platinum</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="h-5 w-5 text-emerald-500" />
                <span>Practice with interactive coding problems</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                <span>Learn advanced algorithms and techniques</span>
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
                  <li>Competitive Programming by Steven Halim</li>
                  <li>Introduction to Algorithms (CLRS)</li>
                  <li>Algorithms by Robert Sedgewick</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Websites</h3>
                <ul className="space-y-1 text-sm">
                  <li>USACO Guide</li>
                  <li>Codeforces</li>
                  <li>LeetCode</li>
                  <li>HackerRank</li>
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
