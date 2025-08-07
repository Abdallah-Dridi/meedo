// src/app/features/multi-language/page.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  ArrowLeft,
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
  Lightbulb
} from 'lucide-react';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.42, 0, 0.58, 1] as any
    } 
  },
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

// FeatureCard Props Interface
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
  keywords: string[];
}

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
        {keywords.map((kw, idx) => (
          <span key={idx} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-500 border border-white/5">
            {kw}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function MultiLanguageFeaturePage() {
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
        <RealWorldUseCase />
        <TechnicalSpecs />
        
        {/* Comprehensive Solutions Section */}
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
                Comprehensive AI Support Solutions
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                From multilingual communication to 24/7 automation—everything you need for exceptional customer service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Globe className="w-8 h-8" />}
                title="Multi-language Customer Support AI"
                description="Provide exceptional customer service in any language. Meedo&apos;s AI-powered support tool offers full multilingual support, enabling eCommerce and global brands to respond fluently to customers worldwide—without hiring multi-language agents or using third-party translation software."
                example="A sustainable beauty brand with customers across Europe uses Meedo's multi-language customer service to reply instantly in French, Spanish, and German—boosting satisfaction and reducing translation errors."
                keywords={["multilingual customer support", "AI customer service", "global eCommerce", "language translation automation"]}
              />
              <FeatureCard
                icon={<Heart className="w-8 h-8" />}
                title="Emotionally Intelligent AI Chatbot"
                description="Deliver human-like, emotionally aware customer support at scale. Meedo&apos;s AI detects sentiment and adapts its tone to suit the customer's mood—whether calming an upset shopper or maintaining a cheerful tone for routine questions. Customize tone settings to match your brand voice perfectly."
                example="An apparel store dealing with delivery complaints uses Meedo's emotionally intelligent chatbot to de-escalate tension and preserve customer loyalty—without involving a live agent."
                keywords={["emotional AI", "sentiment-aware chatbot", "empathetic customer service", "AI tone adjustment"]}
              />
              <FeatureCard
                icon={<Clock className="w-8 h-8" />}
                title="24/7 Automated Customer Support"
                description="Offer always-on support without hiring overnight staff. Meedo's AI assistant provides real-time, automated responses to customer inquiries via email and chat—24/7, including weekends and holidays. Stay responsive around the clock and improve customer satisfaction."
                example="An Australian online store relies on Meedo for after-hours email and chat support, ensuring instant help for customers even outside business hours."
                keywords={["24/7 customer support", "automated live chat", "AI helpdesk", "real-time support automation"]}
              />
              <FeatureCard
                icon={<Lightbulb className="w-8 h-8" />}
                title="Instant Customer Query Resolution with AI"
                description="Resolve common customer questions—like order status, return policies, and product info—in seconds using Meedo's AI. By automating responses to repetitive inquiries, you reduce support ticket volume, improve efficiency, and create faster customer experiences."
                example="A home decor shop cut its daily ticket load by half with Meedo's AI handling all routine questions instantly, allowing the human team to focus on complex issues."
                keywords={["instant customer support", "automated query resolution", "AI ticket deflection", "self-service support"]}
              />
            </div>
          </motion.div>
        </section>
        
        <CustomerTestimonial />
        <SeoFooter />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Features</span>
          </button>
          <div className="w-px h-6 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Meedo</h1>
          </div>
        </motion.div>
        <motion.a 
          href="#cta" 
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-purple-500/30 group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Free Trial
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8">
            <Globe className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-400">Multi-language AI Support</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Speak Every Customer&apos;s
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Language Instantly
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-slate-400 mb-12 leading-relaxed">
            Deliver fluent, accurate support worldwide—without hiring a multilingual team.
          </p>
        </motion.div>
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            'Real-Time Translation',
            'No Language Barriers',
            'Scale Globally',
            'Native Fluency'
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
          Global support, no overhead.
        </h2>
        <p className="text-lg text-slate-400 mb-12">
          Provide exceptional customer service in any language. Meedo's AI-powered support tool offers full multilingual support, enabling eCommerce and global brands to respond fluently to customers worldwide—without hiring multi-language agents or using third-party translation software.
        </p>
        {/* Supporting Visual Placeholder */}
        <div className="flex justify-center my-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
            <Globe className="w-32 h-32 text-purple-400/50" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BenefitsOverview() {
const benefits = [
{
icon: <Globe className="w-8 h-8" />,
title: "Native Fluency in 30+ Languages",
description: "Communicate naturally and accurately in the customer's preferred language.",
color: "from-purple-500 to-purple-600"
},
{
icon: <Users className="w-8 h-8" />,
title: "Eliminate Language Hiring Costs",
description: "Scale support globally without recruiting or training multilingual staff.",
color: "from-cyan-500 to-cyan-600"
},
{
icon: <Zap className="w-8 h-8" />,
title: "Instant, Accurate Responses",
description: "Real-time translation ensures fast, error-free communication.",
color: "from-pink-500 to-pink-600"
},
{
icon: <Sliders className="w-8 h-8" />,
title: "Seamless Brand Consistency",
description: "Maintain your brand voice accurately across all languages.",
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
Unlock global growth with effortless, intelligent multilingual support.
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

function RealWorldUseCase() {
const [activeScenario, setActiveScenario] = useState(0);
const scenarios = [
{
name: "E-commerce Buyer – French",
customer: { name: "Customer", message: "Bonjour, j'ai une question sur ma commande." },
ai: { name: "Meedo AI", message: "Bonjour ! Bien sûr, je peux vous aider avec cela. Pouvez-vous me fournir votre numéro de commande ?" },
insights: ["`Flag` Detected French - Responded fluently", "`FileText` Requested order number for context"]
},
{
name: "Upset Shopper – Spanish",
customer: { name: "Cliente", message: "¡Estoy muy molesto! Mi pedido llegó dañado." },
ai: { name: "Meedo AI", message: "Lamento mucho escuchar eso. Entiendo su frustración. Permítame ayudarle a resolver este problema de inmediato." },
insights: ["`Heart` Tone adapted to show empathy", "`Zap` Offered immediate resolution"]
},
{
name: "Returns Inquiry – German",
customer: { name: "Kunde", message: "Ich möchte einen Artikel zurückgeben. Was ist der Prozess?" },
ai: { name: "Meedo AI", message: "Natürlich, ich helfe Ihnen gerne bei der Rückgabe. Hier sind die Schritte..." },
insights: ["`FileText` Accurately explained policy in German", "`CheckCircle` Provided clear, step-by-step instructions"]
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
See It in Action
</h2>
<p className="text-slate-400 max-w-2xl mx-auto text-lg">
Real conversations showing how Meedo handles global customer interactions.
</p>
</div>
{/* Scenario Selector */}
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
{scenario.name.split(' – ')[0]} {/* Show just the type, not language for brevity */}
</button>
))}
</div>
{/* Chat Simulation */}
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
{/* Customer Message */}
<div className="flex justify-end">
<div className="max-w-[80%] md:max-w-[70%] bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-sm px-5 py-3">
<p className="text-blue-100 font-medium text-sm mb-1">{scenarios[activeScenario].customer.name}</p>
<p className="text-white">{scenarios[activeScenario].customer.message}</p>
</div>
</div>
{/* AI Response */}
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
<span dangerouslySetInnerHTML={{ __html: insight }} /> {/* For icons in text */}
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
"Context-aware conversation memory across languages"
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
Built for enterprise-grade multilingual workflows.
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
"Meedo&apos;s multilingual AI has been a game-changer. We&apos;ve expanded into three new European markets, and customer satisfaction scores in those regions are now on par with our domestic market. We didn&apos;t need to hire a single translator."
</blockquote>
<p className="text-slate-400">
— Sarah J., Head of Global Customer Success, GreenGlow Beauty
</p>
{/* Logo Placeholder */}
<div className="mt-6 flex justify-center">
<div className="w-32 h-12 bg-slate-700/50 border border-white/10 rounded-lg flex items-center justify-center text-slate-500 text-sm">
GreenGlow Beauty Logo
</div>
</div>
</motion.div>
</section>
);
}

function SeoFooter() {
// Keywords from the description
const keywords = [
"multilingual customer support",
"AI customer service",
"global eCommerce",
"language translation automation",
"real-time translation",
"customer service AI"
];
return (
<section className="container mx-auto px-4 py-8">
<div className="text-center">
{/* Visually hidden for users, but present for SEO */}
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
Break the Language Barrier.
<span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Delight Every Customer.</span>
</h2>
<p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
Offer world-class support in every language your customers speak. Start building stronger global relationships today.
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

function Footer() {
return (
<footer className="border-t border-white/10">
<div className="container mx-auto px-4 py-8 text-center text-slate-500 text-sm">
<p>&copy; {new Date().getFullYear()} Meedo. All rights reserved.</p>
</div>
</footer>
);
}