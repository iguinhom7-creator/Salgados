import React from 'react';
import { Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#f5f0eb] border-y border-[#dfd5cc]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#786054] block mb-2">
            Sobre Nós
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2c221e] tracking-tight">
            Sabor de Verdade em Vespasiano
          </h2>
          <div className="w-12 h-px bg-[#aa9282] mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-[#523e35] leading-relaxed font-light">
            No <strong>Salgados da Geni</strong>, cada salgado é preparado de forma artesanal com temperos frescos e ingredientes de primeira qualidade para garantir crocância, sabor e satisfação.
          </p>
        </div>

        {/* Visual Showcase & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Party Assortment Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-[#dfd5cc] shadow-md bg-[#ece5de] aspect-16/10">
              <img
                src="/src/assets/images/salgados_assortment_festa_1793407853750.jpg"
                alt="Sortimento de salgados fresquinhos para festa e eventos"
                className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c221e]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-[#faf7f5] flex items-center justify-between">
                <span>Coxinhas · Kibes · Enroladinhos</span>
                <span>Fritos na hora & Sequinhos</span>
              </div>
            </div>
          </div>

          {/* 3 Pillars from Flyer */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-5 rounded-xl bg-[#faf7f5] border border-[#dfd5cc]/80 transition-shadow hover:shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#ece5de] text-[#3d2f2a] shrink-0">
                  <Sparkles className="w-5 h-5 text-[#c47d2b]" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#2c221e] mb-1">
                    Ingredientes de Qualidade
                  </h3>
                  <p className="text-sm text-[#6e584d] leading-relaxed">
                    Carne temperada, frango desfiado com tempero caseiro e massa leve e saborosa que derrete na boca.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#faf7f5] border border-[#dfd5cc]/80 transition-shadow hover:shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#ece5de] text-[#3d2f2a] shrink-0">
                  <Heart className="w-5 h-5 text-[#c47d2b]" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#2c221e] mb-1">
                    Feitos com Muito Carinho
                  </h3>
                  <p className="text-sm text-[#6e584d] leading-relaxed">
                    Produção artesanal com atenção a cada formato, fritura sequinha e embalagem segura para entrega.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#faf7f5] border border-[#dfd5cc]/80 transition-shadow hover:shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#ece5de] text-[#3d2f2a] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#c47d2b]" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#2c221e] mb-1">
                    Tradição e Confiança
                  </h3>
                  <p className="text-sm text-[#6e584d] leading-relaxed">
                    Pontualidade e zelo para que seu aniversário, reunião ou lanche seja um momento especial.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
