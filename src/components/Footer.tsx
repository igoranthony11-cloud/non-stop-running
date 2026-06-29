"use client";

import { ArrowRight } from "lucide-react";

export default function Footer({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-primary-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-sans font-black uppercase tracking-tighter mb-8 max-w-4xl leading-tight">
            Corra. Não pare. Seja <br/><span className="text-background opacity-50">RunningGang.</span>
          </h2>
          <p className="text-lg text-white/90 font-medium mb-10">Siga @runninggang_br e fique por dentro de todas as novidades da NONSTOP.</p>
          
          <button 
            onClick={onOpenModal}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-background text-white font-black uppercase tracking-widest text-lg overflow-hidden transition-all hover:bg-black rounded-none transform skew-x-[-10deg]"
          >
            <span className="skew-x-[10deg]">Quero Participar</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform skew-x-[10deg]" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-10 font-sans text-sm font-medium">
          <p>© {new Date().getFullYear()} Running Gang. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Strava Club</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
