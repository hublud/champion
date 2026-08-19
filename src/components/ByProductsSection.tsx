"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Layers, ArrowUpRight, Check } from "lucide-react";

const products = [
  {
    title: "Champions Parboiled Rice (Whole Grain)",
    category: "Flagship Food Grade",
    badge: "50KG / 25KG",
    specs: ["100% Sortex Cleaned", "Stone-Free Guarantee", "Fluffy Non-Sticky Cook", "Long Grain Parboiled"],
    desc: "Our gold-standard parboiled rice for households, catering firms, hotels, and mega events across Nigeria.",
  },
  {
    title: "Champions Broken Rice (Sortexed Bits)",
    category: "Industrial & Food Processing",
    badge: "Bulk / Bags",
    specs: ["Cleaned & Destoned", "Ideal for Tuwo Shinkafa", "Brewery & Confectionery Grade", "High Starch Extract"],
    desc: "Evenly sorted broken rice grains perfect for traditional Nigerian Tuwo, flours, snacks, and industrial processing.",
  },
  {
    title: "Champions Rice Bran (High-Protein Dusa)",
    category: "Agro & Livestock Nutrition",
    badge: "Bulk Sacks",
    specs: ["High Crude Protein & Fat", "Rich in Natural Oil & Fiber", "Poultry & Cattle Feed Mix", "Freshly Milled Daily"],
    desc: "Nutrient-rich outer brown layer separated during polishing, heavily demanded by poultry and livestock feed manufacturers.",
  },
];

export default function ByProductsSection() {
  return (
    <section id="byproducts" className="relative bg-[#060918] py-24 px-4 sm:px-6 lg:px-8 text-white border-t border-[#f4b223]/20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#1a237e]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4b223]/10 border border-[#f4b223]/30">
            <Layers className="w-4 h-4 text-[#f4b223]" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#ffd269] font-bold">
              Complete Milling Range
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Our Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd269] via-[#f4b223] to-[#ffd269]">By-Products</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            From table-ready long-grain rice to industrial feed ingredients, Champions modern milling infrastructure guarantees consistency at every processing stage.
          </p>
        </motion.div>

        {/* Real Product & By-Products Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-[#f4b223]/30 bg-[#0e1438] shadow-[0_20px_50px_rgba(0,0,0,0.7)] group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image side */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-[400px] w-full overflow-hidden">
              <Image
                src="/BY PRODUCTS.jpg.jpeg"
                alt="Champions Rice, Broken Rice & Rice Bran by-products"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0e1438]/80 hidden lg:block" />
            </div>

            {/* Content side */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 space-y-5">
              <span className="text-xs font-bold text-[#f4b223] uppercase tracking-[0.25em]">
                Direct Factory Supply
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                Raw Paddy to Refined Grains & Nutrient Feed
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Shown above: Freshly milled Champions Long Grain Rice, sorted Broken Rice for food processing, and fine-ground Rice Bran (Dusa) for livestock feed. We supply full trailer loads and bulk quantities nationwide.
              </p>
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#f4b223] hover:bg-[#ffd269] text-black font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all shadow-md active:scale-95"
                >
                  <span>Inquire Bulk By-Products</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="bg-gradient-to-b from-[#0e1438] to-[#0a0f2b] border border-white/10 hover:border-[#f4b223]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#f4b223] uppercase tracking-wider bg-white/5 border border-[#f4b223]/30 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-[10px] bg-white/10 text-gray-200 px-2 py-0.5 rounded font-mono font-semibold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#ffd269] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-xs leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-white/10">
                  {item.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#f4b223] flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Link
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-[#f4b223] hover:text-black border border-white/15 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-xl transition-all"
                >
                  <span>Request Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
