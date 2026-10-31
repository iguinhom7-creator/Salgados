import React from 'react';
import { Instagram, MapPin, ArrowUp, UtensilsCrossed } from 'lucide-react';

interface FooterProps {
  instagramUrl: string;
  address: string;
  neighborhoodCity: string;
}

export const Footer: React.FC<FooterProps> = ({
  instagramUrl,
  address,
  neighborhoodCity,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2c221e] text-[#ece5de] border-t border-[#3d2f2a] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#3d2f2a]">
          
          {/* Brand */}
          <div className="text-center md:text-left flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#3d2f2a] border border-[#523e35] flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-4 h-4 text-[#e6b15c]" />
            </div>
            <div>
              <a
                href="#inicio"
                className="text-2xl font-serif font-bold text-[#faf7f5] hover:text-[#dfd5cc] transition-colors"
              >
                Salgados da Geni
              </a>
              <p className="text-xs text-[#aa9282] mt-0.5 font-light">
                Salgados fresquinhos para festas e encomendas · Vespasiano - MG
              </p>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex items-center gap-6 text-xs text-[#dfd5cc]">
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Cardápio & Fotos</a>
            <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
            <a href="#contato" className="hover:text-white transition-colors">Fazer Pedido</a>
          </nav>

          {/* External social & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#3d2f2a] hover:bg-[#523e35] text-[#dfd5cc] hover:text-white transition-colors"
              aria-label="Instagram de Geni"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#3d2f2a] hover:bg-[#523e35] text-[#dfd5cc] hover:text-white transition-colors cursor-pointer"
              aria-label="Voltar ao topo"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#786054]">
          <p>© {new Date().getFullYear()} Salgados da Geni. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5 text-[#aa9282]">
            <MapPin className="w-3.5 h-3.5" />
            <span>{address}, {neighborhoodCity}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
