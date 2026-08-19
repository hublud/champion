"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Sparkles, PhoneCall, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-b from-[#060918] via-[#0b102f] to-[#080c1b] pt-28 pb-16 lg:pt-24 lg:pb-16">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#1a237e]/35 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#f4b223]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#f4b223_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (Content) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-start space-y-6"
        >
          {/* Royal Official Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f4b223]/10 border border-[#f4b223]/40 shadow-[0_0_20px_rgba(244,178,35,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-[#f4b223]" />
            <span className="text-[#ffd269] text-xs font-bold tracking-[0.22em] uppercase">
              100% Sortexed Parboiled Rice
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#f4b223] bg-white/5 border border-[#f4b223]/30 px-3 py-1 rounded-md">
                Royal Grade Quality
              </span>
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
                🇳🇬 Made In Nigeria
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffd269] via-[#f4b223] to-[#ffd269] drop-shadow-[0_0_30px_rgba(244,178,35,0.35)]">
                CHAMPIONS
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.2em] text-blue-200">
                PARBOILED RICE
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl font-normal">
            Carefully processed with advanced parboiling technology to lock in maximum natural nutrients. Non-sticky, long-grain, stone-free, and fluffy perfection in every single pot.
          </p>

          {/* Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full max-w-lg pt-1">
            {[
              { label: "Stone Free", sub: "100% Sortexed" },
              { label: "Fluffy Grains", sub: "Never Sticky" },
              { label: "Rich in Nutrients", sub: "Parboiled Seal" },
            ].map((pill, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 hover:border-[#f4b223]/50 p-3 rounded-xl transition-all"
              >
                <div className="flex items-center gap-1.5 text-[#f4b223]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold text-white">{pill.label}</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">{pill.sub}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3.5 pt-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f4b223] to-[#d49520] hover:from-[#ffd269] hover:to-[#f4b223] text-black font-extrabold px-7 py-3.5 rounded-full transition-all shadow-[0_4px_25px_rgba(244,178,35,0.4)] hover:shadow-[0_6px_35px_rgba(244,178,35,0.6)] active:scale-95 text-xs sm:text-sm uppercase tracking-widest"
            >
              <span>Order Stock / Distribute</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+2349164655254"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#f4b223] text-white font-semibold px-6 py-3.5 rounded-full transition-all text-xs sm:text-sm uppercase tracking-widest"
            >
              <PhoneCall className="w-4 h-4 text-[#f4b223]" />
              <span>+234 916 465 5254</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column (Hero Product Presentation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-6 relative flex justify-center items-center"
        >
          {/* Glowing Background Ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1a237e]/50 via-[#f4b223]/25 to-transparent rounded-3xl blur-2xl" />
          
          <div className="relative w-full rounded-3xl overflow-hidden border border-[#f4b223]/30 shadow-[0_25px_70px_rgba(0,0,0,0.85)] bg-[#0c1130] group">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full bg-[#0d1338]">
              <Image
                src="/champion-hero.png"
                alt="Champions Parboiled Rice 50kg Bag"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060918]/80 via-transparent to-black/30" />
            </div>

            {/* Floating Royal Glass Label */}
            <div className="p-5 bg-gradient-to-r from-[#0e1438] via-[#141b4d] to-[#0e1438] border-t border-[#f4b223]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f4b223]/15 border border-[#f4b223]/40 flex items-center justify-center text-[#f4b223]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#f4b223] font-black text-sm tracking-wider uppercase">
                      Champions Parboiled Rice
                    </span>
                    <span className="text-[10px] bg-[#f4b223] text-black font-extrabold px-2 py-0.5 rounded-full shadow">
                      50KG / 25KG
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs mt-0.5">
                    Authentic • Tasty • Healthy • Fluffy Every Time
                  </p>
                </div>
              </div>
              <Link
                href="#byproducts"
                className="hidden sm:inline-flex text-xs font-bold text-[#ffd269] hover:text-white uppercase tracking-wider transition-colors"
              >
                View Products →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Marker */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400">Discover</span>
        <div className="w-0.5 h-5 bg-gradient-to-b from-[#f4b223] to-transparent rounded-full animate-bounce" />
      </div>
    </section>
  );
}
