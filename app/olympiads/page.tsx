import Link from "next/link"
import { Star, Code, Rocket, FlaskRoundIcon as Flask, Microscope, Telescope, BookOpen, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const olympiads = [
  {
    id: "mathematics",
    title: "Mathematics",
    icon: <Star className="h-12 w-12 text-yellow-500" />,
    color: "bg-yellow-50 dark:bg-yellow-950/30",
    description: "Develop problem-solving skills and mathematical reasoning through challenging competitions.",
    competitions: ["AMC 10/12", "AIME", "USAMO/USAJMO"],
    problemCount: 450,
    difficulty: "Challenging",
  },
  {
    id: "computing",
    title: "Computing",
    icon: <Code className="h-12 w-12 text-emerald-500" />,
    color: "bg-emerald-50 dark:bg-emerald-950/30",
    description: "Master algorithms and programming techniques through competitive coding challenges.",
    competitions: ["USACO Bronze/Silver/Gold/Platinum", "NACLO"],
    problemCount: 320,
    difficulty: "Variable",
  },
  {
    id: "physics",
    title: "Physics",
    icon: <Rocket className="h-12 w-12 text-blue-500" />,
    color: "bg-blue-50 dark:bg-blue-950/30",
    description: "Apply physical principles to solve complex theoretical and experimental problems.",
    competitions: ["F=ma Exam", "USAPhO"],
    problemCount: 280,
    difficulty: "Advanced",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    icon: <Flask className="h-12 w-12 text-purple-500" />,
    color: "bg-purple-50 dark:bg-purple-950/30",
    description: "Explore chemical concepts and laboratory techniques through challenging problems.",
    competitions: ["USNCO"],
    problemCount: 210,
    difficulty: "Rigorous",
  },
  {
    id: "biology",
    title: "Biology",
    icon: <Microscope className="h-12 w-12 text-green-500" />,
    color: "bg-green-50 dark:bg-green-950/30",
    description: "Deepen your understanding of biological systems and processes through competitive exams.",
    competitions: ["USABO"],
    problemCount: 180,
    difficulty: "Comprehensive",
  },
  {
    id: "astronomy",
    title: "Astronomy",
    icon: <Telescope className="h-12 w-12 text-indigo-500" />,
    color: "bg-indigo-50 dark:bg-indigo-950/30",
    description: "Explore celestial objects and phenomena through theoretical and observational challenges.",
    competitions: ["USAAAO"],
    problemCount: 150,
    difficulty: "Specialized",
  },
  {
    id: "earth-science",
    title: "Earth Science",
    icon: <BookOpen className="h-12 w-12 text-orange-500" />,
    color: "bg-orange-50 dark:bg-orange-950/30",
    description: "Study geological, atmospheric, and environmental systems through competitive exams.",
    competitions: ["USESO"],
    problemCount: 120,
    difficulty: "Multidisciplinary",
  },
]

export default function OlympiadsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Olympiads</h1>
        <p className="text-lg text-muted-foreground">
          Explore and practice for a wide range of premier U.S. STEM olympiads
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {olympiads.map((olympiad) => (
          <Card key={olympiad.id} className="overflow-hidden">
            <CardHeader className={`${olympiad.color}`}>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">{olympiad.title}</CardTitle>
                <div>{olympiad.icon}</div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-muted-foreground">{olympiad.description}</p>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Competitions</h3>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {olympiad.competitions.map((competition) => (
                      <Badge key={competition} variant="secondary">
                        {competition}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Problems</h3>
                    <p className="font-medium">{olympiad.problemCount}+</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Difficulty</h3>
                    <p className="font-medium">{olympiad.difficulty}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 p-6">
              <Link href={`/olympiads/${olympiad.id}`} className="w-full">
                <Button className="w-full">
                  Explore {olympiad.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
