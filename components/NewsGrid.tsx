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

const categoryConfig: Record<NewsCategory, { label: string; color: string; icon: typeof Cross }> = {
  retiro: { label: 'Retiro', color: 'bg-amber-100 text-amber-800', icon: Cross },
  recorrida: { label: 'Recorrida', color: 'bg-emerald-100 text-emerald-800', icon: MapPin },
  evento: { label: 'Evento', color: 'bg-blue-100 text-blue-800', icon: Megaphone },
  general: { label: 'General', color: 'bg-zinc-100 text-zinc-700', icon: Tag },
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
          subtitle="Entérate de los próximos retiros, recorridas y eventos del movimiento."
          theme="dark"
        />

        {/* Galería Circular WebGL */}
        <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] -mx-6 sm:mx-0 mt-2 mb-12" style={{ width: 'calc(100% + 3rem)' }}>
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
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
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-zinc-800 bg-zinc-900 hover:shadow-xl hover:shadow-zinc-800/40 transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                {/* Etiqueta de categoría */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${cat.color}`}>
                    <CatIcon className="w-3.5 h-3.5" />
                    {cat.label}
                  </span>
                </div>

                {/* Contenido */}
                <h3 className="text-lg font-bold text-zinc-100 mb-2 tracking-tight group-hover:text-red-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">
                  {item.summary}
                </p>

                {/* Fecha */}
                <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium pt-3 border-t border-zinc-800">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(item.date)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
