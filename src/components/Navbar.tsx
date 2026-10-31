import React, { useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  onScheduleClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScheduleClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Cardápio & Fotos', href: '#portfolio' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Fazer Pedido', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#faf7f5]/95 backdrop-blur-md border-b border-[#dfd5cc]/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Single element Brand Wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-2 text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#2c221e] hover:text-[#523e35] transition-colors whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#3d2f2a] text-[#f5f0eb] flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-4 h-4 text-[#e6b15c]" />
            </div>
            <span>Salgados da Geni</span>
          </a>

          {/* Zone 2: Clean single-line text links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#786054]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#2c221e] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onScheduleClick}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#faf7f5] bg-[#3d2f2a] hover:bg-[#2c221e] active:scale-[0.98] rounded-xl transition-all shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              Fazer Pedido
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#4a3a33] hover:text-[#2c221e] hover:bg-[#ece5de] rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#dfd5cc] bg-[#faf7f5] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#4a3a33]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#2c221e] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#dfd5cc]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScheduleClick();
                }}
                className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-[#faf7f5] bg-[#3d2f2a] rounded-xl text-center shadow-xs cursor-pointer"
              >
                Fazer Pedido no WhatsApp
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
