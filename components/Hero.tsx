'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Heart, Megaphone } from 'lucide-react';
import Link from 'next/link';
// import Image from 'next/image'; // Descomentar si se habilita la imagen de fondo
import BlurText from '@/components/BlurText';

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-6 py-20 bg-zinc-50">
      
      {/* Fondo estético - Descomenta esta sección si deseas usar una imagen de fondo en /public/hero-bg.jpg */}
      {/* 
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="Fondo Cristo Redentor"
          fill
          priority
          className="object-cover object-center opacity-10 filter grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-50/40 to-zinc-50" />
      </div>
      */}

      {/* Fondo estético - Patrón de puntos con difuminado (Por defecto) */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-zinc-50/50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-100 text-red-700 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 shadow-sm">
            Parroquia Asunción · Resistencia
          </span>
          <div className="text-5xl sm:text-6xl md:text-[5.5rem] font-black text-zinc-900 tracking-tighter leading-[1.05] flex flex-col items-center">
            <BlurText
              text="Crecer con"
              delay={150}
              animateBy="words"
              direction="top"
              className="inline-block"
            />
            <BlurText
              text="Cristo Redentor"
              delay={250}
              animateBy="words"
              direction="top"
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500 inline-block pb-2"
            />
          </div>
        </div>

        <motion.p 
          className="max-w-2xl text-lg sm:text-xl md:text-2xl text-zinc-600 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          Unidos en comunidad, espiritualidad y acción social para llevar el amor redentor a los que más lo necesitan.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <Link href="#novedades" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto group shadow-lg shadow-zinc-900/10 text-base">
              <Megaphone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ver Novedades
            </Button>
          </Link>
          <Link href="#ayudar" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto group bg-white hover:bg-zinc-50 border-zinc-300 text-base">
              <Heart className="w-5 h-5 mr-2 text-red-600 group-hover:scale-110 transition-transform" />
              Cómo Ayudar
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
