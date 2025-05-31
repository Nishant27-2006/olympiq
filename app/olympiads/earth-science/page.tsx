import Link from "next/link"
import Image from "next/image"
import { BookOpen, Globe, CloudRain, Waves, Mountain, ExternalLink, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EarthSciencePage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-orange-500">
          <BookOpen className="h-6 w-6" />
          <h2 className="text-lg font-medium">Earth Science Olympiad</h2>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Explore Our Planet</h1>
        <p className="max-w-[85%] text-lg text-muted-foreground">
          Prepare for the U.S. Earth Science Olympiad (USESO) with comprehensive resources and practice problems
          covering geology, meteorology, oceanography, and environmental science.
        </p>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Mountain className="h-5 w-5 text-orange-500" />
              Geology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Study the Earth's structure, rocks, minerals, plate tectonics, and geological processes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <CloudRain className="h-5 w-5 text-orange-500" />
              Meteorology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Explore atmospheric science, weather patterns, climate systems, and forecasting techniques.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-orange-500" />
              Oceanography
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Discover marine ecosystems, ocean currents, tides, and the chemistry of seawater.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-orange-500" />
              Environmental Science
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Learn about ecosystems, biodiversity, conservation, and human impact on the environment.
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="topics">Key Topics</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold">About USESO</h3>
              <p className="mb-4 text-muted-foreground">
                The U.S. Earth Science Olympiad (USESO) is a prestigious competition that challenges high school
                students to demonstrate their knowledge of Earth science concepts. Participants engage with topics
                ranging from geology and meteorology to oceanography and environmental science.
              </p>
              <p className="text-muted-foreground">
                The competition consists of written exams and practical laboratory exercises that test both theoretical
                knowledge and hands-on skills. Top performers may qualify to represent the United States at the
                International Earth Science Olympiad (IESO).
              </p>
            </div>
            <div className="relative min-h-[250px] overflow-hidden rounded-lg bg-muted">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Earth Science Olympiad"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold">Competition Format</h3>
            <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <li className="rounded-lg border p-4">
                <h4 className="mb-1 font-medium">National Exam</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple-choice and short-answer questions covering all Earth science disciplines.
                </p>
              </li>
              <li className="rounded-lg border p-4">
                <h4 className="mb-1 font-medium">Lab Practicals</h4>
                <p className="text-sm text-muted-foreground">
                  Hands-on exercises involving rock identification, map reading, and data analysis.
                </p>
              </li>
              <li className="rounded-lg border p-4">
                <h4 className="mb-1 font-medium">Field Investigation</h4>
                <p className="text-sm text-muted-foreground">
                  Outdoor activities requiring observation, measurement, and interpretation of natural phenomena.
                </p>
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="topics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Geology</CardTitle>
                <CardDescription>The study of Earth's physical structure and substance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-medium">Key Concepts:</h4>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>Plate tectonics and continental drift</li>
                    <li>Rock cycle and mineral identification</li>
                    <li>Stratigraphy and geological time</li>
                    <li>Earthquakes and volcanoes</li>
                    <li>Weathering, erosion, and deposition</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Meteorology</CardTitle>
                <CardDescription>The study of the atmosphere and weather patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-medium">Key Concepts:</h4>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>Atmospheric composition and structure</li>
                    <li>Weather systems and forecasting</li>
                    <li>Climate zones and biomes</li>
                    <li>Severe weather phenomena</li>
                    <li>Climate change and global warming</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Oceanography</CardTitle>
                <CardDescription>The study of the physical and biological aspects of the ocean</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-medium">Key Concepts:</h4>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>Ocean currents and circulation patterns</li>
                    <li>Tides and wave dynamics</li>
                    <li>Marine ecosystems and biodiversity</li>
                    <li>Ocean chemistry and salinity</li>
                    <li>Coastal processes and shoreline features</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Environmental Science</CardTitle>
                <CardDescription>The study of interactions between humans and the natural world</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-medium">Key Concepts:</h4>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>Ecosystem structure and function</li>
                    <li>Biodiversity and conservation</li>
                    <li>Natural resource management</li>
                    <li>Pollution and environmental health</li>
                    <li>Sustainable development practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="resources" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Textbooks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">Earth Science: The Physical Setting</h4>
                  <p className="text-sm text-muted-foreground">by Thomas McGuire</p>
                </div>
                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">Essentials of Geology</h4>
                  <p className="text-sm text-muted-foreground">by Stephen Marshak</p>
                </div>
                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">Oceanography: An Invitation to Marine Science</h4>
                  <p className="text-sm text-muted-foreground">by Tom Garrison</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Online Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href="https://www.usgs.gov/educational-resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md bg-muted p-3 hover:bg-muted/80"
                >
                  <div>
                    <h4 className="font-medium">USGS Education</h4>
                    <p className="text-sm text-muted-foreground">U.S. Geological Survey resources</p>
                  </div>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  href="https://oceanservice.noaa.gov/education/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md bg-muted p-3 hover:bg-muted/80"
                >
                  <div>
                    <h4 className="font-medium">NOAA Education</h4>
                    <p className="text-sm text-muted-foreground">National Oceanic and Atmospheric Administration</p>
                  </div>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.nasa.gov/earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md bg-muted p-3 hover:bg-muted/80"
                >
                  <div>
                    <h4 className="font-medium">NASA Earth Science</h4>
                    <p className="text-sm text-muted-foreground">Earth observations and research</p>
                  </div>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Practice Materials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href="/problems?category=earth-science"
                  className="block rounded-md bg-muted p-3 hover:bg-muted/80"
                >
                  <h4 className="font-medium">Practice Problems</h4>
                  <p className="text-sm text-muted-foreground">Solve Earth Science Olympiad problems</p>
                </Link>
                <Link href="/resources?topic=earth-science" className="block rounded-md bg-muted p-3 hover:bg-muted/80">
                  <h4 className="font-medium">Study Guides</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive study materials</p>
                </Link>
                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">Past Competitions</h4>
                  <p className="text-sm text-muted-foreground">Previous USESO and IESO exams</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-12 rounded-lg bg-orange-50 p-6 dark:bg-orange-950/30">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Ready to start practicing?</h3>
            <p className="mb-4 text-muted-foreground">
              Access our collection of Earth Science Olympiad problems and start preparing for the competition.
            </p>
            <div className="space-x-4">
              <Button className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-800">
                Practice Problems
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Join Study Group</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-40 w-40">
              <Image src="/placeholder.svg?height=160&width=160" alt="Earth Science" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-bold">Upcoming Earth Science Events</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>USESO National Exam</CardTitle>
              <CardDescription>April 15, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The first round of the U.S. Earth Science Olympiad, administered at participating schools nationwide.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Earth Science Summer Camp</CardTitle>
              <CardDescription>June 10-24, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Intensive training program for qualified students, featuring lectures, labs, and field trips.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>International Earth Science Olympiad</CardTitle>
              <CardDescription>August 20-27, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Global competition bringing together top Earth science students from around the world.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
