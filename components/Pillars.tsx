'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Church, Users, HandHeart } from 'lucide-react';

const pillars = [
  {
    icon: Church,
    title: 'Espiritualidad',
    description:
      'Profundizamos nuestra fe a través de retiros, oración comunitaria y formación espiritual redentorista.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description:
      'Construimos lazos fraternos que nos sostienen y fortalecen como familia en Cristo.',
  },
  {
    icon: HandHeart,
    title: 'Acción Social',
    description:
      'Llevamos el amor redentor a los barrios más vulnerables de Resistencia con recorridas y asistencia directa.',
  },
];

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

export function Pillars() {
  return (
    <section id="pilares" className="relative w-full py-24 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Nuestros Pilares"
          subtitle="Tres ejes que guían nuestra misión como movimiento dentro de la Parroquia Asunción."
          theme="dark"
        />

        <div className="flex flex-col gap-6 mt-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group relative flex flex-row items-center text-left p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 hover:shadow-xl hover:shadow-zinc-950/60 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              {/* Icono */}
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-red-950/50 text-red-400 mr-6 sm:mr-8 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.8} />
              </div>

              <div>
                {/* Título */}
                <h3 className="text-xl font-bold text-zinc-100 mb-2 tracking-tight">
                  {pillar.title}
                </h3>

                {/* Descripción */}
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
