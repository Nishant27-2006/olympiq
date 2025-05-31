import Link from "next/link"
import { Calendar, ChevronRight, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Preparing for the AMC: Tips from Top Scorers",
    excerpt:
      "Learn how top-scoring students prepare for the American Mathematics Competition with effective study strategies and problem-solving techniques.",
    date: "May 15, 2025",
    author: "Dr. Sarah Chen",
    category: "Mathematics",
    tags: ["AMC", "Competition Prep", "Study Tips"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "The Road to USACO Platinum: A Journey Through the Divisions",
    excerpt:
      "Follow the journey of a student who progressed from USACO Bronze to Platinum, with insights and lessons learned along the way.",
    date: "May 10, 2025",
    author: "Michael Rodriguez",
    category: "Computing",
    tags: ["USACO", "Competitive Programming", "Success Story"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Understanding Electromagnetism for Physics Olympiads",
    excerpt:
      "A comprehensive guide to mastering electromagnetism concepts that frequently appear in physics olympiad problems.",
    date: "May 5, 2025",
    author: "Prof. James Wilson",
    category: "Physics",
    tags: ["Electromagnetism", "Physics", "Problem Solving"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Organic Chemistry Reaction Mechanisms: A Visual Approach",
    excerpt:
      "Visualize and understand organic chemistry reaction mechanisms to better solve problems in chemistry olympiads.",
    date: "April 28, 2025",
    author: "Dr. Emily Patel",
    category: "Chemistry",
    tags: ["Organic Chemistry", "Reaction Mechanisms", "Visual Learning"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Cell Signaling Pathways: Breaking Down Complex Biology Concepts",
    excerpt:
      "Simplifying cell signaling pathways to help students tackle complex biology olympiad questions with confidence.",
    date: "April 20, 2025",
    author: "Dr. Robert Kim",
    category: "Biology",
    tags: ["Cell Biology", "Molecular Biology", "Concept Breakdown"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "The Importance of Mental Health in Olympiad Preparation",
    excerpt:
      "Balancing academic excellence with mental well-being: strategies for maintaining a healthy mindset during intense olympiad preparation.",
    date: "April 15, 2025",
    author: "Dr. Lisa Thompson",
    category: "General",
    tags: ["Mental Health", "Balance", "Wellness"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

// Featured post
const featuredPost = {
  id: 0,
  title: "International Olympiad Success: Team USA Brings Home Gold",
  excerpt:
    "Celebrating the outstanding achievements of Team USA at this year's International Science Olympiads, with gold medals in Mathematics, Physics, and Computing competitions.",
  date: "May 18, 2025",
  author: "Editorial Team",
  category: "News",
  tags: ["International Olympiad", "Team USA", "Success Stories"],
  image: "/placeholder.svg?height=400&width=800",
}

export default function BlogPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Olympia Blog</h1>
        <p className="text-lg text-muted-foreground">Insights, tips, and stories from the world of STEM olympiads</p>
      </div>

      <div className="mb-8">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={featuredPost.image || "/placeholder.svg"}
            alt={featuredPost.title}
            className="aspect-[21/9] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 sm:p-6">
            <Badge className="mb-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
              Featured
            </Badge>
            <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">{featuredPost.title}</h2>
            <p className="mb-4 max-w-2xl text-white/90">{featuredPost.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{featuredPost.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{featuredPost.author}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700" asChild>
              <Link href={`/blog/${featuredPost.id}`}>
                Read More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="rounded-full">
            All
          </Button>
          <Button variant="outline" className="rounded-full">
            Mathematics
          </Button>
          <Button variant="outline" className="rounded-full">
            Computing
          </Button>
          <Button variant="outline" className="rounded-full">
            Physics
          </Button>
          <Button variant="outline" className="rounded-full">
            Chemistry
          </Button>
          <Button variant="outline" className="rounded-full">
            Biology
          </Button>
        </div>
        <div className="relative w-full sm:max-w-xs">
          <Input type="search" placeholder="Search articles..." className="pr-10" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {post.author}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {post.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{post.tags.length - 2}
                  </Badge>
                )}
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/blog/${post.id}`}>
                  Read More
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More Articles</Button>
      </div>

      <section className="mt-12 rounded-lg bg-blue-50 p-8 dark:bg-blue-950/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mb-6 text-muted-foreground">
            Stay updated with the latest olympiad news, tips, and resources delivered directly to your inbox.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Input type="email" placeholder="Your email address" className="sm:max-w-xs" />
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
