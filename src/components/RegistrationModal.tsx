"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-background flex flex-col md:flex-row overflow-hidden"
        >
          {/* Lado Esquerdo - Visual (Oculto em telas menores) */}
          <div className="w-full md:w-1/2 bg-primary p-12 flex flex-col justify-between relative overflow-hidden hidden md:flex">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
             <motion.div 
                className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-white/10 blur-[120px] rounded-full mix-blend-overlay pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             ></motion.div>
             <motion.h2 
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] relative z-10"
             >
               NÃO<br/>DEIXE<br/>PRA<br/>DEPOIS.
             </motion.h2>
             <p className="text-xl text-white/90 font-medium relative z-10 max-w-sm">
               Garanta sua vaga na primeira corrida digital da Running Gang.
             </p>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="w-full md:w-1/2 h-full bg-card p-6 md:p-12 relative overflow-y-auto">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-4 bg-white/5 hover:bg-primary text-white rounded-full transition-colors z-20 group"
            >
              <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <div className="max-w-md mx-auto min-h-full flex flex-col justify-center pt-20 md:pt-0">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Pré-Inscrição</h3>
                <p className="text-white/50 mb-10 text-lg">Preencha seus dados para receber o link de inscrição com prioridade.</p>

                <form className="space-y-6" onSubmit={(e) => { 
                  e.preventDefault(); 
                  alert("Inscrição simulada com sucesso! Você está na lista de prioridade."); 
                  onClose(); 
                }}>
                  <div>
                    <label className="block text-sm font-bold text-white/70 uppercase mb-2">Nome Completo</label>
                    <input required type="text" className="w-full bg-background border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Como quer ser chamado?" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white/70 uppercase mb-2">E-mail</label>
                    <input required type="email" className="w-full bg-background border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white/70 uppercase mb-2">WhatsApp</label>
                    <input required type="text" className="w-full bg-background border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white/70 uppercase mb-2">Distância de Interesse</label>
                    <select className="w-full bg-background border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option>5 KM</option>
                      <option>10 KM</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white font-black uppercase tracking-widest text-lg overflow-hidden transition-all hover:bg-primary-dark mt-8 transform skew-x-[-10deg]">
                    <span className="skew-x-[10deg]">Garantir Vaga</span>
                    <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform skew-x-[10deg]" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
