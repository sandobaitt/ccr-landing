'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import ScrollFloat from './ScrollFloat/ScrollFloat';
import type { CommunityInfo } from '@/types/content';
import { UserPlus, Flame, Users, ArrowRight, Music, CalendarDays, HeartHandshake, BookOpenText, Church, Megaphone, Palette, Coffee, Tent } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Music,
  CalendarDays,
  HeartHandshake,
  BookOpenText,
  Church,
  Megaphone,
  Palette,
  Users,
  Coffee,
  Tent,
};
const stages = [
  {
    title: 'Pre-Crecer',
    description: '¡El primer llamado! Nos preparamos a full y salimos a buscar a mas jóvenes para invitarlos a vivir algo único',
    icon: UserPlus,
    color: 'text-zinc-700 dark:text-zinc-200',
    bg: 'bg-ccr-pastel-mint dark:bg-emerald-900/40'
  },
  {
    title: 'Crecer',
    description: 'Tres días para desconectarte de todo y conectarte en serio con Cristo y con vos. Que el Crecer te sorprenda...',
    icon: Flame,
    color: 'text-ccr-accent dark:text-rose-400',
    bg: 'bg-ccr-pastel-rose dark:bg-rose-900/40'
  },
  {
    title: 'Post-Crecer',
    description: 'El famoso cuarto dia. Seguimos yendo a la parro para seguir formándonos, sirviendo y creciendo en grupo',
    icon: Users,
    color: 'text-zinc-800 dark:text-zinc-200',
    bg: 'bg-ccr-pastel-blue dark:bg-sky-900/40'
  }
];

interface CommunitiesProps {
  communities: CommunityInfo[];
}

export function Communities({ communities }: CommunitiesProps) {
  return (
    <section id="comunidades" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="El Camino CCR"
          subtitle="De esta manera vivimos y compartimos nuestra fe, PASO a PASO"
        />

        {/* Etapas del Retiro (Timeline) */}
        <div className="mt-16 relative w-full">
          <div className="flex flex-row md:justify-between items-start overflow-x-auto snap-x snap-mandatory py-8 gap-6 md:gap-0 px-4 md:px-0 -mx-4 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center w-[85vw] max-w-[280px] min-w-[280px] md:w-auto flex-shrink-0 snap-center mx-auto"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(244,63,94,0.3)", "0px 0px 0px rgba(0,0,0,0)"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white dark:border-zinc-900/50 ${stage.bg} ${stage.color} z-10`}
                >
                  <stage.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 mb-3 text-balance">{stage.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed px-4 md:px-0">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Áreas de Perseverancia */}
        <div className="mt-24 pt-8">
          <div className="flex flex-col items-center text-center mb-12">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom"
              scrollEnd="top bottom-=30%"
              stagger={0.03}
              containerClassName="text-2xl sm:text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 mb-4 drop-shadow-sm text-balance"
            >
              Comunidades de Perseverancia
            </ScrollFloat>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-balance">
              Despues del Crecer la variedad de espacios para compartir son tremendos. Siempre abiertos a todo tipo de talentos y ganas de perseverar. Siempre hay lugar para uno mas...
            </p>
          </div>

          <div className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 px-4 -mx-4 md:px-0 md:mx-0 hide-scrollbar scroll-smooth">
            {communities.map((comm, idx) => {
              const Icon = iconMap[comm.icon] || Users;
              return (
                <motion.div
                  key={comm._id || comm.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-white to-rose-50 dark:from-zinc-900 dark:to-zinc-900 border-2 border-white/50 dark:border-zinc-800 rounded-3xl p-6 shadow-md transition-all duration-300 group w-[80vw] max-w-[300px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink-1"
                >
                  <div className="flex flex-col h-full">
                    <div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-200 to-orange-200 dark:from-rose-900/40 dark:to-orange-900/40 text-rose-700 dark:text-rose-400 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"
                    >
                      <Icon className="w-7 h-7 drop-shadow-sm" />
                    </div>
                    <h4 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-orange-500 to-fuchsia-600 dark:from-fuchsia-400 dark:via-orange-400 dark:to-fuchsia-400 bg-[length:200%_200%] animate-gradient mb-2 transition-all text-balance">
                      {comm.name}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed line-clamp-3">
                      {comm.description}
                    </p>
                    <div className="flex items-center text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-auto">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      {comm.meetings}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">
              ¡Y esto es solo el comienzo!
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-md mx-auto text-balance">
              Siempre estamos armando espacios nuevos en la parroquia para que encuentres tu lugar y pongas tus dones en acción.
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
