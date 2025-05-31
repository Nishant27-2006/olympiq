import Link from "next/link"
import Image from "next/image"
import { Telescope, Sun, Orbit, Stars, Rocket, ExternalLink, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AstronomyPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-indigo-500">
          <Telescope className="h-6 w-6" />
          <h2 className="text-lg font-medium">Astronomy Olympiad</h2>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Explore the Cosmos</h1>
        <p className="max-w-[85%] text-lg text-muted-foreground">
          Prepare for the USA Astronomy and Astrophysics Olympiad (USAAAO) with comprehensive resources and practice
          problems covering the solar system, stars, galaxies, and cosmology.
        </p>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-indigo-500" />
              Solar System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Study the Sun, planets, moons, asteroids, comets, and other objects in our cosmic neighborhood.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Stars className="h-5 w-5 text-indigo-500" />
              Stars & Stellar Evolution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Explore star formation, stellar properties, and the life cycles of stars from birth to death.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Orbit className="h-5 w-5 text-indigo-500" />
              Galaxies & Cosmology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Discover the structure of galaxies, the expansion of the universe, and theories of cosmic evolution.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-indigo-500" />
              Observational Techniques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Learn about telescopes, spectroscopy, and other methods astronomers use to study celestial objects.
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
              <h3 className="mb-3 text-xl font-semibold">About USAAAO</h3>
              <p className="mb-4 text-muted-foreground">
                The USA Astronomy and Astrophysics Olympiad (USAAAO) is a prestigious competition that challenges high
                school students to demonstrate their knowledge of astronomy and astrophysics. Participants engage with
                topics ranging from planetary science to cosmology.
              </p>
              <p className="text-muted-foreground">
                The competition consists of theoretical exams and observational tasks that test both conceptual
                understanding and practical skills. Top performers may qualify to represent the United States at the
                International Olympiad on Astronomy and Astrophysics (IOAA).
              </p>
            </div>
            <div className="relative min-h-[250px] overflow-hidden rounded-lg bg-muted">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Astronomy Olympiad"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold">Competition Format</h3>
            <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <li className="rounded-lg border p-4">
                <h4 className="mb-1 font-medium">First Round</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple-choice and short-answer questions covering fundamental astronomy concepts.
                </p>
              </li>
              <li className="rounded-lg border p-4">
                <h4 className="mb-1 font-medium">National Olympiad</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced theoretical problems and data analysis requiring in-depth knowledge.
                </p>
              </li>
              <li className="rounded-lg border p-4">
                <h4 className="mb-1 font-medium">Observational Round</h4>
                <p className="text-sm text-muted-foreground">
                  Practical tasks involving star charts, celestial coordinates, and telescope operation.
                </p>
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="topics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Solar System</CardTitle>
                <CardDescription>Our cosmic neighborhood</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-medium">Key Concepts:</h4>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>Planetary motion and Kepler's laws</li>
                    <li>Planetary atmospheres and surfaces</li>
                    <li>Moons, rings, and small bodies</li>
                    <li>Solar physics and activity</li>
                    <li>Formation and evolution of the solar system</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stars & Stellar Evolution</CardTitle>
                <CardDescription>The life cycles of stars</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-medium">Key Concepts:</h4>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>Stellar properties and classification</li>
                    <li>Nuclear fusion and energy generation</li>
                    <li>Star formation and evolution</li>
                    <li>Supernovae, neutron stars, and black holes</li>
                    <li>Binary star systems and exoplanets</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Galaxies & Cosmology</CardTitle>
                <CardDescription>The large-scale structure of the universe</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-medium">Key Concepts:</h4>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>Galaxy types and formation</li>
                    <li>Active galactic nuclei and quasars</li>
                    <li>Dark matter and dark energy</li>
                    <li>Big Bang theory and cosmic microwave background</li>
                    <li>Large-scale structure and the fate of the universe</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Observational Techniques</CardTitle>
                <CardDescription>Methods for studying celestial objects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <h4 className="font-medium">Key Concepts:</h4>
                  <ul className="ml-6 list-disc text-sm text-muted-foreground">
                    <li>Telescopes and observatories</li>
                    <li>Electromagnetic spectrum and spectroscopy</li>
                    <li>Celestial coordinates and time systems</li>
                    <li>Photometry and light curves</li>
                    <li>Multi-messenger astronomy</li>
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
                  <h4 className="font-medium">An Introduction to Modern Astrophysics</h4>
                  <p className="text-sm text-muted-foreground">by Bradley W. Carroll and Dale A. Ostlie</p>
                </div>
                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">Astronomy: A Physical Perspective</h4>
                  <p className="text-sm text-muted-foreground">by Marc L. Kutner</p>
                </div>
                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">The Cosmic Perspective</h4>
                  <p className="text-sm text-muted-foreground">by Jeffrey Bennett et al.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Online Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href="https://apod.nasa.gov/apod/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md bg-muted p-3 hover:bg-muted/80"
                >
                  <div>
                    <h4 className="font-medium">NASA Astronomy Picture of the Day</h4>
                    <p className="text-sm text-muted-foreground">Daily astronomy images and explanations</p>
                  </div>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.stsci.edu/resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md bg-muted p-3 hover:bg-muted/80"
                >
                  <div>
                    <h4 className="font-medium">Space Telescope Science Institute</h4>
                    <p className="text-sm text-muted-foreground">Resources from Hubble and Webb telescopes</p>
                  </div>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.aavso.org/education"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md bg-muted p-3 hover:bg-muted/80"
                >
                  <div>
                    <h4 className="font-medium">AAVSO Education</h4>
                    <p className="text-sm text-muted-foreground">American Association of Variable Star Observers</p>
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
                <Link href="/problems?category=astronomy" className="block rounded-md bg-muted p-3 hover:bg-muted/80">
                  <h4 className="font-medium">Practice Problems</h4>
                  <p className="text-sm text-muted-foreground">Solve Astronomy Olympiad problems</p>
                </Link>
                <Link href="/resources?topic=astronomy" className="block rounded-md bg-muted p-3 hover:bg-muted/80">
                  <h4 className="font-medium">Study Guides</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive study materials</p>
                </Link>
                <div className="rounded-md bg-muted p-3">
                  <h4 className="font-medium">Past Competitions</h4>
                  <p className="text-sm text-muted-foreground">Previous USAAAO and IOAA exams</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-12 rounded-lg bg-indigo-50 p-6 dark:bg-indigo-950/30">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Ready to start practicing?</h3>
            <p className="mb-4 text-muted-foreground">
              Access our collection of Astronomy Olympiad problems and start preparing for the competition.
            </p>
            <div className="space-x-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800">
                Practice Problems
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Join Study Group</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-40 w-40">
              <Image src="/placeholder.svg?height=160&width=160" alt="Astronomy" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-bold">Upcoming Astronomy Events</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>USAAAO First Round</CardTitle>
              <CardDescription>March 10, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The initial screening exam for the USA Astronomy and Astrophysics Olympiad, open to all high school
                students.
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
              <CardTitle>Astronomy Training Camp</CardTitle>
              <CardDescription>May 15-30, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Intensive training for national finalists, featuring lectures from professional astronomers and
                nighttime observations.
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
              <CardTitle>International Olympiad on Astronomy and Astrophysics</CardTitle>
              <CardDescription>July 12-21, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Global competition bringing together top astronomy students from around the world.
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
