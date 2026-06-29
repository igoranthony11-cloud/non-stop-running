"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

export default function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-start pt-32 md:pt-40 overflow-hidden bg-background"
    >
      {/* Efeito 1: Lanterna Interativa (Mouse Spotlight) - Segue o cursor */}
      {isMounted && (
        <div 
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 hidden md:block"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 69, 0, 0.15), transparent 80%)`
          }}
        />
      )}

      {/* Efeito 2: Laser Drops / Speed Lines (Sensação tecnológica e de velocidade) */}
      <div className="absolute inset-0 z-0 opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <div className="absolute inset-0 flex justify-between px-2 md:px-20 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="h-full w-[1px] bg-white/5 relative">
              <motion.div
                className="absolute top-0 w-[2px] -ml-[0.5px] rounded-full bg-primary"
                style={{ 
                  height: Math.floor(Math.random() * 150) + 50,
                  opacity: Math.random() * 0.5 + 0.3
                }}
                initial={{ y: -300 }}
                animate={{ y: "100vh" }}
                transition={{
                  duration: Math.random() * 2 + 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 3,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,69,0,0.2)]"
        >
          <Activity className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm text-primary uppercase tracking-wider font-bold">
            UM EVENTO RUNNING GANG
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-9xl font-sans font-black tracking-tighter text-foreground max-w-6xl leading-[0.9] uppercase drop-shadow-2xl"
        >
          NON<span className="text-primary drop-shadow-[0_0_25px_rgba(255,69,0,0.4)]">STOP</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-xl md:text-4xl text-white/80 max-w-3xl font-sans font-semibold tracking-tight"
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
          <button 
            onClick={onOpenModal}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-lg overflow-hidden transition-all hover:bg-primary-dark rounded-none transform skew-x-[-10deg] shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_40px_rgba(255,69,0,0.6)]"
          >
            <span className="skew-x-[10deg]">Quero Participar</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform skew-x-[10deg]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
