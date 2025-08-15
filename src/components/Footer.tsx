// src/components/Footer.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "/#features" },
      { name: "Pricing", href: "/#pricing" },
      { name: "Integrations", href: "/#integration" },
      { name: "Book a Demo", href: "/signup?tab=demo" },
    ],
    company: [
      { name: "About Us", href: "/" },
      { name: "Contact", href: "/signup" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3 7.1 0 .8-.4 1.5-.9 2.2-1.1 1.4-2.6 2.3-4.2 2.7-1 .2-2 .3-3 .2-2.1-.1-4.1-.8-5.9-1.9-1.2-.8-2.3-1.8-3.2-2.9-.5-.6-.9-1.3-1.2-2-.2-.7-.3-1.4-.3-2.1 0-2.6 1.2-4.9 2.9-6.6 1.1-1.1 2.5-1.9 4-2.3.8-.2 1.6-.3 2.4-.2M12 18c-1.2 1.5-2.8 2.7-4.5 3.5-1.7.8-3.6 1.2-5.5 1.2M12 18c.8-1.2 1.5-2.5 2-3.8.5-1.3.8-2.7 1-4 .2-1.3.3-2.6.3-3.9 0-1.3-.2-2.6-.5-3.9-.3-1.3-.7-2.5-1.2-3.6-1.1-2.2-2.8-3.8-4.8-4.8-2-.9-4.3-1.4-6.7-1.2"/></svg> },
    { name: "LinkedIn", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
    { name: "GitHub", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-900/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Branding and Newsletter */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Meedo</h1>
            </div>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Automating customer support with the power of AI.
            </p>
            <h3 className="font-semibold text-white mb-3">Stay up to date</h3>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300 text-sm"
              />
              <motion.button
                type="submit"
                className="p-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Meedo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                aria-label={link.name}
                className="text-slate-500 hover:text-white transition-colors"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}