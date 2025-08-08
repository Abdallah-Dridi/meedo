// src/components/FeatureCard.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const itemFadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  example: string;
  keywords: string[];
};

export default function FeatureCard({ icon, title, description, example, keywords }: FeatureCardProps) {
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
          <span key={idx} className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-500 border border-white/5">
            {kw}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
