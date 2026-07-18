'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { SectionTitle } from '@/components/SectionTitle';
import type { NewsCategory, NewsItem } from '@/types/content';
import { Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

// Carga dinámica sin SSR (WebGL requiere el DOM del navegador)
const CircularGallery = dynamic(
  () => import('@/components/CircularGallery/CircularGallery'),
  { ssr: false }
);

// Generic category styling is now used directly in the map

function formatDate(isoDate: string): string {
  const date = new Date(isoDate + 'T12:00:00');
  return date.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * i,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

// Imágenes representativas para la galería circular
const galleryItems = [
  { image: '/gallery/campamento.JPG', text: 'Campamento' },
  { image: '/gallery/encuentro.jpg', text: 'Encuentro' },
  { image: '/gallery/mision.jpg', text: 'Misión' },
  { image: '/gallery/oracion.jpeg', text: 'Oración' },
  { image: '/gallery/jovenes1.jpeg', text: 'Jóvenes' },
  { image: '/gallery/retiro.jpeg', text: 'Retiro Espiritual' },
  { image: '/gallery/parroquia.png', text: 'Parroquia' },
  { image: '/gallery/salida-solidaria2.jpeg', text: 'Recorrida Solidaria' },
];

interface NewsGridProps {
  newsItems: NewsItem[];
}

export function NewsGrid({ newsItems }: NewsGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    // Check initially
    checkDesktop();
    
    // Add event listener
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="novedades" className="relative w-full py-16 md:py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Novedades"
          subtitle="¡No te pierdas de nada! Enterate de todos nuestros retiros, recorridas y eventos."
        />

        {/* Galería Circular WebGL - Deshabilitada en móviles para evitar colapsos de GPU */}
        {isDesktop && (
          <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] -mx-6 sm:mx-0 mt-2 mb-12" style={{ width: 'calc(100% + 3rem)' }}>
            <CircularGallery
              items={galleryItems}
              bend={3}
              textColor="#1f2937"
              borderRadius={0.05}
              scrollEase={0.03}
              font="bold 24px sans-serif"
              fontUrl=""
            />
          </div>
        )}

        {/* Tarjetas de novedades (Carrusel deslizable) */}
        <div className="relative mt-8 group/carousel">
          
          {/* Botones de navegación (Desktop) */}
          {newsItems.length > 3 && (
            <>
              <button 
                onClick={() => scroll('left')}
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-zinc-200 items-center justify-center text-zinc-600 hover:text-ccr-accent hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100"
                aria-label="Noticias anteriores"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-zinc-200 items-center justify-center text-zinc-600 hover:text-ccr-accent hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100"
                aria-label="Siguientes noticias"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-8 -mx-6 px-6 hide-scrollbar scroll-smooth"
          >
            {newsItems.map((item, i) => {
              return (
                <motion.article
                  key={item._id || item.id || item.title}
                  className={`group relative flex flex-col justify-between p-6 rounded-3xl border-2 border-white/50 shadow-md transition-all duration-300 w-[280px] shrink-0 snap-center sm:w-[320px] overflow-hidden ${
                    item.imageUrl ? 'bg-zinc-900 text-white' : 'bg-gradient-to-r from-zinc-100 via-stone-200 to-zinc-100 bg-[length:200%_200%] animate-gradient'
                  }`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                >
                  {/* Imagen de fondo condicional */}
                  {item.imageUrl && (
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.title}
                        fill
                        className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                    </div>
                  )}

                  <div className="flex flex-col h-full relative z-10">
                    {/* Etiqueta de categoría */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
                        item.imageUrl ? 'bg-black/40 text-white backdrop-blur-sm border border-white/20' : 'bg-white/60 text-zinc-700'
                      }`}>
                        <Tag className="w-3.5 h-3.5" />
                        {item.category}
                      </span>
                    </div>

                    {/* Contenido animado permanentemente */}
                    <h3 className={`text-xl font-black mb-2 tracking-tight transition-all duration-200 ${
                      item.imageUrl 
                        ? 'text-white drop-shadow-md' 
                        : 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-600 to-violet-600 bg-[length:200%_200%] animate-gradient'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 flex-1 ${
                      item.imageUrl ? 'text-zinc-200 drop-shadow-sm' : 'text-zinc-600'
                    }`}>
                      {item.summary}
                    </p>

                    {/* Fecha */}
                    <div className={`flex items-center gap-2 text-xs font-medium pt-3 border-t ${
                      item.imageUrl ? 'text-zinc-300 border-white/20' : 'text-zinc-500 border-zinc-200'
                    }`}>
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
          {/* Indicador visual de scroll solo en móviles */}
          {newsItems.length > 2 && (
            <div className="absolute -bottom-2 left-0 right-0 text-center md:hidden">
              <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">← Deslizá para ver más →</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
