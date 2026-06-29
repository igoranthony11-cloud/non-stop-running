"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Kits() {
  return (
    <section className="py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
              <div className="w-full h-full border border-primary/20 rounded-full flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm relative z-10 shadow-2xl">
                <Star className="w-32 h-32 text-primary drop-shadow-[0_0_15px_rgba(255,69,0,0.5)]" fill="currentColor" />
                <h3 className="text-3xl font-black text-white mt-8 uppercase tracking-widest text-center px-4">
                  A ESTRELA
                </h3>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-sans font-black text-white uppercase tracking-tighter mb-8">
              BUSQUE SUA <br/><span className="text-primary">ESTRELA</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed font-sans">
              Depois de cruzar sua linha de chegada, é hora de buscar sua estrela: o kit pós-prova NONSTOP.
            </p>
            
            <ul className="space-y-6">
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                <p className="text-lg text-white/90"><strong>Todo atleta recebe:</strong> medalha exclusiva + DTF.</p>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                <p className="text-lg text-white/90"><strong>Kits superiores incluem:</strong> camiseta e itens extras, variando conforme o kit escolhido.</p>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                <p className="text-lg text-white/50 italic">Mostre o comprovante no ponto de retirada e receba seu kit pós-prova.</p>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
