// src/app/features/management/page.tsx
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Package,
  RefreshCw,
  DollarSign,
  Bell,
  CheckCircle,
  Zap,
  Truck,
  ClipboardList,
  ChevronDown,
  Star,
  Clock,
  MessageSquare
} from 'lucide-react';

// Animation variants
const customEasing: [number, number, number, number] = [0.42, 0, 0.58, 1];
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEasing } },
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

// Reusable Feature Card Component
function FeatureCard({ icon, title, description, example, keywords }: { icon: React.ReactNode; title: string; description: string; example: string; keywords: string[]; }) {
  return (
    <motion.div
      variants={itemFadeIn}
      whileHover={{ y: -5 }}
      className="group p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
    >
      <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-600 mb-6 group-hover:scale-110 transition-transform">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm md:text-base mb-4">{description}</p>
      <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-white/5">
        <p className="text-xs text-cyan-400 font-medium mb-2">User Example</p>
        <p className="text-slate-300 text-sm">{example}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1">
        {keywords.map((kw, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-500 border border-white/5"
          >
            {kw}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function OrderManagementFeaturePage() {
  return (
    <div className="bg-gradient-to-br from-black to-slate-900 text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse"></div>
      </div>

      <SharedHeader />
      <main className="relative z-10">
        <HeroSection />
        <WhatItDoesSection />
        <BenefitsOverview />
        <RealWorldUseCase />
        <TechnicalSpecs />

        {/* Comprehensive Order Intelligence Section */}
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
                Smarter Order Management, Zero Effort
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                From tracking to returns—automate every step with AI that thinks like your best agent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Truck className="w-8 h-8" />}
                title="Order Status Tracking"
                description="Keep customers informed without lifting a finger. Meedo provides real-time order updates with integrated tracking links, allowing customers to check their delivery status anytime—minimizing “Where’s my order?” tickets and improving transparency."
                example="A lifestyle brand uses Meedo to send automatic tracking links the moment an order ships. Customers receive proactive updates and self-serve their order status, reducing support volume by 40%."
                keywords={[
                  'real-time order updates',
                  'automated tracking links',
                  'eCommerce shipment tracking',
                  'AI-powered order visibility'
                ]}
              />
              <FeatureCard
                icon={<RefreshCw className="w-8 h-8" />}
                title="Exchange Label Generation"
                description="Make product swaps effortless. Meedo automatically generates prepaid exchange shipping labels when customers request a size or color change—removing friction and encouraging smooth, policy-compliant exchanges."
                example="A sneaker brand uses Meedo to send instant return labels for size swaps. Customers complete exchanges in one step—no agent intervention required."
                keywords={[
                  'automated exchange labels',
                  'AI-powered product swaps',
                  'shipping automation',
                  'frictionless customer service'
                ]}
              />
              <FeatureCard
                icon={<Package className="w-8 h-8" />}
                title="Automated Returns Processing"
                description="Handle returns with speed and accuracy. Meedo instantly processes return requests based on your rules, flags suspicious activity, and prevents abuse—saving your team time while protecting your bottom line."
                example="An apparel retailer uses Meedo to auto-approve return requests that meet policy while flagging multiple high-value returners for manual review."
                keywords={[
                  'automated returns',
                  'fraud detection AI',
                  'policy-driven return flow',
                  'returns management automation'
                ]}
              />
              <FeatureCard
                icon={<DollarSign className="w-8 h-8" />}
                title="Smart Refund & Exchange Logic"
                description="Apply the right rules, every time. Meedo enforces your store’s unique return and exchange policies—like refund eligibility windows or exchange-only for final sale items—automatically and accurately."
                example="A luxury cosmetics brand configures Meedo to deny refunds for opened skincare items but allow store credit—ensuring policy compliance without agent input."
                keywords={[
                  'AI return rules',
                  'refund automation',
                  'custom policy enforcement',
                  'exchange-only logic'
                ]}
              />
              <FeatureCard
                icon={<Bell className="w-8 h-8" />}
                title="Proactive Shipping Notifications"
                description="Solve problems before they happen. Meedo monitors shipping status and automatically alerts customers of delays—before they even ask—helping you get ahead of frustrations and reduce inbound support tickets."
                example="A wellness brand relies on Meedo to notify customers when weather delays shipping. Customers appreciate the transparency—and the brand sees fewer complaints."
                keywords={[
                  'shipping delay alerts',
                  'AI-powered notifications',
                  'proactive customer service'
                ]}
              />
            </div>
          </motion.div>
        </section>

        <SeoFooter />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div variants={fadeIn} className="mb-8">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8">
            <Package className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-400">Intelligent Order Management</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Automate Every
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Order Journey
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-400 mb-12 leading-relaxed">
            From shipment to return—deliver seamless, intelligent experiences with zero manual work.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            'Real-Time Tracking',
            'No More WISMO Tickets',
            'Auto-Generated Labels',
            'Fraud Detection'
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
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

// What It Does
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
          Smarter orders. Happier customers.
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12">
          Meedo automates the entire post-purchase journey—from tracking to returns—using intelligent rules and real-time data. Reduce manual work, prevent fraud, and keep customers informed at every step.
        </p>

        <div className="flex justify-center my-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
            <ClipboardList className="w-32 h-32 text-purple-400/50" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BenefitsOverview() {
  const benefits = [
    {
      title: "Faster Processing",
      description: "Automate routine tasks and speed up order handling.",
      color: "from-green-500 to-green-600",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Seamless Tracking",
      description: "Keep customers informed with real-time tracking.",
      color: "from-blue-500 to-blue-600",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Smooth Returns",
      description: "Simplify returns with automated processing.",
      color: "from-red-500 to-red-600",
      icon: <Package className="w-6 h-6" />
    },
    {
      title: "Accurate Refunds",
      description: "Ensure policy compliance with smart refund logic.",
      color: "from-purple-500 to-purple-600",
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Turn post-purchase chaos into a competitive advantage.
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
              <div className="text-white">{benefit.icon}</div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{benefit.title}</h3>
            <p className="text-slate-400 text-sm md:text-base">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Real-World Use Case: Interactive Scenario
function RealWorldUseCase() {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      name: "WISMO Inquiry – Tracking",
      customer: { name: "Customer", message: "Hey, where’s my order? It’s been 5 days." },
      ai: {
        name: "Meedo AI",
        message: "Hi! Your order #M12345 shipped yesterday. Here’s your live tracking link: [tracking.me/abc123]. Estimated delivery: Tomorrow by 6 PM."
      },
      insights: [
        "`Truck` Auto-fetched tracking link",
        "`Clock` Delivered real-time status",
        "`CheckCircle` Reduced ticket escalation"
      ]
    },
    {
      name: "Size Swap Request – Sneakers",
      customer: { name: "Customer", message: "I need to exchange my sneakers for a size 10." },
      ai: {
        name: "Meedo AI",
        message: "No problem! I’ve generated a prepaid return label and started your exchange. Your new size will ship once we receive the original."
      },
      insights: [
        "`RefreshCw` Auto-generated return label",
        "`Zap` One-step exchange flow",
        "`ShieldCheck` Verified policy compliance"
      ]
    },
    {
      name: "Refund Denial – Final Sale",
      customer: { name: "Customer", message: "I want a refund for this opened serum." },
      ai: {
        name: "Meedo AI",
        message: "I understand, but this item is final sale and opened. You’re eligible for store credit instead—would you like to proceed?"
      },
      insights: [
        "`DollarSign` Enforced refund rules",
        "`Heart` Offered empathetic alternative",
        "`CheckCircle` Prevented policy violation"
      ]
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">See It in Action</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real AI-powered order interactions—no human agents involved.
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
              {scenario.name.split(' – ')[0]}
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
            {/* Customer */}
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

// Technical Specs
function TechnicalSpecs() {
  const specs = [
    "Real-time carrier tracking integration (FedEx, UPS, DHL, USPS)",
    "Automated label generation via shipping API",
    "Dynamic refund & exchange logic engine",
    "AI-powered fraud detection for return abuse",
    "Proactive delay detection with carrier data monitoring",
    "Custom policy builder with rule-based automation"
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
            Engineered for scale, precision, and trust.
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

// Testimonial
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
          &quot;We used to spend hours every day on tracking and returns. Now Meedo handles 90% of it automatically. Our CSAT scores went up, and our team focuses on real issues—not repetitive tasks.&quot;
        </blockquote>
        <p className="text-slate-400">
          — Marcus T., Head of Operations, SoleTheory
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-12 bg-slate-700/50 border border-white/10 rounded-lg flex items-center justify-center text-slate-500 text-sm">
            SoleTheory Logo
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// SEO Footer Keywords
function SeoFooter() {
  const keywords = [
    'order status tracking',
    'automated returns processing',
    'AI exchange labels',
    'smart refund logic',
    'proactive shipping alerts',
    'eCommerce order automation'
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

// Call to Action
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
            Automate Your Post-Purchase Flow.
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Reclaim Your Time.</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            Let AI handle tracking, returns, and exchanges—so your team can focus on delighting customers, not managing tickets.
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

// Footer

// The Header and Footer components are now imported from shared components
import SharedHeader from '@/components/Header';
import Footer from '@/components/Footer';

export default OrderManagementFeaturePage;
