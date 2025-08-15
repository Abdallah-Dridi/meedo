"use client";

import Orb from "../Orb";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function HeroSection() {
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
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
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
            href="/signup"
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
