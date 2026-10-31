import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Plus, 
  RotateCcw, 
  Image as ImageIcon,
  ExternalLink 
} from 'lucide-react';
import { PortfolioImage } from '../types';

interface PortfolioCarouselProps {
  images: PortfolioImage[];
  onUpdateImages: (newImages: PortfolioImage[]) => void;
  onResetImages: () => void;
}

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({
  images,
  onUpdateImages,
  onResetImages,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [manageModalOpen, setManageModalOpen] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState('');
  
  // Touch / Drag swipe state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const total = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45; // px threshold

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (touchStartX.current && touchEndX.current) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50) {
        nextSlide();
      } else if (distance < -50) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Add custom Postimg photo
  const handleAddPostimgPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageUrl.trim()) return;
    
    let formattedUrl = newImageUrl.trim();
    const newImage: PortfolioImage = {
      id: `postimg-${Date.now()}`,
      src: formattedUrl,
      alt: `Salgados da Geni`,
      category: 'Foto do Cardápio',
    };

    onUpdateImages([...images, newImage]);
    setNewImageUrl('');
    setCurrentIndex(images.length); // switch to newly added slide
  };

  const handleRemovePhoto = (id: string) => {
    if (images.length <= 1) return;
    const filtered = images.filter((img) => img.id !== id);
    onUpdateImages(filtered);
    setCurrentIndex(0);
  };

  const currentImage = images[currentIndex] || images[0];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-[#faf7f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#dfd5cc]/80">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#786054] block mb-2">
              Galeria & Cardápio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2c221e] tracking-tight">
              Nossos Salgados
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#786054] tabular-nums tracking-widest">
              {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>

            {/* Custom Postimg Manager trigger */}
            <button
              onClick={() => setManageModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-[#786054] hover:text-[#2c221e] py-1 px-2.5 rounded-lg border border-[#dfd5cc] hover:bg-[#ece5de] transition-colors cursor-pointer"
              title="Gerenciar fotos do Postimg"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Fotos Postimg</span>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Visual Slide Frame */}
          <div
            className="relative rounded-2xl overflow-hidden border border-[#dfd5cc] bg-[#2c221e] shadow-xl select-none cursor-grab active:cursor-grabbing flex items-center justify-center min-h-[380px] sm:min-h-[460px] max-h-[580px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Image with smooth transition */}
            <img
              key={currentImage.id}
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-contain max-h-[580px] transition-opacity duration-300 ease-in-out"
              referrerPolicy="no-referrer"
              draggable={false}
              onError={(e) => {
                if (currentImage.id === 'flyer-geni') {
                  (e.currentTarget as HTMLImageElement).src = '/src/assets/images/user_provided_work.jpg';
                }
              }}
            />

            {/* Subtle Overlay gradient for controls visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

            {/* Zoom / Lightbox Trigger Button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-xs transition-colors cursor-pointer shadow-sm"
              aria-label="Expandir foto em tela cheia"
              title="Visualizar em tela cheia"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Navigation Arrows on Slide */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#2c221e] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#2c221e] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots & Swipe Hint */}
          <div className="flex items-center justify-between mt-5 px-2">
            <span className="text-xs text-[#786054] hidden sm:inline">
              Arraste com o mouse ou deslize no celular
            </span>

            {/* Indicators */}
            <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-8 bg-[#3d2f2a]' 
                      : 'w-2 bg-[#dfd5cc] hover:bg-[#aa9282]'
                  }`}
                  aria-label={`Ir para foto ${idx + 1}`}
                />
              ))}
            </div>

            <span className="text-xs text-[#786054] font-medium hidden sm:inline">
              {currentImage.category || 'Salgados da Geni'}
            </span>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
            {images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-20 sm:w-24 aspect-4/3 rounded-xl overflow-hidden border transition-all cursor-pointer bg-[#2c221e] ${
                  currentIndex === idx
                    ? 'border-[#3d2f2a] ring-2 ring-[#3d2f2a]/20 scale-102'
                    : 'border-[#dfd5cc] opacity-75 hover:opacity-100'
                }`}
                aria-label={`Ver foto ${idx + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (img.id === 'flyer-geni') {
                      (e.currentTarget as HTMLImageElement).src = '/src/assets/images/user_provided_work.jpg';
                    }
                  }}
                />
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Fechar visualização"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (currentImage.id === 'flyer-geni') {
                  (e.currentTarget as HTMLImageElement).src = '/src/assets/images/user_provided_work.jpg';
                }
              }}
            />
          </div>
        </div>
      )}

      {/* Postimg & Photos Management Modal */}
      {manageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-[#faf7f5] rounded-2xl border border-[#dfd5cc] shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setManageModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#786054] hover:text-[#2c221e] rounded-full hover:bg-[#ece5de] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#3d2f2a] text-[#faf7f5] flex items-center justify-center">
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-[#2c221e]">
                  Fotos dos Salgados (Postimg.cc)
                </h3>
                <p className="text-xs text-[#786054]">
                  Adicione fotos diretamente do seu álbum Postimg
                </p>
              </div>
            </div>

            <p className="text-xs text-[#523e35] mb-4 leading-relaxed">
              Você pode adicionar links diretos de imagens hospedadas no{' '}
              <a 
                href="https://postimg.cc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline font-semibold hover:text-[#2c221e] inline-flex items-center gap-0.5"
              >
                postimg.cc <ExternalLink className="w-3 h-3" />
              </a>
              {' '}(exemplo: <code>https://i.postimg.cc/7LSKxgMv/sua-foto.jpg</code>).
            </p>

            {/* Add new photo input */}
            <form onSubmit={handleAddPostimgPhoto} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="url"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="Cole aqui o link direto da imagem..."
                  className="flex-1 px-3.5 py-2.5 text-xs rounded-xl border border-[#dfd5cc] bg-white text-[#2c221e] placeholder-[#aa9282] focus:outline-hidden focus:ring-2 focus:ring-[#786054]/40"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-xs font-semibold text-[#faf7f5] bg-[#3d2f2a] hover:bg-[#2c221e] rounded-xl transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Adicionar</span>
                </button>
              </div>
            </form>

            {/* Current Photos List */}
            <div className="space-y-2 mb-6">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#786054]">
                Fotos Atuais ({images.length})
              </p>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {images.map((img, i) => (
                  <div 
                    key={img.id}
                    className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#dfd5cc] text-xs"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-10 h-10 rounded-lg object-cover shrink-0" 
                        referrerPolicy="no-referrer"
                      />
                      <span className="truncate max-w-[200px] text-[#4a3a33]">
                        {img.category || `Foto ${i + 1}`}
                      </span>
                    </div>

                    <button
                      onClick={() => handleRemovePhoto(img.id)}
                      disabled={images.length <= 1}
                      className="text-red-500 hover:text-red-700 disabled:opacity-30 p-1 cursor-pointer"
                      title="Remover foto"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#dfd5cc]">
              <button
                type="button"
                onClick={onResetImages}
                className="text-xs text-[#786054] hover:text-[#2c221e] inline-flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restaurar Fotos Padrão</span>
              </button>

              <button
                type="button"
                onClick={() => setManageModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-[#2c221e] bg-[#ece5de] hover:bg-[#dfd5cc] rounded-xl transition-colors cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
