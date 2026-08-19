import Link from "next/link";
import { MapPin, Phone, Mail, Heart, MessageCircle } from "lucide-react";
import ChampionsLogo from "./ChampionsLogo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#byproducts", label: "By-Products" },
  { href: "#recipes", label: "Recipes" },
  { href: "#distributors", label: "Distributors" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050814] text-white border-t border-[#f4b223]/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <Link href="/" className="inline-block group">
            <ChampionsLogo size="md" />
          </Link>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Nigeria&apos;s finest parboiled rice — authentic, tasty and healthy. Carefully processed to preserve vital nutrients and bring fluffy, delicious perfection to every dining table.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="inline-block text-[11px] font-bold text-[#ffd269] uppercase tracking-widest bg-white/5 border border-[#f4b223]/30 px-3 py-1 rounded-full">
              🇳🇬 Proudly Produced in Nigeria
            </span>
            <span className="inline-block text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-white/5 border border-emerald-500/30 px-3 py-1 rounded-full">
              100% Stone-Free Sortex
            </span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest border-b border-white/10 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-[#f4b223] text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-white font-extrabold text-xs uppercase tracking-widest border-b border-white/10 pb-2">
            Head Office & Orders
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-[#f4b223] mt-1 flex-shrink-0" />
              <span>1075 Joseph Gomwalk Street, Gudu, Abuja, Nigeria</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone className="w-4 h-4 text-[#f4b223] flex-shrink-0" />
              <a href="tel:+2349164655254" className="hover:text-[#f4b223] transition-colors">
                +234 916 465 5254
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
              <a
                href="https://wa.me/2349164655254"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
              >
                Chat on WhatsApp (+234 916 465 5254)
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail className="w-4 h-4 text-[#f4b223] flex-shrink-0" />
              <a href="mailto:info@championsrice.com" className="hover:text-[#f4b223] transition-colors">
                info@championsrice.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-4 text-center text-gray-500 text-xs flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Champions Parboiled Rice. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 sm:mt-0">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          <span>for Nigerian Families & Businesses</span>
        </p>
      </div>
    </footer>
  );
}
