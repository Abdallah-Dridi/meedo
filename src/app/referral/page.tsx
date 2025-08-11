// src/components/ReferralPage.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, Gift, User, Mail, Check } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ParticlesBackground } from '@/components/ParticlesBackground';

const ReferralPage = () => {
  const [step, setStep] = useState(0);
  const [referrals, setReferrals] = useState([
    { name: '', email: '' },
    { name: '', email: '' },
    { name: '', email: '' }
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    // Get all non-empty, trimmed emails
    const emails = referrals
      .map(ref => ref.email.trim())
      .filter(email => email !== '');

    // Check if the Set of unique emails has a different size than the array of emails
    if (new Set(emails).size !== emails.length) {
      setFormError('Duplicate emails found. Please provide a unique email for each friend.');
    } else {
      setFormError(''); // Clear error if no duplicates
    }
  }, [referrals]); // This effect runs whenever the referrals state changes

  const handleChange = (index: number, field: string, value: string) => {
    const updatedReferrals = [...referrals];
    updatedReferrals[index] = { ...updatedReferrals[index], [field]: value };
    setReferrals(updatedReferrals);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formError) return; // Prevent submission if there's an error
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };

  const isValidForm = referrals.every(ref => ref.name.trim() && ref.email.trim()) && !formError;

  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-black dark:to-slate-900 text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Refer Friends
                </span>
              </h1>
              
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
                <Gift className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Get 100% Off Setup</span>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <div className="flex-1 h-1 bg-slate-800 rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${(step + 1) * 33.33}%` }}
                ></div>
              </div>
              <div className="ml-4 text-sm text-slate-400">
                Step {step + 1} of 3
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-white/10 p-8 md:p-12"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-600/10 to-cyan-600/10">
                      <User className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">
                      Friend {step + 1} Details
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor={`name-${step}`} className="block text-sm font-medium text-slate-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id={`name-${step}`}
                        value={referrals[step].name}
                        onChange={(e) => handleChange(step, 'name', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/30 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor={`email-${step}`} className="block text-sm font-medium text-slate-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id={`email-${step}`}
                        value={referrals[step].email}
                        onChange={(e) => handleChange(step, 'email', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/30 border border-white/10 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition duration-300"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>
                  
                  {formError && (
                    <div className="mt-6 text-center text-red-400 text-sm">
                      {formError}
                    </div>
                  )}

                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(prev => Math.max(0, prev - 1))}
                      disabled={step === 0}
                      className={`flex items-center px-5 py-2.5 rounded-lg transition-colors ${step === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-800/50'}`}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </button>
                    
                    {step < 2 ? (
                      <button
                        type="button"
                        onClick={() => setStep(prev => prev + 1)}
                        disabled={!referrals[step].name.trim() || !referrals[step].email.trim()}
                        className={`flex items-center px-6 py-2.5 rounded-lg font-medium transition-opacity ${
                          referrals[step].name.trim() && referrals[step].email.trim()
                            ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90'
                            : 'bg-slate-800/50 opacity-70 cursor-not-allowed'
                        }`}
                      >
                        Next Friend
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={!isValidForm}
                        className={`flex items-center px-6 py-2.5 rounded-lg font-medium transition-opacity ${
                          isValidForm
                            ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90'
                            : 'bg-slate-800/50 opacity-70 cursor-not-allowed'
                        }`}
                        whileHover={isValidForm ? { scale: 1.03 } : {}}
                        whileTap={isValidForm ? { scale: 0.97 } : {}}
                      >
                        Submit Referrals
                        <Gift className="w-4 h-4 ml-1" />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-white/10 p-12 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 flex items-center justify-center">
                    <Gift className="w-10 h-10 text-purple-400" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  Referrals Sent!
                </h2>
                
                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                  Thank you! We&apos;ve sent an invitation to your friends. Once all 3 sign up and their accounts are verified, your setup fee will be waived.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {referrals.map((referral, index) => (
                    <div key={index} className="p-4 bg-slate-800/30 rounded-xl border border-white/10">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-700 mb-3 mx-auto">
                        <User className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="font-medium text-white mb-1">{referral.name}</h3>
                      <p className="text-sm text-slate-400 truncate">{referral.email}</p>
                      <div className="mt-2 inline-flex items-center text-xs px-2 py-1 rounded-full bg-purple-900/20 text-purple-400">
                        <Mail className="w-3 h-3 mr-1" />
                        Invitation Sent
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-br from-purple-700/30 to-cyan-700/30 rounded-xl border border-purple-500/30 p-6 max-w-2xl mx-auto mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Discount Status: Pending
                  </h3>
                  <p className="text-slate-300">
                    We are now tracking your referrals. The 100% discount will be automatically applied to your setup fee once they subscribe.
                  </p>
                </div>
                
                <motion.a
                  href="/"
                  className="inline-flex items-center px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Return to Home
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.a>
              </motion.div>
            )}

            <div className="mt-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-cyan-400 font-bold text-lg mb-2">1. Refer Friends</div>
                  <p className="text-slate-400 text-sm">
                    Invite 3 friends who are business owners or decision makers
                  </p>
                </div>
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-cyan-400 font-bold text-lg mb-2">2. They Sign Up</div>
                  <p className="text-slate-400 text-sm">
                    Your friends sign up for Meedo using your referral link
                  </p>
                </div>
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-cyan-400 font-bold text-lg mb-2">3. Get Rewarded</div>
                  <p className="text-slate-400 text-sm">
                    We waive 100% of your setup cost once all 3 friends are active
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-slate-400">
                <p className="mb-2">Note: Your friends must sign up and subscribe to a paid plan for you to receive the discount.</p>
                <p>Discount will be applied to your account once all 3 friends become active paying customers.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReferralPage;