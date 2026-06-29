"use client";

import { motion } from "framer-motion";
import { MapPin, Route, Calendar, Watch, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Route className="w-8 h-8 text-primary" />,
      title: "1. Escolha sua distância",
      desc: "5km ou 10km, no ritmo que fizer sentido pra você. Não tem certo ou errado: escolha o desafio que faz sentido pra sua fase."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "2. Escolha onde correr",
      desc: "Rua, parque, trilha ou esteira da academia. O lugar é você quem decide. Pode até ser do seu prédio até a padaria!"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "3. Corra dentro do prazo",
      desc: "Sem dia marcado. Complete sua distância dentro do período da prova (a partir do final de julho)."
    },
    {
      icon: <Watch className="w-8 h-8 text-primary" />,
      title: "4. Guarde o comprovante",
      desc: "Print do app de corrida (Strava, Nike Run Club ou outro) com data, distância e tempo. É como tirar uma foto da prova."
    }
  ];

  return (
    <section className="py-32 bg-background relative border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-sans font-black text-white uppercase tracking-tighter">
            COMO <span className="text-primary">FUNCIONA</span>
          </h2>
          <p className="mt-6 text-xl text-white/50 max-w-2xl mx-auto">
            Explicado bem fácil. 4 passos simples para sua primeira corrida digital.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-start p-8 rounded-lg bg-card border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
