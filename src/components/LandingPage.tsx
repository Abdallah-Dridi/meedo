// src/components/LandingPage.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
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
  BarChart3,
} from "lucide-react";

import Header from "./Header";
import Footer from "./Footer";
import { ParticlesBackground } from "./ParticlesBackground";

// --- Main Landing Page Component ---
function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-200 antialiased dark:bg-gradient-to-br dark:from-black dark:to-slate-900">
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
// Removed local Header component; using imported Header instead.
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="animate-pulse-slow absolute h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="animate-pulse-slow animation-delay-2000 absolute h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>

      <motion.div
        className="z-10 container mx-auto px-4 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-8"
        >
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
            <span className="text-sm font-medium text-cyan-300">
              AI Support Copilot
            </span>
          </div>

          <h2 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-slate-900 to-cyan-600 bg-clip-text text-transparent dark:from-white dark:to-cyan-300">
              Automate Support.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scale Your Business.
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
            AI-powered customer support that feels human, available 24/7, and
            scales with your business
          </p>
        </motion.div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <motion.a
            href="signup"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3.5 font-semibold text-white shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
            <span className="relative">Get Started Free</span>
          </motion.a>

          <motion.a
            href="#features"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 font-semibold text-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
            <span className="relative">Explore Features</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 transform"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex h-12 w-8 justify-center rounded-full border-2 border-white/30 p-1">
          <motion.div
            className="h-2 w-2 rounded-full bg-white"
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
    <p ref={ref} className="text-lg leading-relaxed text-slate-400 md:text-xl">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.1 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className={
            ["growth.", "time."].includes(word)
              ? "font-medium text-white"
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
    <section
      id="features"
      className="container mx-auto max-w-3xl px-4 py-24 text-center md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="mb-8 text-3xl font-bold text-white">
          The AI{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            co-pilot
          </span>{" "}
          for solo founders.
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
    icon: <Languages className="h-10 w-10" />,
    features: [
      "Multi-language support - Full compatibility with all languages for global customer service",
      "Emotionally intelligent responses - AI agent adapts tone and style based on customer emotions, with customizable tone settings",
      "24/7 real-time support - Handle email and chat inquiries professionally and efficiently around the clock",
      "Instant query resolution - Resolve customer questions immediately without requiring human intervention",
    ],
  },
  {
    title: "Order Management & Processing",
    icon: <Package className="h-10 w-10" />,
    features: [
      "Order status tracking - Provide real-time order updates with integrated tracking links",
      "Exchange label generation - Automatically create shipping labels to facilitate product exchanges",
      "Automated returns processing - Instantly handle return requests while flagging potentially fraudulent cases",
      "Smart refund/exchange logic - Automatically apply store-specific return and exchange policies and conditions",
      "Proactive shipping notifications - Automatically send updates when shipping delays are detected, before customers inquire",
    ],
  },
  {
    title: "Social Media Management",
    icon: <ShoppingBag className="h-10 w-10" />,
    features: [
      "Cross-platform brand protection - Monitor and safeguard brand reputation across all social media channels",
      "Social engagement management - Actively respond to comments and inquiries across social platforms",
      "Consistent social presence - Maintain active engagement on all social media channels",
      "Strategic escalation options - Forward cases to human agents when needed as a goodwill gesture to enhance brand relationships",
    ],
  },
  {
    title: "Personalization & Intelligence",
    icon: <User className="h-10 w-10" />,
    features: [
      "Rule-specific AI agents - Automatically applies rules based on store policy and procedure",
      "Brand-specific AI personality - Allow store owners to define AI personality, tone, and response style (friendly, luxury, minimalist, etc.)",
      "Cross-session memory - Remember past customer interactions, order history, and preferences for consistent, personalized responses across all channels",
      "Inventory-integrated recommendations - Suggest available alternative products for out-of-stock items or exchange requests",
    ],
  },
  {
    title: "Analytics & Monitoring",
    icon: <BarChart2 className="h-10 w-10" />,
    features: [
      "Customer satisfaction tracking - Monitor satisfaction levels through integrated survey systems",
      "Real-time automation analytics - Track system health with customizable analytics platform for complete automation control",
      "Performance insights - Comprehensive dashboard to monitor and optimize all aspects of the AI automation",
    ],
  },
];

function FeatureCategorySection() {
  return (
    <section id="feature-categories" className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Powerful Features for Seamless Support
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Comprehensive AI solutions designed to handle every aspect of
            customer support
          </p>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {featureCategories.map((category, index) => (
            <div
              key={index}
              className="flex w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
            >
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

function FeatureCategoryCard({
  title,
  icon,
  features,
}: {
  title: string;
  icon: React.ReactNode;
  features: string[];
}) {
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
      className="flex h-full flex-col"
    >
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} perspective={1000}>
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm"
        >
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, rgba(139, 92, 246, 0.15), transparent 70%)`,
              opacity: isHovered ? 1 : 0,
            }}
          ></div>

          <div className="relative z-10 flex flex-1 flex-col">
            <div className="mb-6 text-cyan-300">{icon}</div>
            <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
            <ul className="mt-4 flex-1 space-y-3">
              {features.slice(0, 3).map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start text-slate-400"
                >
                  <span className="mr-2 text-green-400">✓</span>
                  <span className="text-sm">{feature.split(" - ")[0]}</span>
                </motion.li>
              ))}
              {features.length > 3 && (
                <motion.li
                  className="mt-2 inline-flex items-center text-sm font-medium text-purple-400"
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
                href="/features/multi-language"
                className="inline-flex items-center text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
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
      "Personalization & Intelligence",
    ]),
  );

  // State for usage data
  const [usageData, setUsageData] = useState({
    simple: { volume: 0, period: "monthly" },
    return: { volume: 0, period: "monthly" },
    social: { volume: 0, period: "monthly" },
    complex: { volume: 0, period: "monthly" },
  });

  // Feature definitions
  const features = [
    {
      name: "Core Communication & Language Support",
      price: 59,
      icon: <MessageSquare className="h-5 w-5 text-cyan-400" />,
    },
    {
      name: "Order Management & Processing",
      price: 69,
      icon: <Package className="h-5 w-5 text-purple-400" />,
    },
    {
      name: "Social Media Management",
      price: 59,
      icon: <ShoppingBag className="h-5 w-5 text-pink-400" />,
    },
    {
      name: "Analytics & Monitoring",
      price: 59,
      icon: <BarChart3 className="h-5 w-5 text-green-400" />,
    },
    {
      name: "Personalization & Intelligence",
      price: 0,
      icon: <User className="h-5 w-5 text-yellow-400" />,
      free: true,
    },
  ];

  // Case types definitions
  const caseTypes = [
    {
      key: "simple",
      name: "Simple Inquiry",
      price: 0.075,
      range: "$0.05-$0.10",
    },
    {
      key: "return",
      name: "Return / Exchange",
      price: 0.2,
      range: "$0.15-$0.25",
    },
    {
      key: "social",
      name: "Social Media Case",
      price: 0.15,
      range: "$0.10-$0.20",
    },
    {
      key: "complex",
      name: "Escalated/Complex",
      price: 0.35,
      range: "$0.30+",
      note: "(custom, or human-involved)",
    },
  ];

  // Toggle feature selection
  const toggleFeature = (featureName: string) => {
    if (featureName === "Personalization & Intelligence") return; // Can't toggle free feature

    setSelectedFeatures((prev) => {
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
  const updateUsage = (
    caseKey: string,
    field: "volume" | "period",
    value: number | string,
  ) => {
    setUsageData((prev) => ({
      ...prev,
      [caseKey]: {
        ...prev[caseKey as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  // Calculate setup cost with discounts
  const calculateSetupCost = () => {
    let total = 0;
    features.forEach((feature) => {
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
      originalTotal: total,
    };
  };

  // Calculate usage cost
  const calculateUsageCost = () => {
    let totalCost = 0;
    let period = "monthly";

    Object.entries(usageData).forEach(([key, data]) => {
      const caseType = caseTypes.find((c) => c.key === key);
      if (data.volume > 0 && caseType) {
        let multiplier = 1;
        if (data.period === "daily") multiplier = 30;
        else if (data.period === "yearly") multiplier = 1 / 12;
        totalCost += data.volume * caseType.price * multiplier;
        period = data.period;
      }
    });

    return {
      totalCost,
      period,
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
        className="mx-auto max-w-6xl"
      >
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5">
            <span className="text-sm font-medium text-purple-400">
              Transparent Pricing
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white">
            Simple, Fair{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Pay only for what you need with our flexible one-time setup and
            pay-per-case model
          </p>
        </div>

        {/* Feature Bundles and Usage Side-by-Side */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Feature Bundles */}
          <div className="space-y-8">
            {/* Referral Discount Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-700/40 to-cyan-700/40 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white/10 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-300"
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Get 100% Off Setup Cost
                  </h3>
                  <p className="text-slate-300">
                    Refer just 3 friends and get your entire setup cost waived!
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-green-500/50 bg-green-500/20 text-xs text-green-400">
                        1
                      </div>
                      <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-green-500/50 bg-green-500/20 text-xs text-green-400">
                        2
                      </div>
                      <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-purple-500/50 bg-purple-500/20 text-xs text-purple-400">
                        3
                      </div>
                    </div>
                    <span className="ml-2 text-sm text-slate-400">
                      Referrals needed
                    </span>
                  </div>
                  <Link href="/referral">
                    <motion.button
                      className="mt-4 inline-flex items-center text-sm font-medium text-cyan-300 hover:text-cyan-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn more about referrals
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Feature Bundles Section */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 p-2">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Feature Bundles
                </h3>
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
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all duration-300 ${
                      selectedFeatures.has(feature.name)
                        ? "border-purple-400/50 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 shadow-lg shadow-purple-500/10"
                        : "border-white/10 bg-slate-800/30 hover:border-purple-400/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-slate-700/50 p-2">
                        {feature.icon}
                      </div>
                      <span className="font-medium text-white">
                        {feature.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-bold ${
                          feature.free ? "text-green-400" : "text-white"
                        }`}
                      >
                        {feature.free ? "FREE" : `$${feature.price}`}
                      </span>
                      {selectedFeatures.has(feature.name) && !feature.free && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-white">
                          ✓
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Usage Estimation */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 p-2">
                <PieChart className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Expected Usage
              </h3>
            </div>

            <div className="space-y-6">
              {caseTypes.map((caseType, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-white/10 bg-slate-800/30 p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-medium text-white">
                      {caseType.name}
                    </span>
                    <span className="text-sm text-slate-400">
                      {caseType.range} per case
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Volume</span>
                      <div className="relative">
                        <select
                          value={
                            usageData[caseType.key as keyof typeof usageData]
                              .period
                          }
                          onChange={(e) =>
                            updateUsage(caseType.key, "period", e.target.value)
                          }
                          className="appearance-none rounded-lg border border-white/20 bg-slate-700/50 py-1.5 pr-8 pl-3 text-sm text-white focus:border-purple-400 focus:outline-none"
                        >
                          <option value="daily">Daily</option>
                          <option value="monthly">Monthly</option>
                          <option value="yearly">Yearly</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-3 w-3 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>

                    {/* Range input for volume */}
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={
                          usageData[caseType.key as keyof typeof usageData]
                            .volume || 0
                        }
                        onChange={(e) =>
                          updateUsage(
                            caseType.key,
                            "volume",
                            parseInt(e.target.value) || 0,
                          )
                        }
                        className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
                      />
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>0</span>
                        <span>
                          {
                            usageData[caseType.key as keyof typeof usageData]
                              .volume
                          }{" "}
                          cases
                        </span>
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
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Setup Cost */}
            <div className="rounded-xl border border-white/10 bg-slate-800/30 p-5">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="font-medium text-white">Setup Cost</h4>
                <div className="rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 p-1.5">
                  <DollarSign className="h-4 w-4 text-purple-400" />
                </div>
              </div>
              <div className="mb-1 text-2xl font-bold text-white">
                ${setupTotal}
              </div>
              {discount > 0 && (
                <div className="text-sm text-slate-400 line-through">
                  ${originalTotal} Save ${discount}
                </div>
              )}
              <p className="mt-2 text-sm text-slate-400">One-time payment</p>
              {discount > 0 && (
                <div className="mt-3 rounded-lg border border-green-500/30 bg-green-900/20 p-2">
                  <p className="text-xs text-green-400">
                    🎉 Bundle Discount Applied!
                  </p>
                </div>
              )}
            </div>

            {/* Usage Cost */}
            <div className="rounded-xl border border-white/10 bg-slate-800/30 p-5">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="font-medium text-white">Usage Cost</h4>
                <div className="rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 p-1.5">
                  <PieChart className="h-4 w-4 text-purple-400" />
                </div>
              </div>
              <div className="mb-1 text-2xl font-bold text-white">
                ${usageCost.toFixed(2)}
              </div>
              <p className="text-sm text-slate-400">
                per{" "}
                {period === "daily"
                  ? "day"
                  : period === "yearly"
                    ? "year"
                    : "month"}
              </p>
              {usageCost === 0 && (
                <div className="mt-3 rounded-lg border border-purple-500/30 bg-purple-900/20 p-2">
                  <p className="text-xs text-purple-400">
                    Add usage volumes to see costs
                  </p>
                </div>
              )}
            </div>

            {/* Total Summary */}
            <div className="rounded-xl border border-purple-400/50 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-5 shadow-lg shadow-purple-500/10">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="font-medium text-white">Your Investment</h4>
                <div className="rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 p-1.5">
                  <DollarSign className="h-4 w-4 text-purple-400" />
                </div>
              </div>
              <div className="mb-1 text-2xl font-bold text-white">
                ${setupTotal} to start
              </div>
              {usageCost > 0 && (
                <p className="text-base text-slate-300">
                  ${usageCost.toFixed(2)} ongoing
                </p>
              )}
              <div className="mt-4 border-t border-white/20 pt-3">
                <p className="text-sm text-slate-400">
                  {selectedFeatures.size} feature
                  {selectedFeatures.size !== 1 ? "s" : ""} selected
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
  { name: "Magento", logo: "/images/logos/magento.jpg" },
  { name: "Salesforce", logo: "/images/logos/salesforce.jpg" },
  { name: "Square", logo: "/images/logos/Square.jpg" },
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
      setScrollPosition((prev) => {
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
    <section className="container mx-auto px-4 py-24" id="integration">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Easy and Fast Integration
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
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
                className="flex min-w-[180px] flex-col items-center justify-center"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
                <span className="text-lg font-medium text-white">
                  {integration.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black via-black/80 to-transparent"></div>
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
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-black p-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1),transparent_70%)]"></div>
        <div className="relative z-10">
          <h2 className="mb-4 text-4xl font-bold text-white">
            It&apos;s time to join the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              future
            </span>{" "}
            of support
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            Stop managing tickets. Start building your empire.
          </p>

          <motion.a
            href="/signup"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></span>
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
