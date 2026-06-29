"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Dynamic Background Noise / Lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8"
        >
          <Activity className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary uppercase tracking-wider font-bold">
            UM EVENTO RUNNING GANG
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-sans font-black tracking-tighter text-foreground max-w-6xl leading-[0.9] uppercase"
        >
          NON<span className="text-primary">STOP</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-2xl md:text-4xl text-white/80 max-w-3xl font-sans font-semibold tracking-tight"
        >
          A corrida que cabe na sua vida.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-lg md:text-xl text-white/50 max-w-2xl font-sans"
        >
          5km ou 10km. Na rua, no parque ou na esteira. Você escolhe onde, quando e como. O importante é não parar.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-lg overflow-hidden transition-all hover:bg-primary-dark rounded-none transform skew-x-[-10deg]">
            <span className="skew-x-[10deg]">Quero Participar</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform skew-x-[10deg]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
