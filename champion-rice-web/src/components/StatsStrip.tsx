"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, Trophy } from "lucide-react";

const stats = [
  { value: "100%", label: "Pure Parboiled", icon: <Sparkles className="w-5 h-5 text-[#f4b223]" /> },
  { value: "50KG", label: "Premium Bags", icon: <Trophy className="w-5 h-5 text-[#f4b223]" /> },
  { value: "Certified", label: "Nigerian Quality", icon: <ShieldCheck className="w-5 h-5 text-[#f4b223]" /> },
  { value: "Trusted", label: "Nationwide", icon: <CheckCircle2 className="w-5 h-5 text-[#f4b223]" /> },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-gradient-to-r from-[#121752] via-[#232a82] to-[#121752] py-8 border-y border-[#f4b223]/25 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center px-4 space-y-1"
            >
              <div className="p-2 rounded-full bg-white/5 border border-white/10 mb-1">
                {stat.icon}
              </div>
              <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffd269] to-white">
                {stat.value}
              </span>
              <span className="text-[#ffd269] text-xs font-semibold uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
