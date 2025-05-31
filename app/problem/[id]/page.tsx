"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, HelpCircle, Lightbulb, Save, Send, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock problem data
const problem = {
  id: 1,
  title: "Divisibility and Remainders",
  olympiad: "Mathematics",
  competition: "AMC 10",
  year: 2023,
  difficulty: "Medium",
  topic: "Number Theory",
  statement: `
    <p>Find the remainder when $2^{100}$ is divided by 1000.</p>
    <p>Note: This problem requires understanding of modular arithmetic and exponentiation.</p>
  `,
  hints: [
    "Try to find a pattern by calculating the first few powers of 2 modulo 1000.",
    "Remember that 1000 = 8 × 125. How does this help?",
    "Consider using Euler's theorem or the concept of order in modular arithmetic.",
  ],
}

export default function ProblemPage({ params }: { params: { id: string } }) {
  const [solution, setSolution] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [currentHint, setCurrentHint] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("problem")

  const handleSubmit = () => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const handleSaveDraft = () => {
    // Simulate saving draft
    console.log("Saving draft:", solution)
  }

  const handleNextHint = () => {
    if (currentHint < problem.hints.length - 1) {
      setCurrentHint(currentHint + 1)
    }
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6 flex items-center gap-2">
        <Link href="/problems">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to problems</span>
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{problem.title}</h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{problem.olympiad}</Badge>
            <Badge variant="secondary">{problem.competition}</Badge>
            <Badge variant="outline">{problem.year}</Badge>
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
            <Badge variant="outline">{problem.topic}</Badge>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Problem Statement</CardTitle>
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Clock className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Average solve time: 15 minutes</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Problem Information</DialogTitle>
                        <DialogDescription>Additional details about this problem.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div>
                          <h3 className="font-medium">Source</h3>
                          <p className="text-sm text-muted-foreground">
                            {problem.competition} {problem.year}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Topic</h3>
                          <p className="text-sm text-muted-foreground">{problem.topic}</p>
                        </div>
                        <div>
                          <h3 className="font-medium">Difficulty</h3>
                          <p className="text-sm text-muted-foreground">{problem.difficulty}</p>
                        </div>
                        <div>
                          <h3 className="font-medium">Success Rate</h3>
                          <p className="text-sm text-muted-foreground">65% of students solve this problem correctly</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: problem.statement }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Solution</CardTitle>
              <CardDescription>
                Enter your solution below. For mathematical problems, you can use LaTeX notation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="problem">Solution</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="problem">
                  <Textarea
                    placeholder="Enter your solution here..."
                    className="min-h-[200px]"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    disabled={isSubmitted}
                  />
                </TabsContent>
                <TabsContent value="preview">
                  <div className="min-h-[200px] rounded-md border border-input bg-background p-4">
                    {solution ? (
                      <div className="prose dark:prose-invert max-w-none">{solution}</div>
                    ) : (
                      <p className="text-muted-foreground">Your solution preview will appear here...</p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleSaveDraft} disabled={isSubmitted}>
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!solution.trim() || isSubmitting || isSubmitted}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Submitted
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Solution
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {isSubmitted && (
            <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700 dark:text-green-400">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Solution Submitted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 dark:text-green-400">
                  Your solution has been submitted successfully. You'll receive feedback shortly.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  View Model Solution
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Need a Hint?</CardTitle>
              <CardDescription>Get guidance without seeing the full solution</CardDescription>
            </CardHeader>
            <CardContent>
              {showHint ? (
                <div className="space-y-4">
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      <Lightbulb className="mb-2 h-5 w-5" />
                      {problem.hints[currentHint]}
                    </p>
                  </div>
                  {currentHint < problem.hints.length - 1 && (
                    <Button variant="outline" className="w-full" onClick={handleNextHint}>
                      Next Hint ({currentHint + 1}/{problem.hints.length})
                    </Button>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <p className="mb-4 text-sm text-muted-foreground">
                    Stuck on this problem? Get a hint to guide your thinking.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => setShowHint(true)}>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Reveal Hint
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Problems</CardTitle>
              <CardDescription>Practice with related problems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-3">
                  <h3 className="font-medium">Modular Exponentiation</h3>
                  <p className="text-sm text-muted-foreground">AMC 12, 2022 - Medium</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Solve Next
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <h3 className="font-medium">Cyclicity in Remainders</h3>
                  <p className="text-sm text-muted-foreground">AIME I, 2021 - Hard</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Solve Next
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border p-3">
                  <h3 className="font-medium">Last Digits Patterns</h3>
                  <p className="text-sm text-muted-foreground">AMC 10, 2023 - Medium</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Solve Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
