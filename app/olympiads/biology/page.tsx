import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, GraduationCap, Microscope, Trophy, Dna, Leaf, HeartPulse } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BiologyOlympiadPage() {
  return (
    <div className="container px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-full bg-green-100 p-2 dark:bg-green-900/30">
            <Microscope className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Biology Olympiad</h1>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Deepen your understanding of biological systems and processes through competitive exams. Develop critical
            thinking skills and prepare for prestigious biology competitions.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="mx-auto flex w-full max-w-md justify-center">
            <TabsTrigger value="overview" className="flex-1">
              Overview
            </TabsTrigger>
            <TabsTrigger value="curriculum" className="flex-1">
              Curriculum
            </TabsTrigger>
            <TabsTrigger value="competitions" className="flex-1">
              Competitions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Dna className="h-5 w-5 text-green-600" />
                    <CardTitle>Molecular Biology</CardTitle>
                  </div>
                  <CardDescription>Explore the molecular basis of biological activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Study DNA, RNA, proteins, and the mechanisms of genetic information flow and expression.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="h-5 w-5 text-green-600" />
                    <CardTitle>Physiology</CardTitle>
                  </div>
                  <CardDescription>Understand how organisms function at different levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn about organ systems, homeostasis, and the integration of physiological processes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    <CardTitle>Ecology</CardTitle>
                  </div>
                  <CardDescription>Study the relationships between organisms and their environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Explore population dynamics, community interactions, ecosystems, and conservation biology.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-950/30">
              <div className="mx-auto max-w-3xl space-y-4">
                <h2 className="text-2xl font-bold">Why Study Biology?</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/50">
                      <GraduationCap className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Academic Excellence</h3>
                      <p className="text-sm text-muted-foreground">
                        Develop critical thinking and analytical skills that will help you excel in school and
                        university.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/50">
                      <Trophy className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Competitive Edge</h3>
                      <p className="text-sm text-muted-foreground">
                        Stand out in college applications and gain recognition through prestigious competitions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/50">
                      <BookOpen className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Deep Understanding</h3>
                      <p className="text-sm text-muted-foreground">
                        Gain insights into the complexity of living systems and how biology impacts our world.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/50">
                      <Calendar className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Future Careers</h3>
                      <p className="text-sm text-muted-foreground">
                        Prepare for careers in medicine, biotechnology, research, and environmental science.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Ready to Begin Your Biology Journey?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Start with our carefully curated curriculum and practice problems designed to build your skills from the
                fundamentals to advanced topics.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/problems?olympiad=biology">Practice Problems</Link>
                </Button>
                <Button className="gap-2">
                  <span>Start Learning</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Biology Olympiad Curriculum</h2>
                <p className="text-muted-foreground">
                  Our comprehensive curriculum covers all the topics you need to excel in biology competitions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border p-6">
                  <h3 className="mb-4 text-xl font-bold">Cell Biology</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Cell Structure and Function</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Prokaryotic and eukaryotic cells</li>
                        <li>Organelles and their functions</li>
                        <li>Cell membrane structure</li>
                        <li>Cytoskeleton</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Cellular Transport</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Passive transport</li>
                        <li>Active transport</li>
                        <li>Endocytosis and exocytosis</li>
                        <li>Osmosis and tonicity</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Cell Division</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Mitosis and cytokinesis</li>
                        <li>Meiosis</li>
                        <li>Cell cycle regulation</li>
                        <li>Cancer and cell cycle dysregulation</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Cell Communication</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Signal transduction</li>
                        <li>Receptors and ligands</li>
                        <li>Second messengers</li>
                        <li>Cell junctions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="mb-4 text-xl font-bold">Molecular Biology and Genetics</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">DNA and RNA</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Nucleic acid structure</li>
                        <li>DNA replication</li>
                        <li>Transcription</li>
                        <li>RNA processing</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Protein Synthesis</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Genetic code</li>
                        <li>Translation</li>
                        <li>Post-translational modifications</li>
                        <li>Protein targeting</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Gene Regulation</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Prokaryotic gene regulation</li>
                        <li>Eukaryotic gene regulation</li>
                        <li>Epigenetics</li>
                        <li>Developmental genetics</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Inheritance and Variation</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Mendelian genetics</li>
                        <li>Non-Mendelian inheritance</li>
                        <li>Linkage and recombination</li>
                        <li>Population genetics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-6">
                  <h3 className="mb-4 text-xl font-bold">Physiology and Systems Biology</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Plant Physiology</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Photosynthesis</li>
                        <li>Plant hormones</li>
                        <li>Transport in plants</li>
                        <li>Plant responses to stimuli</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Animal Physiology</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Nervous system</li>
                        <li>Endocrine system</li>
                        <li>Circulatory system</li>
                        <li>Immune system</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Metabolism</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Cellular respiration</li>
                        <li>Fermentation</li>
                        <li>Metabolic pathways</li>
                        <li>Bioenergetics</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Homeostasis</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Feedback mechanisms</li>
                        <li>Thermoregulation</li>
                        <li>Osmoregulation</li>
                        <li>Hormone regulation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Ready to Test Your Knowledge?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Practice with our extensive collection of problems ranging from beginner to international olympiad
                level.
              </p>
              <Button asChild>
                <Link href="/problems?olympiad=biology">Start Practicing</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="competitions" className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Biology Competitions</h2>
                <p className="text-muted-foreground">
                  Prepare for these prestigious biology competitions with our targeted resources and practice materials.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>USA Biology Olympiad (USABO)</CardTitle>
                    <CardDescription>
                      National competition for high school students in the United States
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="font-medium">Format:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Multiple-choice, free-response, and laboratory practical
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Eligibility:</span>
                      <span className="ml-2 text-sm text-muted-foreground">U.S. high school students</span>
                    </div>
                    <div>
                      <span className="font-medium">Timeline:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Open exam (February), Semifinal exam (March), National Finals (June)
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>International Biology Olympiad (IBO)</CardTitle>
                    <CardDescription>Prestigious international competition for high school students</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="font-medium">Format:</span>
                      <span className="ml-2 text-sm text-muted-foreground">Theoretical and practical examinations</span>
                    </div>
                    <div>
                      <span className="font-medium">Eligibility:</span>
                      <span className="ml-2 text-sm text-muted-foreground">Top performers from national olympiads</span>
                    </div>
                    <div>
                      <span className="font-medium">Timeline:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Held annually in July in different host countries
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Biology Olympiad National Finals</CardTitle>
                    <CardDescription>Intensive training for top USABO performers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="font-medium">Format:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Two-week intensive study program with lectures and laboratory work
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Eligibility:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Top 20 performers in the USABO Semifinal Exam
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Timeline:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Held in June, with selection of the U.S. IBO team
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Biology Competitions for Middle School</CardTitle>
                    <CardDescription>Introductory competitions for younger students</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="font-medium">Format:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Multiple-choice questions on fundamental biology concepts
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Eligibility:</span>
                      <span className="ml-2 text-sm text-muted-foreground">Middle school students (grades 6-8)</span>
                    </div>
                    <div>
                      <span className="font-medium">Timeline:</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        Various competitions throughout the academic year
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-950/30">
              <div className="mx-auto max-w-3xl space-y-4">
                <h2 className="text-2xl font-bold">Preparation Resources</h2>
                <p className="text-muted-foreground">
                  We offer comprehensive resources to help you prepare for biology competitions:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/50">
                      <BookOpen className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Study Materials</h3>
                      <p className="text-sm text-muted-foreground">
                        Access textbooks, lecture notes, and problem sets covering all competition topics.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/50">
                      <Microscope className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Practice Problems</h3>
                      <p className="text-sm text-muted-foreground">
                        Solve problems from past competitions with detailed solutions and explanations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/50">
                      <Calendar className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Mock Exams</h3>
                      <p className="text-sm text-muted-foreground">
                        Test your knowledge with timed practice exams simulating competition conditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 dark:bg-green-900/50">
                      <GraduationCap className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Mentorship</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect with experienced coaches and former olympiad participants for guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Ready to Compete?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Start your journey toward biology competition success with our structured learning path.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/problems?olympiad=biology">Practice Problems</Link>
                </Button>
                <Button className="gap-2">
                  <span>Start Learning</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
