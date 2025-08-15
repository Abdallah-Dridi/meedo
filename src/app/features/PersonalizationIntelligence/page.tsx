// src/app/features/PersonalizationIntelligence/page.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Palette,
  BookOpen,
  Boxes,
  CheckCircle,
  MessageSquare,
  Star,
  ChevronDown,
  Brain,
  Repeat
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemFadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Reusable Feature Card Component
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
  keywords: string[];
};
function FeatureCard({ icon, title, description, example, keywords }: FeatureCardProps) {
  return (
    <motion.div
      variants={itemFadeIn}
      whileHover={{ y: -5 }}
      className="group p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
    >
      <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-600 mb-6 group-hover:scale-110 transition-transform">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm md:text-base mb-4">{description}</p>
      <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-white/5">
        <p className="text-xs text-cyan-400 font-medium mb-2">User Example</p>
        <p className="text-slate-300 text-sm">{example}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1">
        {keywords.map((kw: string, idx: number) => (
          <span key={idx} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-500 border border-white/5">
            {kw}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function PersonalizationIntelligencePage() {
  return (
    <div className="bg-gradient-to-br from-black to-slate-900 text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse"></div>
      </div>

      <Header />
      <main className="relative z-10">
        <HeroSection />
        <WhatItDoesSection />
        <BenefitsOverview />
        <RealWorldUseCase />
        <TechnicalSpecs />

        {/* New: Unified Feature Showcase */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Smarter, Personalized Support That Knows Your Brand
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                From tone to memory to inventory—Meedo’s AI adapts to your brand, your rules, and your customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Zap className="w-8 h-8" />}
                title="Rule-Specific AI Agents"
                description="Ensure consistent support with zero guesswork. Meedo’s rule-specific AI agents follow your store’s exact policies and procedures—automatically applying returns, exchanges, shipping rules, and more without manual oversight. This creates a seamless, accurate customer experience that reflects your operations, every time."
                example="A streetwear brand with strict return policies uses Meedo’s AI to enforce time-based return rules and apply restocking fees automatically—reducing human error and customer disputes."
                keywords={[
                  "automated store policy enforcement",
                  "AI customer service automation",
                  "returns and exchanges AI",
                  "eCommerce compliance tools"
                ]}
              />
              <FeatureCard
                icon={<Palette className="w-8 h-8" />}
                title="Brand-Specific AI Personality"
                description="Deliver responses that sound like you. Meedo’s AI lets you define your brand’s tone, vocabulary, and style—whether that’s friendly and casual, elegant and luxurious, or clean and minimalist. Every interaction becomes an extension of your brand identity."
                example="A minimalist home goods brand sets Meedo’s AI to respond with concise, warm messaging in a clean tone—creating a cohesive experience from website to customer service."
                keywords={[
                  "AI with brand tone",
                  "on-brand customer support",
                  "customizable AI voice",
                  "brand consistency automation"
                ]}
              />
              <FeatureCard
                icon={<Repeat className="w-8 h-8" />}
                title="Cross-Session Memory"
                description="Make every customer feel remembered. Meedo’s AI tracks and recalls previous conversations, orders, and preferences across all channels. Customers get personalized responses based on their full history—building loyalty through thoughtful, consistent service."
                example="A skincare company uses Meedo to remember each customer’s product preferences and routine. When a repeat buyer returns, the AI suggests their past purchase and checks for compatibility with new products."
                keywords={[
                  "AI with memory",
                  "customer history tracking",
                  "personalized support at scale",
                  "repeat customer engagement"
                ]}
              />
              <FeatureCard
                icon={<Boxes className="w-8 h-8" />}
                title="Inventory-Integrated Recommendations"
                description="Turn out-of-stock frustration into opportunity. Meedo’s AI integrates with your live inventory to suggest alternative products during support chats—whether for replacements, exchanges, or similar in-stock items—maximizing sales while keeping customers happy."
                example="An electronics brand uses Meedo to suggest an in-stock, upgraded model when a customer asks to exchange a discontinued item—resulting in a satisfied customer and a higher-value sale."
                keywords={[
                  "AI product recommendations",
                  "smart inventory assistant",
                  "exchange and upsell automation",
                  "AI for stock-aware service"
                ]}
              />
            </div>
          </motion.div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

// Shared Components (consistent with original design)


function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 text-center z-10">
<motion.div
          variants={fadeIn}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8">
            <Brain className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-400">Smart Personalization & Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Support That Knows
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Your Brand & Customers
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-400 mb-12 leading-relaxed">
            AI that enforces your rules, speaks your voice, remembers your customers, and sells smarter.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            'Brand Voice Consistency',
            'Policy Automation',
            'Customer Memory',
            'Live Inventory AI'
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <CheckCircle className="w-4 h-4 text-green-400" />
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
          <ChevronDown className="w-6 h-6 text-slate-500 mx-auto" />
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
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Intelligent automation, deeply personalized.
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12">
          Meedo’s Personalization & Intelligence suite combines brand-aligned AI, rule-based automation, customer memory, and real-time inventory awareness to deliver seamless, high-conversion support that feels human—because it’s built around your brand and customers.
        </p>
        <div className="flex justify-center my-12">
          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
            <Brain className="w-36 h-36 text-purple-400/50" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BenefitsOverview() {
  const benefits = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Enforce Policies Automatically",
      description: "No more inconsistent responses. AI follows your exact rules for returns, shipping, and exchanges—every time.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Speak in Your Brand Voice",
      description: "Customize tone, style, and phrasing so every message feels like it came from your team.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      title: "Remember Every Customer",
      description: "Leverage cross-session memory to personalize interactions and build loyalty.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Benefits Overview</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Experience the benefits of automated AI support that reinforces your store policies, ensures brand consistency, and remembers every customer&apos;s unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-600 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400 text-sm md:text-base">{benefit.description}</p>
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
      name: "Return Policy Enforcement",
      customer: { name: "Customer", message: "I want to return this jacket. It’s been 18 days since delivery." },
      ai: { name: "Meedo AI", message: "We appreciate your request. Our return window is 14 days. Since it’s been 18 days, a 15% restocking fee will apply. Would you like to proceed?" },
      insights: ["`BookOpen` Enforced return policy", "`Zap` Applied restocking fee automatically", "`CheckCircle` Transparent communication"]
    },
    {
      name: "Brand Voice Consistency",
      customer: { name: "Customer", message: "Hi! What’s your return policy?" },
      ai: { name: "Meedo AI", message: "Hey there! We accept returns within 14 days—just make sure the tags are on. Let us know if you need help!" },
      insights: ["`Palette` Matched casual brand tone", "`Users` Friendly, approachable language", "`MessageSquare` Consistent messaging"]
    },
    {
      name: "Smart Product Swap",
      customer: { name: "Customer", message: "The wireless earbuds I ordered are out of stock. Can I exchange for something else?" },
      ai: { name: "Meedo AI", message: "Sorry about that! We recommend our in-stock Pro Sound Buds—they’re upgraded, noise-canceling, and $20 more, but we’ll cover the difference." },
      insights: ["`Boxes` Checked live inventory", "`Zap` Suggested higher-value item", "`CheckCircle` Increased AOV with upsell"]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-transparent to-slate-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Watch Intelligence in Action
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real interactions powered by Meedo’s brand-aware, rule-driven, memory-rich AI.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveScenario(idx)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeScenario === idx
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {scenario.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeScenario}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              {scenarios[activeScenario].name}
            </h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex justify-end">
              <div className="max-w-[80%] md:max-w-[70%] bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-sm px-5 py-3">
                <p className="text-blue-100 font-medium text-sm mb-1">{scenarios[activeScenario].customer.name}</p>
                <p className="text-white">{scenarios[activeScenario].customer.message}</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[80%] md:max-w-[70%] bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl rounded-tl-sm px-5 py-3">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <p className="text-purple-300 font-medium text-sm">{scenarios[activeScenario].ai.name}</p>
                </div>
                <p className="text-white">{scenarios[activeScenario].ai.message}</p>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-white/10 bg-slate-800/30">
            <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-purple-400" />
              Key Insights:
            </h4>
            <ul className="space-y-2">
              {scenarios[activeScenario].insights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: insight }} />
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
    "Rule engine for returns, shipping, and exchange policies",
    "Customizable brand tone, voice, and lexicon settings",
    "Persistent customer memory across sessions and channels",
    "Real-time integration with Shopify, WooCommerce, and custom inventory APIs",
    "Context-aware upsell and replacement logic based on order history"
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Engineered for intelligent, brand-aligned automation.
          </h2>
        </div>
        <div className="bg-slate-800/30 border border-white/10 rounded-2xl p-6 md:p-8">
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
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{spec}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

function CustomerTestimonial() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          <Star className="w-8 h-8 text-white" />
        </div>
        <blockquote className="text-xl md:text-2xl italic text-white mb-6">
          &quot;Meedo doesn&apos;t just answer questions—it knows our brand, our rules, and our customers. It&apos;s like having a senior support agent who never sleeps.&quot;
        </blockquote>
        <p className="text-slate-400">
          — Jordan T., CX Director, UrbanThread Apparel
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-12 bg-slate-700/50 border border-white/10 rounded-lg flex items-center justify-center text-slate-500 text-sm">
            UrbanThread Logo
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SeoFooter() {
  const keywords = [
    "rule-specific AI agents",
    "automated store policy enforcement",
    "brand-specific AI personality",
    "AI with brand tone",
    "cross-session memory",
    "AI product recommendations",
    "inventory-integrated AI",
    "eCommerce compliance tools",
    "personalized support at scale"
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center">
        <p className="text-xs text-slate-600 sr-only">Keywords:</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {keywords.map((keyword, idx) => (
            <span key={idx} className="text-xs text-slate-600">
              {keyword}{idx < keywords.length - 1 ? ',' : ''}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section id="cta" className="container mx-auto px-4 py-16 md:py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border border-purple-500/30 p-8 md:p-12 max-w-4xl mx-auto"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.2),transparent_70%)]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Automate with Intelligence.
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Personalize with Purpose.</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            Deploy AI that knows your brand, follows your rules, remembers your customers, and sells smarter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#"
              className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-6 md:px-8 py-3 md:py-4 font-semibold text-white shadow-lg group overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center">
                Start Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
            <motion.a
              href="#"
              className="relative inline-flex items-center justify-center rounded-lg bg-white/5 px-6 md:px-8 py-3 md:py-4 font-semibold text-white border border-white/20 overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">Request a Demo</span>
            </motion.a>
          </div>
          <p className="text-sm text-slate-400 mt-6">
            No credit card required • Set up in minutes
          </p>
        </div>
      </motion.div>
    </section>
  );
}


export default PersonalizationIntelligencePage;
