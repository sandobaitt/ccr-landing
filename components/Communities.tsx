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
    description: 'El primer llamado. Nos preparamos espiritualmente y salimos al encuentro de los jóvenes para invitarlos a vivir una experiencia única.',
    icon: UserPlus,
    color: 'text-zinc-300',
    bg: 'bg-zinc-800'
  },
  {
    title: 'Retiro',
    description: 'Tres días de desconexión del mundo para conectar profundamente con Cristo, descubrir su amor redentor y sanar el corazón.',
    icon: Flame,
    color: 'text-red-400',
    bg: 'bg-red-950/50'
  },
  {
    title: 'Post-Retiro',
    description: 'El retiro no termina, recién empieza. Nos insertamos en la comunidad parroquial para formarnos, servir y crecer juntos (Perseverancia).',
    icon: Users,
    color: 'text-zinc-100',
    bg: 'bg-zinc-700'
  }
];

export function Communities() {
  return (
    <section id="comunidades" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="El Camino CCR" 
          subtitle="Nuestra propuesta pastoral se divide en tres etapas fundamentales."
          theme="dark"
        />

        {/* Etapas del Retiro (Timeline) */}
        <div className="mt-16 relative w-full">
          <div className="flex flex-row md:justify-between items-start md:items-center overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 gap-6 md:gap-0 px-4 md:px-0 -mx-4 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-zinc-800 -translate-y-1/2 z-0" />
            
            {stages.map((stage, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center w-[85vw] max-w-[280px] min-w-[280px] md:w-auto flex-shrink-0 snap-center mx-auto"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl border border-zinc-700/50 ${stage.bg} ${stage.color}`}>
                  <stage.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">{stage.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed px-4 md:px-0">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Áreas de Perseverancia */}
        <div className="mt-24 pt-16 border-t border-zinc-800/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4">Comunidades de Perseverancia</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Luego del retiro, los jóvenes se integran a diferentes comisiones y ministerios según sus carismas para mantener viva la llama.
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
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-950/30 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">{comm.name}</h4>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed line-clamp-3">
                    {comm.description}
                  </p>
                  <div className="flex items-center text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-auto">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    {comm.meetings}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-8 bg-zinc-800/30 border border-dashed border-zinc-700 rounded-2xl p-8 text-center flex flex-col items-center justify-center hover:bg-zinc-800/50 transition-colors cursor-default"
          >
            <ArrowRight className="w-8 h-8 text-zinc-500 mb-4" />
            <h4 className="text-lg font-bold text-zinc-300 mb-2">Futuras Actividades Parroquiales</h4>
            <p className="text-sm text-zinc-500 max-w-lg">
              El post-retiro es solo el comienzo. Continuamente abrimos nuevos espacios de servicio y formación dentro de la Parroquia para que cada joven encuentre su lugar según su carisma.
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
