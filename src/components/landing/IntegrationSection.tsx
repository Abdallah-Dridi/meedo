"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const integrations = [
  { name: "Shopify", logo: "/images/logos/shopify.jpg" },
  { name: "WooCommerce", logo: "/images/logos/woocommerce.jpg" },
  { name: "BigCommerce", logo: "/images/logos/big-commerce.jpg" },
  { name: "Magento", logo: "/images/logos/magento.jpg" },
  { name: "Salesforce", logo: "/images/logos/salesforce.jpg" },
  { name: "Square", logo: "/images/logos/Square.jpg" },
];

export function IntegrationSection() {
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
