'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { HeartHandshake, MapPin, AlertTriangle, MessageCircle, Droplets } from 'lucide-react';
import type { SupplyItem, CoordinatorInfo } from '@/types/content';

interface DonationsProps {
  supplies: SupplyItem[];
  coordinators: CoordinatorInfo[];
}


const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Donations({ supplies, coordinators }: DonationsProps) {
  return (
    <section id="ayudar" className="relative w-full pt-8 pb-16 md:py-24 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Acción Social: Recorridas Nocturnas"
          subtitle="Tu aporte transforma realidades! Salimos al encuentro del hermano que más nos necesita"
        />

        {/* Banner Informativo Recorridas */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 bg-ccr-pastel-rose dark:bg-rose-950/30 border border-red-200 dark:border-red-900/40 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white dark:bg-zinc-900 text-ccr-accent dark:text-rose-400 rounded-full shrink-0 shadow-sm border border-transparent dark:border-rose-900/30">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Todos los Miércoles a las 20:30hs</h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              Visitamos plazas del centro, el Hospital Perrando y el Pediátrico acercando alimento, abrigo y contención.
            </p>
          </div>
        </motion.div>

        {/* Grid de Insumos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
          {supplies.map((item, i) => {
            // @ts-expect-error LucideIcons mapping
            const Icon: LucideIcon = LucideIcons[item.icon] || Droplets;

            return (
              <motion.div
                key={item._id || item.id || item.name}
                className={`relative flex items-start gap-4 p-5 rounded-2xl border transition-shadow duration-300 ${item.urgent
                  ? 'border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20 hover:shadow-md'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-md'
                  }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                {/* Icono */}
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 ${item.urgent
                    ? 'bg-red-100 dark:bg-red-900/30 text-ccr-accent dark:text-red-400'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                    }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {item.name}
                    </h3>
                    {item.urgent && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-0.5 rounded-full border border-transparent dark:border-red-800/50">
                        <AlertTriangle className="w-3 h-3" />
                        Urgente
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bloque de Contacto a Coordinadores */}
        <motion.div
          className="mt-12 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-ccr-pastel-mint dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                ¡Escribile a los coordis!
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Mandales un WhatsApp para sumarte a las recorridas, hacer una consulta o coordinar donaciones.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coordinators.map((coord) => (
              <div key={coord._id || coord.id || coord.name} className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {coord.role}
                </span>
                <a
                  href={`https://wa.me/${coord.phone.replace('+', '')}?text=${encodeURIComponent(coord.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-left text-sm transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 cursor-pointer"
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">{coord.name}</span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs font-mono group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{coord.phone}</span>
                  </div>
                  <MessageCircle className="w-5 h-5 text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors shrink-0" />
                </a>
              </div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
