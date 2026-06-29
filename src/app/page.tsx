"use client";

import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import HowItWorks from "@/components/HowItWorks";
import Kits from "@/components/Kits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <WhatIs />
      <HowItWorks />
      <Kits />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
