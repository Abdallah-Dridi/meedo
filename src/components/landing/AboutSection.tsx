"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export function AboutSection() {
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
