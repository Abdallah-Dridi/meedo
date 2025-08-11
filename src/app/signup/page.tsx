// src/components/SignUpPage.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Calendar, Check, Lock, Mail, User, X } from 'lucide-react';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ParticlesBackground } from '@/components/ParticlesBackground';

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
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-200 antialiased dark:bg-gradient-to-br dark:from-black dark:to-slate-900">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-6xl"
          >
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Get Started with Meedo
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-400">
                Join thousands of businesses automating their customer support
                with AI
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-xl border border-white/10 bg-slate-800/50 p-1">
                <button
                  onClick={() => setActiveTab("signup")}
                  className={`rounded-xl px-6 py-3 text-sm font-medium transition-all ${
                    activeTab === "signup"
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Create Account
                </button>
                <button
                  onClick={() => setActiveTab("demo")}
                  className={`rounded-xl px-6 py-3 text-sm font-medium transition-all ${
                    activeTab === "demo"
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                      : "text-slate-400 hover:text-white"
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
                className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 text-center md:p-12"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
                    <Check className="h-10 w-10 text-green-400" />
                  </div>
                </div>

                <h2 className="mb-4 text-3xl font-bold text-white">
                  {activeTab === "signup"
                    ? "Account Created Successfully!"
                    : "Demo Scheduled!"}
                </h2>

                <p className="mb-8 text-lg text-slate-400">
                  {activeTab === "signup"
                    ? "Thank you for signing up! We've sent a verification link to your email. Get ready to automate your customer support."
                    : "We've scheduled your demo! A calendar invite has been sent to your email. Our team will walk you through Meedo's features."}
                </p>

                <div className="mb-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-700/30 to-cyan-700/30 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Next Steps
                  </h3>
                  <ul className="mx-auto max-w-md space-y-2 text-left text-slate-300">
                    <li className="flex items-start">
                      <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span>
                        Check your email for{" "}
                        {activeTab === "signup"
                          ? "verification"
                          : "confirmation"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span>
                        {activeTab === "signup"
                          ? "Set up your support workflows"
                          : "Prepare your questions for the demo"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span>Get started with our onboarding resources</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/dashboard">
                    <motion.button
                      className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3.5 font-semibold text-white shadow-lg sm:w-auto"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Go to Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </Link>

                  <Link href="/features">
                    <motion.button
                      className="flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/10 px-8 py-3.5 font-semibold text-white sm:w-auto"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Explore Features
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Form Column */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 md:p-10"
                >
                  <h2 className="mb-1 text-2xl font-bold text-white">
                    {activeTab === "signup"
                      ? "Create Your Account"
                      : "Schedule a Demo"}
                  </h2>
                  <p className="mb-8 text-slate-400">
                    {activeTab === "signup"
                      ? "Start automating your support today"
                      : "Get a personalized tour of Meedo"}
                  </p>

                  {error && (
                    <div className="mb-6 flex items-start rounded-xl border border-red-500/30 bg-red-900/20 p-4">
                      <X className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-red-400" />
                      <span className="text-red-300">{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-slate-400"
                        >
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
                            <User className="h-4 w-4" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-white/10 bg-slate-800/30 py-3 pr-4 pl-10 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-slate-400"
                        >
                          Work Email <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
                            <Mail className="h-4 w-4" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-white/10 bg-slate-800/30 py-3 pr-4 pl-10 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                      </div>

                      {activeTab === "signup" ? (
                        <>
                          <div>
                            <label
                              htmlFor="password"
                              className="mb-2 block text-sm font-medium text-slate-400"
                            >
                              Password <span className="text-red-400">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
                                <Lock className="h-4 w-4" />
                              </div>
                              <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-white/10 bg-slate-800/30 py-3 pr-4 pl-10 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
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
                              className="h-4 w-4 rounded border-white/10 bg-slate-800 text-purple-500 focus:ring-2 focus:ring-purple-500"
                              required
                            />
                            <label
                              htmlFor="terms"
                              className="ml-2 text-sm text-slate-400"
                            >
                              I agree to the{" "}
                              <a
                                href="#"
                                className="text-cyan-300 hover:underline"
                              >
                                Terms of Service
                              </a>{" "}
                              and{" "}
                              <a
                                href="#"
                                className="text-cyan-300 hover:underline"
                              >
                                Privacy Policy
                              </a>
                            </label>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <label
                              htmlFor="company"
                              className="mb-2 block text-sm font-medium text-slate-400"
                            >
                              Company Name{" "}
                              <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full rounded-lg border border-white/10 bg-slate-800/30 px-4 py-3 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                              placeholder="Enter your company name"
                              required
                            />
                          </div>

                          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                              <label
                                htmlFor="role"
                                className="mb-2 block text-sm font-medium text-slate-400"
                              >
                                Your Role
                              </label>
                              <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full appearance-none rounded-lg border border-white/10 bg-slate-800/30 px-4 py-3 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
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
                              <label
                                htmlFor="companySize"
                                className="mb-2 block text-sm font-medium text-slate-400"
                              >
                                Company Size
                              </label>
                              <select
                                id="companySize"
                                name="companySize"
                                value={formData.companySize}
                                onChange={handleChange}
                                className="w-full appearance-none rounded-lg border border-white/10 bg-slate-800/30 px-4 py-3 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                              >
                                <option value="">Select size</option>
                                <option value="1-10">1-10 employees</option>
                                <option value="11-50">11-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="201-500">
                                  201-500 employees
                                </option>
                                <option value="501+">501+ employees</option>
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                              <label
                                htmlFor="preferredDate"
                                className="mb-2 block text-sm font-medium text-slate-400"
                              >
                                Preferred Date
                              </label>
                              <div className="relative">
                                <div className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400">
                                  <Calendar className="h-4 w-4" />
                                </div>
                                <input
                                  type="date"
                                  id="preferredDate"
                                  name="preferredDate"
                                  value={formData.preferredDate}
                                  onChange={handleChange}
                                  className="w-full appearance-none rounded-lg border border-white/10 bg-slate-800/30 px-4 py-3 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="preferredTime"
                                className="mb-2 block text-sm font-medium text-slate-400"
                              >
                                Preferred Time
                              </label>
                              <select
                                id="preferredTime"
                                name="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleChange}
                                className="w-full appearance-none rounded-lg border border-white/10 bg-slate-800/30 px-4 py-3 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                              >
                                <option value="">Select time</option>
                                <option value="morning">
                                  Morning (9AM-12PM)
                                </option>
                                <option value="afternoon">
                                  Afternoon (1PM-4PM)
                                </option>
                                <option value="evening">
                                  Evening (5PM-7PM)
                                </option>
                              </select>
                            </div>
                          </div>
                        </>
                      )}

                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        className={`flex w-full items-center justify-center rounded-lg px-6 py-3.5 font-semibold ${
                          isLoading
                            ? "cursor-not-allowed bg-slate-700"
                            : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90"
                        }`}
                        whileHover={!isLoading ? { scale: 1.02 } : {}}
                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <svg
                              className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </div>
                        ) : activeTab === "signup" ? (
                          "Create Account"
                        ) : (
                          "Schedule Demo"
                        )}
                      </motion.button>
                    </div>
                  </form>

                  {activeTab === "signup" && (
                    <div className="mt-6 border-t border-white/10 pt-6">
                      <p className="text-center text-slate-400">
                        Already have an account?{" "}
                        <Link
                          href="/login"
                          className="text-cyan-300 hover:underline"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Modern Chic Testimonial Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative hidden flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 shadow-2xl backdrop-blur-xl lg:flex"
                >
                  {/* Profile with large image */}
                  <div className="relative z-10 p-10 pt-12">
                    <div className="flex flex-col items-center">
                      {/* Large profile image */}
                      <div className="relative mb-6">
                        <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white/20 shadow-xl">
                          <Image
                            src="/images/monik.png"
                            alt="Monik, Founder of Lifestyle Co."
                            width={520}
                            height={520}
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        {/* Authenticity badge */}
                        <div className="absolute -right-2 -bottom-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 p-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                      </div>

                      <p className="text-xl font-medium text-white">Monik</p>
                      <p className="mt-1 text-sm text-slate-400">
                        Founder, Lifestyle Co.
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative z-10 flex flex-grow flex-col px-10 pb-12">
                    <div className="mb-6 flex justify-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-400"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                      </svg>
                    </div>

                    <blockquote className="text-center text-lg leading-relaxed tracking-normal text-slate-300">
                      &quot;I was drowning in customer emails. The relief after
                      setting up
                      <span className="font-medium text-cyan-300">
                        {" "}
                        Meedo
                      </span>{" "}
                      was instant. Now I finally have the headspace to grow the
                      business.&quot;
                    </blockquote>

                    {/* Results */}
                    <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-center text-sm text-slate-400 italic">
                        &quot;Customer satisfaction increased by 42% in our first
                        quarter&quot;
                      </p>
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
