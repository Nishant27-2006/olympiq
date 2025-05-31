"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for problems
const mockProblems = [
  {
    id: 1,
    title: "Divisibility and Remainders",
    olympiad: "Mathematics",
    competition: "AMC 10",
    difficulty: "Medium",
    topic: "Number Theory",
    solved: true,
    description: "Find the remainder when 2^100 is divided by 1000.",
  },
  {
    id: 2,
    title: "Recursive Sequence",
    olympiad: "Mathematics",
    competition: "AIME",
    difficulty: "Hard",
    topic: "Algebra",
    solved: false,
    description: "Find the 100th term of the sequence defined by a_1 = 1, a_2 = 2, a_n = 2a_{n-1} - a_{n-2} for n ≥ 3.",
  },
  {
    id: 3,
    title: "Haybale Stacking",
    olympiad: "Computing",
    competition: "USACO Silver",
    difficulty: "Medium",
    topic: "Prefix Sums",
    solved: false,
    description: "Farmer John has N haybales arranged in a row and performs a series of operations...",
  },
  {
    id: 4,
    title: "Projectile Motion",
    olympiad: "Physics",
    competition: "F=ma",
    difficulty: "Easy",
    topic: "Mechanics",
    solved: true,
    description: "A ball is thrown with an initial velocity of 10 m/s at an angle of 45° to the horizontal...",
  },
  {
    id: 5,
    title: "Acid-Base Equilibrium",
    olympiad: "Chemistry",
    competition: "USNCO",
    difficulty: "Hard",
    topic: "Equilibrium",
    solved: false,
    description: "Calculate the pH of a buffer solution containing 0.1 M acetic acid and 0.1 M sodium acetate...",
  },
  {
    id: 6,
    title: "Cell Signaling Pathways",
    olympiad: "Biology",
    competition: "USABO",
    difficulty: "Medium",
    topic: "Cell Biology",
    solved: false,
    description: "Describe the role of G-protein coupled receptors in cell signaling pathways...",
  },
  {
    id: 7,
    title: "Stellar Evolution",
    olympiad: "Astronomy",
    competition: "USAAAO",
    difficulty: "Hard",
    topic: "Stars",
    solved: true,
    description: "Explain the life cycle of a star with 5 solar masses from formation to its final state...",
  },
  {
    id: 8,
    title: "Plate Tectonics",
    olympiad: "Earth Science",
    competition: "USESO",
    difficulty: "Medium",
    topic: "Geology",
    solved: false,
    description: "Describe the process of seafloor spreading and its role in plate tectonics...",
  },
]

export default function ProblemsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedOlympiad, setSelectedOlympiad] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [selectedTopic, setSelectedTopic] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  // Filter problems based on search and filters
  const filteredProblems = mockProblems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesOlympiad = selectedOlympiad === "all" || problem.olympiad === selectedOlympiad
    const matchesDifficulty = selectedDifficulty === "all" || problem.difficulty === selectedDifficulty
    const matchesTopic = selectedTopic === "all" || problem.topic === selectedTopic
    const matchesTab =
      activeTab === "all" || (activeTab === "solved" && problem.solved) || (activeTab === "unsolved" && !problem.solved)

    return matchesSearch && matchesOlympiad && matchesDifficulty && matchesTopic && matchesTab
  })

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Problem Hub</h1>
        <p className="text-lg text-muted-foreground">
          Practice with thousands of problems from premier U.S. STEM olympiads
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search problems..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={selectedOlympiad} onValueChange={setSelectedOlympiad}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Olympiad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Olympiads</SelectItem>
              <SelectItem value="Mathematics">Mathematics</SelectItem>
              <SelectItem value="Computing">Computing</SelectItem>
              <SelectItem value="Physics">Physics</SelectItem>
              <SelectItem value="Chemistry">Chemistry</SelectItem>
              <SelectItem value="Biology">Biology</SelectItem>
              <SelectItem value="Astronomy">Astronomy</SelectItem>
              <SelectItem value="Earth Science">Earth Science</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                More Filters
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Topic</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setSelectedTopic("all")}>All Topics</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTopic("Number Theory")}>Number Theory</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTopic("Algebra")}>Algebra</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTopic("Mechanics")}>Mechanics</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTopic("Prefix Sums")}>Prefix Sums</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTopic("Equilibrium")}>Equilibrium</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTopic("Cell Biology")}>Cell Biology</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTopic("Stars")}>Stars</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedTopic("Geology")}>Geology</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Problems</TabsTrigger>
          <TabsTrigger value="solved">Solved</TabsTrigger>
          <TabsTrigger value="unsolved">Unsolved</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProblems.length > 0 ? (
          filteredProblems.map((problem) => (
            <Card key={problem.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="line-clamp-1 text-lg">{problem.title}</CardTitle>
                  {problem.solved ? (
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    >
                      Solved
                    </Badge>
                  ) : null}
                </div>
                <CardDescription className="flex flex-wrap gap-1">
                  <Badge variant="secondary">{problem.olympiad}</Badge>
                  <Badge variant="secondary">{problem.competition}</Badge>
                  <Badge
                    variant="outline"
                    className={
                      problem.difficulty === "Easy"
                        ? "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-400"
                        : problem.difficulty === "Medium"
                          ? "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400"
                          : "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-400"
                    }
                  >
                    {problem.difficulty}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm text-muted-foreground">{problem.description}</p>
              </CardContent>
              <CardFooter className="pt-3">
                <Button variant="default" className="w-full">
                  Solve Problem
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <p className="text-lg font-medium">No problems found</p>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
