'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { SectionTitle } from '@/components/SectionTitle';
import { newsItems } from '@/data/content';
import type { NewsCategory } from '@/types/content';
import { Calendar, Cross, MapPin, Megaphone, Tag } from 'lucide-react';

// Carga dinámica sin SSR (WebGL requiere el DOM del navegador)
const CircularGallery = dynamic(
  () => import('@/components/CircularGallery/CircularGallery'),
  { ssr: false }
);

const categoryConfig: Record<NewsCategory, { label: string; color: string; bgClass: string; icon: typeof Cross }> = {
  retiro: { label: 'Retiro', color: 'text-amber-800', bgClass: 'bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 bg-[length:200%_200%] animate-gradient', icon: Cross },
  recorrida: { label: 'Recorrida', color: 'text-emerald-800', bgClass: 'bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 bg-[length:200%_200%] animate-gradient', icon: MapPin },
  evento: { label: 'Evento', color: 'text-blue-800', bgClass: 'bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 bg-[length:200%_200%] animate-gradient', icon: Megaphone },
  general: { label: 'General', color: 'text-zinc-700', bgClass: 'bg-gradient-to-r from-zinc-100 via-stone-200 to-zinc-100 bg-[length:200%_200%] animate-gradient', icon: Tag },
};

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

export function NewsGrid() {
  return (
    <section id="novedades" className="relative w-full py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Novedades"
          subtitle="¡No te pierdas de nada! Enterate de todos nuestros retiros, recorridas y eventos."
          theme="light"
        />

        {/* Galería Circular WebGL */}
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

        {/* Tarjetas de novedades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {newsItems.map((item, i) => {
            const cat = categoryConfig[item.category];
            const CatIcon = cat.icon;

            return (
              <motion.article
                key={item.id}
                className={`group relative flex flex-col justify-between p-6 rounded-3xl border-2 border-white/50 ${cat.bgClass} shadow-md transition-all duration-300`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }} className="flex flex-col h-full">
                {/* Etiqueta de categoría */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/60 shadow-sm ${cat.color}`}>
                    <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                      <CatIcon className="w-3.5 h-3.5" />
                    </motion.div>
                    {cat.label}
                  </span>
                </div>

                {/* Contenido animado permanentemente */}
                <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-600 to-violet-600 bg-[length:200%_200%] animate-gradient mb-2 tracking-tight transition-all duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4 flex-1">
                  {item.summary}
                </p>

                {/* Fecha */}
                <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium pt-3 border-t border-zinc-200">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(item.date)}
                </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
