"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Droplets, ShieldCheck } from "lucide-react";

const valueCards = [
  {
    icon: <Zap className="w-8 h-8 text-[#f4b223]" />,
    title: "Parboiled for Maximum Nutrients",
    description:
      "When you choose Champions Rice, you're choosing quality, taste and healthy rice. Perfectly processed for a range of recipes, our parboiled rice offers the ultimate combination of health and flavor, making it the ideal addition to your kitchen.",
    tag: "Nutrients",
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#5b73ff]" />,
    title: "Consistent, Fluffy Texture",
    description:
      "Our rice grains are specially processed to maintain their integrity, ensuring each grain remains separate and fluffy when cooked. No more sticky or clumpy rice—just perfectly cooked, light, and airy grains every time.",
    tag: "Texture",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#f4b223]" />,
    title: "Trusted Quality",
    description:
      "Champions Rice is crafted with care and precision to ensure premium quality. Our dedication to excellence has earned us the trust of customers who rely on us for consistent, top-tier rice that meets their needs.",
    tag: "Quality",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative w-full overflow-hidden">
      
      {/* Top Banner with Green Fields Background */}
      <div className="relative py-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[460px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/champions-fields.jpg"
            alt="Champions Rice Golden Agricultural Fields"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Overlay to ensure ultra-sharp readability without any ghost artifacts */}
          <div className="absolute inset-0 bg-[#080c1b]/65 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080c1b]/80 via-transparent to-gray-50" />
        </div>

        {/* Text Header */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#f4b223] text-xs font-bold tracking-[0.25em] uppercase mb-2">
              Signature Excellence
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Features
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed font-medium mt-4 max-w-3xl mx-auto drop-shadow-md">
              When you choose Champions Rice, you&apos;re choosing quality, tasty and healthy. Perfectly processed for a range of recipes, our parboiled rice offers the ultimate combination of health and flavor, making it the ideal addition to your kitchen.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3 Value Cards Section (Clean White Cards) */}
      <div className="relative z-20 bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(35,42,130,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#232a82] group-hover:text-white transition-all duration-300 shadow-sm">
                  {card.icon}
                </div>

                {/* Tag */}
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#232a82] bg-blue-50 px-3 py-1 rounded-full mb-3">
                  {card.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-normal">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
