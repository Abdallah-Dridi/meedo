"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Package,
  ShoppingBag,
  User,
  DollarSign,
  Zap,
  PieChart,
  MessageSquare,
  BarChart3,
} from "lucide-react";

export function PricingSection() {
  // State for selected features
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set([
      "Core Communication & Language Support",
      "Personalization & Intelligence",
    ])
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
      name: "Personalization & Intelligence",
      price: 0,
      icon: <User className="h-5 w-5 text-yellow-400" />,
      free: true,
    },
    {
      name: "Core Communication & Language Support",
      price: 59,
      icon: <MessageSquare className="h-5 w-5 text-cyan-400" />,
    },
    {
      name: "Analytics & Monitoring",
      price: 59,
      icon: <BarChart3 className="h-5 w-5 text-green-400" />,
    },
    {
      name: "Social Media Management",
      price: 59,
      icon: <ShoppingBag className="h-5 w-5 text-pink-400" />,
    },
    {
      name: "Order Management & Processing",
      price: 69,
      icon: <Package className="h-5 w-5 text-purple-400" />,
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

  // Simplified usage update function
  const updateUsage = (
    caseKey: string,
    field: "volume" | "period",
    value: number | string
  ) => {
    setUsageData((prev) => ({
      ...prev,
      [caseKey]: {
        ...prev[caseKey as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  // Helper function to convert the slider's internal value (0-100) to the display value (0-300)
  const internalToDisplayValue = (internalValue: number): number => {
    if (internalValue <= 50) {
      return internalValue; // 1-to-1 mapping for the first half
    }
    // For the second half, each point on the slider represents 5 tickets
    return 50 + (internalValue - 50) * 5;
  };

  // Helper function to convert the display value (0-300) back to the slider's internal value (0-100)
  const displayToInternalValue = (displayValue: number): number => {
    if (displayValue <= 50) {
      return displayValue; // 1-to-1 mapping
    }
    // Reverse the calculation for values above 50
    return 50 + (displayValue - 50) / 5;
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

        {/* Feature Bundles and Usage Side-by-Side - SAME HEIGHT */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Left Column - Feature Bundles */}
          <div className="flex flex-col gap-8">
            {/* Referral Discount Box - ULTRA COOL */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #e0f2fe 50%, #f1f5f9 75%, #ffffff 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.9), inset 0 1px 0 rgba(255, 255, 255, 1)'
              }}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                  className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-400/20 to-cyan-400/20 blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br from-pink-400/20 to-orange-400/20 blur-2xl"
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Decorative floating elements */}
              <motion.div 
                className="absolute top-4 right-4 h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-6 left-6 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                animate={{ 
                  y: [0, 8, 0],
                  x: [0, -3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute top-1/2 right-8 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10 flex items-start gap-6">
                <motion.div 
                  className="rounded-3xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-5 shadow-2xl"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ 
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </motion.svg>
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    className="mb-4 text-3xl font-black bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent"
                    style={{ 
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Get 100% Off Setup Cost! 
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ 
                        rotate: [0, 20, -20, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🎉
                    </motion.span>
                  </motion.h3>
                  
                  <motion.p 
                    className="mb-8 text-lg font-semibold text-gray-700 leading-relaxed"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Refer just <span className="relative font-black text-purple-700 bg-gradient-to-r from-purple-100 to-purple-200 px-2 py-1 rounded-lg">3 friends</span> and get your entire setup cost waived!
                  </motion.p>
                  
                  <motion.div 
                    className="mb-8 flex items-center gap-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
                  >
                    <div className="flex">
                      {[1, 2, 3].map((num, idx) => (
                        <motion.div
                          key={num}
                          className={`flex h-14 w-14 items-center justify-center rounded-full text-xl font-black text-white shadow-xl ${
                            num === 3 
                              ? 'border-4 border-purple-400 bg-gradient-to-br from-purple-500 to-indigo-600' 
                              : 'border-4 border-emerald-400 bg-gradient-to-br from-emerald-500 to-green-600'
                          } ${idx > 0 ? '-ml-4' : ''}`}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: 0.5 + (idx * 0.1),
                            type: "spring",
                            bounce: 0.6
                          }}
                          whileHover={{ 
                            scale: 1.2,
                            y: -5,
                            zIndex: 10
                          }}
                        >
                          {num}
                        </motion.div>
                      ))}
                    </div>
                    <div className="ml-6">
                      <div className="text-sm font-black text-gray-700 uppercase tracking-widest">Referrals Needed</div>
                      <div className="text-xs font-medium text-gray-500">It's that simple!</div>
                    </div>
                  </motion.div>
                  
                  <Link href="/referral">
                    <motion.button
                      className="group inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 px-10 py-5 text-xl font-black text-white shadow-2xl transition-all duration-300 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-purple-500/50 overflow-hidden relative"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        boxShadow: '0 20px 40px -12px rgba(139, 69, 196, 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="relative z-10">Start Referring Now</span>
                      <motion.div
                        className="relative z-10 ml-3"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight className="h-6 w-6" />
                      </motion.div>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Feature Bundles Section - MODIFIED */}
            <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6">
              <div className="mb-6 mt-4 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 p-2">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Feature Bundles
                </h3>
              </div>
                
              {/* MODIFIED */}
              <div className="flex flex-1 flex-col justify-center gap-10">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    onClick={() => toggleFeature(feature.name)}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all duration-300 ${
                      feature.free
                        ? "border-emerald-400/40 bg-gradient-to-r from-emerald-500/15 to-green-500/15 shadow-md shadow-emerald-500/10"
                        : selectedFeatures.has(feature.name)
                        ? "border-purple-400/50 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 shadow-lg shadow-purple-500/10"
                        : "border-white/10 bg-slate-800/30 hover:border-purple-400/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg p-2 ${
                        feature.free 
                          ? "bg-emerald-500/20" 
                          : "bg-slate-700/50"
                      }`}>
                        {feature.icon}
                      </div>
                      <span className="font-medium text-white">
                        {feature.name}
                      </span>
                      {feature.free && (
                        <motion.div
                          className="ml-2 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-300"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          INCLUDED
                        </motion.div>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-bold ${
                          feature.free ? "text-emerald-300" : "text-white"
                        }`}
                      >
                        {feature.free ? "FREE" : `${feature.price}`}
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
          {/* Right Column - Usage Estimation */}
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 flex flex-col">
  <div className="mb-6 flex items-center gap-3">
    <div className="rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 p-2">
      <PieChart className="h-5 w-5 text-purple-400" />
    </div>
    <h3 className="text-xl font-semibold text-white">
      Expected Usage
    </h3>
  </div>

  <div className="flex-1 flex flex-col justify-between">
    {caseTypes.map((caseType, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.05 }}
        viewport={{ once: true }}
        className="rounded-xl border border-white/10 bg-slate-800/30 p-4 mb-4 last:mb-0"
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

          {/* MODIFIED: Range input section */}
          <div className="space-y-2">
            <div className="relative h-1.5 rounded-lg bg-slate-700">
              <div 
                className="absolute top-0 left-0 h-full rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500"
                style={{ 
                  width: `${(displayToInternalValue(
                    usageData[caseType.key as keyof typeof usageData].volume || 0
                  ) / 100) * 100}%` 
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="100"
                value={displayToInternalValue(
                  usageData[caseType.key as keyof typeof usageData]
                  .volume || 0
                )}
                onChange={(e) => {
                  const internalValue = parseInt(e.target.value, 10);
                  const displayValue = internalToDisplayValue(internalValue);
                  updateUsage(
                    caseType.key,
                    "volume",
                    displayValue
                  );
                }}
                className="absolute top-0 left-0 w-full h-1.5 cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(139,92,246,0.5)] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-purple-500 [&::-moz-range-thumb]:border-0"
              />
            </div>
            <div className="relative flex justify-between text-xs text-slate-400">
              <span>0</span>
              <span className="absolute left-1/4 -translate-x-1/2">25</span>
              <span className="absolute left-1/2 -translate-x-1/2">50</span>
              <span className="absolute left-3/4 -translate-x-1/2">175</span>
              <span>300</span>
            </div>
            <div className="flex justify-center mt-1">
              <span className="text-lg font-bold text-purple-400">
              {
                usageData[caseType.key as keyof typeof usageData]
                .volume
              }{" "}
              cases
              </span>
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