"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Preciso ser rápido pra participar?",
      a: "Não! Não tem prêmio pra quem chega primeiro. O desafio é completar a distância, no seu ritmo."
    },
    {
      q: "E se eu não tiver Strava?",
      a: "Sem problema. Qualquer app que mostre data, distância e tempo serve (Nike Run Club, Garmin, relógio esportivo, etc.)."
    },
    {
      q: "Posso correr na esteira da academia?",
      a: "Pode! Rua, parque, trilha ou esteira. Você escolhe onde."
    },
    {
      q: "Quando começa a NONSTOP?",
      a: "A previsão é final de julho. A data oficial sai em breve."
    },
    {
      q: "Quanto custa pra participar?",
      a: "Temos várias opções de kit, com preços diferentes, do mais simples ao mais completo. A partir de R$ 89,00, com kits de até R$ 250,00."
    },
    {
      q: "Onde eu pego meu kit depois?",
      a: "Em um ponto de retirada. Você leva o comprovante da sua corrida (print do app) e busca sua medalha e os outros itens do seu kit."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-card relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-sans font-black text-white uppercase tracking-tighter">
            PERGUNTAS <span className="text-primary">FREQUENTES</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-white/5 bg-background/50 hover:border-primary/20 transition-colors"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-white text-lg tracking-tight">{faq.q}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-white/60">
                      <p>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
