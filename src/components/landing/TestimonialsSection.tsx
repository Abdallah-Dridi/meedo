"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  // Row 1
  [
    {
      name: "Alex Rivera",
      handle: "@alex_dev",
      avatar: "https://i.pravatar.cc/48?u=a",
      text: "Meedo's AI is shockingly good. It handles about 80% of our support tickets, freeing up my team to focus on the complex issues. A total game-changer.",
    },
    {
      name: "Samantha Lee",
      handle: "@samanthacodes",
      avatar: "https://i.pravatar.cc/48?u=c",
      text: "The integration with Shopify was seamless. We were up and running in minutes, not hours. The UI is clean, intuitive, and just... works.",
    },
    {
      name: "David Chen",
      handle: "@davidchen_ecom",
      avatar: "https://i.pravatar.cc/48?u=b",
      text: "I was skeptical about AI support, but Meedo feels human. Our customer satisfaction scores have actually gone UP since we implemented it.",
    },
     {
      name: "Adam Garcia",
      handle: "@adamgarcia",
      avatar: "https://i.pravatar.cc/48?u=d",
      text: "The analytics dashboard is a goldmine. We're spotting trends in customer queries we never would have seen before. Highly recommend.",
    },
  ],
  // Row 2
  [
    {
      name: "James Taylor",
      handle: "@jamest_dev",
      avatar: "https://i.pravatar.cc/48?u=e",
      text: "As a developer, I appreciate the robust API. We've been able to build custom workflows on top of Meedo that are specific to our business needs.",
    },
    {
      name: "Linda Kim",
      handle: "@lindatech",
      avatar: "https://i.pravatar.cc/48?u=f",
      text: "The multi-language support is incredible. We're now offering 24/7 support to our international customers without hiring a massive team.",
    },
    {
      name: "Jessica Daves",
      handle: "@jessica_d",
      avatar: "https://i.pravatar.cc/48?u=g",
      text: "Finally, an AI tool that doesn't feel like a robot. The tone personalization is fantastic and matches our brand voice perfectly.",
    },
    {
      name: "Patricia Miller",
      handle: "@patriciamills",
      avatar: "https://i.pravatar.cc/48?u=h",
      text: "The value for money is insane. We're saving thousands a month on support costs, and our response times have never been faster.",
    },
  ],
  // Row 3
  [
    {
      name: "Michael Wilson",
      handle: "@mikew",
      avatar: "https://i.pravatar.cc/48?u=i",
      text: "The order management features are a lifesaver. Handling returns and exchanges is now almost completely automated. My team is so much happier.",
    },
    {
      name: "Albert Dias",
      handle: "@albertdias",
      avatar: "https://i.pravatar.cc/48?u=j",
      text: "I love how Meedo learns. The AI gets smarter with every interaction, and the suggested replies are getting more and more accurate.",
    },
    {
      name: "William Martinez",
      handle: "@will_m",
      avatar: "https://i.pravatar.cc/48?u=k",
      text: "The social media integration is a huge plus. We can manage support queries from Twitter and Facebook all in one place.",
    },
    {
      name: "Emily Johnson",
      handle: "@emilyj",
      avatar: "https://i.pravatar.cc/48?u=l",
      text: "Customer support used to be our biggest bottleneck. Now it's one of our greatest strengths. Thank you, Meedo!",
    },
  ],
];

export function TestimonialsSection() {
  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Loved by Businesses Worldwide
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See what our amazing customers are saying about how Meedo transformed their support.
            </p>
          </motion.div>

          <div className="relative group overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, white 5%, white 95%, transparent)',
            }}
          >
            <div className="flex flex-col gap-8">
              {/* Row 1 */}
              <div className="flex space-x-8 animate-[scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[...testimonials[0], ...testimonials[0]].map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex space-x-8 animate-[scroll-reverse_70s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[...testimonials[1], ...testimonials[1]].map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
              {/* Row 3 */}
              <div className="flex space-x-8 animate-[scroll_65s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[...testimonials[2], ...testimonials[2]].map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const TestimonialCard = ({ name, handle, avatar, text }: { name: string, handle: string, avatar: string, text: string }) => (
  <div className="w-[350px] flex-shrink-0 bg-slate-800/50 rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
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
