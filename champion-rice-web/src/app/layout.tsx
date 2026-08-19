import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Champions Rice | Nigeria's Premium Parboiled Rice",
  description:
    "Champions Rice offers the finest quality parboiled rice, carefully processed and packed to preserve natural nutrients, ensuring a healthier and tastier meal every time. Authentic, tasty and healthy.",
  keywords: "Champions Rice, Parboiled Rice, Nigeria Rice, Healthy Rice, Nigerian Parboiled Rice, Abuja Rice Distributors",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Champions Rice | Premium Parboiled Rice",
    description: "Authentic, Tasty and Healthy Parboiled Rice for every Nigerian home.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${font.variable} font-sans bg-[#080c1b] text-white antialiased selection:bg-[#f4b223] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
