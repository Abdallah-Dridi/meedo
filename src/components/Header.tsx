"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Features",
      href: "/#features",
      dropdown: [
        { name: "Personalization Intelligence", href: "/features/PersonalizationIntelligence" },
        { name: "Multi-language", href: "/features/multi-language" },
        { name: "Analytics Monitoring", href: "/features/AnalyticsMonitoring" },
        { name: "Social Media", href: "/features/SocialMedia" },
        { name: "Order Management", href: "/features/OrderManagement" },
      ]
    },
    { name: "Pricing", href: "/#pricing" },
    { name: "Integrations", href: "/#integration" },
  ];

  let dropdownTimeout: NodeJS.Timeout;
  const handleFeaturesClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.features-dropdown-toggle')) {
      e.preventDefault();
      setIsFeaturesOpen(!isFeaturesOpen);
    }
  };
  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsFeaturesOpen(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeout = setTimeout(() => setIsFeaturesOpen(false), 250);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200 transition-colors duration-300 dark:bg-black/30 dark:border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Meedo</h1>
          </Link>
        </motion.div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.dropdown ? (
                <div
                  className="flex items-center gap-1 group"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
                    onClick={(e) => handleFeaturesClick(e)}
                  >
                    {link.name}
                  </a>
                  <button
                    className="features-dropdown-toggle text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsFeaturesOpen(!isFeaturesOpen);
                    }}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  {isFeaturesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg rounded-xl border border-slate-200 shadow-lg overflow-hidden transition-colors duration-300 dark:bg-slate-900/95 dark:border-white/10"
                    >
                      {link.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 transition-colors border-b border-slate-100 last:border-b-0 dark:text-slate-200 dark:hover:bg-white/5 dark:border-white/5"
                          onClick={() => setIsFeaturesOpen(false)}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <a
                  href={link.href}
                  className="text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all duration-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          )}
          <motion.a 
            href="signup" 
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-purple-500/30 group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all duration-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 transition-colors duration-300 dark:bg-slate-900/95 dark:border-white/10"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <div className="py-2">
                      <div 
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                      >
                        <a 
                          href={link.href} 
                          className="text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {link.name}
                        </a>
                        <ChevronDown className={`w-4 h-4 transition-transform text-slate-600 dark:text-slate-400 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                      </div>
                      {isFeaturesOpen && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pl-4 border-l border-slate-200 ml-2 dark:border-white/10"
                        >
                          {link.dropdown.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              className="block py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:text-white"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsFeaturesOpen(false);
                              }}
                            >
                              {item.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="block py-2 text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <a 
                href="signup" 
                className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
              >
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}