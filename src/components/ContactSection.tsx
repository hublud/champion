"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-[#0c1022] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/10">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#232a82]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Contact Info (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-center space-y-8"
        >
          <div>
            <span className="text-[#f4b223] font-bold tracking-[0.25em] text-xs uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 leading-tight">
              Contact Champions Rice
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
              Have inquiries regarding bulk purchases, distributorship, or product deliveries? Reach out to our team today.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f4b223]/40 transition-colors">
              <div className="p-3 bg-[#f4b223]/10 text-[#f4b223] rounded-xl flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Head Office</h4>
                <p className="text-gray-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  1075 Joseph Gomwalk Street, Gudu,<br />
                  Abuja, Federal Capital Territory, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f4b223]/40 transition-colors">
              <div className="p-3 bg-[#f4b223]/10 text-[#f4b223] rounded-xl flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Phone Line</h4>
                <a href="tel:+2349164655254" className="text-gray-300 text-xs sm:text-sm hover:text-[#f4b223] transition-colors mt-0.5 block">
                  +234 916 465 5254
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f4b223]/40 transition-colors">
              <div className="p-3 bg-[#f4b223]/10 text-[#f4b223] rounded-xl flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Email</h4>
                <a href="mailto:info@championsrice.com" className="text-gray-300 text-xs sm:text-sm hover:text-[#f4b223] transition-colors mt-0.5 block">
                  info@championsrice.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-[#121752]/40 backdrop-blur-xl border border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Send Us A Message</h3>
          <p className="text-gray-300 text-xs sm:text-sm mb-8">
            Fill in your details below and our team will get back to you promptly.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-[#f4b223]/20 border border-[#f4b223] rounded-full flex items-center justify-center mx-auto text-[#f4b223]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white">Thank You!</h4>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Your message has been received. Our sales representatives will reach out to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-bold uppercase tracking-widest text-[#f4b223] hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} suppressHydrationWarning>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div suppressHydrationWarning>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    autoComplete="name"
                    required
                    suppressHydrationWarning
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#f4b223] focus:ring-1 focus:ring-[#f4b223] transition-all text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div suppressHydrationWarning>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    autoComplete="tel"
                    required
                    suppressHydrationWarning
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#f4b223] focus:ring-1 focus:ring-[#f4b223] transition-all text-sm"
                    placeholder="+234..."
                  />
                </div>
              </div>

              <div suppressHydrationWarning>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  suppressHydrationWarning
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#f4b223] focus:ring-1 focus:ring-[#f4b223] transition-all text-sm"
                  placeholder="name@example.com"
                />
              </div>

              <div suppressHydrationWarning>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                  Message / Order Quantity *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  suppressHydrationWarning
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#f4b223] focus:ring-1 focus:ring-[#f4b223] transition-all text-sm resize-none"
                  placeholder="Tell us what you need (e.g. 50 bags of Champions Parboiled Rice for Abuja delivery)..."
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f4b223] to-[#d49520] hover:from-[#ffd269] hover:to-[#f4b223] text-black font-extrabold py-4 px-9 rounded-full transition-all shadow-[0_0_25px_rgba(244,178,35,0.4)] text-xs sm:text-sm uppercase tracking-widest active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
