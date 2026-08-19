"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "light" | "gold" | "full";
}

export default function ChampionsLogo({
  className = "",
  size = "md",
}: LogoProps) {
  const sizeMap = {
    sm: { height: 38, width: 90 },
    md: { height: 48, width: 115 },
    lg: { height: 60, width: 145 },
    xl: { height: 75, width: 180 },
  };

  const dim = sizeMap[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <div className="relative flex items-center justify-center p-1 rounded-xl bg-white/95 shadow-[0_2px_12px_rgba(244,178,35,0.25)] border border-[#f4b223]/50 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/champions-logo.png"
          alt="Champions Parboiled Rice Official Logo"
          width={dim.width}
          height={dim.height}
          priority
          className="object-contain h-auto max-h-[48px] w-auto"
        />
      </div>
    </div>
  );
}
