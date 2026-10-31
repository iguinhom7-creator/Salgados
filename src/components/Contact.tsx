import React from 'react';
import { MessageCircle, Instagram, MapPin, ArrowUpRight, PhoneCall } from 'lucide-react';

interface ContactProps {
  onWhatsAppClick: () => void;
  onOpenConfig: () => void;
  instagramUrl: string;
  address: string;
  neighborhoodCity: string;
  whatsappFormatted: string;
}

export const Contact: React.FC<ContactProps> = ({
  onWhatsAppClick,
  onOpenConfig,
  instagramUrl,
  address,
  neighborhoodCity,
  whatsappFormatted,
}) => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[#faf7f5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#3d2f2a] via-[#352823] to-[#2c221e] text-[#faf7f5] p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden border border-[#523e35]">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#e6b15c]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#786054]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#dfd5cc] block mb-3">
              Encomendas & Orçamentos
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#faf7f5] tracking-tight leading-tight mb-4 text-balance">
              Faça Já o Seu Pedido!
            </h2>

            <p className="text-base sm:text-lg text-[#ece5de] font-light leading-relaxed mb-4 max-w-xl mx-auto">
              Salgados fresquinhos, sequinhos e crocantes feitos com muito carinho.
            </p>

            {/* Direct phone highlight */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-[#e6b15c] text-sm sm:text-base font-mono font-semibold mb-8">
              <PhoneCall className="w-4 h-4 text-[#e6b15c]" />
              <span>WhatsApp: {whatsappFormatted || '(31) 99904-3829'}</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-10">
              <button
                onClick={onWhatsAppClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide text-[#2c221e] bg-[#faf7f5] hover:bg-white active:scale-[0.98] rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#3d2f2a]" />
                <span>Pedir pelo WhatsApp</span>
              </button>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-[#faf7f5] bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-xl transition-all cursor-pointer backdrop-blur-xs"
              >
                <Instagram className="w-5 h-5 text-[#dfd5cc]" />
                <span>Instagram @geni.2825</span>
                <ArrowUpRight className="w-4 h-4 text-[#dfd5cc]" />
              </a>
            </div>

            {/* Address & edit trigger */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-[#dfd5cc]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#aa9282]" />
                <span>{address} — {neighborhoodCity}</span>
              </div>
              
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              
              <button
                onClick={onOpenConfig}
                className="text-xs text-[#dfd5cc]/80 hover:text-white transition-colors underline cursor-pointer"
                title="Alterar número de telefone"
              >
                Ajustar número WhatsApp
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
