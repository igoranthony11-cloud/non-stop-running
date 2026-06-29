"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import HowItWorks from "@/components/HowItWorks";
import Kits from "@/components/Kits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-background min-h-screen">
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <WhatIs />
      <HowItWorks />
      <Kits />
      <Pricing onOpenModal={() => setIsModalOpen(true)} />
      <FAQ />
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
