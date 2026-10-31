/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppConfigModal } from './components/WhatsAppConfigModal';
import { INITIAL_PORTFOLIO_IMAGES, STUDIO_CONFIG } from './data/portfolioData';
import { PortfolioImage } from './types';

export default function App() {
  const [whatsappNumber, setWhatsappNumber] = useState<string>(STUDIO_CONFIG.whatsappNumber);
  const [images, setImages] = useState<PortfolioImage[]>(INITIAL_PORTFOLIO_IMAGES);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  // Load saved WhatsApp number & custom photos from localStorage if present
  useEffect(() => {
    try {
      const savedNumber = localStorage.getItem('geni_whatsapp_number');
      if (savedNumber) {
        setWhatsappNumber(savedNumber);
      } else {
        setWhatsappNumber(STUDIO_CONFIG.whatsappNumber);
      }

      const savedImages = localStorage.getItem('geni_portfolio_images_v2');
      if (savedImages) {
        const parsed = JSON.parse(savedImages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setImages(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSaveWhatsApp = (newNumber: string) => {
    setWhatsappNumber(newNumber);
    try {
      localStorage.setItem('geni_whatsapp_number', newNumber);
    } catch {
      // ignore
    }
  };

  const handleUpdateImages = (newImages: PortfolioImage[]) => {
    setImages(newImages);
    try {
      localStorage.setItem('geni_portfolio_images_v2', JSON.stringify(newImages));
    } catch {
      // ignore
    }
  };

  const handleResetImages = () => {
    setImages(INITIAL_PORTFOLIO_IMAGES);
    try {
      localStorage.removeItem('geni_portfolio_images_v2');
      localStorage.removeItem('geni_portfolio_images');
    } catch {
      // ignore
    }
  };

  const handleWhatsAppAction = () => {
    const targetNumber = whatsappNumber || STUDIO_CONFIG.whatsappNumber;
    const cleanNum = targetNumber.replace(/\D/g, '');
    const fullNumber = cleanNum.startsWith('55') ? cleanNum : `55${cleanNum}`;
    const text = encodeURIComponent('Olá Geni! Gostaria de fazer uma encomenda de salgados.');
    window.open(`https://wa.me/${fullNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const formatPhoneNumber = (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    if (cleaned.length === 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
    }
    return num;
  };

  return (
    <div className="min-h-screen bg-[#faf7f5] text-[#2c221e] flex flex-col selection:bg-[#dfd5cc] selection:text-[#2c221e]">
      {/* 3-Zone Top Navigation */}
      <Navbar onScheduleClick={handleWhatsAppAction} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Top / Hero with official flyer & photo */}
        <Hero
          onWhatsAppClick={handleWhatsAppAction}
          instagramUrl={STUDIO_CONFIG.instagramUrl}
        />

        {/* 2. Sobre Nós */}
        <About />

        {/* 3. Cardápio & Fotos (Carrossel Interativo) */}
        <PortfolioCarousel
          images={images}
          onUpdateImages={handleUpdateImages}
          onResetImages={handleResetImages}
        />

        {/* 4. Localização & Retirada */}
        <Location
          address={STUDIO_CONFIG.address}
          neighborhoodCity={STUDIO_CONFIG.neighborhoodCity}
          mapsUrl={STUDIO_CONFIG.mapsUrl}
        />

        {/* 5. Contato & Encomendas */}
        <Contact
          onWhatsAppClick={handleWhatsAppAction}
          onOpenConfig={() => setIsConfigOpen(true)}
          instagramUrl={STUDIO_CONFIG.instagramUrl}
          address={STUDIO_CONFIG.address}
          neighborhoodCity={STUDIO_CONFIG.neighborhoodCity}
          whatsappFormatted={formatPhoneNumber(whatsappNumber || STUDIO_CONFIG.whatsappNumber)}
        />
      </main>

      {/* Footer */}
      <Footer
        instagramUrl={STUDIO_CONFIG.instagramUrl}
        address={STUDIO_CONFIG.address}
        neighborhoodCity={STUDIO_CONFIG.neighborhoodCity}
      />

      {/* Floating WhatsApp Action Pill */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={handleWhatsAppAction}
          className="group flex items-center gap-2.5 px-4 py-3.5 bg-[#3d2f2a] hover:bg-[#2c221e] text-[#faf7f5] rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer border border-[#523e35]"
          aria-label="Fazer pedido no WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#e6b15c] group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline">
            Pedir no WhatsApp
          </span>
        </button>
      </div>

      {/* WhatsApp Configuration Modal */}
      <WhatsAppConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        currentNumber={whatsappNumber}
        onSave={handleSaveWhatsApp}
      />
    </div>
  );
}
