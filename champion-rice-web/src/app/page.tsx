import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import ByProductsSection from "@/components/ByProductsSection";
import NaturalBanner from "@/components/NaturalBanner";
import FeaturesSection from "@/components/FeaturesSection";
import Recipes from "@/components/Recipes";
import DistributorCTA from "@/components/DistributorCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#080c1b]">
      <Navbar />
      <Hero />
      <StatsStrip />
      <AboutSection />
      <ByProductsSection />
      <NaturalBanner />
      <FeaturesSection />
      <Recipes />
      <DistributorCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
