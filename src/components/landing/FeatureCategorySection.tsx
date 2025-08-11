"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Languages,
  Package,
  ShoppingBag,
  User,
  BarChart2,
  ArrowRight,
} from "lucide-react";

// Feature categories data remains the same...
const featureCategories = [
  {
    title: "Core Communication & Language Support",
    icon: <Languages className="h-10 w-10" />,
    href: "/features/multi-language",
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
    href: "/features/OrderManagement",
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
    href: "/features/SocialMedia",
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
    href: "/features/PersonalizationIntelligence",
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
    href: "/features/AnalyticsMonitoring",
    features: [
      "Customer satisfaction tracking - Monitor satisfaction levels through integrated survey systems",
      "Real-time automation analytics - Track system health with customizable analytics platform for complete automation control",
      "Performance insights - Comprehensive dashboard to monitor and optimize all aspects of the AI automation",
    ],
  },
];

// The FeatureCategoryCard component remains unchanged.
function FeatureCategoryCard({
  title,
  icon,
  features,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  features: string[];
  href: string;
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
      className="flex h-[420px] w-[350px] flex-col" // Fixed height AND width
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.02}
        perspective={1000}
        className="h-full"
      >
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm"
        >
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, rgba(139, 92, 246, 0.15), transparent 70%)`,
              opacity: isHovered ? 1 : 0,
            }}
          ></div>

          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-6 text-cyan-300">{icon}</div>
            <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
            <ul className="flex-1 space-y-3">
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
              <Link
                href={href}
                className="inline-flex items-center text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
              >
                View all features
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export function FeatureCategorySection() {
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

        <div className="flex flex-col items-center gap-8">
          {/* First row with 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {featureCategories.slice(0, 3).map((category, index) => (
              // We add `flex justify-center` here to ensure the card is perfectly
              // centered within its grid column, which is a good practice.
              <div key={index} className="flex justify-center">
                <FeatureCategoryCard
                  title={category.title}
                  icon={category.icon}
                  features={category.features}
                  href={category.href}
                />
              </div>
            ))}
          </div>
          
          {/* Second row with 2 centered cards -- CORRECTED */}
          {/* This container now uses flex and justify-center.
              It will center the two cards within the same width as the row above,
              ensuring perfect alignment and balanced side margins. */}
          <div className="flex flex-wrap justify-center gap-8">
            {featureCategories.slice(3).map((category, index) => (
              // The outer wrapper div with `md:w-1/2` is no longer needed.
              // We render the card directly, and the parent flex container handles positioning.
              <FeatureCategoryCard
                key={index + 3} // Use a unique key
                title={category.title}
                icon={category.icon}
                features={category.features}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}