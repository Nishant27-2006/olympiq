"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// FAQ data organized by categories
const faqData = {
  general: [
    {
      question: "What is Olympia?",
      answer:
        "Olympia is an AI-enhanced web platform designed specifically for high school students preparing for premier U.S. STEM olympiads. Our mission is to make high-quality olympiad preparation accessible to all students, regardless of their background or resources.",
    },
    {
      question: "Which olympiads does Olympia support?",
      answer:
        "Olympia supports a wide range of STEM olympiads, including Mathematics (AMC, AIME, USAMO), Computing (USACO), Physics (F=ma, USAPhO), Chemistry (USNCO), Biology (USABO), Astronomy (USAAAO), and Earth Science (USESO).",
    },
    {
      question: "Is Olympia free to use?",
      answer:
        "Olympia offers both free and premium tiers. The free tier provides access to a limited set of problems and resources, while the premium tier offers additional features such as personalized learning paths, advanced analytics, and access to our full problem database.",
    },
    {
      question: "How is Olympia different from other olympiad preparation platforms?",
      answer:
        "Olympia stands out with its AI-enhanced learning experience, comprehensive coverage of multiple olympiads, personalized problem recommendations, and interactive problem-solving interfaces tailored to each olympiad type. Our platform is designed by olympiad medalists and educators to provide the most effective preparation experience.",
    },
  ],
  account: [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. You'll need to provide your email address and create a password. You can also sign up using your Google or Apple account for faster registration.",
    },
    {
      question: "Can I use Olympia without creating an account?",
      answer:
        "Yes, you can browse the website and access some basic resources without an account. However, to track your progress, save problems, and access personalized features, you'll need to create an account.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "If you've forgotten your password, click on the 'Log In' button, then select 'Forgot Password'. Enter your email address, and we'll send you a link to reset your password. If you don't receive the email, check your spam folder or contact our support team.",
    },
    {
      question: "Can multiple students use the same account?",
      answer:
        "We recommend that each student creates their own account to ensure personalized learning experiences and accurate progress tracking. Sharing accounts may lead to confused recommendations and inaccurate analytics.",
    },
  ],
  problems: [
    {
      question: "How are problems organized on Olympia?",
      answer:
        "Problems are organized by olympiad type, difficulty level, and topic. You can browse problems by these categories or use our search function to find specific problems. Each problem includes detailed solutions and explanations to help you understand the concepts and techniques involved.",
    },
    {
      question: "Can I submit my own solutions to problems?",
      answer:
        "Yes, you can submit your solutions to problems on Olympia. For most olympiads, you can enter your answers directly on the platform. For USACO and other programming competitions, you can submit your code, which will be automatically evaluated against test cases.",
    },
    {
      question: "How does the AI feedback system work?",
      answer:
        "Our AI feedback system analyzes your solutions and provides personalized hints and suggestions to help you improve. It identifies patterns in your work, highlights areas for improvement, and recommends similar problems to reinforce your learning.",
    },
    {
      question: "Are the problems on Olympia from real competitions?",
      answer:
        "Yes, many of the problems on Olympia are from past competitions, including AMC, AIME, USAMO, USACO, F=ma, USAPhO, USNCO, and USABO. We also include original problems created by our team of olympiad experts to provide additional practice opportunities.",
    },
  ],
  olympiads: [
    {
      question: "How do I prepare for the AMC/AIME/USAMO?",
      answer:
        "To prepare for mathematics olympiads, we recommend starting with the AMC 10/12 problems, focusing on building a strong foundation in algebra, geometry, number theory, and combinatorics. As you progress, move on to AIME and USAMO problems. Our platform provides structured learning paths, practice problems, and resources tailored to each competition level.",
    },
    {
      question: "What programming languages are supported for USACO practice?",
      answer:
        "Our USACO practice environment supports C++, Java, and Python. You can write, test, and submit your code directly on our platform. We provide test cases and automatic evaluation to help you prepare for the actual competition.",
    },
    {
      question: "How can I prepare for the laboratory component of olympiads?",
      answer:
        "For olympiads with laboratory components (like USAPhO, USNCO, and USABO), we provide virtual lab simulations, experimental design exercises, and data analysis practice. While these can't fully replace hands-on laboratory experience, they help develop the skills and knowledge needed for the competition.",
    },
    {
      question: "When should I start preparing for olympiads?",
      answer:
        "It's never too early to start preparing for olympiads! Many successful olympiad participants begin in middle school or early high school. However, even if you're starting later, our platform can help you make rapid progress with structured learning paths and targeted practice.",
    },
  ],
  technical: [
    {
      question: "What browsers are supported by Olympia?",
      answer:
        "Olympia works best on modern browsers like Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated to the latest version for the best experience.",
    },
    {
      question: "Can I use Olympia on mobile devices?",
      answer:
        "Yes, Olympia is fully responsive and works on smartphones and tablets. However, for complex problem-solving, especially for programming competitions, we recommend using a desktop or laptop computer for the best experience.",
    },
    {
      question: "What should I do if I encounter a technical issue?",
      answer:
        "If you encounter a technical issue, first try refreshing the page or clearing your browser cache. If the problem persists, please contact our support team through the Contact page with details about the issue, including your device, browser, and steps to reproduce the problem.",
    },
    {
      question: "Is my data secure on Olympia?",
      answer:
        "Yes, we take data security seriously. All data is encrypted in transit and at rest. We do not share your personal information with third parties without your consent. For more details, please refer to our Privacy Policy.",
    },
  ],
  billing: [
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are processed securely through our payment processors.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for our premium subscriptions. If you're not satisfied with your experience, contact our support team within 30 days of your purchase for a full refund.",
    },
    {
      question: "Are there discounts for schools or groups?",
      answer:
        "Yes, we offer special pricing for schools, educational institutions, and groups of 10 or more students. Please contact our sales team for more information about our educational licensing options.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time from your account settings. After cancellation, you'll continue to have access to premium features until the end of your current billing period. We do not offer partial refunds for unused portions of your subscription period.",
    },
  ],
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Filter FAQs based on search query and active tab
  const filteredFAQs = Object.entries(faqData).flatMap(([category, questions]) => {
    return questions
      .filter(
        (faq) =>
          searchQuery === "" ||
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .map((faq) => ({ ...faq, category }))
  })

  const categoryFilteredFAQs =
    activeTab === "all" ? filteredFAQs : filteredFAQs.filter((faq) => faq.category === activeTab)

  const getCategoryLabel = (category) => {
    switch (category) {
      case "general":
        return "General"
      case "account":
        return "Account & Registration"
      case "problems":
        return "Problems & Solutions"
      case "olympiads":
        return "Olympiad Preparation"
      case "technical":
        return "Technical Support"
      case "billing":
        return "Billing & Subscription"
      default:
        return category
    }
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about Olympia and STEM olympiads
          </p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for questions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-4 flex w-full flex-wrap justify-start">
            <TabsTrigger value="all">All Questions</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="problems">Problems</TabsTrigger>
            <TabsTrigger value="olympiads">Olympiads</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            {categoryFilteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {categoryFilteredFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex flex-col items-start gap-1 pr-4 text-left">
                        <span>{faq.question}</span>
                        {activeTab === "all" && (
                          <span className="text-xs text-muted-foreground">{getCategoryLabel(faq.category)}</span>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-muted-foreground">No questions found matching your search criteria.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveTab("all")
                  }}
                >
                  Clear search and filters
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-12 rounded-lg bg-blue-50 p-8 text-center dark:bg-blue-950/30">
          <h2 className="mb-4 text-2xl font-bold">Still have questions?</h2>
          <p className="mb-6 text-muted-foreground">
            If you couldn't find the answer to your question, feel free to contact our support team.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
