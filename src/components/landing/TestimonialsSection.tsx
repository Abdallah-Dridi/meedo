"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define a specific type for a testimonial object
type Testimonial = {
  name: string;
  handle: string;
  avatar: string;
  text: string;
};

// Expanded and concise testimonials
const testimonialsRow1: Testimonial[] = [
  {
    name: "Alex Rivera",
    handle: "@alex_dev",
    avatar: "https://i.pravatar.cc/48?u=a",
    text: "Meedo's AI handles 80% of our tickets, freeing up my team for complex issues. It's been a total game-changer for our workflow.",
  },
  {
    name: "Samantha Lee",
    handle: "@samanthacodes",
    avatar: "https://i.pravatar.cc/48?u=b",
    text: "The integration with Shopify was seamless. We were up and running in minutes, not hours. The UI is clean, intuitive, and just works.",
  },
  {
    name: "David Chen",
    handle: "@davidchen_ecom",
    avatar: "https://i.pravatar.cc/48?u=c",
    text: "I was skeptical about AI support, but Meedo feels human. Our customer satisfaction scores have actually gone UP since we implemented it.",
  },
   {
    name: "Maria Garcia",
    handle: "@mariagarcia",
    avatar: "https://i.pravatar.cc/48?u=d",
    text: "The analytics dashboard is a goldmine. We're spotting trends that we never would have seen before. Highly recommend.",
  },
  {
    name: "Kenji Tanaka",
    handle: "@kenji_t",
    avatar: "https://i.pravatar.cc/48?u=m",
    text: "Finally, an AI tool that doesn't feel like a robot. The tone personalization is fantastic and matches our brand voice perfectly.",
  },
];

const testimonialsRow2: Testimonial[] = [
  {
    name: "James Taylor",
    handle: "@jamest_dev",
    avatar: "https://i.pravatar.cc/48?u=e",
    text: "As a developer, I appreciate the robust API. We've built custom workflows on top of Meedo that are specific to our business needs.",
  },
  {
    name: "Linda Kim",
    handle: "@lindatech",
    avatar: "https://i.pravatar.cc/48?u=f",
    text: "The multi-language support is incredible. We're now offering 24/7 support to our international customers without outsourcing.",
  },
  {
    name: "Robert Brown",
    handle: "@robert_b",
    avatar: "https://i.pravatar.cc/48?u=g",
    text: "The value for money is insane. We're saving thousands a month on support costs, and our response times have never been faster.",
  },
  {
    name: "Patricia Miller",
    handle: "@patriciamills",
    avatar: "https://i.pravatar.cc/48?u=h",
    text: "The order management features are a lifesaver. Handling returns and exchanges is now almost completely automated. My team is happier.",
  },
  {
    name: "Chloe Dubois",
    handle: "@chloedubois",
    avatar: "https://i.pravatar.cc/48?u=n",
    text: "Customer support used to be our biggest bottleneck. Now it's one of our greatest strengths. Thank you, Meedo!",
  },
];


const TestimonialCard = ({ name, handle, avatar, text }: Testimonial) => (
  <div className="w-[400px] h-[180px] flex-shrink-0 bg-slate-800/50 rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
    <p className="text-slate-300 mb-6">{text}</p>
    <div className="flex items-center gap-4">
      <Image
        src={avatar}
        alt={name}
        width={48}
        height={48}
        className="rounded-full"
        unoptimized
      />
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">{handle}</p>
      </div>
    </div>
  </div>
);

const ScrollingRow = ({ testimonials, direction = 'left' }: { testimonials: Testimonial[], direction?: 'left' | 'right' }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollWidth = scroller.scrollWidth / 2;
    let currentScroll = direction === 'left' ? 0 : scrollWidth;

    const animateScroll = () => {
      if (!scroller.matches(':hover') && !scroller.classList.contains('scrolling')) { 
        if (direction === 'left') {
          currentScroll += 0.5;
          if (currentScroll >= scrollWidth) {
            currentScroll = 0;
          }
        } else {
          currentScroll -= 0.5;
          if (currentScroll <= 0) {
            currentScroll = scrollWidth;
          }
        }
        scroller.style.transform = `translateX(-${currentScroll}px)`;
      }
      animationFrameRef.current = requestAnimationFrame(animateScroll);
    };
    
    animationFrameRef.current = requestAnimationFrame(animateScroll);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation(); // <-- FIX: Stop the event from bubbling up to the page

      currentScroll += e.deltaY * 0.5; 
      
      // <-- FIX: Implement looping logic for manual scroll
      if (currentScroll >= scrollWidth) {
        currentScroll -= scrollWidth;
      }
      if (currentScroll < 0) {
        currentScroll += scrollWidth;
      }

      scroller.style.transform = `translateX(-${currentScroll}px)`;

      scroller.classList.add('scrolling');
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
      manualScrollTimeoutRef.current = setTimeout(() => {
        scroller.classList.remove('scrolling');
      }, 2000);
    };

    scroller.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      scroller.removeEventListener('wheel', handleWheel);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [direction]);

  return (
    <div
      ref={scrollerRef}
      className="flex space-x-8 px-8"
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};


export function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-900/50 overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by 20+ Businesses
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            See what our amazing customers are saying about how Meedo transformed their support.
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-8 py-8" 
        style={{
          maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
        }}
      >
        <ScrollingRow testimonials={testimonialsRow1} direction="left" />
        <ScrollingRow testimonials={testimonialsRow2} direction="right" />
      </div>
    </section>
  );
}
