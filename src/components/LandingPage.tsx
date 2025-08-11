"use client";

import Header from "./Header";
import Footer from "./Footer";
import { ParticlesBackground } from "./ParticlesBackground";
import { HeroSection } from "./landing/HeroSection";
import { AboutSection } from "./landing/AboutSection";
import { FeatureCategorySection } from "./landing/FeatureCategorySection";
import { PricingSection } from "./landing/PricingSection";
import { IntegrationSection } from "./landing/IntegrationSection";
import { FinalCTA } from "./landing/FinalCTA";

// --- Main Landing Page Component ---
function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-200 antialiased dark:bg-gradient-to-br dark:from-black dark:to-slate-900">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeatureCategorySection />
        <PricingSection />
        <IntegrationSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
export { LandingPage };
