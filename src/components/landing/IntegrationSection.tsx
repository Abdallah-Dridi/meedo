"use client";
import React from "react";
import Image from "next/image";
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
        {/* Glowing orb effect for background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -z-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -z-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl mt-24 ml-24 animate-pulse animation-delay-2000"></div>
        </div>

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
                <div
                  key={`${integration.name}-${index}`}
                  className="flex-shrink-0 w-[200px]"
                >
                  <div className="relative flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-2xl border border-white/10 transition-all duration-300 hover:!border-purple-500/80 hover:bg-slate-800/80">
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
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
