"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck, HeartPulse, Wheat, Award } from "lucide-react";
import Image from "next/image";

const checkFeatures = [
  "100% Sortex Destoned — Clean & Stone Free",
  "Fluffy, Non-Sticky & Separate Grains",
  "High Cooking Yield & Superior Flavor Absorption",
  "Rich in Natural B-Vitamins & Essential Minerals",
  "Rigorous Quality Control From Farm to Pack",
];

const highlights = [
  {
    icon: <Wheat className="w-6 h-6 text-[#f4b223]" />,
    title: "Carefully Parboiled",
    desc: "Parboiled with precision steam techniques to seal vital vitamins, minerals, and natural grain nutrients into every single kernel.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#f4b223]" />,
    title: "Fluffy & Non-Sticky",
    desc: "Specially milled so every grain cooks distinct, firm, and separate — perfect for Jollof, Fried Rice, and everyday stews.",
  },
  {
    icon: <Award className="w-6 h-6 text-[#f4b223]" />,
    title: "Pristine Grain Selection",
    desc: "Multi-stage optical sorting guarantees uniform, unbroken, and stone-free rice in every bag.",
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-[#f4b223]" />,
    title: "Healthier Family Choice",
    desc: "Lower glycemic impact, higher dietary fiber, and natural goodness for healthy everyday nourishment.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#0c1130] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1a237e] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#f4b223]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Top: Headline + Description + Checklist + Banner Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4b223]/10 border border-[#f4b223]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#f4b223]" />
              <span className="text-[#ffd269] text-xs font-bold tracking-[0.22em] uppercase">
                About Champions Rice
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Nigeria&apos;s Preferred <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd269] via-[#f4b223] to-[#ffd269]">
                Premium Parboiled Rice
              </span>
            </h2>

            <p className="text-gray-200 leading-relaxed text-base sm:text-lg">
              We take pride in delivering the highest grade of parboiled rice to Nigerian homes, caterers, and food businesses. Processed with modern agro-milling technology, Champions Rice ensures a healthier, fluffier, and more delicious meal every time.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Whether you are preparing grand celebratory Nigerian Jollof, savory fried rice, or a comforting family meal with stew, Champions Rice delivers uniform grain length, rich aroma, and unmatched texture in every single pot.
            </p>

            {/* Checklist */}
            <ul className="space-y-3.5 pt-2">
              {checkFeatures.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3.5 text-white font-medium text-sm sm:text-base"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f4b223] flex items-center justify-center shadow-md">
                    <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Banner Graphic showcasing Champions Parboiled Rice Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#f4b223]/30 shadow-2xl bg-[#090d24]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/cooked-rice-delight.jpg"
                  alt="Delicious Cooked Champions Parboiled Rice with Fluffy Grains"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 bg-gradient-to-r from-[#0a0f2b] to-[#121845] flex items-center justify-between border-t border-[#f4b223]/20">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#f4b223]" />
                  <span className="text-white text-xs sm:text-sm font-bold">Fluffy, Non-Sticky & Distinct Grains</span>
                </div>
                <span className="text-[#ffd269] text-xs font-bold uppercase tracking-wider">Cooks to Perfection</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#0e1438]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#f4b223]/50 hover:bg-[#121a47] transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
