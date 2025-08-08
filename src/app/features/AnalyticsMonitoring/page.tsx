// src/app/features/SocialMedia/page.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ChevronDown,
  Activity,
  AlertTriangle,
  Brain,
  Download,
  ThumbsUp,
  ThumbsDown} from 'lucide-react';

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

// Analytics Dashboard Component
function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('satisfaction');

  const satisfactionData = [
    { month: 'Jan', score: 4.2 },
    { month: 'Feb', score: 4.3 },
    { month: 'Mar', score: 4.1 },
    { month: 'Apr', score: 4.5 },
    { month: 'May', score: 4.6 },
    { month: 'Jun', score: 4.8 }
  ];

  const automationMetrics = [
    { name: 'FAQ Bot', success: 94, failures: 6 },
    { name: 'Payment Automation', success: 89, failures: 11 },
    { name: 'Order Status', success: 97, failures: 3 },
    { name: 'Return Process', success: 86, failures: 14 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 overflow-hidden"
    >
      {/* Dashboard Header */}
      <div className="p-6 border-b border-white/10 bg-slate-800/30">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              Analytics Dashboard
            </h3>
            <p className="text-slate-400 text-sm mt-1">Real-time insights & performance monitoring</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-medium">Live</span>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <Download className="w-3 h-3" />
              Export
            </button>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex gap-1 mt-4 bg-slate-700/30 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('satisfaction')}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === 'satisfaction'
                ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Satisfaction Analytics
          </button>
          <button
            onClick={() => setActiveTab('automation')}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === 'automation'
                ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AI Performance
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {activeTab === 'satisfaction' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CSAT Trend */}
            <div className="lg:col-span-2 bg-slate-800/30 rounded-xl p-4 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">Customer Satisfaction Trends</h4>
                <div className="flex items-center gap-1 text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  ↑ 8% from last month
                </div>
              </div>
              <div className="h-32 flex items-end justify-between gap-2">
                {satisfactionData.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                    <div 
                      className="w-full bg-gradient-to-t from-purple-500 to-cyan-500 rounded-t"
                      style={{ height: `${(item.score / 5) * 100}%` }}
                    ></div>
                    <span className="text-xs text-slate-400">{item.month}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-2xl font-bold text-white">4.8</span>
                <span className="text-slate-400 text-sm ml-1">/5.0 Current CSAT</span>
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div className="bg-slate-800/30 rounded-xl p-4 border border-white/5">
              <h4 className="text-white font-semibold mb-4">Sentiment Breakdown</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300 text-sm">Positive</span>
                  </div>
                  <span className="text-green-400 font-semibold">78%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">Neutral</span>
                  </div>
                  <span className="text-yellow-400 font-semibold">15%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4 text-red-400" />
                    <span className="text-slate-300 text-sm">Negative</span>
                  </div>
                  <span className="text-red-400 font-semibold">7%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full" style={{ width: '7%' }}></div>
                </div>
              </div>
            </div>

            {/* Feedback Highlights */}
            <div className="lg:col-span-3 bg-slate-800/30 rounded-xl p-4 border border-white/5">
              <h4 className="text-white font-semibold mb-4">Recent Feedback Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <Star className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-green-300 text-sm font-medium">&quot;Super fast response&quot;</p>
                    <p className="text-slate-400 text-xs">Resolution in 2 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <Star className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-green-300 text-sm font-medium">&quot;Very helpful AI&quot;</p>
                    <p className="text-slate-400 text-xs">Order tracking query</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="text-yellow-300 text-sm font-medium">&quot;Could be clearer&quot;</p>
                    <p className="text-slate-400 text-xs">Return policy question</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'automation' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Success Rate Gauge */}
            <div className="bg-slate-800/30 rounded-xl p-4 border border-white/5">
              <h4 className="text-white font-semibold mb-4">Overall Success Rate</h4>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgb(51, 65, 85)"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="91.2, 100"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">91%</span>
                </div>
              </div>
              <p className="text-center text-slate-400 text-sm">Automation handled successfully</p>
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 text-xs font-medium">↑ 3% improvement from last week</p>
              </div>
            </div>

            {/* Processing Time */}
            <div className="bg-slate-800/30 rounded-xl p-4 border border-white/5">
              <h4 className="text-white font-semibold mb-4">Average Response Time</h4>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-white">1.2</span>
                <span className="text-slate-400 text-lg ml-1">seconds</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">AI Response</span>
                  <span className="text-cyan-400 font-semibold">1.2s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Human Handoff</span>
                  <span className="text-slate-400 font-semibold">23s</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <p className="text-cyan-400 text-xs font-medium">23% faster than industry average</p>
              </div>
            </div>

            {/* Workflow Performance */}
            <div className="lg:col-span-2 bg-slate-800/30 rounded-xl p-4 border border-white/5">
              <h4 className="text-white font-semibold mb-4">Workflow Performance</h4>
              <div className="space-y-3">
                {automationMetrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${metric.success > 90 ? 'bg-green-400' : metric.success > 85 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
                      <span className="text-slate-300">{metric.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-green-400 text-sm font-semibold">{metric.success}% success</p>
                        <p className="text-red-400 text-xs">{metric.failures}% failed</p>
                      </div>
                      <div className="w-16 bg-slate-700/50 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                          style={{ width: `${metric.success}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Savings */}
            <div className="lg:col-span-2 bg-slate-800/30 rounded-xl p-4 border border-white/5">
              <h4 className="text-white font-semibold mb-4">Cost Savings & ROI</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-2xl font-bold">$12,450</p>
                  <p className="text-slate-400 text-sm">Monthly Savings</p>
                </div>
                <div className="text-center p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <p className="text-purple-400 text-2xl font-bold">2,341</p>
                  <p className="text-slate-400 text-sm">Tickets Automated</p>
                </div>
                <div className="text-center p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                  <p className="text-cyan-400 text-2xl font-bold">87%</p>
                  <p className="text-slate-400 text-sm">Deflection Rate</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function AnalyticsMonitoringPage() {
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
        <AnalyticsDashboardSection />
        <CoreFeaturesSection />
        <TechnicalSpecs />
        <CustomerTestimonial />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

import Header from '@/components/Header';
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
            <BarChart3 className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-purple-400">Analytics & Monitoring</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Data-Driven
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-400 mb-12 leading-relaxed">
            Monitor satisfaction, optimize performance, and make smarter decisions with comprehensive analytics.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[
            'Real-Time Analytics',
            'CSAT Tracking',
            'Performance Insights',
            'ROI Monitoring'
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
          Intelligence that drives decisions.
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12">
          Transform your customer support with comprehensive analytics that track satisfaction, monitor AI performance, and deliver actionable insights. From real-time CSAT monitoring to automation optimization—see exactly how your AI is performing and where to improve.
        </p>
        <div className="flex justify-center my-12">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
            <BarChart3 className="w-32 h-32 text-purple-400/50" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AnalyticsDashboardSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Analytics Platform Overview
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive dashboard showing real-time satisfaction tracking and AI automation performance metrics.
          </p>
        </div>
        <AnalyticsDashboard />
      </motion.div>
    </section>
  );
}

function CoreFeaturesSection() {
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
            Analytics & Monitoring Features
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to monitor satisfaction, track performance, and optimize your AI operations.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Customer Satisfaction Tracking"
            description="Stay connected to your customers' experience. Meedo's integrated survey system allows you to measure customer satisfaction in real time—capturing post-interaction feedback to help you continuously improve support quality and brand perception."
            example="A DTC apparel brand uses Meedo's survey tracking to monitor satisfaction after each AI-assisted return. With quick-response feedback, they identify friction points and adjust return messaging for better results."
            keywords={["customer feedback automation", "CSAT integration", "real-time satisfaction monitoring", "AI service improvement"]}
          />
          <FeatureCard
            icon={<Activity className="w-8 h-8" />}
            title="Real-Time Automation Analytics"
            description="Monitor automation health like a pro. Meedo's real-time analytics dashboard lets you track system uptime, workflow triggers, resolution times, and more. With fully customizable metrics, you'll always know how your AI is performing—and where to improve."
            example="A fast-scaling pet supplies brand uses real-time analytics to spot delays in order-related queries. They adjust AI workflows instantly, reducing resolution time by 23%."
            keywords={["AI workflow monitoring", "automation performance metrics", "real-time AI analytics", "support operations visibility"]}
          />
          <FeatureCard
            icon={<Brain className="w-8 h-8" />}
            title="Performance Insights"
            description="Optimize your AI with powerful performance insights. Meedo's centralized dashboard gives you a full view of how your automation performs across products, teams, and channels—enabling smarter decisions with actionable data."
            example="A lifestyle brand uses Meedo's performance insights to identify the most common customer issues and improve its help center—reducing ticket volume by 30%."
            keywords={["AI performance dashboard", "support optimization tools", "data-driven automation", "insight-based decision making"]}
          />
        </div>
      </motion.div>
    </section>
  );
}

function TechnicalSpecs() {
  const specs = [
    "Real-time satisfaction survey integration with CSAT/NPS tracking",
    "Advanced analytics dashboard with customizable KPI monitoring",
    "Automated performance alerts and anomaly detection",
    "Multi-channel analytics across email, chat, and social platforms",
    "ROI calculation with cost savings and efficiency metrics",
    "Export capabilities for detailed reporting and data analysis"
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
            Enterprise-grade analytics infrastructure.
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
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <blockquote className="text-xl md:text-2xl italic text-white mb-6">
          &quot;Meedo&apos;s analytics transformed how we understand our customers. We identified key pain points in our support flow and improved our CSAT by 34% in just two months. The real-time insights are invaluable for making quick optimizations.&quot;
        </blockquote>
        <p className="text-slate-400">
          — Marcus T., Director of Customer Experience, TechFlow Solutions
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-12 bg-slate-700/50 border border-white/10 rounded-lg flex items-center justify-center text-slate-500 text-sm">
            TechFlow Solutions Logo
          </div>
        </div>
      </motion.div>
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
            Transform Data Into Action.
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Drive Better Results.</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            Start monitoring satisfaction, optimizing performance, and making data-driven decisions that improve your customer experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="/signup"
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
              <span className="relative">View Analytics Demo</span>
            </motion.a>
          </div>
          <p className="text-sm text-slate-400 mt-6">
            No credit card required • Complete analytics suite included
          </p>
        </div>
      </motion.div>
    </section>
  );
}

import Footer from '@/components/Footer';
export default AnalyticsMonitoringPage;