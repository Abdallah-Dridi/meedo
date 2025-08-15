// src/app/features/multi-language/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Users,
  Zap,
  Sliders,
  CheckCircle,
  MessageSquare,
  Star,
  ChevronDown,
  Heart,
  Clock,
  Lightbulb,
} from "lucide-react";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
    },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemFadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// FeatureCard Props Interface
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
  keywords: string[];
}

function FeatureCard({
  icon,
  title,
  description,
  example,
  keywords,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={itemFadeIn}
      whileHover={{ y: -5 }}
      className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
    >
      <div className="mb-6 inline-flex rounded-xl bg-gradient-to-r from-purple-500 to-cyan-600 p-3 transition-transform group-hover:scale-110">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">
        {title}
      </h3>
      <p className="mb-4 text-sm text-slate-400 md:text-base">{description}</p>
      <div className="mt-4 rounded-lg border border-white/5 bg-slate-800/50 p-4">
        <p className="mb-2 text-xs font-medium text-cyan-400">User Example</p>
        <p className="text-sm text-slate-300">{example}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1">
        {keywords.map((kw, idx) => (
          <span
            key={idx}
            className="rounded border border-white/5 bg-slate-700/50 px-2 py-1 text-xs text-slate-500"
          >
            {kw}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function MultiLanguageFeaturePage() {
  return (
      <main className="relative z-10">
        <HeroSection />
        <WhatItDoesSection />
        <BenefitsOverview />
        <RealWorldUseCase />
        <TechnicalSpecs />

        {/* Comprehensive Solutions Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-6xl"
          >
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Comprehensive AI Support Solutions
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-400">
                From multilingual communication to 24/7 automation—everything
                you need for exceptional customer service.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FeatureCard
                icon={<Globe className="h-8 w-8" />}
                title="Multi-language Customer Support AI"
                description="Provide exceptional customer service in any language. Meedo's AI-powered support tool offers full multilingual support, enabling eCommerce and global brands to respond fluently to customers worldwide—without hiring multi-language agents or using third-party translation software."
                example="A sustainable beauty brand with customers across Europe uses Meedo's multi-language customer service to reply instantly in French, Spanish, and German—boosting satisfaction and reducing translation errors."
                keywords={[
                  "multilingual customer support",
                  "AI customer service",
                  "global eCommerce",
                  "language translation automation",
                ]}
              />
              <FeatureCard
                icon={<Heart className="h-8 w-8" />}
                title="Emotionally Intelligent AI Chatbot"
                description="Deliver human-like, emotionally aware customer support at scale. Meedo's AI detects sentiment and adapts its tone to suit the customer's mood—whether calming an upset shopper or maintaining a cheerful tone for routine questions. Customize tone settings to match your brand voice perfectly."
                example="An apparel store dealing with delivery complaints uses Meedo's emotionally intelligent chatbot to de-escalate tension and preserve customer loyalty—without involving a live agent."
                keywords={[
                  "emotional AI",
                  "sentiment-aware chatbot",
                  "empathetic customer service",
                  "AI tone adjustment",
                ]}
              />
              <FeatureCard
                icon={<Clock className="h-8 w-8" />}
                title="24/7 Automated Customer Support"
                description="Offer always-on support without hiring overnight staff. Meedo's AI assistant provides real-time, automated responses to customer inquiries via email and chat—24/7, including weekends and holidays. Stay responsive around the clock and improve customer satisfaction."
                example="An Australian online store relies on Meedo for after-hours email and chat support, ensuring instant help for customers even outside business hours."
                keywords={[
                  "24/7 customer support",
                  "automated live chat",
                  "AI helpdesk",
                  "real-time support automation",
                ]}
              />
              <FeatureCard
                icon={<Lightbulb className="h-8 w-8" />}
                title="Instant Customer Query Resolution with AI"
                description="Resolve common customer questions—like order status, return policies, and product info—in seconds using Meedo's AI. By automating responses to repetitive inquiries, you reduce support ticket volume, improve efficiency, and create faster customer experiences."
                example="A home decor shop cut its daily ticket load by half with Meedo's AI handling all routine questions instantly, allowing the human team to focus on complex issues."
                keywords={[
                  "instant customer support",
                  "automated query resolution",
                  "AI ticket deflection",
                  "self-service support",
                ]}
              />
            </div>
          </motion.div>
        </section>
        <CallToAction />
      </main>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-16">
      <div className="z-10 container mx-auto px-4 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-8"
        >
          <div className="mb-8 inline-flex items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5">
            <Globe className="mr-2 h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">
              Multi-language AI Support
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Speak Every Customer&apos;s
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Language Instantly
            </span>
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-400">
            Deliver fluent, accurate support worldwide—without hiring a
            multilingual team.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4 text-sm md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            "Real-Time Translation",
            "No Language Barriers",
            "Scale Globally",
            "Native Fluency",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-slate-300">{feature}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 animate-bounce"
        >
          <ChevronDown className="mx-auto h-6 w-6 text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
}

function WhatItDoesSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Global support, no overhead.
        </h2>
        <p className="mb-12 text-lg text-slate-400">
          Provide exceptional customer service in any language. Meedo&apos;s
          AI-powered support tool offers full multilingual support, enabling
          eCommerce and global brands to respond fluently to customers
          worldwide—without hiring multi-language agents or using third-party
          translation software.
        </p>
        {/* Supporting Visual Placeholder */}
        <div className="my-12 flex justify-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 md:h-80 md:w-80">
            <Globe className="h-32 w-32 text-purple-400/50" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BenefitsOverview() {
  const benefits = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Native Fluency in 30+ Languages",
      description:
        "Communicate naturally and accurately in the customer's preferred language.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Eliminate Language Hiring Costs",
      description:
        "Scale support globally without recruiting or training multilingual staff.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant, Accurate Responses",
      description:
        "Real-time translation ensures fast, error-free communication.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Sliders className="h-8 w-8" />,
      title: "Seamless Brand Consistency",
      description: "Maintain your brand voice accurately across all languages.",
      color: "from-green-500 to-green-600",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Core Benefits
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Unlock global growth with effortless, intelligent multilingual
            support.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeIn}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
            >
              <div
                className={`inline-flex rounded-xl bg-gradient-to-r p-3 ${benefit.color} mb-6 transition-transform group-hover:scale-110`}
              >
                <div className="text-white">{benefit.icon}</div>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-400 md:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function RealWorldUseCase() {
  const [activeScenario, setActiveScenario] = useState(0);
  const scenarios = [
    {
      name: "E-commerce Buyer – French",
      customer: {
        name: "Customer",
        message: "Bonjour, j'ai une question sur ma commande.",
      },
      ai: {
        name: "Meedo AI",
        message:
          "Bonjour ! Bien sûr, je peux vous aider avec cela. Pouvez-vous me fournir votre numéro de commande ?",
      },
      insights: [
        "`Flag` Detected French - Responded fluently",
        "`FileText` Requested order number for context",
      ],
    },
    {
      name: "Upset Shopper – Spanish",
      customer: {
        name: "Cliente",
        message: "¡Estoy muy molesto! Mi pedido llegó dañado.",
      },
      ai: {
        name: "Meedo AI",
        message:
          "Lamento mucho escuchar eso. Entiendo su frustración. Permítame ayudarle a resolver este problema de inmediato.",
      },
      insights: [
        "`Heart` Tone adapted to show empathy",
        "`Zap` Offered immediate resolution",
      ],
    },
    {
      name: "Returns Inquiry – German",
      customer: {
        name: "Kunde",
        message: "Ich möchte einen Artikel zurückgeben. Was ist der Prozess?",
      },
      ai: {
        name: "Meedo AI",
        message:
          "Natürlich, ich helfe Ihnen gerne bei der Rückgabe. Hier sind die Schritte...",
      },
      insights: [
        "`FileText` Accurately explained policy in German",
        "`CheckCircle` Provided clear, step-by-step instructions",
      ],
    },
  ];
  return (
    <section id="UseCase" className="container mx-auto bg-gradient-to-b from-transparent to-slate-900/50 px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            See It in Action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Real conversations showing how Meedo handles global customer
            interactions.
          </p>
        </div>
        {/* Scenario Selector */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveScenario(idx)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeScenario === idx
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {scenario.name.split(" – ")[0]}{" "}
              {/* Show just the type, not language for brevity */}
            </button>
          ))}
        </div>
        {/* Chat Simulation */}
        <motion.div
          key={activeScenario}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50"
        >
          <div className="border-b border-white/10 p-6">
            <h3 className="flex items-center gap-2 text-xl font-bold text-white">
              <MessageSquare className="h-5 w-5 text-purple-400" />
              {scenarios[activeScenario].name}
            </h3>
          </div>
          <div className="space-y-6 p-6">
            {/* Customer Message */}
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm border border-blue-500/30 bg-blue-600/20 px-5 py-3 md:max-w-[70%]">
                <p className="mb-1 text-sm font-medium text-blue-100">
                  {scenarios[activeScenario].customer.name}
                </p>
                <p className="text-white">
                  {scenarios[activeScenario].customer.message}
                </p>
              </div>
            </div>
            {/* AI Response */}
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-purple-500/30 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 px-5 py-3 md:max-w-[70%]">
                <div className="mb-1 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-purple-400" />
                  <p className="text-sm font-medium text-purple-300">
                    {scenarios[activeScenario].ai.name}
                  </p>
                </div>
                <p className="text-white">
                  {scenarios[activeScenario].ai.message}
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 bg-slate-800/30 p-6">
            <h4 className="mb-3 flex items-center gap-2 text-base font-semibold text-white">
              <Star className="h-4 w-4 text-purple-400" />
              Key Insights:
            </h4>
            <ul className="space-y-2">
              {scenarios[activeScenario].insights.map((insight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                  <span dangerouslySetInnerHTML={{ __html: insight }} />{" "}
                  {/* For icons in text */}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TechnicalSpecs() {
  const specs = [
    "Real-time neural translation engine",
    "Supports 30+ major global languages",
    "Automatic tone and cultural nuance adjustment",
    "Integrates with custom dictionaries and brand glossaries",
    "Context-aware conversation memory across languages",
  ];
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Built for enterprise-grade multilingual workflows.
          </h2>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-800/30 p-6 md:p-8">
          <ul className="space-y-4">
            {specs.map((spec, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-slate-300">{spec}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}


function CallToAction() {
  return (
    <section
      id="cta"
      className="container mx-auto px-4 py-16 text-center md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 p-8 md:p-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.2),transparent_70%)]"></div>
        <div className="relative z-10">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Break the Language Barrier. <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Delight Every Customer.
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Offer world-class support in every language your customers speak.
            Start building stronger global relationships today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <motion.a
              href="/signup"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg md:px-8 md:py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
              <span className="relative flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
            <motion.a
              href="/signup"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white md:px-8 md:py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
              <span className="relative">Request a Demo </span>
            </motion.a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            No credit card required • Set up in minutes
          </p>
        </div>
      </motion.div>
    </section>
  );
}
