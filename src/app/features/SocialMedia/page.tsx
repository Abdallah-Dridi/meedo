// src/app/features/SocialMedia/page.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import {
  ArrowRight,
  Shield,
  MessageSquare,
  Users,
  Zap,
  CheckCircle,
  ChevronDown,
  Eye,
  UserCheck,
  Star,
  Hash,
  Camera} from 'lucide-react';

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

// Feature Card Component
function FeatureCard({ icon, title, description, example, keywords }: { icon: React.ReactNode; title: string; description: string; example: string; keywords: string[] }) {
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
        {keywords.map((kw, idx) => (
          <span key={idx} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-500 border border-white/5">
            {kw}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function SocialMediaFeaturePage() {
  return (
    <div className="bg-gradient-to-br from-black to-slate-900 text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse"></div>
      </div>
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <WhatItDoesSection />
        <BenefitsOverview />
        <SocialMediaFeaturesSection />
        <AgentInActionSection />
        <TechnicalSpecs />
        <CustomerTestimonial />
        <SeoFooter />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}


function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8">
            <Shield className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-400">Personalization & Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Social Media
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Management & Protection
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-400 mb-12 leading-relaxed">
            Monitor, engage, and protect your brand across all social platforms with intelligent AI automation.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            'Real-Time Monitoring',
            'Instant Responses',
            'Brand Protection',
            'Cross-Platform Management'
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
          Complete social media intelligence and automation.
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12">
          From monitoring brand mentions to responding to customer inquiries, Meedo&apos;s AI handles your entire social media presence—protecting your reputation while driving engagement across all platforms.
        </p>
        {/* Supporting Visual */}
        <div className="flex justify-center my-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
            <Shield className="w-32 h-32 text-purple-400/50" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BenefitsOverview() {
  const benefits = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Proactive Brand Monitoring",
      description: "Detect issues before they escalate with real-time sentiment analysis.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Response Automation",
      description: "Handle comments, DMs, and mentions across all platforms instantly.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consistent Brand Voice",
      description: "Maintain your brand personality across every social interaction.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Smart Escalation",
      description: "Know when to involve human agents for sensitive conversations.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
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
            Core Benefits
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Transform your social media strategy with intelligent automation and protection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeIn}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.color} mb-6 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {benefit.icon}
                </div>
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

function SocialMediaFeaturesSection() {
  return (
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
            Complete Social Media Solutions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to manage, protect, and grow your social media presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Cross-Platform Brand Protection"
            description="Stay ahead of reputation risks. Meedo continuously monitors your brand across all major social channels, identifying negative sentiment, brand mentions, and emerging issues—so you can take action before they escalate."
            example="A lifestyle brand uses Meedo to monitor TikTok, Instagram, and X (Twitter) for customer complaints, enabling them to resolve issues before they go viral."
            keywords={["brand sentiment monitoring", "social media listening AI", "proactive reputation management", "real-time brand protection"]}
          />
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8" />}
            title="Social Engagement Management"
            description="Respond instantly, everywhere. Meedo's AI handles comments, DMs, and mentions across all your social platforms—answering FAQs, clarifying product info, and directing customers to purchase or support channels."
            example="A beverage company relies on Meedo to respond to hundreds of daily Instagram and Facebook comments during a product launch—driving conversions and customer excitement."
            keywords={["AI social responses", "comment and DM automation", "social media customer care", "real-time engagement AI"]}
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Consistent Social Presence"
            description="Never leave a channel silent. Meedo helps you maintain a steady, on-brand presence across all social platforms—so customers get timely, thoughtful responses whether they reach out on Facebook, Instagram, X, or TikTok."
            example="An indie fashion label uses Meedo to ensure every customer message is replied to within minutes, building a reputation for responsiveness and community care."
            keywords={["omnichannel social AI", "brand voice on every channel", "social customer engagement", "automated community management"]}
          />
          <FeatureCard
            icon={<UserCheck className="w-8 h-8" />}
            title="Strategic Escalation Options"
            description="Know when to hand it off. Meedo uses intelligent rules to escalate sensitive or high-impact conversations to human agents—balancing efficiency with empathy to protect long-term brand relationships."
            example="A premium travel brand uses Meedo to handle general social inquiries automatically but forwards VIP complaints to a human rep with full context for personal follow-up."
            keywords={["AI-human handoff", "VIP customer care", "AI escalation rules", "brand loyalty support"]}
          />
        </div>
      </motion.div>
    </section>
  );
}

function AgentInActionSection() {
  const [activeScenario, setActiveScenario] = useState(0);
  const scenarios = [
    {
      name: "Instagram DM Resolution",
      platform: "Instagram",
      platformColor: "from-pink-500 to-purple-600",
      customer: { name: "@sarah_styles", message: "Hey! I ordered the blue dress but got green instead 😞 What can we do?" },
      ai: { name: "YourBrand", message: "Hi Sarah! So sorry about the mix-up! 😊 I can arrange an exchange right away. Check your DMs for a prepaid return label - we'll send the blue dress today!" },
      insights: ["Detected product issue instantly", "Provided immediate solution", "Maintained brand tone with emojis"],
      icon: <Camera className="w-5 h-5" />
    },
    {
      name: "Facebook Comment Response",
      platform: "Facebook",
      platformColor: "from-blue-500 to-blue-600",
      customer: { name: "Mike Johnson", message: "Is this product vegan? Can't find the ingredients list anywhere..." },
      ai: { name: "YourBrand", message: "Hi Mike! Yes, all our skincare products are 100% vegan and cruelty-free 🌱 You can find the full ingredients list on each product page under the 'Details' tab. Let me know if you need help finding anything specific!" },
      insights: ["Answered product question accurately", "Provided navigation guidance", "Used relevant emoji for brand alignment"],
      icon: <Users className="w-5 h-5" />
    },
    {
      name: "Twitter Crisis Management",
      platform: "X (Twitter)",
      platformColor: "from-slate-600 to-slate-800",
      customer: { name: "@unhappy_customer", message: "Terrible service! Been waiting 3 weeks for my order. This company is a joke! #disappointed" },
      ai: { name: "@YourBrand", message: "Hi there! I'm truly sorry about the delay - that's not the experience we want for you. I've escalated this to our priority team and you'll hear from a specialist within the hour. We'll make this right! 🙏" },
      insights: ["Detected negative sentiment", "Showed empathy and urgency", "Escalated to human agent automatically"],
      icon: <Hash className="w-5 h-5" />
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
            Agent in Action
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real social media interactions showing Meedos AI responding across platforms.
          </p>
        </div>
        
        {/* Platform Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {scenarios.map((scenario, idx) => (
            <button
              key={idx}
              onClick={() => setActiveScenario(idx)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeScenario === idx
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {scenario.icon}
              {scenario.platform}
            </button>
          ))}
        </div>

        {/* Social Media Mockup */}
        <motion.div
          key={activeScenario}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className={`p-4 bg-gradient-to-r ${scenarios[activeScenario].platformColor} border-b border-white/10`}>
            <div className="flex items-center gap-3">
              {scenarios[activeScenario].icon}
              <h3 className="text-lg font-bold text-white">{scenarios[activeScenario].name}</h3>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            {/* Customer Message */}
            <div className="flex justify-start">
              <div className="max-w-[80%] bg-slate-700/50 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3">
                <p className="text-slate-300 font-medium text-sm mb-1">{scenarios[activeScenario].customer.name}</p>
                <p className="text-white text-sm">{scenarios[activeScenario].customer.message}</p>
              </div>
            </div>
            
            {/* AI Response */}
            <div className="flex justify-end">
              <div className={`max-w-[80%] bg-gradient-to-br ${scenarios[activeScenario].platformColor}/20 border border-purple-500/30 rounded-2xl rounded-tr-sm px-4 py-3`}>
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-3 h-3 text-purple-400" />
                  <p className="text-purple-300 font-medium text-sm">{scenarios[activeScenario].ai.name}</p>
                </div>
                <p className="text-white text-sm">{scenarios[activeScenario].ai.message}</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-white/10 bg-slate-800/30">
            <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <Star className="w-4 h-4 text-purple-400" />
              AI Insights:
            </h4>
            <ul className="space-y-1">
              {scenarios[activeScenario].insights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{insight}</span>
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
    "Real-time monitoring across Instagram, Facebook, X (Twitter), TikTok, LinkedIn",
    "Advanced sentiment analysis with context understanding",
    "Smart escalation rules with VIP customer recognition",
    "Brand voice consistency across all platforms",
    "Automated response templates with personalization"
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
            Enterprise-grade social media automation.
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
          &quot;Meedo transformed our social media presence overnight. We went from struggling to keep up with mentions to proactively managing our brand reputation across all platforms. Customer satisfaction scores increased by 40% in just three months.&quot;
        </blockquote>
        <p className="text-slate-400">
          — Jessica M., Digital Marketing Director, TrendFusion Lifestyle
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-12 bg-slate-700/50 border border-white/10 rounded-lg flex items-center justify-center text-slate-500 text-sm">
            TrendFusion Logo
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SeoFooter() {
  const keywords = [
    "social media management AI",
    "brand sentiment monitoring",
    "social media listening AI",
    "automated social responses",
    "cross-platform brand protection",
    "AI social engagement"
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center">
        <p className="text-xs text-slate-600 sr-only">Keywords:</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {keywords.map((keyword, idx) => (
            <span key={idx} className="text-xs text-slate-600">{keyword}{idx < keywords.length - 1 ? ',' : ''}</span>
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
            Protect Your Brand.
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Engage Every Customer.</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            Transform your social media strategy with intelligent monitoring, instant responses, and proactive brand protection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="signup"
              className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-6 md:px-8 py-3 md:py-4 font-semibold text-white shadow-lg group overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center">
                Get Started Free
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

import Footer from '@/components/Footer';

export default SocialMediaFeaturePage;