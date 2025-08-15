"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const integrations = [
  { name: "Shopify", logo: "/images/logos/shopify.jpg" },
  { name: "WooCommerce", logo: "/images/logos/woocommerce.jpg" },
  { name: "BigCommerce", logo: "/images/logos/big-commerce.jpg" },
  { name: "Magento", logo: "/images/logos/magento.jpg" },
  { name: "Salesforce", logo: "/images/logos/salesforce.jpg" },
  { name: "Square", logo: "/images/logos/Square.jpg" },
  { name: "Stripe", logo: "/images/logos/stripe.png" },
  { name: "PayPal", logo: "/images/logos/paypal.png" },
];

export function IntegrationSection() {
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <>
      {/* Global styles for animations and glows */}
      <style jsx global>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 
              0 0 20px rgba(147, 51, 234, 0.3),
              0 0 40px rgba(147, 51, 234, 0.2),
              0 0 60px rgba(147, 51, 234, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }
          50% { 
            box-shadow: 
              0 0 30px rgba(147, 51, 234, 0.4),
              0 0 60px rgba(147, 51, 234, 0.3),
              0 0 90px rgba(147, 51, 234, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
        }

        @keyframes icon-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 8px rgba(147, 51, 234, 0.4));
            transform: scale(1);
          }
          50% { 
            filter: drop-shadow(0 0 16px rgba(147, 51, 234, 0.6));
            transform: scale(1.05);
          }
        }

        .integration-card {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(148, 163, 184, 0.1) 0%, 
            rgba(100, 116, 139, 0.1) 100%);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .integration-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.1) 0%, 
            rgba(6, 182, 212, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .integration-card:hover::before {
          opacity: 1;
        }

        .integration-card:hover {
          border-color: rgba(147, 51, 234, 0.6);
          transform: translateY(-8px) scale(1.02);
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .integration-icon {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .integration-card:hover .integration-icon {
          animation: icon-glow 1.5s ease-in-out infinite;
        }
      `}</style>

      <section className="relative py-32" id="integration">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-6xl"
          >
            {/* Header */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 px-6 py-3 mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-purple-200 tracking-wider uppercase">
                  Seamless Integrations
                </span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Connect Your{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Entire Stack
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Meedo seamlessly integrates with the e-commerce platforms and payment gateways you already use.
              </p>
            </div>

            {/* Scrolling integrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-hidden py-12 mb-20"
              style={{
                maskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
              }}
            >
              <div className="flex space-x-8 animate-[scroll_12s_linear_infinite] group-hover:[animation-play-state:paused]">
                {duplicatedIntegrations.map((integration, index) => (
                  <Link
                    key={`${integration.name}-${index}`}
                    href="/signup"
                    className="flex-shrink-0 w-56 block"
                  >
                    <div className="integration-card relative flex flex-col items-center justify-center p-8 rounded-3xl h-48 cursor-pointer">
                      <div className="relative h-20 w-20 mb-6 integration-icon">
                        <Image
                          src={integration.logo}
                          alt={`${integration.name} logo`}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="text-xl font-semibold text-white tracking-wide">
                        {integration.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Custom website support section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center rounded-2xl border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm px-8 py-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M9 9h6v6H9z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-semibold text-white mb-1">
                      Custom Built Website?
                    </p>
                    <p className="text-slate-300">
                      We support any custom-built e-commerce solution
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-6">
                    <Link
                      href="/signup"
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 font-semibold text-white transition-all hover:from-purple-500 hover:to-cyan-500 transform hover:-translate-y-1"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
