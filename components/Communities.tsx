'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { communities } from '@/data/content';
import { Music, CalendarDays, HeartHandshake, BookOpenText, UserPlus, Flame, Users, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Music,
  CalendarDays,
  HeartHandshake,
  BookOpenText,
};

const stages = [
  {
    title: 'Pre-Retiro',
    description: '¡El primer llamado! Nos preparamos a full y salimos a buscar a otros jóvenes para invitarlos a vivir algo único.',
    icon: UserPlus,
    color: 'text-zinc-700',
    bg: 'bg-ccr-pastel-mint'
  },
  {
    title: 'Retiro',
    description: 'Tres días para desconectarte de todo y conectar en serio con Cristo. ¡Dejate sorprender por su amor redentor!',
    icon: Flame,
    color: 'text-ccr-accent',
    bg: 'bg-ccr-pastel-rose'
  },
  {
    title: 'Post-Retiro',
    description: 'El retiro no termina, ¡recién arranca! Nos sumamos a la parroquia para seguir formándonos, sirviendo y creciendo en grupo.',
    icon: Users,
    color: 'text-zinc-800',
    bg: 'bg-ccr-pastel-blue'
  }
];

export function Communities() {
  return (
    <section id="comunidades" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="El Camino CCR" 
          subtitle="Así vivimos y compartimos nuestra fe, paso a paso."
          theme="dark"
        />

        {/* Etapas del Retiro (Timeline) */}
        <div className="mt-16 relative w-full">
          <div className="flex flex-row md:justify-between items-start overflow-x-auto snap-x snap-mandatory py-8 gap-6 md:gap-0 px-4 md:px-0 -mx-4 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {stages.map((stage, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center w-[85vw] max-w-[280px] min-w-[280px] md:w-auto flex-shrink-0 snap-center mx-auto"
              >
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(244,63,94,0.3)", "0px 0px 0px rgba(0,0,0,0)"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white ${stage.bg} ${stage.color} z-10`}
                >
                  <stage.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 mb-3">{stage.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed px-4 md:px-0">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Áreas de Perseverancia */}
        <div className="mt-24 pt-16 border-t border-zinc-800/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 mb-4 drop-shadow-sm">Comunidades de Perseverancia</h3>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Después del retiro nos sumamos a distintos espacios de la parroquia. ¡Hay lugar para todos los talentos y ganas de hacer lío!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((comm, idx) => {
              const Icon = iconMap[comm.icon] || Users;
              return (
                <motion.div
                  key={comm.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-gradient-to-br from-white to-rose-50 border-2 border-white/50 rounded-3xl p-6 shadow-md transition-all duration-300 group"
                >
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }} className="flex flex-col h-full">
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-200 to-orange-200 text-rose-700 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"
                  >
                    <Icon className="w-7 h-7 drop-shadow-sm" />
                  </motion.div>
                  <h4 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-orange-500 to-fuchsia-600 bg-[length:200%_200%] animate-gradient mb-2 transition-all">
                    {comm.name}
                  </h4>
                  <p className="text-sm text-zinc-600 mb-6 leading-relaxed line-clamp-3">
                    {comm.description}
                  </p>
                  <div className="flex items-center text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-auto">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    {comm.meetings}
                  </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-8 bg-gradient-to-r from-violet-100 via-fuchsia-100 to-rose-100 border-2 border-dashed border-fuchsia-300 rounded-3xl p-8 text-center flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all cursor-default"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowRight className="w-10 h-10 text-fuchsia-600 mb-4" />
            </motion.div>
            <h4 className="text-xl font-black text-fuchsia-900 mb-2">¡Siempre hay más por hacer!</h4>
            <p className="text-sm text-zinc-600 max-w-lg">
              El post-retiro es solo la puerta de entrada. Siempre estamos armando cosas nuevas en la Parroquia para que encuentres tu lugar y pongas tus dones en acción.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
