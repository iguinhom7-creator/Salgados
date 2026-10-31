import React from 'react';
import { MessageCircle, Instagram, ArrowUpRight, Flame, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onWhatsAppClick: () => void;
  instagramUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ onWhatsAppClick, instagramUrl }) => {
  return (
    <section id="inicio" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8a684b]">
                Salgados Artesanais · Vespasiano - MG
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2c221e] tracking-tight leading-[1.08] mb-5 text-balance">
              Salgados da Geni
            </h1>

            <p className="text-xl sm:text-2xl font-serif italic text-[#78593a] mb-4">
              “Sabor e qualidade em cada mordida!”
            </p>

            <p className="text-base sm:text-lg font-light text-[#523e35] max-w-xl leading-relaxed mb-8">
              Salgados fresquinhos e crocantes feitos com muito carinho para festas, confraternizações, aniversários e encomendas no dia a dia.
            </p>

            {/* Quick Specialities List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 w-full max-w-md">
              <div className="flex items-center gap-2 text-xs font-medium text-[#3d2f2a] bg-[#ece5de]/80 px-3 py-2 rounded-xl border border-[#dfd5cc]">
                <Flame className="w-3.5 h-3.5 text-[#c47d2b]" />
                <span>Coxinhas</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#3d2f2a] bg-[#ece5de]/80 px-3 py-2 rounded-xl border border-[#dfd5cc]">
                <Flame className="w-3.5 h-3.5 text-[#c47d2b]" />
                <span>Kibes</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#3d2f2a] bg-[#ece5de]/80 px-3 py-2 rounded-xl border border-[#dfd5cc]">
                <Flame className="w-3.5 h-3.5 text-[#c47d2b]" />
                <span>Enroladinhos</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onWhatsAppClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#faf7f5] bg-[#3d2f2a] hover:bg-[#2c221e] active:scale-[0.98] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#e6b15c]" />
                <span>Pedir no WhatsApp (31) 99904-3829</span>
              </button>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#3d2f2a] bg-white/80 hover:bg-white border border-[#dfd5cc] hover:border-[#aa9282] rounded-xl transition-all cursor-pointer shadow-2xs"
              >
                <Instagram className="w-4 h-4 text-[#786054]" />
                <span>Instagram @geni.2825</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#aa9282]" />
              </a>
            </div>

            {/* Subtle Zero-Pill Trust Line */}
            <div className="mt-8 pt-6 border-t border-[#dfd5cc]/70 flex flex-wrap items-center gap-3 text-xs text-[#786054] font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8a684b]" />
                Ingredientes de qualidade
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8a684b]" />
                Feitos com carinho
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8a684b]" />
                Tradição & confiança
              </span>
            </div>
          </div>

          {/* Right Column: Visual Frame with the official flyer photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative warm aura glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#dfd5cc]/60 via-[#ecd7ba]/50 to-transparent rounded-3xl -z-10 blur-xl transform rotate-1" />
              
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#dfd5cc] bg-[#2c221e] shadow-2xl">
                <img
                  src="https://i.postimg.cc/7LSKxgMv/a8a5f3f4-1d22-4ee3-b3ff-a733a43d039b.jpg"
                  onError={(e) => {
                    // Fallback to local copy
                    (e.currentTarget as HTMLImageElement).src = '/src/assets/images/user_provided_work.jpg';
                  }}
                  alt="Salgados da Geni - Panfleto Oficial com WhatsApp e fotos dos salgados fresquinhos"
                  className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption pill banner */}
              <div className="mt-3 text-center">
                <p className="text-xs text-[#786054] font-medium">
                  Foto Oficial · Pedidos via WhatsApp: <strong className="text-[#2c221e]">(31) 99904-3829</strong>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
