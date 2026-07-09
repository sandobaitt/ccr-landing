'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Church, Users, HandHeart } from 'lucide-react';

const pillars = [
  {
    icon: Church,
    title: 'Espiritualidad',
    description:
      'Hacemos crecer nuestra fe con retiros, rezando juntos y formándonos con la chispa redentorista.',
    gradient: 'from-rose-100 via-orange-100 to-rose-100',
    iconBg: 'bg-rose-200 text-rose-700'
  },
  {
    icon: Users,
    title: 'Comunidad',
    description:
      'Armamos lazos de amistad verdaderos. Nos bancamos mutuamente porque somos una gran familia en Cristo.',
    gradient: 'from-fuchsia-100 via-purple-100 to-fuchsia-100',
    iconBg: 'bg-fuchsia-200 text-fuchsia-700'
  },
  {
    icon: HandHeart,
    title: 'Acción Social',
    description:
      'Salimos a la calle a llevar el amor de Jesús a los barrios de Resistencia que más nos necesitan. ¡Manos a la obra!',
    gradient: 'from-blue-100 via-cyan-100 to-blue-100',
    iconBg: 'bg-cyan-200 text-cyan-700'
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
    <section id="pilares" className="relative w-full py-16 md:py-24 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Nuestros Pilares"
          subtitle="Nuestra espiritualidad se apoya en 3 columnas fundamentales que guían cada paso que damos:"
        />

        <div className="flex flex-col gap-6 mt-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
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
                <pillar.icon className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm" strokeWidth={2.5} />
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
          ))}
        </div>
      </div>
    </section>
  );
}
