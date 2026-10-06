import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualCapability from "@/components/DualCapability";
import ProcessPipeline from "@/components/ProcessPipeline";
import AudienceSolutions from "@/components/AudienceSolutions";
import PortfolioSection from "@/components/PortfolioSection";
import InteractiveEstimator from "@/components/InteractiveEstimator";
import MaterialsCraftsmanship from "@/components/MaterialsCraftsmanship";
import BrandStoryEthos from "@/components/BrandStoryEthos";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#121316] text-white">
      <Navbar />
      <Hero />
      <DualCapability />
      <ProcessPipeline />
      <AudienceSolutions />
      <PortfolioSection />
      <InteractiveEstimator />
      <MaterialsCraftsmanship />
      <BrandStoryEthos />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
