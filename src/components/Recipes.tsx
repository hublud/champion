"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Utensils } from "lucide-react";

const dishes = [
  { name: "Nigerian Jollof Rice", emoji: "🍅", desc: "Smoky, rich tomato base with distinct non-sticky grains." },
  { name: "Fried Rice with Veggies", emoji: "🥦", desc: "Bright colors, crispy veggies, and separate fluffy grains." },
  { name: "Creamy Coconut Rice", emoji: "🥥", desc: "Infused with rich coconut milk and aromatic spices." },
  { name: "White Rice & Tomato Stew", emoji: "🍲", desc: "The ultimate Nigerian home comfort meal." },
  { name: "Wholesome Rice Porridge", emoji: "🫕", desc: "Slow-simmered, nourishing, and gentle on digestion." },
  { name: "Grand Party Rice", emoji: "🎉", desc: "Catering favorite that stays fluffy in large scale cooking." },
];

export default function Recipes() {
  return (
    <section id="recipes" className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200">
            <Utensils className="w-3.5 h-3.5 text-[#b87e0a]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#b87e0a]">
              Culinary Versatility
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Perfect for Every Dish
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Champions Rice holds its firmness and absorbs flavors effortlessly, making it the choice grain for every culinary celebration.
          </p>
        </motion.div>

        {/* Grid: Dish Cards + Dishes Showcase Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Dishes List Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dishes.map((dish, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="bg-gray-50 border border-gray-150 rounded-2xl p-5 hover:border-[#232a82]/40 hover:bg-blue-50/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{dish.emoji}</div>
                <h3 className="text-gray-900 font-bold text-base mb-1 group-hover:text-[#232a82] transition-colors">{dish.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{dish.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Dishes Showcase Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group"
          >
            <Image
              src="/by-products.jpeg"
              alt="Champions Rice Delicious Recipes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-flex items-center gap-2 bg-[#f4b223] text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chef Approved</span>
              </div>
              <p className="text-white font-black text-2xl sm:text-3xl">Endless Recipe Possibilities</p>
              <p className="text-gray-200 text-sm mt-1">Cook with confidence — Champions Rice never disappoints.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
