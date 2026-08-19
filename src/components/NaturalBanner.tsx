"use client";

import { motion } from "framer-motion";
import { Sparkles, Leaf, CheckCircle2, ShieldCheck, HeartPulse, Flame } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: <Sparkles className="w-5 h-5 text-[#f4b223]" />,
    title: "100% Stone-Free Precision",
    desc: "Advanced multi-stage Sortex destoners remove all stones, husks, and foreign particles.",
  },
  {
    icon: <Leaf className="w-5 h-5 text-[#4ade80]" />,
    title: "Rich in Natural B-Vitamins & Minerals",
    desc: "Our pressurized parboiling process forces bran nutrients directly into the grain core before milling.",
  },
  {
    icon: <HeartPulse className="w-5 h-5 text-[#f87171]" />,
    title: "Lower Glycemic & Digestible",
    desc: "Parboiled starch gelatinization creates slower glucose release, perfect for diabetic-conscious diets.",
  },
  {
    icon: <Flame className="w-5 h-5 text-[#f4b223]" />,
    title: "High Swell & Cooking Volume",
    desc: "Yields substantially more fluffy cooked rice per cup without breaking or getting sticky.",
  },
];

export default function NaturalBanner() {
  return (
    <section className="relative bg-[#070b1e] text-white py-24 px-4 sm:px-6 lg:px-8 border-y border-[#f4b223]/20 overflow-hidden">
      {/* Soft Background Neon Circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#1a237e]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#f4b223]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4b223]/10 border border-[#f4b223]/30">
              <ShieldCheck className="w-4 h-4 text-[#f4b223]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#ffd269] font-bold">
                Milled to Nutritional Perfection
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Why Nigerian Homes Trust <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd269] via-[#f4b223] to-[#ffd269]">
                Champions Parboiled Rice
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              Unlike ordinary white rice, Champions Rice goes through an intensive steam-vacuum parboiling method that seals vital micronutrients into the starch core. The result is superior nutritional value, extended shelf life, and distinct grains that never stick or turn mushy.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#0e1438]/80 backdrop-blur-md border border-white/10 hover:border-[#f4b223]/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick CTA row */}
          <div className="flex flex-wrap items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-[#141b4d] to-[#0d1338] border border-[#f4b223]/30">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#f4b223] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base">Guaranteed Delivery Nationwide</h4>
                <p className="text-gray-300 text-xs">Direct dispatch from our state-of-the-art rice milling facility.</p>
              </div>
            </div>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-[#f4b223] to-[#d49520] hover:from-[#ffd269] hover:to-[#f4b223] text-black font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all shadow-md active:scale-95"
            >
              Request Price List
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
