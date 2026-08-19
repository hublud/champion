"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Truck, Users } from "lucide-react";

export default function DistributorCTA() {
  return (
    <section id="distributors" className="relative bg-gradient-to-br from-[#121752] via-[#232a82] to-[#0c0f33] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-white border-y border-[#f4b223]/20">
      {/* Decorative Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#f4b223]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#3d46bb]/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <span className="inline-block text-[#f4b223] text-xs font-bold tracking-[0.3em] uppercase bg-white/5 border border-[#f4b223]/30 px-4 py-1.5 rounded-full">
            Partnership & Distribution
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Become a Champions Rice<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4b223] via-[#ffd269] to-[#f4b223]">
              Distributor Today
            </span>
          </h2>

          <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed pt-2">
            We partner with ambitious wholesalers, retailers, and institutional buyers across Nigeria. Join our nationwide network and supply high-demand, premium parboiled rice with strong margins and guaranteed product consistency.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-[#f4b223] to-[#d49520] hover:from-[#ffd269] hover:to-[#f4b223] text-black font-extrabold px-9 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(244,178,35,0.4)] text-xs sm:text-sm uppercase tracking-widest active:scale-95"
            >
              Apply as Distributor
            </Link>
            <Link
              href="tel:+2349164655254"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              Call Sales Desk
            </Link>
          </div>
        </motion.div>

        {/* 3 Partner Perks */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/15 text-left"
        >
          {[
            {
              icon: <TrendingUp className="w-5 h-5 text-[#f4b223]" />,
              title: "Competitive Profit Margins",
              desc: "Lucrative bulk pricing tiers designed to maximize your return on investment.",
            },
            {
              icon: <Truck className="w-5 h-5 text-[#f4b223]" />,
              title: "Consistent & Timely Supply",
              desc: "Uninterrupted inventory backed by high-capacity milling and logistics.",
            },
            {
              icon: <Users className="w-5 h-5 text-[#f4b223]" />,
              title: "Dedicated Account Support",
              desc: "Direct support from our sales managers, point-of-sale branding, and marketing.",
            },
          ].map((perk, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-2 hover:border-[#f4b223]/40 transition-colors">
              <div className="p-2.5 bg-white/5 rounded-lg w-fit border border-white/10">{perk.icon}</div>
              <h4 className="text-white font-bold text-base">{perk.title}</h4>
              <p className="text-gray-300 text-xs leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
