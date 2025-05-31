"use client";

import { Button } from "@/components/ui/button";
import { Check, Zap, Sparkles, Award, Users, Clock, HelpCircle, MessageSquare, Star, BookOpen, Trophy, BarChart2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PricingPage = () => {
  const router = useRouter();

  const features = [
    { name: 'Problem Access', icon: <BookOpen className="h-5 w-5 text-blue-500" /> },
    { name: 'AI Assistance', icon: <Sparkles className="h-5 w-5 text-blue-500" /> },
    { name: 'Daily Problem Limit', icon: <Clock className="h-5 w-5 text-blue-500" /> },
    { name: 'Unlimited Problem Generation', icon: <Zap className="h-5 w-5 text-blue-500" /> },
    { name: 'Priority Support', icon: <MessageSquare className="h-5 w-5 text-blue-500" /> },
    { name: 'Advanced Analytics', icon: <BarChart2 className="h-5 w-5 text-blue-500" /> },
    { name: 'Exclusive Problems', icon: <Award className="h-5 w-5 text-blue-500" /> },
    { name: 'Community Access', icon: <Users className="h-5 w-5 text-blue-500" /> },
  ];

  const tiers = [
    {
      name: 'Free',
      price: '$0',
      pricePeriod: 'forever',
      description: 'Perfect for getting started with Olympiad preparation',
      buttonText: 'Get Started',
      featured: false,
      features: [
        { name: 'Basic Problem Access', included: true, tooltip: 'Access to basic problem sets' },
        { name: 'Limited AI Assistance', included: true, tooltip: 'Basic AI hints and explanations' },
        { name: 'Daily Problem Limit', included: true, value: '5 problems/day' },
        { name: 'Unlimited Problem Generation', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Advanced Analytics', included: false },
        { name: 'Exclusive Problems', included: false },
        { name: 'Community Access', included: false },
      ],
    },
    {
      name: 'Pro',
      price: '$20',
      pricePeriod: 'per month',
      description: 'For dedicated students who want to accelerate their learning',
      buttonText: 'Upgrade to Pro',
      featured: true,
      features: [
        { name: 'Basic Problem Access', included: true },
        { name: 'Limited AI Assistance', included: true },
        { name: 'Daily Problem Limit', included: true, value: '20 problems/day' },
        { name: 'Unlimited Problem Generation', included: false },
        { name: 'Priority Support', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Exclusive Problems', included: false },
        { name: 'Community Access', included: true },
      ],
    },
    {
      name: 'Premium',
      price: '$40',
      pricePeriod: 'per month',
      description: 'For serious competitors aiming for the top',
      buttonText: 'Go Premium',
      featured: false,
      features: [
        { name: 'Basic Problem Access', included: true },
        { name: 'Limited AI Assistance', included: true },
        { name: 'Daily Problem Limit', included: false, value: 'Unlimited' },
        { name: 'Unlimited Problem Generation', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Exclusive Problems', included: true },
        { name: 'Community Access', included: true },
      ],
    },
  ];

  const handleUpgrade = (tierName: string) => {
    // Handle upgrade logic here
    if (tierName === 'Free') {
      router.push('/signup');
    } else {
      // Redirect to checkout or subscription page
      router.push(`/checkout?plan=${tierName.toLowerCase()}`);
    }
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Choose the perfect plan for your Olympiad preparation journey. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="mt-16 grid max-w-5xl mx-auto gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ring-1 ring-gray-200 dark:ring-gray-800 flex flex-col ${
                tier.featured ? 'ring-2 ring-blue-600 dark:ring-blue-500' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">{tier.name}</h2>
                  {tier.featured && (
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      Most Popular
                    </span>
                  )}
                </div>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  {tier.price !== 'Free' && (
                    <span className="text-base text-muted-foreground">/month</span>
                  )}
                </div>
                
                <p className="mt-2 text-muted-foreground">{tier.description}</p>
                
                <ul className="mt-6 space-y-3">
                  {tier.features
                    .filter(feature => feature.included)
                    .map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-foreground">
                          {feature.name}
                          {feature.value && (
                            <span className="text-muted-foreground"> ({feature.value})</span>
                          )}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              
              <Button
                onClick={() => handleUpgrade(tier.name)}
                className={`mt-8 w-full ${
                  tier.featured
                    ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700'
                    : 'bg-foreground text-background hover:bg-foreground/90 dark:bg-foreground dark:text-background dark:hover:bg-foreground/90'
                }`}
              >
                {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            What's included in each plan
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {tiers.map((tier, tierIndex) => (
              <div 
                key={tier.name}
                className={`rounded-2xl p-8 ring-1 ring-gray-200 dark:ring-gray-800 ${
                  tier.featured ? 'ring-2 ring-blue-600 dark:ring-blue-500 bg-blue-50/50 dark:bg-blue-900/20' : ''
                }`}
              >
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-2 text-muted-foreground">{tier.description}</p>
                <div className="mt-6 space-y-4">
                  {tier.features
                    .filter(feature => feature.included)
                    .map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <span className="text-sm text-foreground">
                            {feature.name}
                            {feature.value && (
                              <span className="ml-1 text-muted-foreground">
                                ({feature.value})
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            Frequently asked questions
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                question: 'Can I change plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Your subscription will be prorated accordingly.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, all paid plans come with a 7-day free trial. No credit card is required to start your free trial.'
              },
              {
                question: 'How does the AI assistance work?',
                answer: 'Our AI analyzes your problem-solving patterns and provides personalized hints and explanations to help you understand concepts better.'
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Yes, you can cancel your subscription at any time. You will continue to have access until the end of your billing period.'
              },
              {
                question: 'Do you offer discounts for students?',
                answer: 'Yes, we offer a 50% discount for students with a valid .edu email address. Contact our support team to verify your student status.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border p-6">
                <h3 className="font-medium text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-16 text-center sm:px-16">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to boost your Olympiad performance?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            Join thousands of students who have improved their problem-solving skills with our platform.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              onClick={() => handleUpgrade('Pro')}
              className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-600 dark:hover:bg-gray-100"
            >
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;