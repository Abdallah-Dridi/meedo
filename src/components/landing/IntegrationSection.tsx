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
  // We duplicate the integrations array for a seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <>
      {/* We need to inject the keyframes animation into the document's head */}
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <section className="relative container mx-auto px-4 py-24" id="integration">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Connect Your Entire Stack
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Meedo seamlessly integrates with the e-commerce platforms and payment gateways you already use.
            </p>
          </div>

          <div
            className="relative overflow-hidden py-8 group"
            style={{
              maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
            }}
          >
            <div
              className="flex space-x-12 animate-[scroll_10s_linear_infinite] group-hover:[animation-play-state:paused]"
            >
              {duplicatedIntegrations.map((integration, index) => (
                <Link
                  key={`${integration.name}-${index}`}
                  href="/signup"
                  className="flex-shrink-0 w-[200px] block"
                >
                  <div className="relative flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl border border-white/10 transition-all duration-300 hover:!border-purple-500/80 hover:bg-slate-800/80 cursor-pointer">
                      {/* Inner glowing effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      
                      <div className="relative h-16 w-16 mb-4">
                        <Image
                          src={integration.logo}
                          alt={`${integration.name} logo`}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="text-lg font-medium text-white">
                        {integration.name}
                      </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Custom Integration Section */}
      <section className="relative container mx-auto px-4 pb-24 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 text-center backdrop-blur-sm">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-3 shadow-lg shadow-purple-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" y1="8" x2="19" y2="14"></line>
                  <line x1="22" y1="11" x2="16" y2="11"></line>
                </svg>
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Don't see your platform?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto text-slate-200">
              Whether you're using a custom-built website or a platform not listed above, we've got you covered. Our flexible integration system works with any e-commerce solution.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-purple-500/50 hover:from-purple-500 hover:to-cyan-500 group transform hover:-translate-y-1"
            >
              Get Started Now
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
