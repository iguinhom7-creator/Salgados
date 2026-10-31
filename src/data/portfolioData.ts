import { PortfolioImage, StudioConfig } from '../types';

export const INITIAL_PORTFOLIO_IMAGES: PortfolioImage[] = [
  {
    id: 'flyer-geni',
    src: 'https://i.postimg.cc/7LSKxgMv/a8a5f3f4-1d22-4ee3-b3ff-a733a43d039b.jpg',
    alt: 'Salgados da Geni - Cardápio e Encomendas: Coxinhas, Kibes, Enroladinhos e muito mais',
    category: 'Cardápio Oficial & Encomendas'
  },
  {
    id: 'salgado-coxinhas',
    src: '/src/assets/images/salgados_coxinhas_golden_1793407852711.jpg',
    alt: 'Coxinhas douradas, crocantes e sequinhas com recheio cremoso e tempero caseiro',
    category: 'Coxinhas Crocantes'
  },
  {
    id: 'salgado-kibes',
    src: '/src/assets/images/salgados_kibes_party_1793407853097.jpg',
    alt: 'Kibes tradicionais bem temperados com hortelã fresca e carne selecionada',
    category: 'Kibes Tradicionais'
  },
  {
    id: 'salgado-assortment',
    src: '/src/assets/images/salgados_assortment_festa_1793407853750.jpg',
    alt: 'Sortimento completo de salgados para festas, aniversários, confraternizações e eventos',
    category: 'Salgados para Festa'
  }
];

export const STUDIO_CONFIG: StudioConfig = {
  instagramUrl: 'https://www.instagram.com/geni.2825?cplk=YWpnOXl1YThrZ2Jo',
  whatsappNumber: '31999043829', // Do panfleto oficial (31) 99904-3829
  address: 'Rua Muqui, 929',
  neighborhoodCity: 'São Damião, Vespasiano - MG',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Muqui%2C+929+-+S%C3%A3o+Dami%C3%A3o%2C+Vespasiano+-+MG'
};

export const MENU_HIGHLIGHTS = [
  {
    name: 'Coxinhas',
    description: 'Massa leve e douradinha, recheio farto de frango desfiado com tempero especial.',
    badge: 'Mais Pedido'
  },
  {
    name: 'Kibes',
    description: 'Tradicionais, crocantes por fora e macios por dentro, com toque de hortelã.',
    badge: 'Favorito'
  },
  {
    name: 'Enroladinhos',
    description: 'Enroladinhos de salsicha e queijo com presunto, sequinhos e irresistíveis.',
    badge: 'Especial'
  },
  {
    name: 'Salgados para Festa',
    description: 'Cento de salgados variados fritos na hora para seu evento ou confraternização.',
    badge: 'Encomendas'
  }
];
