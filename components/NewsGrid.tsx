'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { newsItems } from '@/data/content';
import type { NewsCategory } from '@/types/content';
import { Calendar, Cross, MapPin, Megaphone, Tag } from 'lucide-react';

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

export function NewsGrid() {
  return (
    <section id="novedades" className="relative w-full py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Novedades"
          subtitle="Entérate de los próximos retiros, recorridas y eventos del movimiento."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {newsItems.map((item, i) => {
            const cat = categoryConfig[item.category];
            const CatIcon = cat.icon;

            return (
              <motion.article
                key={item.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-zinc-200 bg-white hover:shadow-xl hover:shadow-zinc-200/60 transition-shadow duration-300"
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
                <h3 className="text-lg font-bold text-zinc-900 mb-2 tracking-tight group-hover:text-red-700 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4 flex-1">
                  {item.summary}
                </p>

                {/* Fecha */}
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium pt-3 border-t border-zinc-100">
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
