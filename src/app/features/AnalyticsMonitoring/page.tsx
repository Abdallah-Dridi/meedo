"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Users,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  Activity,
  Brain} from 'lucide-react';
import { 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Bar,
  ComposedChart,
  Area,
  AreaChart
} from 'recharts';

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

function AnalyticsDashboard() {
  const summaryStats = [
    { label: "Total Interactions", value: "3.6M", change: "+9.1%" },
    { label: "Automated Resolutions", value: "14.0K", change: "+59.8%" },
    { label: "Unique Users Helped", value: "13.6K", change: "+60%" },
    { label: "Avg. Daily Reach", value: "5.2K", change: "+7.8%" },
    { label: "Automation Savings", value: "$13.69K", change: "+4.9%" },
  ];

  const spendData = [
    { date: "Jul 10", amount: 200, tickets: 150, cost: 0.85 },
    { date: "Jul 15", amount: 350, tickets: 280, cost: 0.92 },
    { date: "Jul 20", amount: 280, tickets: 220, cost: 0.78 },
    { date: "Jul 25", amount: 400, tickets: 350, cost: 0.88 },
    { date: "Jul 30", amount: 450, tickets: 380, cost: 0.95 },
    { date: "Aug 4", amount: 500, tickets: 420, cost: 0.82 },
    { date: "Aug 9", amount: 470, tickets: 400, cost: 0.79 },
  ];

  const workflowPerformance = [
    {
      name: "Order Tracking",
      saved: "$4,230",
      tickets: "5,120",
      avgTime: "1.3s",
      resolution: "98%",
      deflection: "87%",
      costPerTicket: "$0.84",
    },
    {
      name: "Return Processing",
      saved: "$2,310",
      tickets: "3,430",
      avgTime: "2.1s",
      resolution: "92%",
      deflection: "81%",
      costPerTicket: "$1.05",
    },
    {
      name: "FAQ Bot",
      saved: "$1,890",
      tickets: "2,210",
      avgTime: "0.9s",
      resolution: "95%",
      deflection: "85%",
      costPerTicket: "$0.76",
    },
  ];

  const demographics = [
    { age: "18-24", gender: "Female", resolutions: 4200 },
    { age: "25-34", gender: "Male", resolutions: 3800 },
    { age: "35-44", gender: "Female", resolutions: 3100 },
  ];

  const deviceData = [
    { name: "Desktop", value: 45, color: "#8b5cf6" },
    { name: "Mobile", value: 40, color: "#06b6d4" },
    { name: "Tablet", value: 15, color: "#facc15" },
  ];


  const satisfactionData = [
    { date: "Jul 10", csat: 84 },
    { date: "Jul 15", csat: 86 },
    { date: "Jul 20", csat: 88 },
    { date: "Jul 25", csat: 87 },
    { date: "Jul 30", csat: 89 },
    { date: "Aug 4", csat: 91 },
    { date: "Aug 9", csat: 93 },
  ];

  const aiMetrics = [
    { category: "Order Inquiries", rate: 96, color: "#10b981" },
    { category: "Return Requests", rate: 94, color: "#8b5cf6" },
    { category: "Product Info", rate: 98, color: "#06b6d4" },
    { category: "Billing Support", rate: 89, color: "#f59e0b" },
    { category: "Technical Issues", rate: 92, color: "#ef4444" },
  ];

  const ticketHandlingData = [
    { date: "Jul 10", tickets: 150, avgTime: 2.3 },
    { date: "Jul 15", tickets: 280, avgTime: 1.8 },
    { date: "Jul 20", tickets: 220, avgTime: 2.1 },
    { date: "Jul 25", tickets: 350, avgTime: 1.6 },
    { date: "Jul 30", tickets: 380, avgTime: 1.9 },
    { date: "Aug 4", tickets: 420, avgTime: 1.4 },
    { date: "Aug 9", tickets: 400, avgTime: 1.2 },
  ];

  const automationCostData = [
    { date: "Jul 10", automations: 125, costPerTicket: 0.85 },
    { date: "Jul 15", automations: 245, costPerTicket: 0.72 },
    { date: "Jul 20", automations: 198, costPerTicket: 0.78 },
    { date: "Jul 25", automations: 312, costPerTicket: 0.65 },
    { date: "Jul 30", automations: 356, costPerTicket: 0.68 },
    { date: "Aug 4", automations: 398, costPerTicket: 0.58 },
    { date: "Aug 9", automations: 385, costPerTicket: 0.62 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 overflow-hidden p-6 space-y-8"
    >
      {/* Top Summary Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {summaryStats.map((stat, idx) => (
          <div key={idx} className="bg-slate-800/30 p-4 rounded-lg border border-white/5">
            <p className="text-slate-400 text-sm">{stat.label}</p>
            <p className="text-white text-xl font-bold">{stat.value}</p>
            <p className="text-green-400 text-xs">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Automation Load Over Time */}
      <div>
        <h4 className="text-white font-semibold mb-4">Automation Load Over Time</h4>
        <div className="bg-slate-800/30 rounded-lg border border-white/5 p-4">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={spendData}>
              <defs>
                <linearGradient id="automationGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="date" 
                stroke="#9ca3af"
                fontSize={12}
              />
              <YAxis 
                stroke="#9ca3af"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#f9fafb'
                }}
              />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#8b5cf6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#automationGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Workflow Performance Table */}
      <div>
        <h4 className="text-white font-semibold mb-2">Workflow Performance</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-400 border border-white/5 rounded-lg">
            <thead className="bg-slate-800/50 text-slate-300">
              <tr>
                <th className="p-2">Workflow</th>
                <th className="p-2">Amount Saved</th>
                <th className="p-2">Tickets</th>
                <th className="p-2">Avg Time</th>
                <th className="p-2">Resolution Rate</th>
                <th className="p-2">Deflection Rate</th>
                <th className="p-2">Cost/Ticket</th>
              </tr>
            </thead>
            <tbody>
              {workflowPerformance.map((row, idx) => (
                <tr key={idx} className="border-t border-white/5">
                  <td className="p-2 text-white">{row.name}</td>
                  <td className="p-2">{row.saved}</td>
                  <td className="p-2">{row.tickets}</td>
                  <td className="p-2">{row.avgTime}</td>
                  <td className="p-2">{row.resolution}</td>
                  <td className="p-2">{row.deflection}</td>
                  <td className="p-2">{row.costPerTicket}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Resolutions by Demographics and Device Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-semibold mb-2">Resolutions by Demographics</h4>
          <table className="w-full text-sm text-left text-slate-400 border border-white/5 rounded-lg">
            <thead className="bg-slate-800/50 text-slate-300">
              <tr>
                <th className="p-2">Age Group</th>
                <th className="p-2">Gender</th>
                <th className="p-2">Resolutions</th>
              </tr>
            </thead>
            <tbody>
              {demographics.map((row, idx) => (
                <tr key={idx} className="border-t border-white/5">
                  <td className="p-2">{row.age}</td>
                  <td className="p-2">{row.gender}</td>
                  <td className="p-2">{row.resolutions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Device Distribution Pie Chart */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resolutions by Device</h4>
          <div className="bg-slate-800/30 rounded-lg border border-white/5 p-4">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2 text-xs text-slate-400">
              {deviceData.map((d, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></span>
                  {d.name} ({d.value}%)
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Performance & Satisfaction Metrics */}
      <div>
        <h4 className="text-white font-semibold mb-4">AI Performance & Customer Satisfaction</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Customer Satisfaction Trends */}
          <div className="bg-slate-800/30 rounded-lg border border-white/5 p-4">
            <h5 className="text-slate-300 text-sm mb-3">Customer Satisfaction Score (CSAT)</h5>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={satisfactionData}>
                <defs>
                  <linearGradient id="satisfactionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9ca3af" fontSize={10} />
                <YAxis 
                  domain={[60, 100]} 
                  stroke="#9ca3af" 
                  fontSize={10}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }}
                  formatter={(value) => [`${value}%`, 'CSAT Score']}
                />
                <Area
                  type="monotone"
                  dataKey="csat"
                  stroke="#10b981"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#satisfactionGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span className="text-slate-400">Avg: 87.2%</span>
              <span className="text-green-400">↗ +5.8% this month</span>
            </div>
          </div>
          
          {/* AI Resolution Success Rate */}
          <div className="bg-slate-800/30 rounded-lg border border-white/5 p-4">
            <h5 className="text-slate-300 text-sm mb-3">AI Resolution Success Rate</h5>
            <div className="space-y-4">
              {aiMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">{metric.category}</span>
                    <span className="text-white font-semibold">{metric.rate}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${metric.color}, ${metric.color}90)`,
                        width: `${metric.rate}%`
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.rate}%` }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs">Overall AI Performance</span>
                  <span className="text-cyan-400 font-semibold">94.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Performance Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-slate-800/30 rounded-lg border border-white/5 p-4 text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 mb-3 mx-auto">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-white text-lg font-bold">23%</p>
            <p className="text-slate-400 text-xs">Faster Resolution Time</p>
          </div>
          <div className="bg-slate-800/30 rounded-lg border border-white/5 p-4 text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 mb-3 mx-auto">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-white text-lg font-bold">89%</p>
            <p className="text-slate-400 text-xs">Customer Retention</p>
          </div>
          <div className="bg-slate-800/30 rounded-lg border border-white/5 p-4 text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20 mb-3 mx-auto">
              <Brain className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-white text-lg font-bold">96%</p>
            <p className="text-slate-400 text-xs">AI Accuracy Score</p>
          </div>
        </div>
      </div>

      {/* Bottom Trend Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-semibold mb-4">Tickets & Avg Handling Time</h4>
          <div className="bg-slate-800/30 rounded-lg border border-white/5 p-4">
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart data={ticketHandlingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
                <YAxis yAxisId="left" stroke="#9ca3af" fontSize={12} />
                <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }}
                />
                <Bar yAxisId="left" dataKey="tickets" fill="#06b6d4" name="Tickets" />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="avgTime" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  name="Avg Time (min)"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Automations & Cost per Ticket</h4>
          <div className="bg-slate-800/30 rounded-lg border border-white/5 p-4">
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart data={automationCostData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
                <YAxis yAxisId="left" stroke="#9ca3af" fontSize={12} />
                <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }}
                />
                <Bar yAxisId="left" dataKey="automations" fill="#10b981" name="Automations" />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="costPerTicket" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  name="Cost per Ticket ($)"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
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

// Mock Footer Component
import Footer from '@/components/Footer';

export default AnalyticsMonitoringPage;