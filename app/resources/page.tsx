import Link from "next/link"
import { BookOpen, Download, ExternalLink, FileText, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ResourcesPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Study Materials</h1>
        <p className="text-lg text-muted-foreground">Comprehensive resources to help you prepare for STEM olympiads</p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
          <TabsTrigger value="computing">Computing</TabsTrigger>
          <TabsTrigger value="physics">Physics</TabsTrigger>
          <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
          <TabsTrigger value="biology">Biology</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">Featured Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Olympiad Preparation Guide"
                description="A comprehensive guide to preparing for STEM olympiads, including study strategies, time management, and mental preparation."
                type="Guide"
                subject="General"
                link="#"
              />
              <ResourceCard
                title="Problem-Solving Techniques"
                description="Learn essential problem-solving strategies that apply across all STEM olympiads."
                type="Article"
                subject="General"
                link="#"
              />
              <ResourceCard
                title="Past Papers Collection"
                description="Access a collection of past papers from various olympiads to practice with real competition questions."
                type="Practice"
                subject="All Subjects"
                link="#"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Mathematics Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Number Theory Fundamentals"
                description="A comprehensive guide to number theory concepts essential for mathematics olympiads."
                type="Guide"
                subject="Mathematics"
                link="#"
              />
              <ResourceCard
                title="Geometry Problem Collection"
                description="A curated collection of geometry problems from past AMC, AIME, and USAMO competitions."
                type="Practice"
                subject="Mathematics"
                link="#"
              />
              <ResourceCard
                title="Combinatorics Masterclass"
                description="Advanced techniques for solving combinatorial problems in mathematics olympiads."
                type="Video"
                subject="Mathematics"
                link="#"
              />
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <Link href="#mathematics">View All Mathematics Resources</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Computing Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Algorithms and Data Structures"
                description="A comprehensive guide to algorithms and data structures for competitive programming."
                type="Guide"
                subject="Computing"
                link="#"
              />
              <ResourceCard
                title="USACO Bronze to Gold"
                description="Step-by-step guide to advancing through USACO divisions with practice problems and solutions."
                type="Course"
                subject="Computing"
                link="#"
              />
              <ResourceCard
                title="Dynamic Programming Workshop"
                description="Learn how to approach and solve dynamic programming problems in competitive programming."
                type="Video"
                subject="Computing"
                link="#"
              />
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <Link href="#computing">View All Computing Resources</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Physics Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Mechanics Problem Solving"
                description="Techniques for solving mechanics problems in the F=ma exam and USAPhO."
                type="Guide"
                subject="Physics"
                link="#"
              />
              <ResourceCard
                title="Electromagnetism Fundamentals"
                description="A comprehensive guide to electromagnetism concepts for physics olympiads."
                type="Guide"
                subject="Physics"
                link="#"
              />
              <ResourceCard
                title="Past USAPhO Papers with Solutions"
                description="Collection of past USAPhO papers with detailed solutions and explanations."
                type="Practice"
                subject="Physics"
                link="#"
              />
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <Link href="#physics">View All Physics Resources</Link>
              </Button>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="mathematics" className="space-y-8">
          <section id="mathematics">
            <h2 className="mb-4 text-2xl font-bold">Mathematics Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Number Theory Fundamentals"
                description="A comprehensive guide to number theory concepts essential for mathematics olympiads."
                type="Guide"
                subject="Mathematics"
                link="#"
              />
              <ResourceCard
                title="Geometry Problem Collection"
                description="A curated collection of geometry problems from past AMC, AIME, and USAMO competitions."
                type="Practice"
                subject="Mathematics"
                link="#"
              />
              <ResourceCard
                title="Combinatorics Masterclass"
                description="Advanced techniques for solving combinatorial problems in mathematics olympiads."
                type="Video"
                subject="Mathematics"
                link="#"
              />
              <ResourceCard
                title="Algebra Techniques"
                description="Essential algebraic techniques and strategies for mathematics olympiads."
                type="Guide"
                subject="Mathematics"
                link="#"
              />
              <ResourceCard
                title="AMC 10/12 Preparation"
                description="Comprehensive preparation guide for the AMC 10 and AMC 12 competitions."
                type="Course"
                subject="Mathematics"
                link="#"
              />
              <ResourceCard
                title="AIME Problem Solving"
                description="Strategies and techniques for solving AIME problems with practice examples."
                type="Guide"
                subject="Mathematics"
                link="#"
              />
              <ResourceCard
                title="Functional Equations"
                description="A guide to solving functional equations in mathematics olympiads."
                type="Article"
                subject="Mathematics"
                link="#"
              />
              <ResourceCard
                title="Inequalities Workshop"
                description="Learn techniques for proving and applying inequalities in olympiad problems."
                type="Video"
                subject="Mathematics"
                link="#"
              />
              <ResourceCard
                title="Past USAMO Papers"
                description="Collection of past USAMO papers with detailed solutions and explanations."
                type="Practice"
                subject="Mathematics"
                link="#"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Recommended Books</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Art of Problem Solving Vol. 1 & 2</CardTitle>
                  <CardDescription>By Richard Rusczyk and Sandor Lehoczky</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive guides to problem-solving strategies for mathematics competitions, covering a wide
                    range of topics.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Book
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Problem-Solving Strategies</CardTitle>
                  <CardDescription>By Arthur Engel</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A collection of problem-solving techniques and strategies with numerous examples and exercises.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Book
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mathematical Olympiad Challenges</CardTitle>
                  <CardDescription>By Titu Andreescu and Razvan Gelca</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A collection of challenging olympiad-style problems with detailed solutions and explanations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Book
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="computing" className="space-y-8">
          <section id="computing">
            <h2 className="mb-4 text-2xl font-bold">Computing Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Algorithms and Data Structures"
                description="A comprehensive guide to algorithms and data structures for competitive programming."
                type="Guide"
                subject="Computing"
                link="#"
              />
              <ResourceCard
                title="USACO Bronze to Gold"
                description="Step-by-step guide to advancing through USACO divisions with practice problems and solutions."
                type="Course"
                subject="Computing"
                link="#"
              />
              <ResourceCard
                title="Dynamic Programming Workshop"
                description="Learn how to approach and solve dynamic programming problems in competitive programming."
                type="Video"
                subject="Computing"
                link="#"
              />
              <ResourceCard
                title="Graph Algorithms"
                description="A guide to graph algorithms and their applications in competitive programming."
                type="Guide"
                subject="Computing"
                link="#"
              />
              <ResourceCard
                title="Computational Geometry"
                description="Introduction to computational geometry problems and techniques for solving them."
                type="Article"
                subject="Computing"
                link="#"
              />
              <ResourceCard
                title="Past USACO Problems"
                description="Collection of past USACO problems with solutions and explanations."
                type="Practice"
                subject="Computing"
                link="#"
              />
              <ResourceCard
                title="String Algorithms"
                description="A guide to string algorithms and their applications in competitive programming."
                type="Guide"
                subject="Computing"
                link="#"
              />
              <ResourceCard
                title="Time Complexity Analysis"
                description="Learn how to analyze and optimize the time complexity of algorithms."
                type="Article"
                subject="Computing"
                link="#"
              />
              <ResourceCard
                title="USACO Platinum Techniques"
                description="Advanced techniques and strategies for the USACO Platinum division."
                type="Guide"
                subject="Computing"
                link="#"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Recommended Books</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Competitive Programming</CardTitle>
                  <CardDescription>By Steven Halim and Felix Halim</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A comprehensive guide to competitive programming, covering algorithms, data structures, and
                    problem-solving strategies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Book
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Introduction to Algorithms</CardTitle>
                  <CardDescription>By Cormen, Leiserson, Rivest, and Stein</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A comprehensive introduction to algorithms and data structures, with detailed explanations and
                    examples.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Book
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Algorithms</CardTitle>
                  <CardDescription>By Robert Sedgewick and Kevin Wayne</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A practical introduction to algorithms and data structures, with implementations in Java.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Book
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="physics" className="space-y-8">
          {/* Physics content similar to mathematics and computing */}
          <section id="physics">
            <h2 className="mb-4 text-2xl font-bold">Physics Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Mechanics Problem Solving"
                description="Techniques for solving mechanics problems in the F=ma exam and USAPhO."
                type="Guide"
                subject="Physics"
                link="#"
              />
              <ResourceCard
                title="Electromagnetism Fundamentals"
                description="A comprehensive guide to electromagnetism concepts for physics olympiads."
                type="Guide"
                subject="Physics"
                link="#"
              />
              <ResourceCard
                title="Past USAPhO Papers with Solutions"
                description="Collection of past USAPhO papers with detailed solutions and explanations."
                type="Practice"
                subject="Physics"
                link="#"
              />
              <ResourceCard
                title="Thermodynamics and Statistical Mechanics"
                description="A guide to thermodynamics and statistical mechanics for physics olympiads."
                type="Guide"
                subject="Physics"
                link="#"
              />
              <ResourceCard
                title="Waves and Optics"
                description="Comprehensive coverage of waves and optics topics for physics competitions."
                type="Article"
                subject="Physics"
                link="#"
              />
              <ResourceCard
                title="Modern Physics for Olympiads"
                description="Introduction to relativity and quantum mechanics for physics olympiads."
                type="Guide"
                subject="Physics"
                link="#"
              />
              <ResourceCard
                title="Experimental Physics Skills"
                description="Techniques and skills for the laboratory component of physics olympiads."
                type="Video"
                subject="Physics"
                link="#"
              />
              <ResourceCard
                title="F=ma Exam Preparation"
                description="Comprehensive preparation guide for the F=ma exam with practice problems."
                type="Course"
                subject="Physics"
                link="#"
              />
              <ResourceCard
                title="Physics Olympiad Problem Collection"
                description="Curated collection of problems from various physics olympiads with solutions."
                type="Practice"
                subject="Physics"
                link="#"
              />
            </div>
          </section>
        </TabsContent>

        <TabsContent value="chemistry" className="space-y-8">
          <section id="chemistry">
            <h2 className="mb-4 text-2xl font-bold">Chemistry Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Organic Chemistry Fundamentals"
                description="A comprehensive guide to organic chemistry concepts for chemistry olympiads."
                type="Guide"
                subject="Chemistry"
                link="#"
              />
              <ResourceCard
                title="Inorganic Chemistry for Olympiads"
                description="Essential inorganic chemistry concepts and problem-solving techniques."
                type="Guide"
                subject="Chemistry"
                link="#"
              />
              <ResourceCard
                title="Physical Chemistry Problem Solving"
                description="Techniques for solving physical chemistry problems in olympiads."
                type="Guide"
                subject="Chemistry"
                link="#"
              />
              <ResourceCard
                title="Analytical Chemistry Techniques"
                description="Guide to analytical chemistry methods and calculations for olympiads."
                type="Article"
                subject="Chemistry"
                link="#"
              />
              <ResourceCard
                title="Past USNCO Papers with Solutions"
                description="Collection of past USNCO papers with detailed solutions and explanations."
                type="Practice"
                subject="Chemistry"
                link="#"
              />
              <ResourceCard
                title="Laboratory Skills for Chemistry Olympiads"
                description="Techniques and skills for the laboratory component of chemistry olympiads."
                type="Video"
                subject="Chemistry"
                link="#"
              />
              <ResourceCard
                title="Biochemistry Essentials"
                description="Introduction to biochemistry concepts relevant for chemistry olympiads."
                type="Guide"
                subject="Chemistry"
                link="#"
              />
              <ResourceCard
                title="Spectroscopy and Structure Determination"
                description="Guide to spectroscopic methods and structure determination in chemistry."
                type="Article"
                subject="Chemistry"
                link="#"
              />
              <ResourceCard
                title="Chemistry Olympiad Problem Collection"
                description="Curated collection of problems from various chemistry olympiads with solutions."
                type="Practice"
                subject="Chemistry"
                link="#"
              />
            </div>
          </section>
        </TabsContent>

        <TabsContent value="biology" className="space-y-8">
          <section id="biology">
            <h2 className="mb-4 text-2xl font-bold">Biology Resources</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Cell Biology Fundamentals"
                description="A comprehensive guide to cell biology concepts for biology olympiads."
                type="Guide"
                subject="Biology"
                link="#"
              />
              <ResourceCard
                title="Molecular Biology and Genetics"
                description="Essential molecular biology and genetics concepts for olympiads."
                type="Guide"
                subject="Biology"
                link="#"
              />
              <ResourceCard
                title="Plant Biology for Olympiads"
                description="Comprehensive coverage of plant biology topics for biology competitions."
                type="Guide"
                subject="Biology"
                link="#"
              />
              <ResourceCard
                title="Animal Physiology"
                description="Guide to animal physiology concepts and systems for biology olympiads."
                type="Article"
                subject="Biology"
                link="#"
              />
              <ResourceCard
                title="Ecology and Evolution"
                description="Essential ecology and evolution concepts for biology olympiads."
                type="Guide"
                subject="Biology"
                link="#"
              />
              <ResourceCard
                title="Past USABO Papers with Solutions"
                description="Collection of past USABO papers with detailed solutions and explanations."
                type="Practice"
                subject="Biology"
                link="#"
              />
              <ResourceCard
                title="Laboratory Skills for Biology Olympiads"
                description="Techniques and skills for the laboratory component of biology olympiads."
                type="Video"
                subject="Biology"
                link="#"
              />
              <ResourceCard
                title="Biosystematics and Taxonomy"
                description="Guide to biosystematics and taxonomy concepts for biology olympiads."
                type="Article"
                subject="Biology"
                link="#"
              />
              <ResourceCard
                title="Biology Olympiad Problem Collection"
                description="Curated collection of problems from various biology olympiads with solutions."
                type="Practice"
                subject="Biology"
                link="#"
              />
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <section className="mt-12 rounded-lg bg-blue-50 p-8 dark:bg-blue-950/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold">Need More Resources?</h2>
          <p className="mb-6 text-muted-foreground">
            Join our community to access premium resources, personalized study plans, and expert guidance.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
            Sign Up for Free
          </Button>
        </div>
      </section>
    </div>
  )
}

function ResourceCard({ title, description, type, subject, link }) {
  const getTypeIcon = (type) => {
    switch (type) {
      case "Guide":
        return <BookOpen className="h-4 w-4" />
      case "Article":
        return <FileText className="h-4 w-4" />
      case "Video":
        return <Video className="h-4 w-4" />
      case "Practice":
        return <Download className="h-4 w-4" />
      case "Course":
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "Guide":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
      case "Article":
        return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
      case "Video":
        return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
      case "Practice":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300"
      case "Course":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          <Badge variant="outline" className={getTypeColor(type)}>
            <span className="flex items-center gap-1">
              {getTypeIcon(type)}
              {type}
            </span>
          </Badge>
          <Badge variant="secondary">{subject}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href={link}>
            <ExternalLink className="mr-2 h-4 w-4" />
            Access Resource
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
