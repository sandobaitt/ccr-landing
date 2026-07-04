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
    <section id="pilares" className="relative w-full py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Nuestros Pilares"
          subtitle="Tres ejes que guían nuestra misión como movimiento dentro de la Parroquia Asunción."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/60 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              {/* Icono */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-100 text-red-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-7 h-7" strokeWidth={1.8} />
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">
                {pillar.title}
              </h3>

              {/* Descripción */}
              <p className="text-base text-zinc-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
