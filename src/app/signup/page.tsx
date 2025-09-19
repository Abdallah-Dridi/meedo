/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Mail, User, X, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ParticlesBackground } from '@/components/ParticlesBackground'; // Import the correct component

// Type definitions
interface DateObj {
  date: number;
  fullDate: Date;
  isAvailable: boolean;
  isToday: boolean;
  isSelected: boolean;
}

interface TimeSlot {
  id: string;
  label: string;
  time: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  result: string;
  image: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  selectedDate: string;
  selectedTime: string;
}

const ContactDemoPage = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'demo'>('contact');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    selectedDate: '',
    selectedTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      name: "Monik",
      role: "Founder, Lifestyle Co.",
      quote: "I was drowning in customer emails. The relief after setting up Meedo was instant. Now I finally have the headspace to grow the business.",
      result: "Customer satisfaction increased by 42% in our first quarter",
      image: "/images/monik.png"
    },
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      quote: "Meedo transformed our customer support from chaos to perfection. Our response time went from hours to minutes, and our team can focus on what matters most.",
      result: "Response time reduced by 89% in the first month",
      image: "/images/sarah.png"
    },
    {
      name: "Alex Rodriguez",
      role: "Head of Support, GrowthCorp",
      quote: "The AI understanding is incredible. It handles complex queries better than some of our junior staff. It's like having a customer service expert available 24/7.",
      result: "Handled 78% of queries without human intervention",
      image: "/images/alex.png"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Generate calendar dates
  const generateCalendarDates = (): (DateObj | null)[] => {
    const dates: (DateObj | null)[] = [];
    const today = new Date();
    const currentDate = new Date(currentMonth);
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    // Add empty cells for days before month starts
    const startDay = firstDay.getDay();
    for (let i = 0; i < startDay; i++) {
      dates.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isAvailable = date >= today && date <= new Date(today.getTime() + (21 * 24 * 60 * 60 * 1000));
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      dates.push({
        date: day,
        fullDate: date,
        isAvailable: isAvailable && !isWeekend,
        isToday: date.toDateString() === today.toDateString(),
        isSelected: formData.selectedDate === date.toISOString().split('T')[0]
      });
    }
    
    return dates;
  };

  const timeSlots: TimeSlot[] = [
    { id: 'morning', label: 'Morning', time: '9:00 AM - 12:00 PM' },
    { id: 'noon', label: 'Noon', time: '12:00 PM - 3:00 PM' },
    { id: 'evening', label: 'Evening', time: '3:00 PM - 6:00 PM' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (date: DateObj) => {
    if (date.isAvailable) {
      setFormData(prev => ({ 
        ...prev, 
        selectedDate: date.fullDate.toISOString().split('T')[0],
        selectedTime: '' 
      }));
    }
  };

  const handleTimeSelect = (timeSlot: TimeSlot) => {
    setFormData(prev => ({ ...prev, selectedTime: timeSlot.id }));
    setShowCalendar(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    setTimeout(() => {
      if (formData.email && formData.name && 
          (activeTab === 'contact' || (formData.selectedDate && formData.selectedTime))) {
        setIsSubmitted(true);
      } else {
        setError('Please fill in all required fields');
      }
      setIsLoading(false);
    }, 1500);
  };

  const formatSelectedDateTime = (): string => {
    if (!formData.selectedDate || !formData.selectedTime) return '';
    const date = new Date(formData.selectedDate);
    const timeSlot = timeSlots.find(slot => slot.id === formData.selectedTime);
    return `${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} - ${timeSlot?.time}`;
  };

  const navigateMonth = (direction: number) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <>
    <Header/>
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-200 antialiased dark:bg-gradient-to-br dark:from-black dark:to-slate-900">
      
      {/* Use the correct ParticlesBackground component */}
      <ParticlesBackground />

      <style jsx>{`
        @keyframes slideIn {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .animate-slide-out {
          animation: slideOut 0.6s ease-out forwards;
        }
      `}</style>

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Get Started with Meedo
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-400">
                Connect with our experts and discover how AI can transform your customer support
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-xl border border-white/10 bg-slate-800/50 p-1">
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`rounded-xl px-6 py-3 text-sm font-medium transition-all ${
                    activeTab === "contact"
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Talk to Our Team
                </button>
                <button
                  onClick={() => setActiveTab("demo")}
                  className={`rounded-xl px-6 py-3 text-sm font-medium transition-all ${
                    activeTab === "demo"
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Schedule Demo
                </button>
              </div>
            </div>

            {isSubmitted ? (
              <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 text-center md:p-12">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
                    <Check className="h-10 w-10 text-green-400" />
                  </div>
                </div>

                <h2 className="mb-4 text-3xl font-bold text-white">
                  {activeTab === "contact"
                    ? "We'll Be In Touch Soon!"
                    : "Demo Scheduled!"}
                </h2>

                <p className="mb-8 text-lg text-slate-400">
                  {activeTab === "contact"
                    ? "Thank you for your interest! One of our experts will contact you shortly to discuss how Meedo can transform your customer support."
                    : "We've scheduled your personalized demo! A calendar invite has been sent to your email. Our team will walk you through Meedo's powerful features."}
                </p>

                <div className="mb-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-700/30 to-cyan-700/30 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    What Happens Next
                  </h3>
                  <ul className="mx-auto max-w-md space-y-2 text-left text-slate-300">
                    <li className="flex items-start">
                      <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span>
                        {activeTab === "contact"
                          ? "Expert consultation within 24 hours"
                          : "Calendar invite sent to your email"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span>
                        {activeTab === "contact"
                          ? "Personalized strategy discussion"
                          : "Live demo tailored to your needs"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span>Custom implementation roadmap</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        selectedDate: '',
                        selectedTime: ''
                      });
                    }}
                    className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3.5 font-semibold text-white shadow-lg sm:w-auto hover:opacity-90 transition-opacity"
                  >
                    Schedule Another Meeting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

                  <button className="flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/10 px-8 py-3.5 font-semibold text-white sm:w-auto hover:bg-white/20 transition-colors">
                    Explore Features
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Form Column */}
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 md:p-10 min-h-[600px]">
                  <h2 className="mb-1 text-2xl font-bold text-white">
                    {activeTab === "contact"
                      ? "Talk to Our Team"
                      : "Schedule Your Demo"}
                  </h2>
                  <p className="mb-8 text-slate-400">
                    {activeTab === "contact"
                      ? "Get expert consultation tailored to your needs"
                      : "Get a personalized tour of Meedo's capabilities"}
                  </p>

                  {error && (
                    <div className="mb-6 flex items-start rounded-xl border border-red-500/30 bg-red-900/20 p-4">
                      <X className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-red-400" />
                      <span className="text-red-300">{error}</span>
                    </div>
                  )}

                  <div className="relative">
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-400">
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
                            className="w-full rounded-lg border border-white/10 bg-slate-800/30 py-3 pr-4 pl-10 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-400">
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
                            className="w-full rounded-lg border border-white/10 bg-slate-800/30 py-3 pr-4 pl-10 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-400">
                          Company Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-white/10 bg-slate-800/30 px-4 py-3 transition duration-300 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
                          placeholder="Enter your company name"
                          required
                        />
                      </div>

                      {activeTab === "demo" && (
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-400">
                            Select Date & Time <span className="text-red-400">*</span>
                          </label>
                          
                          {!showCalendar ? (
                            <button
                              type="button"
                              onClick={() => setShowCalendar(true)}
                              className="w-full rounded-lg border border-white/10 bg-slate-800/30 px-4 py-3 text-left transition duration-300 hover:border-purple-500 text-white"
                            >
                              {formData.selectedDate && formData.selectedTime ? (
                                <span className="text-cyan-300">{formatSelectedDateTime()}</span>
                              ) : (
                                <span className="text-slate-400">Click to select date and time</span>
                              )}
                            </button>
                          ) : (
                            <div className="absolute z-20 left-0 right-0 top-0 rounded-lg border border-white/10 bg-slate-800/90 p-4 backdrop-blur-md max-w-[400px] mx-auto">
                              {/* Calendar Header */}
                              <div className="mb-4 flex items-center justify-between">
                                <button
                                  type="button"
                                  onClick={() => navigateMonth(-1)}
                                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-700 hover:text-white"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <h3 className="text-lg font-semibold text-white">
                                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                </h3>
                                <button
                                  type="button"
                                  onClick={() => navigateMonth(1)}
                                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-700 hover:text-white"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                              </div>

                              {/* Calendar Grid */}
                              <div className="mb-4">
                                <div className="grid grid-cols-7 gap-1 mb-2">
                                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                    <div key={day} className="text-xs font-medium text-slate-400 text-center p-2">
                                      {day}
                                    </div>
                                  ))}
                                </div>
                                <div className="grid grid-cols-7 gap-1">
                                  {generateCalendarDates().map((dateObj, index) => (
                                    <button
                                      key={index}
                                      type="button"
                                      onClick={() => dateObj && handleDateSelect(dateObj)}
                                      disabled={!dateObj || !dateObj.isAvailable}
                                      className={`aspect-square text-sm rounded-lg transition-all ${
                                        !dateObj
                                          ? 'invisible'
                                          : dateObj.isSelected
                                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                                          : dateObj.isAvailable
                                          ? 'text-white hover:bg-slate-700 border border-white/10'
                                          : 'text-slate-500 cursor-not-allowed'
                                      }`}
                                    >
                                      {dateObj?.date}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Time Slots */}
                              {formData.selectedDate && (
                                <div>
                                  <h4 className="mb-3 text-sm font-medium text-slate-400">Select Time</h4>
                                  <div className="grid gap-2">
                                    {timeSlots.map((slot) => (
                                      <button
                                        key={slot.id}
                                        type="button"
                                        onClick={() => handleTimeSelect(slot)}
                                        className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-700/50 p-3 text-left transition-all hover:border-purple-500 hover:bg-slate-700"
                                      >
                                        <div>
                                          <div className="font-medium text-white">{slot.label}</div>
                                          <div className="text-sm text-slate-400">{slot.time}</div>
                                        </div>
                                        <Clock className="h-4 w-4 text-slate-400" />
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <button
                                type="button"
                                onClick={() => setShowCalendar(false)}
                                className="mt-4 w-full rounded-lg border border-white/10 py-2 text-sm text-slate-400 hover:text-white"
                              >
                                Close Calendar
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className={`flex w-full items-center justify-center rounded-lg px-6 py-3.5 font-semibold transition-all ${
                          isLoading
                            ? "cursor-not-allowed bg-slate-700"
                            : "bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90"
                        }`}
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
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Processing...
                          </div>
                        ) : activeTab === "contact" ? (
                          "Connect with Expert"
                        ) : (
                          "Schedule Demo"
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Rotating Testimonials Column */}
                <div className="relative hidden flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 shadow-2xl backdrop-blur-xl lg:flex">
                  {/* Profile with large image */}
                  <div className="relative z-10 p-10 pt-12">
                    <div className="flex flex-col items-center animate-slide-in">
                      <div className="relative mb-6">
                        <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white/20 shadow-xl transition-all duration-500">
                          <img
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            className="h-full w-full object-cover scale-110 hover:scale-100 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -right-2 -bottom-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 p-1.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      <p className="text-xl font-bold text-white transition-all duration-500">{currentTestimonial.name}</p>
                      <p className="mt-1 text-sm text-slate-300 transition-all duration-500">{currentTestimonial.role}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative z-10 flex flex-grow flex-col px-10 pb-12">
                    <div className="mb-6 flex justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-300">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>

                    <blockquote className="text-center text-lg leading-relaxed tracking-normal text-slate-200 transition-all duration-500 min-h-[120px] flex items-center animate-slide-in">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </blockquote>

                    <div className="mt-8 rounded-xl border border-white/10 bg-gradient-to-r from-purple-700/30 to-cyan-700/30 p-4 transition-all duration-500">
                      <p className="text-center text-sm text-slate-200 italic">
                        &ldquo;{currentTestimonial.result}&rdquo;
                      </p>
                    </div>

                    {/* Testimonial indicators */}
                    <div className="mt-6 flex justify-center space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setTestimonialIndex(index)}
                          className={`h-3 w-3 rounded-full transition-all duration-300 ${
                            index === testimonialIndex
                              ? 'bg-gradient-to-r from-purple-600 to-cyan-600 scale-125'
                              : 'bg-slate-500 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default ContactDemoPage;
