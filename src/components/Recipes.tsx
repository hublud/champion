"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, Utensils, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/by-products.jpeg",
    badge: "Chef Approved",
    title: "Endless Recipe Possibilities",
    desc: "Cook with confidence — Champions Rice never disappoints.",
  },
  {
    image: "/cooked-rice-delight.jpg",
    badge: "Fluffy & Non-Sticky",
    title: "Signature Party Jollof & Fried Rice",
    desc: "Separate, distinct grains that soak in rich spices without becoming soggy.",
  },
  {
    image: "/champion-hero.jpg",
    badge: "100% Sortexed Grains",
    title: "Royal Table Presentation",
    desc: "Gold-standard parboiled rice trusted by caterers and families nationwide.",
  },
  {
    image: "/banner.jpg.jpeg",
    badge: "Nutrient Sealed",
    title: "Healthy & Wholesome Dining",
    desc: "Advanced parboiling preserves natural vitamins and energy-giving nutrients.",
  },
  {
    image: "/champions-fields.jpg",
    badge: "Farm to Pot",
    title: "Pride of Nigerian Agriculture",
    desc: "Grown in fertile Nigerian fields and processed with cutting-edge milling technology.",
  },
];

const dishes = [
  { name: "Nigerian Jollof Rice", emoji: "🍅", desc: "Smoky, rich tomato base with distinct non-sticky grains.", slideIndex: 1 },
  { name: "Fried Rice with Veggies", emoji: "🥦", desc: "Bright colors, crispy veggies, and separate fluffy grains.", slideIndex: 2 },
  { name: "Creamy Coconut Rice", emoji: "🥥", desc: "Infused with rich coconut milk and aromatic spices.", slideIndex: 0 },
  { name: "White Rice & Tomato Stew", emoji: "🍲", desc: "The ultimate Nigerian home comfort meal.", slideIndex: 3 },
  { name: "Wholesome Rice Porridge", emoji: "🫕", desc: "Slow-simmered, nourishing, and gentle on digestion.", slideIndex: 4 },
  { name: "Grand Party Rice", emoji: "🎉", desc: "Catering favorite that stays fluffy in large scale cooking.", slideIndex: 1 },
];

export default function Recipes() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

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

        {/* Grid: Dish Cards + Dishes Showcase Image Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Dishes List Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dishes.map((dish, idx) => {
              const isActive = current === dish.slideIndex;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  onClick={() => goToSlide(dish.slideIndex)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 group flex flex-col justify-between ${
                    isActive
                      ? "bg-amber-50/60 border-[#f4b223] shadow-md ring-1 ring-[#f4b223]/40"
                      : "bg-gray-50 border-gray-150 hover:border-[#232a82]/40 hover:bg-blue-50/50 hover:shadow-sm"
                  }`}
                >
                  <div>
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {dish.emoji}
                    </div>
                    <h3
                      className={`font-bold text-base mb-1 transition-colors ${
                        isActive ? "text-[#b87e0a]" : "text-gray-900 group-hover:text-[#232a82]"
                      }`}
                    >
                      {dish.name}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{dish.desc}</p>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#b87e0a] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View showcase</span>
                    <span>→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dishes Showcase Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-6 relative min-h-[460px] sm:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-150 bg-black group select-none"
          >
            {/* Animated Image Slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[current].image}
                  alt={slides[current].title}
                  fill
                  priority={current === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlays for Readability & Drama */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 pointer-events-none" />

            {/* Slide Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#f4b223] hover:text-black text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 opacity-70 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#f4b223] hover:text-black text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 opacity-70 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide Text Content & Indicators */}
            <div className="absolute bottom-7 left-7 right-7 z-10 flex flex-col gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${current}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-1.5"
                >
                  <div className="inline-flex items-center gap-2 bg-[#f4b223] text-black text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{slides[current].badge}</span>
                  </div>
                  <h3 className="text-white font-black text-2xl sm:text-3xl drop-shadow-md leading-tight">
                    {slides[current].title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-lg drop-shadow">
                    {slides[current].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Dot Indicators */}
              <div className="flex items-center justify-between pt-2 border-t border-white/15">
                <div className="flex items-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === current
                          ? "w-8 bg-[#f4b223] shadow-lg"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono font-semibold text-gray-300">
                  0{current + 1} / 0{slides.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
