"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

const images = [
  "/gallery/IMG-20250129-WA0080.jpg",
  "/gallery/IMG-20250129-WA0082.jpg",
  "/gallery/IMG-20250129-WA0083.jpg",
  "/gallery/IMG-20250129-WA0085.jpg",
  "/gallery/IMG-20250129-WA0088.jpg",
  "/gallery/IMG-20250129-WA0089.jpg",
  "/gallery/IMG-20250129-WA0090.jpg",
  "/gallery/IMG-20250129-WA0091.jpg",
  "/gallery/IMG-20250129-WA0093.jpg",
  "/gallery/IMG-20250129-WA0095.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#080c1b] py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
            <Camera className="w-3.5 h-3.5 text-[#f4b223]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#f4b223]">
              Inside Champions
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Production & Operations Gallery
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Take a look at our state-of-the-art milling, packaging, and logistics facilities delivering excellence to Nigeria.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.08, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-md group"
            >
              <Image
                src={src}
                alt={`Champions Rice Facility ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold">Champions Facility</span>
              </div>
            </motion.div>
          ))}

          {/* Video Showcase Tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative aspect-square md:col-span-2 overflow-hidden rounded-2xl border border-[#f4b223]/30 bg-black shadow-xl"
          >
            <video
              src="/gallery/video gallery.mp4"
              controls
              className="w-full h-full object-cover"
              poster="/champion-hero.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
