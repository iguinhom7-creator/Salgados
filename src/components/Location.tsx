import React, { useState } from 'react';
import { MapPin, ExternalLink, Copy, Check, Navigation, ShoppingBag } from 'lucide-react';

interface LocationProps {
  address: string;
  neighborhoodCity: string;
  mapsUrl: string;
}

export const Location: React.FC<LocationProps> = ({
  address,
  neighborhoodCity,
  mapsUrl,
}) => {
  const [copied, setCopied] = useState(false);
  const fullAddress = `${address} — ${neighborhoodCity}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedQuery = encodeURIComponent(`${address}, ${neighborhoodCity}`);
  const embedUrl = `https://maps.google.com/maps?q=${encodedQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="localizacao" className="py-16 md:py-24 bg-[#f5f0eb] border-t border-[#dfd5cc]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#786054] block mb-2">
            Localização & Retirada
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2c221e] tracking-tight">
            Onde Estamos
          </h2>
          <div className="w-12 h-px bg-[#aa9282] mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#6e584d] font-light">
            Retire sua encomenda fresquinha e quentinha no nosso endereço em Vespasiano.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-[#faf7f5] border border-[#dfd5cc] shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#3d2f2a] text-[#faf7f5] flex items-center justify-center mb-6 shadow-xs">
                <MapPin className="w-6 h-6 text-[#e6b15c]" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#786054] font-semibold">
                Ponto de Retirada
              </span>
              
              <h3 className="text-2xl font-serif font-bold text-[#2c221e] mt-1 mb-2">
                {address}
              </h3>
              
              <p className="text-base text-[#523e35] mb-6">
                {neighborhoodCity}
              </p>

              <div className="p-4 rounded-xl bg-[#ece5de]/60 border border-[#dfd5cc]/80 mb-6 text-xs text-[#6e584d] space-y-2 leading-relaxed">
                <div className="flex items-center gap-1.5 font-medium text-[#2c221e]">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#8a684b]" />
                  <span>Encomendas e Pronta-Entrega</span>
                </div>
                <p>Facilidade para retirar seus salgados fritos na hora ou programar seu pedido para o horário da sua festa.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#dfd5cc]">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#faf7f5] bg-[#3d2f2a] hover:bg-[#2c221e] rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#dfd5cc]" />
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#aa9282]" />
              </a>

              <button
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#4a3a33] hover:text-[#2c221e] bg-white hover:bg-[#ece5de] border border-[#dfd5cc] rounded-xl transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Endereço copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#786054]" />
                    <span>Copiar Endereço Completo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#dfd5cc] shadow-md bg-[#ece5de] min-h-[340px] relative">
            <iframe
              title="Localização de Salgados da Geni em Vespasiano"
              src={embedUrl}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[340px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <div className="absolute top-4 left-4 bg-[#faf7f5]/95 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-[#dfd5cc] shadow-xs text-xs text-[#2c221e] font-medium hidden sm:block">
              Rua Muqui, 929 · São Damião, Vespasiano - MG
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
