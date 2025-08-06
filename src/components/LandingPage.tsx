// src/components/LandingPage.tsx
"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  ChevronDown,
  ArrowRight,
  Languages,
  Package,
  ShoppingBag,
  User,
  BarChart2,
  DollarSign,
  Zap,
  PieChart,
  MessageSquare,
  BarChart3
} from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';
import Image from 'next/image';

// --- Animation Variants ---
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } },
};

// Removed unused staggerContainer constant.

// --- Main Landing Page Component ---
function LandingPage() {
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-black dark:to-slate-900 text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeatureCategorySection />
        <PricingSection />
        <IntegrationSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
export { LandingPage };

// --- Page Structure Components ---

function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Meedo</h1>
        </motion.div>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          )}
          <motion.a 
            href="#cta" 
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-purple-500/30 group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 text-center z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-cyan-300">AI Support Copilot</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-cyan-600 dark:from-white dark:to-cyan-300 bg-clip-text text-transparent">
              Automate Support.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scale Your Business.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-400 mb-10">
            AI-powered customer support that feels human, available 24/7, and scales with your business
          </p>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#cta"
            className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3.5 font-semibold text-white shadow-lg overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative">Get Started Free</span>
          </motion.a>
          
          <motion.a
            href="#features"
            className="relative inline-flex items-center justify-center rounded-lg bg-white/5 px-8 py-3.5 font-semibold text-white border border-white/10 overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative">Explore Features</span>
          </motion.a>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
          <motion.div 
            className="w-2 h-2 rounded-full bg-white"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function AnimatedText({ text }: { text: string }) {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const words = text.split(" ");

    return (
        <p ref={ref} className="text-lg md:text-xl text-slate-400 leading-relaxed">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0.1 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={
                        ["growth.", "time."].includes(word) 
                        ? "text-white font-medium" 
                        : ["co-pilot", "founders."].includes(word)
                        ? "bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                        : ""
                    }
                >
                    {word}{" "}
                </motion.span>
            ))}
        </p>
    );
}

function AboutSection() {
    return (
        <section id="features" className="container mx-auto px-4 py-24 md:py-32 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                The AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">co-pilot</span> for solo founders.
              </h3>
              <AnimatedText text="Stop drowning in repetitive replies and focus on what truly matters: growth. Meedo is your always-on support agent, built to give you back your most valuable resource—time." />
            </motion.div>
        </section>
    );
}

// Feature categories data
const featureCategories = [
  {
    title: "Core Communication & Language Support",
    icon: <Languages className="w-10 h-10" />,
    features: [
      "Multi-language support - Full compatibility with all languages for global customer service",
      "Emotionally intelligent responses - AI agent adapts tone and style based on customer emotions, with customizable tone settings",
      "24/7 real-time support - Handle email and chat inquiries professionally and efficiently around the clock",
      "Instant query resolution - Resolve customer questions immediately without requiring human intervention"
    ]
  },
  {
    title: "Order Management & Processing",
    icon: <Package className="w-10 h-10" />,
    features: [
      "Order status tracking - Provide real-time order updates with integrated tracking links",
      "Exchange label generation - Automatically create shipping labels to facilitate product exchanges",
      "Automated returns processing - Instantly handle return requests while flagging potentially fraudulent cases",
      "Smart refund/exchange logic - Automatically apply store-specific return and exchange policies and conditions",
      "Proactive shipping notifications - Automatically send updates when shipping delays are detected, before customers inquire"
    ]
  },
  {
    title: "Social Media Management",
    icon: <ShoppingBag className="w-10 h-10" />,
    features: [
      "Cross-platform brand protection - Monitor and safeguard brand reputation across all social media channels",
      "Social engagement management - Actively respond to comments and inquiries across social platforms",
      "Consistent social presence - Maintain active engagement on all social media channels",
      "Strategic escalation options - Forward cases to human agents when needed as a goodwill gesture to enhance brand relationships"
    ]
  },
  {
    title: "Personalization & Intelligence",
    icon: <User className="w-10 h-10" />,
    features: [
      "Rule-specific AI agents - Automatically applies rules based on store policy and procedure",
      "Brand-specific AI personality - Allow store owners to define AI personality, tone, and response style (friendly, luxury, minimalist, etc.)",
      "Cross-session memory - Remember past customer interactions, order history, and preferences for consistent, personalized responses across all channels",
      "Inventory-integrated recommendations - Suggest available alternative products for out-of-stock items or exchange requests"
    ]
  },
  {
    title: "Analytics & Monitoring",
    icon: <BarChart2 className="w-10 h-10" />,
    features: [
      "Customer satisfaction tracking - Monitor satisfaction levels through integrated survey systems",
      "Real-time automation analytics - Track system health with customizable analytics platform for complete automation control",
      "Performance insights - Comprehensive dashboard to monitor and optimize all aspects of the AI automation"
    ]
  }
];

function FeatureCategorySection() {
  return (
    <section id="feature-categories" className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Powerful Features for Seamless Support</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive AI solutions designed to handle every aspect of customer support</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {featureCategories.map((category, index) => (
            <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] flex">
              <FeatureCategoryCard 
                title={category.title} 
                icon={category.icon} 
                features={category.features} 
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FeatureCategoryCard({ title, icon, features }: { title: string; icon: React.ReactNode; features: string[] }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x: `${x}%`, y: `${y}%` });
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col h-full"
    >
      <Tilt 
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.02}
        perspective={1000}
      >
        <div 
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm h-full min-h-[480px] flex flex-col overflow-hidden"
        >
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{ 
              background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, rgba(139, 92, 246, 0.15), transparent 70%)`,
              opacity: isHovered ? 1 : 0
            }}
          ></div>
          
          <div className="relative z-10 flex flex-col flex-1">
            <div className="text-cyan-300 mb-6">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
            <ul className="mt-4 space-y-3 flex-1">
              {features.slice(0, 3).map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start text-slate-400"
                >
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">{feature.split(' - ')[0]}</span>
                </motion.li>
              ))}
              {features.length > 3 && (
                <motion.li 
                  className="text-sm text-purple-400 font-medium mt-2 inline-flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  +{features.length - 3} more features
                  <ArrowRight className="ml-1 h-4 w-4" />
                </motion.li>
              )}
            </ul>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            >
              <a 
                href="#" 
                className="inline-flex items-center text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                View all features
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
function PricingSection() {
  // State for selected features
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set([
      "Core Communication & Language Support",
      "Personalization & Intelligence"
    ])
  );

  // State for usage data
  const [usageData, setUsageData] = useState({
    simple: { volume: 0, period: 'monthly' },
    return: { volume: 0, period: 'monthly' },
    social: { volume: 0, period: 'monthly' },
    complex: { volume: 0, period: 'monthly' }
  });

  // Feature definitions
  const features = [
    { name: "Core Communication & Language Support", price: 59, icon: <MessageSquare className="w-5 h-5 text-cyan-400" /> },
    { name: "Order Management & Processing", price: 69, icon: <Package className="w-5 h-5 text-purple-400" /> },
    { name: "Social Media Management", price: 59, icon: <ShoppingBag className="w-5 h-5 text-pink-400" /> },
    { name: "Analytics & Monitoring", price: 59, icon: <BarChart3 className="w-5 h-5 text-green-400" /> },
    { name: "Personalization & Intelligence", price: 0, icon: <User className="w-5 h-5 text-yellow-400" />, free: true }
  ];

  // Case types definitions
  const caseTypes = [
    { key: 'simple', name: "Simple Inquiry", price: 0.075, range: "$0.05-$0.10" },
    { key: 'return', name: "Return / Exchange", price: 0.20, range: "$0.15-$0.25" },
    { key: 'social', name: "Social Media Case", price: 0.15, range: "$0.10-$0.20" },
    { key: 'complex', name: "Escalated/Complex", price: 0.35, range: "$0.30+", note: "(custom, or human-involved)" }
  ];

  // Toggle feature selection
  const toggleFeature = (featureName: string) => {
    if (featureName === 'Personalization & Intelligence') return; // Can't toggle free feature
    
    setSelectedFeatures(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(featureName)) {
        newSelected.delete(featureName);
      } else {
        newSelected.add(featureName);
      }
      return newSelected;
    });
  };

  // Update usage data
  const updateUsage = (caseKey: string, field: string, value: any) => {
    setUsageData(prev => ({
      ...prev,
      [caseKey]: {
        ...prev[caseKey as keyof typeof prev],
        [field]: value
      }
    }));
  };

  // Calculate setup cost with discounts
  const calculateSetupCost = () => {
    let total = 0;
    features.forEach(feature => {
      if (selectedFeatures.has(feature.name)) {
        total += feature.price;
      }
    });

    let discount = 0;
    const count = selectedFeatures.size;
    
    if (count >= 4) discount = 30;
    else if (count >= 3) discount = 15;
    else if (count >= 2) discount = 10;

    return {
      total: Math.max(0, total - discount),
      discount,
      originalTotal: total
    };
  };

  // Calculate usage cost
  const calculateUsageCost = () => {
    let totalCost = 0;
    let period = 'monthly';
    
    Object.entries(usageData).forEach(([key, data]) => {
      const caseType = caseTypes.find(c => c.key === key);
      if (data.volume > 0 && caseType) {
        let multiplier = 1;
        if (data.period === 'daily') multiplier = 30;
        else if (data.period === 'yearly') multiplier = 1/12;
        totalCost += data.volume * caseType.price * multiplier;
        period = data.period;
      }
    });

    return {
      totalCost,
      period
    };
  };

  // Get calculated costs
  const { total: setupTotal, discount, originalTotal } = calculateSetupCost();
  const { totalCost: usageCost, period } = calculateUsageCost();

   return (
    <section className="container mx-auto px-4 py-24" id="pricing">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <span className="text-sm font-medium text-purple-400">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Simple, Fair <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Pay only for what you need with our flexible one-time setup and pay-per-case model
          </p>
        </div>

        {/* Feature Bundles and Usage Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Feature Bundles Section */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Feature Bundles</h3>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => toggleFeature(feature.name)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    selectedFeatures.has(feature.name) 
                      ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-400/50 shadow-lg shadow-purple-500/10'
                      : 'bg-slate-800/30 border-white/10 hover:border-purple-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-700/50">
                      {feature.icon}
                    </div>
                    <span className="text-white font-medium">{feature.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`font-bold ${
                      feature.free ? 'text-green-400' : 'text-white'
                    }`}>
                      {feature.free ? 'FREE' : `$${feature.price}`}
                    </span>
                    {selectedFeatures.has(feature.name) && !feature.free && (
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500 text-white">
                        ✓
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Usage Estimation Section */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10">
                <PieChart className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Expected Usage</h3>
            </div>
            
            <div className="space-y-6">
              {caseTypes.map((caseType, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-slate-800/30 border border-white/10"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-medium">{caseType.name}</span>
                    <span className="text-sm text-slate-400">{caseType.range} per case</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Volume</span>
                      <div className="relative">
                        <select 
                          value={usageData[caseType.key as keyof typeof usageData].period}
                          onChange={(e) => updateUsage(caseType.key, 'period', e.target.value)}
                          className="appearance-none bg-slate-700/50 border border-white/20 rounded-lg pl-3 pr-8 py-1.5 text-white text-sm focus:border-purple-400 focus:outline-none"
                        >
                          <option value="daily">Daily</option>
                          <option value="monthly">Monthly</option>
                          <option value="yearly">Yearly</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    
                    {/* Range input for volume */}
                    <div className="space-y-2">
                      <input 
                        type="range" 
                        min="0"
                        max="1000"
                        step="10"
                        value={usageData[caseType.key as keyof typeof usageData].volume || 0}
                        onChange={(e) => updateUsage(caseType.key, 'volume', parseInt(e.target.value) || 0)}
                        className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
                      />
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>0</span>
                        <span>{usageData[caseType.key as keyof typeof usageData].volume} cases</span>
                        <span>1000</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Panel - Horizontal Container */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Setup Cost */}
            <div className="p-5 rounded-xl bg-slate-800/30 border border-white/10">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-white font-medium">Setup Cost</h4>
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10">
                  <DollarSign className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">${setupTotal}</div>
              {discount > 0 && (
                <div className="text-sm text-slate-400 line-through">${originalTotal} Save ${discount}</div>
              )}
              <p className="text-sm text-slate-400 mt-2">One-time payment</p>
              {discount > 0 && (
                <div className="mt-3 p-2 bg-green-900/20 rounded-lg border border-green-500/30">
                  <p className="text-xs text-green-400">🎉 Bundle Discount Applied!</p>
                </div>
              )}
            </div>

            {/* Usage Cost */}
            <div className="p-5 rounded-xl bg-slate-800/30 border border-white/10">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-white font-medium">Usage Cost</h4>
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10">
                  <PieChart className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">${usageCost.toFixed(2)}</div>
              <p className="text-sm text-slate-400">
                per {period === 'daily' ? 'day' : period === 'yearly' ? 'year' : 'month'}
              </p>
              {usageCost === 0 && (
                <div className="mt-3 p-2 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <p className="text-xs text-purple-400">Add usage volumes to see costs</p>
                </div>
              )}
            </div>

            {/* Total Summary */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-400/50 shadow-lg shadow-purple-500/10">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-white font-medium">Your Investment</h4>
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10">
                  <DollarSign className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">${setupTotal} to start</div>
              {usageCost > 0 && (
                <p className="text-base text-slate-300">${usageCost.toFixed(2)} ongoing</p>
              )}
              <div className="mt-4 pt-3 border-t border-white/20">
                <p className="text-sm text-slate-400">
                  {selectedFeatures.size} feature{selectedFeatures.size !== 1 ? 's' : ''} selected
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const integrations = [
  { name: "Shopify", logo: "/images/logos/shopify.jpg" },
  { name: "WooCommerce", logo: "/images/logos/woocommerce.jpg" },
  { name: "BigCommerce", logo: "/images/logos/big-commerce.jpg" },
  { name: "Magento", logo: "/images/logos/magento.svg" },
  { name: "Salesforce", logo: "/images/logos/salesforce.svg" },
  { name: "Square", logo: "/images/logos/square.svg" },
];

function IntegrationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.scrollWidth - container.clientWidth;
    let animationFrame: number;
    
    const animateScroll = () => {
      setScrollPosition(prev => {
        if (prev >= containerWidth) {
          return 0;
        }
        return isPaused ? prev : prev + 0.5;
      });
      animationFrame = requestAnimationFrame(animateScroll);
    };
    
    animationFrame = requestAnimationFrame(animateScroll);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Easy and Fast Integration</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Seamlessly connect with your existing e-commerce platforms and tools
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="relative overflow-hidden py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex space-x-12"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {[...integrations, ...integrations].map((integration, index) => (
              <motion.div
                key={`${integration.name}-${index}`}
                className="flex flex-col items-center justify-center min-w-[180px]"
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-4 p-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
                <span className="text-lg font-medium text-white">{integration.name}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </motion.div>
    </section>
  );
}




function FinalCTA() {
    return (
        <section id="cta" className="container mx-auto px-4 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-black border border-white/10 p-12 max-w-4xl mx-auto"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1),transparent_70%)]"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  It&apos;s time to join the <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">future</span> of support
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8">
                  Stop managing tickets. Start building your empire.
                </p>
                
                <motion.a 
                  href="#" 
                  className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg group overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center">
                    Get Started with Meedo 
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.a>
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