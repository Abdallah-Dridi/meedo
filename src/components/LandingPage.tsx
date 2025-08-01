// src/components/LandingPage.tsx
"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Clock,
  Moon,
  Sun,
  ShoppingCart,
  Server,
  Palette,
  Copy,
  Check,
} from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

// --- Animation Variants ---
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- Main Landing Page Component ---
export function LandingPage() {
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-black dark:to-slate-900 text-slate-200 min-h-screen font-sans antialiased overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <CorePillarsSection />
        <DeveloperSection />
        <UseCasesSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

// --- Page Structure Components ---

function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Meedo</h1>
        </motion.div>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
          <motion.a 
            href="#cta" 
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-purple-500/30 group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 text-center z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-cyan-300">AI Support Copilot</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-cyan-600 dark:from-white dark:to-cyan-300 bg-clip-text text-transparent">
              Automate Support.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scale Your Business.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-400 mb-10">
            AI-powered customer support that feels human, available 24/7, and scales with your business
          </p>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#cta"
            className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3.5 font-semibold text-white shadow-lg overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative">Get Started Free</span>
          </motion.a>
          
          <motion.a
            href="#features"
            className="relative inline-flex items-center justify-center rounded-lg bg-white/5 px-8 py-3.5 font-semibold text-white border border-white/10 overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative">Explore Features</span>
          </motion.a>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
          <motion.div 
            className="w-2 h-2 rounded-full bg-white"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function AnimatedText({ text }: { text: string }) {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const words = text.split(" ");

    return (
        <p ref={ref} className="text-lg md:text-xl text-slate-400 leading-relaxed">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0.1 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={
                        ["growth.", "time."].includes(word) 
                        ? "text-white font-medium" 
                        : ["co-pilot", "founders."].includes(word)
                        ? "bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                        : ""
                    }
                >
                    {word}{" "}
                </motion.span>
            ))}
        </p>
    );
}

function AboutSection() {
    return (
        <section id="features" className="container mx-auto px-4 py-24 md:py-32 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                The AI <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">co-pilot</span> for solo founders.
              </h3>
              <AnimatedText text="Stop drowning in repetitive replies and focus on what truly matters: growth. Meedo is your always-on support agent, built to give you back your most valuable resource—time." />
            </motion.div>
        </section>
    );
}

const features = [
    { title: "Save Time, Instantly", description: "Cut down 70% of repetitive customer replies with our intelligent AI automation, freeing up your most valuable resource.", icon: <Clock /> },
    { title: "Stay Professional, 24/7", description: "Never miss a query. Handle FAQs, order tracking, and refund requests instantly, even when you're offline.", icon: <HeartHandshake /> },
    { title: "Boost Credibility & Trust", description: "Provide consistent, high-quality support across all your channels without hiring a team. Build customer trust with fast, reliable answers.", icon: <ShieldCheck /> },
];

function CorePillarsSection() {
    return (
        <section className="container mx-auto px-4 py-24 md:py-32">
            <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
                initial="initial" 
                whileInView="animate" 
                variants={staggerContainer} 
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div variants={fadeIn} className="lg:sticky top-24">
                    <div className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-0.5 rounded-lg mb-6">
                      <div className="text-xs font-mono px-3 py-1.5 bg-black rounded-lg text-cyan-300">
                        CORE PILLARS
                      </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built for mass adoption</h2>
                    <p className="text-slate-400 mt-4 text-lg">Meedo is built on core pillars to ensure your business can scale without friction.</p>
                </motion.div>
                <motion.div variants={staggerContainer} className="space-y-8">
                    {features.map((feature) => (
                        <PillarCard key={feature.title} {...feature} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

function PillarCard({ icon, title, description }: typeof features[0]) {
  return (
    <motion.div 
      variants={fadeIn}
      className="group relative overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="p-8 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm relative z-10">
        <div className="flex items-start gap-4">
          <div className="text-cyan-300 mt-1">
            {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" }) : icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DeveloperSection() {
    const codeText = `import meedo from 'meedo-ai';\n\nconst support = meedo.connect({ \n  apiKey: "YOUR_API_KEY",\n  rules: ["handle_refunds", "track_orders"]\n});\n\nsupport.start();`;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-white">Built for developers</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Integrate Meedo into your existing workflow with just a few lines of code. It&apos;s that simple.</p>
              </div>
              
              <Tilt 
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                perspective={1000}
                className="Tilt"
              >
                <div className="bg-gradient-to-br from-slate-900 to-black rounded-2xl border border-white/10 p-1 overflow-hidden">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl">
                    <div className="flex justify-between items-center p-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      </div>
                      <button onClick={handleCopy} className="text-sm flex items-center gap-1.5 text-slate-400 hover:text-white transition">
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <pre className="text-sm p-6 overflow-x-auto">
                      <code className="text-slate-300 font-mono">{codeText}</code>
                    </pre>
                  </div>
                </div>
              </Tilt>
            </motion.div>
        </section>
    );
}

function UseCasesSection() {
    return (
        <section className="container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-white">Designed for your world</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Whether you&apos;re selling products, software, or digital art, Meedo adapts to your business needs.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <UseCaseCard icon={<ShoppingCart />} title="E-commerce Stores" description="Automate order tracking, refund requests, and product questions on Shopify, WooCommerce, and more." />
                <UseCaseCard icon={<Server />} title="SaaS Companies" description="Provide instant answers to common questions, handle basic troubleshooting, and onboard new users 24/7." />
                <UseCaseCard icon={<Palette />} title="Digital Creators" description="Manage DMs, answer questions about your content, and protect your brand across social media platforms." />
              </div>
            </motion.div>
        </section>
    );
}

function UseCaseCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setMousePosition({ x: `${x}%`, y: `${y}%` });
        }
    };

    return (
      <Tilt 
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.02}
        perspective={1000}
      >
        <div 
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: "50%", y: "50%" })}
          className="relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm overflow-hidden h-full"
        >
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ 
              background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, rgba(139, 92, 246, 0.15), transparent 70%`
            }}
          ></div>
          
          <div className="relative z-10">
            <div className="text-cyan-300 mb-6">
              {React.isValidElement<{ className?: string }>(icon) ? React.cloneElement(icon, { className: "w-10 h-10" }) : icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-slate-400">{description}</p>
          </div>
        </div>
      </Tilt>
    );
}

function FinalCTA() {
    return (
        <section id="cta" className="container mx-auto px-4 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-black border border-white/10 p-12 max-w-4xl mx-auto"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1),transparent_70%)]"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  It&apos;s time to join the <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">future</span> of support
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8">
                  Stop managing tickets. Start building your empire.
                </p>
                
                <motion.a 
                  href="#" 
                  className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg group overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center">
                    Get Started with Meedo 
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.a>
              </div>
            </motion.div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="container mx-auto px-4 py-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Meedo. All rights reserved.</p>
            </div>
        </footer>
    );
}
