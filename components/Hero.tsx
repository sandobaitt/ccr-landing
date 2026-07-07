'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BlurText from '@/components/BlurText';
import { nextRetreat } from '@/data/content';

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-6 py-20 bg-transparent">

      {/* Fondo estético - Imagen (Activada) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/hero-bg.jpeg"
          alt="Fondo Cristo Redentor"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
        {/* Un gradiente oscuro para asegurar que el texto sea legible pero dejando ver la foto */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/30" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">

        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-950/50 text-red-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 border border-red-800/30">
            Parroquia Asunción · Resistencia
          </span>
          <div className="text-5xl sm:text-6xl md:text-[5.5rem] font-black font-serif text-zinc-50 tracking-tighter leading-[1.05] flex flex-col items-center">
            <BlurText
              text="Crecer con"
              delay={150}
              initialDelay={4.8}
              animateBy="words"
              direction="top"
              className="inline-block"
            />
            <BlurText
              text="Cristo Redentor"
              delay={250}
              initialDelay={4.8}
              animateBy="words"
              direction="top"
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 inline-block pb-2"
            />
          </div>
        </div>

        <motion.p
          className="max-w-2xl text-lg sm:text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          Unidos en comunidad, espiritualidad y acción social para llevar el amor redentor a los que más lo necesitan.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap w-full sm:w-auto items-center justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          {nextRetreat.open ? (
            <Link href={nextRetreat.formsLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto group shadow-lg shadow-red-900/20 text-base">
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Inscribirse al {nextRetreat.name}
              </Button>
            </Link>
          ) : (
            <div title="Inscripciones próximamente" className="w-full sm:w-auto">
              <Button size="lg" disabled className="w-full sm:w-auto group text-base opacity-70 cursor-not-allowed">
                <Calendar className="w-5 h-5 mr-2" />
                Inscripciones próximamente
              </Button>
            </div>
          )}


        </motion.div>

      </div>
    </section>
  );
}
