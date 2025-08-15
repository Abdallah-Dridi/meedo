"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, Gift, User, Mail, Check, CreditCard, Shield } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ParticlesBackground } from '@/components/ParticlesBackground';

const ReferralPage = () => {
  const [step, setStep] = useState(0);
  const [meedoID, setMeedoID] = useState('');
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
    if (formError || !meedoID.trim()) return; // Prevent submission if there's an error or MeedoID is empty
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };

  const isValidForm = meedoID.trim() && referrals.every(ref => ref.name.trim() && ref.email.trim()) && !formError;

  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-black dark:to-slate-900 text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Refer & Earn
                  </span>
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl">
                  Share Meedo with your network and get your setup cost refunded as account credit
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 backdrop-blur-sm">
                  <CreditCard className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium text-purple-300">Setup Cost Refund</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 backdrop-blur-sm">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-300">Account Credit</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center mb-8">
              <div className="flex-1 h-2 bg-slate-800/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${(step + 1) * 33.33}%` }}
                ></div>
              </div>
              <div className="ml-4 text-sm text-slate-400 font-medium">
                Step {step + 1} of 3
              </div>
            </div>

            {/* Form or Success State */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl border border-white/10 p-8 md:p-12 backdrop-blur-sm"
                >
                  {/* MeedoID Input */}
                  <div className="mb-8">
                    <label htmlFor="meedoID" className="block text-sm font-medium text-slate-300 mb-3">
                      Your MeedoID *
                    </label>
                    <input
                      type="text"
                      id="meedoID"
                      value={meedoID}
                      onChange={(e) => setMeedoID(e.target.value)}
                      className="w-full px-4 py-4 bg-slate-800/40 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-white placeholder-slate-500"
                      placeholder="Enter your MeedoID"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30">
                      <User className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white">
                        Friend {step + 1} Details
                      </h2>
                      <p className="text-slate-400 text-sm mt-1">
                        Enter details for business owner or decision maker
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor={`name-${step}`} className="block text-sm font-medium text-slate-300 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id={`name-${step}`}
                        value={referrals[step].name}
                        onChange={(e) => handleChange(step, 'name', e.target.value)}
                        className="w-full px-4 py-4 bg-slate-800/40 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-white placeholder-slate-500"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor={`email-${step}`} className="block text-sm font-medium text-slate-300 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id={`email-${step}`}
                        value={referrals[step].email}
                        onChange={(e) => handleChange(step, 'email', e.target.value)}
                        className="w-full px-4 py-4 bg-slate-800/40 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all duration-300 text-white placeholder-slate-500"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>
                  
                  {formError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                    >
                      <div className="text-red-400 text-sm flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        </div>
                        {formError}
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setStep(prev => Math.max(0, prev - 1))}
                      disabled={step === 0}
                      className={`flex items-center px-6 py-3 rounded-xl transition-all ${
                        step === 0 
                          ? 'opacity-40 cursor-not-allowed' 
                          : 'hover:bg-slate-800/50 text-slate-300 hover:text-white'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </button>
                    
                    {step < 2 ? (
                      <motion.button
                        type="button"
                        onClick={() => setStep(prev => prev + 1)}
                        disabled={!referrals[step].name.trim() || !referrals[step].email.trim()}
                        className={`flex items-center px-8 py-3 rounded-xl font-medium transition-all ${
                          referrals[step].name.trim() && referrals[step].email.trim()
                            ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg'
                            : 'bg-slate-800/50 opacity-50 cursor-not-allowed text-slate-500'
                        }`}
                        whileHover={referrals[step].name.trim() && referrals[step].email.trim() ? { scale: 1.02 } : {}}
                        whileTap={referrals[step].name.trim() && referrals[step].email.trim() ? { scale: 0.98 } : {}}
                      >
                        Next Friend
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={!isValidForm}
                        className={`flex items-center px-8 py-3 rounded-xl font-medium transition-all ${
                          isValidForm
                            ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg'
                            : 'bg-slate-800/50 opacity-50 cursor-not-allowed text-slate-500'
                        }`}
                        whileHover={isValidForm ? { scale: 1.02 } : {}}
                        whileTap={isValidForm ? { scale: 0.98 } : {}}
                      >
                        Send Invitations
                        <Gift className="w-4 h-4 ml-2" />
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl border border-white/10 p-12 text-center backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="flex justify-center mb-8"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-600/30 border-2 border-purple-400/50 flex items-center justify-center">
                    <Check className="w-12 h-12 text-purple-400" />
                  </div>
                </motion.div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  Invitations Sent Successfully!
                </h2>
                
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                  Your referral invitations have been sent. Once all 3 friends sign up using your link and pay their first monthly invoice, your setup cost will be refunded as account credit.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {referrals.map((referral, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10"
                    >
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-purple-600/20 border border-cyan-400/30 mb-4 mx-auto">
                        <User className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">{referral.name}</h3>
                      <p className="text-sm text-slate-400 truncate mb-3">{referral.email}</p>
                      <div className="inline-flex items-center text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        <Mail className="w-3 h-3 mr-1.5" />
                        Invitation Sent
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-br from-purple-700/20 to-cyan-700/20 rounded-2xl border border-purple-500/30 p-8 max-w-3xl mx-auto mb-8 backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <CreditCard className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-semibold text-white">
                      Refund Status: Tracking
                    </h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    We&apos;re now tracking your referrals. Your setup cost will be automatically refunded as account credit once all 3 friends become paying customers.
                  </p>
                  <div className="text-sm text-purple-300">
                    💳 Credit will be applied to your account balance for future invoices
                  </div>
                </div>
                
                <motion.a
                  href="/"
                  className="inline-flex items-center px-10 py-4 font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl shadow-xl hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Return to Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
              </motion.div>
            )}

            {/* Updated Rules Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl border border-white/10 p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyan-400" />
                Program Rules & Requirements
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="space-y-6">
                  <div className="p-5 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl">
                    <div className="text-emerald-400 font-bold text-lg mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm font-bold">1</div>
                      Eligibility
                    </div>
                    <p className="text-slate-300 text-sm">
                      You must be an active customer who has paid at least one monthly invoice
                    </p>
                  </div>
                  
                  <div className="p-5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
                    <div className="text-purple-400 font-bold text-lg mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-sm font-bold">2</div>
                      Qualifying Referrals
                    </div>
                    <div className="text-slate-300 text-sm space-y-1">
                      <p>• Friend signs up using your unique referral link</p>
                      <p>• They pay at least their first monthly invoice</p>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
                    <div className="text-cyan-400 font-bold text-lg mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-sm font-bold">3</div>
                      Reward
                    </div>
                    <p className="text-slate-300 text-sm">
                      Setup cost refunded as account credit after 3 qualifying referrals
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl">
                    <div className="text-amber-400 font-bold text-lg mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-sm font-bold">4</div>
                      Credit Usage
                    </div>
                    <p className="text-slate-300 text-sm">
                      Refund credited to your account balance and applied to future invoices
                    </p>
                  </div>
                  
                  <div className="p-5 bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/30 rounded-xl">
                    <div className="text-red-400 font-bold text-lg mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-sm font-bold">5</div>
                      Fair Play
                    </div>
                    <p className="text-slate-300 text-sm">
                      Self-referrals, duplicate accounts, or fraudulent sign-ups are not eligible
                    </p>
                  </div>
                  
                  <div className="p-5 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl">
                    <div className="text-indigo-400 font-bold text-lg mb-2 flex items-center gap-2">
                      <Gift className="w-5 h-5" />
                      Bonus Info
                    </div>
                    <p className="text-slate-300 text-sm">
                      Track your referral progress in your account dashboard
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <div className="bg-slate-800/30 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Important Notes
                  </h4>
                  <div className="text-sm text-slate-300 space-y-2">
                    <p>• Referrals must use your unique link to qualify for the program</p>
                    <p>• Credit will be automatically applied once all requirements are met</p>
                    <p>• Account credit can be used towards any future Meedo invoices</p>
                    <p>• Program terms subject to change with 30-day notice to active participants</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReferralPage;
