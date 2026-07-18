'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Pillar {
  _id?: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  iconBg: string;
}

interface PillarsProps {
  pillars: Pillar[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Pillars({ pillars }: PillarsProps) {
  return (
    <section id="pilares" className="relative w-full py-16 md:py-24 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Nuestros Pilares"
          subtitle="Nuestra camino de fe se apoya en 3 columnas fundamentales:"
        />

        <div className="flex flex-col gap-6 mt-8">
          {pillars.map((pillar, i) => {
            // @ts-expect-error LucideIcons mapping
            const Icon: LucideIcon = LucideIcons[pillar.icon] || LucideIcons.Church;
            
            return (
              <motion.div
                key={pillar._id || pillar.title}
                className={`group relative flex flex-row items-center text-left p-6 sm:p-8 rounded-3xl border-2 border-white/50 bg-gradient-to-r bg-[length:200%_200%] animate-gradient ${pillar.gradient} shadow-lg transition-all duration-300`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                {/* Icono estático (solo se anima en hover) */}
                <div
                  className={`flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${pillar.iconBg} mr-6 sm:mr-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" strokeWidth={2.5} />
                </div>

                <div>
                  {/* Título animado continuamente */}
                  <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-600 to-violet-600 bg-[length:200%_200%] animate-gradient text-balance">
                    {pillar.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
