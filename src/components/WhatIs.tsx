"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhatIs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section ref={ref} className="py-32 bg-card relative overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl text-primary font-bold tracking-widest uppercase mb-6">
            O que é a Non Stop?
          </h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-white leading-tight">
            Uma corrida digital pensada pra quem treina, compete e <span className="text-primary underline decoration-primary underline-offset-8">não para.</span>
          </p>
          <p className="mt-10 text-xl text-white/60 font-sans font-medium">
            Sem largada marcada, sem percurso fixo. Cada atleta decide onde correr e nós cuidamos do resto. Sua NONSTOP começa quando você decidir e termina quando você cruzar a sua própria linha de chegada, onde quer que ela seja.
          </p>
        </div>
      </div>

      {/* Kinetic Typography Background */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center opacity-5 pointer-events-none overflow-hidden">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap">
          <span className="text-[15vw] font-black uppercase tracking-tighter text-white">NÃO PARE NÃO PARE NÃO PARE NÃO PARE NÃO PARE</span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap -mt-10">
          <span className="text-[15vw] font-black uppercase tracking-tighter text-white">CORRA ONDE QUISER CORRA ONDE QUISER CORRA</span>
        </motion.div>
      </div>
    </section>
  );
}
