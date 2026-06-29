"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-background relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-sans font-black text-white uppercase tracking-tighter">
            INSCRI<span className="text-primary">ÇÕES</span>
          </h2>
          <p className="mt-4 text-xl text-white/60">Abertura prevista para o final de julho. Data oficial em breve.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Kit Básico */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-white/10 p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Kit Básico</h3>
              <p className="text-white/50 mb-6">O essencial para completar seu desafio.</p>
              <div className="text-4xl font-black text-white mb-8">
                R$ 89<span className="text-lg text-white/50 font-medium">,00</span>
              </div>
              <ul className="space-y-4 mb-8 text-white/80">
                <li className="flex items-center gap-2">✓ Medalha Exclusiva</li>
                <li className="flex items-center gap-2">✓ Impressão DTF</li>
                <li className="flex items-center gap-2">✓ Acesso ao Ranking</li>
              </ul>
            </div>
            <button className="w-full py-4 bg-white/5 text-white font-bold uppercase hover:bg-white/10 transition-colors">
              Em Breve
            </button>
          </motion.div>

          {/* Kit Intermediário */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border-2 border-primary p-8 flex flex-col justify-between relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,69,0,0.15)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
              Mais Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Kit Gang</h3>
              <p className="text-white/50 mb-6">A experiência completa da Running Gang.</p>
              <div className="text-4xl font-black text-white mb-8">
                R$ 150<span className="text-lg text-white/50 font-medium">,00</span>
              </div>
              <ul className="space-y-4 mb-8 text-white/80">
                <li className="flex items-center gap-2">✓ Medalha Exclusiva</li>
                <li className="flex items-center gap-2">✓ Impressão DTF</li>
                <li className="flex items-center gap-2">✓ Camiseta Oficial</li>
                <li className="flex items-center gap-2">✓ Acesso ao Ranking</li>
              </ul>
            </div>
            <button className="w-full py-4 bg-primary text-white font-bold uppercase hover:bg-primary-dark transition-colors">
              Inscreva-se Agora
            </button>
          </motion.div>

          {/* Kit Premium */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-white/10 p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Kit Premium</h3>
              <p className="text-white/50 mb-6">Para quem respira corrida todos os dias.</p>
              <div className="text-4xl font-black text-white mb-8">
                R$ 250<span className="text-lg text-white/50 font-medium">,00</span>
              </div>
              <ul className="space-y-4 mb-8 text-white/80">
                <li className="flex items-center gap-2">✓ Medalha Exclusiva</li>
                <li className="flex items-center gap-2">✓ Impressão DTF</li>
                <li className="flex items-center gap-2">✓ Camiseta Oficial Premium</li>
                <li className="flex items-center gap-2">✓ Itens Extras Exclusivos</li>
                <li className="flex items-center gap-2">✓ Acesso ao Ranking</li>
              </ul>
            </div>
            <button className="w-full py-4 bg-white/5 text-white font-bold uppercase hover:bg-white/10 transition-colors">
              Em Breve
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
