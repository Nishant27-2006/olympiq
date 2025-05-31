"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  LineChart,
  Settings,
  Star,
  TrendingUp,
  Trophy,
  Users,
  XCircle,
  Brain,
  FlaskRoundIcon as Flask,
  Atom,
  Microscope,
  Target,
  Zap,
} from "lucide-react"
import { AccountLayout } from "@/components/account-layout"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/use-toast"

// Mock data for dashboard
const recentActivity = [
  {
    id: 1,
    type: "problem_solved",
    title: "Divisibility and Remainders",
    olympiad: "Mathematics",
    competition: "AMC 10",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "problem_attempted",
    title: "Recursive Sequence",
    olympiad: "Mathematics",
    competition: "AIME",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    type: "problem_solved",
    title: "Projectile Motion",
    olympiad: "Physics",
    competition: "F=ma",
    timestamp: "Yesterday",
  },
  {
    id: 4,
    type: "problem_attempted",
    title: "Haybale Stacking",
    olympiad: "Computing",
    competition: "USACO Silver",
    timestamp: "2 days ago",
  },
  {
    id: 5,
    type: "problem_solved",
    title: "Acid-Base Reactions",
    olympiad: "Chemistry",
    competition: "USNCO",
    timestamp: "3 days ago",
  },
  {
    id: 6,
    type: "problem_attempted",
    title: "Cell Membrane Transport",
    olympiad: "Biology",
    competition: "USABO",
    timestamp: "4 days ago",
  },
]

const olympiadProgress = [
  { name: "Mathematics", solved: 24, total: 120, percentage: 20, icon: Brain },
  { name: "Computing", solved: 15, total: 80, percentage: 19, icon: Zap },
  { name: "Physics", solved: 18, total: 90, percentage: 20, icon: Atom },
  { name: "Chemistry", solved: 8, total: 70, percentage: 11, icon: Flask },
  { name: "Biology", solved: 5, total: 60, percentage: 8, icon: Microscope },
]

const recommendedProblems = [
  {
    id: 1,
    title: "Geometric Sequence Properties",
    olympiad: "Mathematics",
    competition: "AMC 12",
    difficulty: "Medium",
    topic: "Algebra",
  },
  {
    id: 2,
    title: "Dynamic Programming Basics",
    olympiad: "Computing",
    competition: "USACO Silver",
    difficulty: "Medium",
    topic: "Dynamic Programming",
  },
  {
    id: 3,
    title: "Conservation of Energy",
    olympiad: "Physics",
    competition: "F=ma",
    difficulty: "Easy",
    topic: "Energy",
  },
  {
    id: 4,
    title: "Acid-Base Equilibrium",
    olympiad: "Chemistry",
    competition: "USNCO",
    difficulty: "Hard",
    topic: "Equilibrium",
  },
  {
    id: 5,
    title: "Cellular Respiration",
    olympiad: "Biology",
    competition: "USABO",
    difficulty: "Medium",
    topic: "Metabolism",
  },
]

const upcomingCompetitions = [
  {
    id: 1,
    name: "AMC 10/12",
    date: "February 10, 2026",
    daysLeft: 268,
    olympiad: "Mathematics",
  },
  {
    id: 2,
    name: "USACO December Contest",
    date: "December 15, 2025",
    daysLeft: 211,
    olympiad: "Computing",
  },
  {
    id: 3,
    name: "F=ma Exam",
    date: "January 25, 2026",
    daysLeft: 252,
    olympiad: "Physics",
  },
  {
    id: 4,
    name: "USNCO Local Exam",
    date: "March 15, 2026",
    daysLeft: 301,
    olympiad: "Chemistry",
  },
  {
    id: 5,
    name: "USABO Open Exam",
    date: "February 5, 2026",
    daysLeft: 263,
    olympiad: "Biology",
  },
]

const studyPlan = [
  {
    id: 1,
    title: "Number Theory Fundamentals",
    description: "Master the basics of number theory for AMC and AIME",
    progress: 65,
    dueDate: "June 15, 2025",
    olympiad: "Mathematics",
  },
  {
    id: 2,
    title: "Graph Algorithms",
    description: "Learn essential graph algorithms for USACO Silver",
    progress: 30,
    dueDate: "July 1, 2025",
    olympiad: "Computing",
  },
  {
    id: 3,
    title: "Mechanics Problem Solving",
    description: "Practice mechanics problems for the F=ma exam",
    progress: 45,
    dueDate: "August 10, 2025",
    olympiad: "Physics",
  },
  {
    id: 4,
    title: "Organic Chemistry Reactions",
    description: "Master key organic chemistry reactions for USNCO",
    progress: 20,
    dueDate: "September 5, 2025",
    olympiad: "Chemistry",
  },
  {
    id: 5,
    title: "Cell Biology Fundamentals",
    description: "Learn essential cell biology concepts for USABO",
    progress: 15,
    dueDate: "October 1, 2025",
    olympiad: "Biology",
  },
]

const recentDiagnosticTests = [
  {
    id: 1,
    name: "Mathematics Diagnostic",
    date: "May 10, 2025",
    score: 85,
    totalQuestions: 20,
    correctAnswers: 17,
    olympiad: "Mathematics",
  },
  {
    id: 2,
    name: "Computing Algorithms Test",
    date: "May 5, 2025",
    score: 78,
    totalQuestions: 15,
    correctAnswers: 12,
    olympiad: "Computing",
  },
  {
    id: 3,
    name: "Physics Mechanics Assessment",
    date: "April 28, 2025",
    score: 92,
    totalQuestions: 25,
    correctAnswers: 23,
    olympiad: "Physics",
  },
]

export default function DashboardPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")
  const [userProgress, setUserProgress] = useState<null | any>(null)
  const [isLoadingUserData, setIsLoadingUserData] = useState(false)

  // Function to fetch user data from Supabase when logged in
  const fetchUserData = async () => {
    if (!user) return
    
    try {
      setIsLoadingUserData(true)
      // Here you would fetch real user data from Supabase
      // For now we'll simulate a delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // This would be replaced with actual Supabase queries
      // const { data, error } = await supabase
      //   .from('user_progress')
      //   .select('*')
      //   .eq('user_id', user.id)
      
      // For now, we'll just use the demo data
      setUserProgress({
        // This could be personalized data in the future
        olympiads: olympiadProgress,
        activity: recentActivity,
      })
    } catch (error) {
      console.error('Error fetching user data:', error)
      toast({
        title: "Error",
        description: "Failed to load your personal data. Using demo data instead.",
        variant: "destructive"
      })
    } finally {
      setIsLoadingUserData(false)
    }
  }
  
  // Fetch user data on component mount if user is logged in
  useEffect(() => {
    if (user) {
      fetchUserData()
    }
  }, [user])

  const handleCreatePlan = () => {
    // TODO: Implement plan creation logic
    toast({
      title: "Feature Coming Soon",
      description: "Study plan creation will be available in a future update.",
    })
  }

  const handleViewDetails = () => {
    // TODO: Implement view details logic
    toast({
      title: "Feature Coming Soon",
      description: "Detailed view will be available in a future update.",
    })
  }

  if (isLoadingUserData) {
    return (
      <div className="container flex min-h-screen items-center justify-center">
        <p>Loading dashboard...</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container flex min-h-screen flex-col items-center justify-center px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-md text-center">
          <h1 className="mb-4 text-2xl font-bold">Sign In Required</h1>
          <p className="mb-6 text-muted-foreground">
            Please sign in to access your personalized dashboard and track your progress.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
              <Link href="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <AccountLayout title="Dashboard" description="Track your progress and practice for your next olympiad">
      <div className="mb-8 flex justify-end gap-2">
        <Button variant="outline" className="gap-2">
          <Calendar className="h-4 w-4" />
          Study Plan
        </Button>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
          <BookOpen className="h-4 w-4" />
          Practice Now
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="mb-4 flex flex-wrap">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="study-plan">Study Plan</TabsTrigger>
          <TabsTrigger value="competitions">Competitions</TabsTrigger>
          <TabsTrigger value="diagnostics">Diagnostics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Problems Solved</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">70</div>
                <p className="text-xs text-muted-foreground">+12 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Problems Attempted</CardTitle>
                <BookOpen className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124</div>
                <p className="text-xs text-muted-foreground">+18 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">56%</div>
                <p className="text-xs text-muted-foreground">+3% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
                <Award className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7 days</div>
                <p className="text-xs text-muted-foreground">Keep it up!</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Olympiad Progress</CardTitle>
                <CardDescription>Your progress across different olympiads</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {olympiadProgress.map((olympiad) => (
                    <div key={olympiad.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <olympiad.icon className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{olympiad.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {olympiad.solved} / {olympiad.total} problems
                        </span>
                      </div>
                      <Progress value={olympiad.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleViewDetails}>
                  View Detailed Progress
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent problem-solving activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.slice(0, 4).map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-blue-100 p-1 dark:bg-blue-900">
                        {activity.type === "problem_solved" ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <XCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {activity.timestamp}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {activity.olympiad}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {activity.competition}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleViewDetails}>
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recommended Problems</CardTitle>
                <CardDescription>Problems tailored to your skill level and interests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {recommendedProblems.slice(0, 3).map((problem) => (
                    <Card key={problem.id} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <CardTitle className="line-clamp-1 text-sm">{problem.title}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-1">
                          <Badge variant="secondary" className="text-xs">
                            {problem.olympiad}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {problem.competition}
                          </Badge>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex flex-wrap gap-1">
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
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="default" size="sm" className="w-full">
                          Solve Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/problems">View More Recommendations</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Overall Progress</CardTitle>
                <CardDescription>Your progress across all olympiads</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center pb-2">
                <div className="relative h-40 w-40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">56%</div>
                      <div className="text-sm text-muted-foreground">Overall Completion</div>
                    </div>
                  </div>
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      className="stroke-muted-foreground/20"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeWidth="10"
                    />
                    <circle
                      className="stroke-blue-600"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="110.5"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">70</div>
                    <div className="text-xs text-muted-foreground">Problems Solved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">124</div>
                    <div className="text-xs text-muted-foreground">Problems Attempted</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleViewDetails}>
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skill Breakdown</CardTitle>
                <CardDescription>Your performance by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Number Theory</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Algorithms</span>
                      <span className="text-sm text-muted-foreground">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Mechanics</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Organic Chemistry</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Cell Biology</span>
                      <span className="text-sm text-muted-foreground">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleViewDetails}>
                  View All Skills
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Badges and milestones you've earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 rounded-full bg-yellow-100 p-2 dark:bg-yellow-900/30">
                      <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <span className="text-xs font-medium">Problem Solver</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                      <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-xs font-medium">Math Whiz</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                      <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-xs font-medium">7-Day Streak</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                      <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-xs font-medium">Team Player</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 rounded-full bg-red-100 p-2 dark:bg-red-900/30">
                      <LineChart className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <span className="text-xs font-medium">Fast Learner</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                      <Settings className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <span className="text-xs font-medium">Locked</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleViewDetails}>
                  View All Achievements
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance History</CardTitle>
              <CardDescription>Your problem-solving performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                {/* Placeholder for chart */}
                <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
                  <p className="text-sm text-muted-foreground">Performance chart will be displayed here</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={handleViewDetails}>
                View Detailed Analytics
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="study-plan" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studyPlan.map((plan) => (
              <Card key={plan.id}>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>{plan.title}</CardTitle>
                    <Badge variant="outline">{plan.olympiad}</Badge>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-muted-foreground">{plan.progress}%</span>
                      </div>
                      <Progress value={plan.progress} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Due: {plan.dueDate}</span>
                      </div>
                      <Badge variant={plan.progress >= 50 ? "outline" : "secondary"}>
                        {plan.progress >= 50 ? "On Track" : "Needs Attention"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Continue Learning</Button>
                </CardFooter>
              </Card>
            ))}
            <Card className="flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900/30">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Create New Study Plan</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Customize a study plan tailored to your goals and schedule
              </p>
              <Button variant="outline" onClick={handleCreatePlan}>
                Create Plan
              </Button>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Your personalized study schedule for the week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                {/* Placeholder for schedule */}
                <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed">
                  <p className="text-sm text-muted-foreground">Weekly schedule will be displayed here</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={handleCreatePlan}>
                Adjust Schedule
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="competitions" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingCompetitions.map((competition) => (
              <Card key={competition.id}>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>{competition.name}</CardTitle>
                    <Badge variant="outline">{competition.olympiad}</Badge>
                  </div>
                  <CardDescription>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {competition.date}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{competition.daysLeft} days left</span>
                        <Badge variant="secondary">Upcoming</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Registration deadline: 2 weeks before</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Register</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Past Competitions</CardTitle>
              <CardDescription>Your performance in previous competitions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <h3 className="font-medium">AMC 10 2025</h3>
                    <p className="text-sm text-muted-foreground">January 15, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Score: 102/150</p>
                    <p className="text-sm text-muted-foreground">Rank: 256</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <h3 className="font-medium">USACO Bronze 2024</h3>
                    <p className="text-sm text-muted-foreground">December 10, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Score: 850/1000</p>
                    <p className="text-sm text-muted-foreground">Rank: 124</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <h3 className="font-medium">Physics Bowl 2024</h3>
                    <p className="text-sm text-muted-foreground">April 5, 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Score: 38/40</p>
                    <p className="text-sm text-muted-foreground">Rank: 45</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={handleViewDetails}>
                View All Results
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="diagnostics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentDiagnosticTests.map((test) => (
              <Card key={test.id}>
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>{test.name}</CardTitle>
                    <Badge variant="outline">{test.olympiad}</Badge>
                  </div>
                  <CardDescription>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {test.date}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Score: {test.score}%</span>
                        <Badge
                          variant="outline"
                          className={
                            test.score >= 90
                              ? "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-400"
                              : test.score >= 70
                                ? "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400"
                                : "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-400"
                          }
                        >
                          {test.score >= 90 ? "Excellent" : test.score >= 70 ? "Good" : "Needs Improvement"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Questions:</span>
                      <span className="text-sm font-medium">
                        {test.correctAnswers}/{test.totalQuestions} correct
                      </span>
                    </div>
                    <Progress value={(test.correctAnswers / test.totalQuestions) * 100} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Details</Button>
                  <Button>Review Answers</Button>
                </CardFooter>
              </Card>
            ))}
            <Card className="flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900/30">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Take a Diagnostic Test</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Assess your knowledge and identify areas for improvement
              </p>
              <Button>Start Test</Button>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Study Areas</CardTitle>
              <CardDescription>Based on your diagnostic test results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    <h3 className="font-medium">Combinatorics</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your diagnostic tests show you could improve in counting techniques and combinatorial proofs.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">
                      View Resources
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-600" />
                    <h3 className="font-medium">Dynamic Programming</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Work on optimizing your approach to dynamic programming problems.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">
                      View Resources
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Atom className="h-5 w-5 text-green-600" />
                    <h3 className="font-medium">Electromagnetism</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Focus on electromagnetic induction and Maxwell's equations.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">
                      View Resources
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Complete Analysis
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </AccountLayout>
  )
}
