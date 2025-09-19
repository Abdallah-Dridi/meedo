"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { FeatureCategorySection } from "@/components/landing/FeatureCategorySection";
import { PricingSection } from "@/components/landing/PricingSection";
import { IntegrationSection } from "@/components/landing/IntegrationSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
// --- Main Landing Page Component ---
export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-800 antialiased transition-colors duration-300 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 dark:text-slate-200">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeatureCategorySection />
        {/* <TestimonialsSection /> */}
        <PricingSection />
        <IntegrationSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
