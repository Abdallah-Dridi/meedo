// src/components/SignUpPage.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Calendar, Check, Lock, Mail, User, X } from 'lucide-react';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ParticlesBackground } from "./ParticlesBackground";

const SignUpPage = () => {
  const [activeTab, setActiveTab] = useState<'signup' | 'demo'>('signup');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    role: '',
    companySize: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    // Simulate form submission
    setTimeout(() => {
      if (formData.email && formData.name) {
        setIsSubmitted(true);
      } else {
        setError('Please fill in all required fields');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-black dark:to-slate-900 text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Get Started with Meedo
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Join thousands of businesses automating their customer support with AI
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-slate-800/50 rounded-xl border border-white/10">
                <button
                  onClick={() => setActiveTab('signup')}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === 'signup'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Create Account
                </button>
                <button
                  onClick={() => setActiveTab('demo')}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === 'demo'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Book a Demo
                </button>
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-white/10 p-8 md:p-12 max-w-2xl mx-auto text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 flex items-center justify-center">
                    <Check className="w-10 h-10 text-green-400" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  {activeTab === 'signup' ? 'Account Created Successfully!' : 'Demo Scheduled!'}
                </h2>
                
                <p className="text-lg text-slate-400 mb-8">
                  {activeTab === 'signup'
                    ? "Thank you for signing up! We've sent a verification link to your email. Get ready to automate your customer support."
                    : "We've scheduled your demo! A calendar invite has been sent to your email. Our team will walk you through Meedo's features."}
                </p>
                
                <div className="bg-gradient-to-br from-purple-700/30 to-cyan-700/30 rounded-xl border border-purple-500/30 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Next Steps
                  </h3>
                  <ul className="text-slate-300 space-y-2 text-left max-w-md mx-auto">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Check your email for {activeTab === 'signup' ? 'verification' : 'confirmation'}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{activeTab === 'signup' ? 'Set up your support workflows' : 'Prepare your questions for the demo'}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Get started with our onboarding resources</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                  <Link href="/dashboard">
                    <motion.button
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg shadow-lg"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Go to Dashboard
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </Link>
                  
                  <Link href="/features">
                    <motion.button
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 font-semibold text-white bg-white/10 rounded-lg border border-white/10"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Explore Features
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form Column */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-white/10 p-8 md:p-10"
                >
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {activeTab === 'signup' ? 'Create Your Account' : 'Schedule a Demo'}
                  </h2>
                  <p className="text-slate-400 mb-8">
                    {activeTab === 'signup'
                      ? 'Start automating your support today'
                      : 'Get a personalized tour of Meedo'}
                  </p>
                  
                  {error && (
                    <div className="mb-6 p-4 bg-red-900/20 rounded-xl border border-red-500/30 flex items-start">
                      <X className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-red-300">{error}</span>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-slate-800/30 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                          Work Email <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-slate-800/30 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                      </div>
                      
                      {activeTab === 'signup' ? (
                        <>
                          <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-400 mb-2">
                              Password <span className="text-red-400">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <Lock className="w-4 h-4" />
                              </div>
                              <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-slate-800/30 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300"
                                placeholder="Create a password"
                                required
                                minLength={8}
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="terms"
                              className="w-4 h-4 text-purple-500 bg-slate-800 border-white/10 rounded focus:ring-purple-500 focus:ring-2"
                              required
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-slate-400">
                              I agree to the <a href="#" className="text-cyan-300 hover:underline">Terms of Service</a> and <a href="#" className="text-cyan-300 hover:underline">Privacy Policy</a>
                            </label>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-slate-400 mb-2">
                              Company Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-slate-800/30 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300"
                              placeholder="Enter your company name"
                              required
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="role" className="block text-sm font-medium text-slate-400 mb-2">
                                Your Role
                              </label>
                              <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-800/30 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300 appearance-none"
                              >
                                <option value="">Select your role</option>
                                <option value="founder">Founder</option>
                                <option value="ceo">CEO/Executive</option>
                                <option value="support">Support Manager</option>
                                <option value="marketing">Marketing</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                            
                            <div>
                              <label htmlFor="companySize" className="block text-sm font-medium text-slate-400 mb-2">
                                Company Size
                              </label>
                              <select
                                id="companySize"
                                name="companySize"
                                value={formData.companySize}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-800/30 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300 appearance-none"
                              >
                                <option value="">Select size</option>
                                <option value="1-10">1-10 employees</option>
                                <option value="11-50">11-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="201-500">201-500 employees</option>
                                <option value="501+">501+ employees</option>
                              </select>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-400 mb-2">
                                Preferred Date
                              </label>
                              <div className="relative">
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                  <Calendar className="w-4 h-4" />
                                </div>
                                <input
                                  type="date"
                                  id="preferredDate"
                                  name="preferredDate"
                                  value={formData.preferredDate}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 bg-slate-800/30 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300 appearance-none"
                                />
                              </div>
                            </div>
                            
                            <div>
                              <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-400 mb-2">
                                Preferred Time
                              </label>
                              <select
                                id="preferredTime"
                                name="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-800/30 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300 appearance-none"
                              >
                                <option value="">Select time</option>
                                <option value="morning">Morning (9AM-12PM)</option>
                                <option value="afternoon">Afternoon (1PM-4PM)</option>
                                <option value="evening">Evening (5PM-7PM)</option>
                              </select>
                            </div>
                          </div>
                        </>
                      )}
                      
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3.5 px-6 rounded-lg font-semibold flex items-center justify-center ${
                          isLoading
                            ? 'bg-slate-700 cursor-not-allowed'
                            : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90'
                        }`}
                        whileHover={!isLoading ? { scale: 1.02 } : {}}
                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </div>
                        ) : activeTab === 'signup' ? (
                          'Create Account'
                        ) : (
                          'Schedule Demo'
                        )}
                      </motion.button>
                    </div>
                  </form>
                  
                  {activeTab === 'signup' && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-center text-slate-400">
                        Already have an account?{' '}
                        <Link href="/login" className="text-cyan-300 hover:underline">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  )}
                </motion.div>
                
                {/* Benefits Column */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-3xl border border-purple-500/30 p-8 md:p-10"
                >
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Why Businesses Choose Meedo
                  </h2>
                  <p className="text-slate-400 mb-8">
                    Join 5,000+ companies automating their support
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 w-5 h-5">
                          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">24/7 AI Support</h3>
                        <p className="text-slate-400">Automate responses to common questions any time of day</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 w-5 h-5">
                          <path d="M2 12h10" />
                          <path d="M9 4v16" />
                          <path d="m3 9 3 3-3 3" />
                          <path d="M12 6l3-3 3 3" />
                          <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                          <path d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Seamless Integrations</h3>
                        <p className="text-slate-400">Connect with your existing e-commerce platforms and tools</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 w-5 h-5">
                          <path d="M2 12h10" />
                          <path d="M9 4v16" />
                          <path d="m3 9 3 3-3 3" />
                          <path d="M12 6l3-3 3 3" />
                          <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                          <path d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Advanced Analytics</h3>
                        <p className="text-slate-400">Gain insights into customer satisfaction and support performance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 w-5 h-5">
                          <path d="M12 3v18" />
                          <path d="M8 8l-4 4 4 4" />
                          <path d="M16 16l4-4-4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Easy Setup</h3>
                        <p className="text-slate-400">Get started in minutes with our intuitive interface</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Trusted by industry leaders</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-slate-800/30 rounded-xl p-4 flex items-center justify-center">
                        <div className="relative w-16 h-16">
                          <Image
                            src="/images/logos/shopify.jpg"
                            alt="Shopify"
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </div>
                      <div className="bg-slate-800/30 rounded-xl p-4 flex items-center justify-center">
                        <div className="relative w-16 h-16">
                          <Image
                            src="/images/logos/woocommerce.jpg"
                            alt="WooCommerce"
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </div>
                      <div className="bg-slate-800/30 rounded-xl p-4 flex items-center justify-center">
                        <div className="relative w-16 h-16">
                          <Image
                            src="/images/logos/big-commerce.jpg"
                            alt="BigCommerce"
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-gradient-to-br from-purple-700/20 to-cyan-700/20 rounded-xl border border-purple-500/30 p-5">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/10 to-cyan-600/10 flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 w-5 h-5">
                          <path d="M12 3v18" />
                          <path d="M8 8l-4 4 4 4" />
                          <path d="M16 16l4-4-4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Free 14-Day Trial</h3>
                        <p className="text-slate-400 text-sm">
                          No credit card required. Get full access to all features during your trial.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;