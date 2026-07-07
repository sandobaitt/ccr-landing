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
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 pt-10 pb-32 bg-transparent">

      {/* Fondo estético - Removido completamente para evitar cortes en el fondo fijo */}

      {/* Orbes dopaminérgicos animados */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-50">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-fuchsia-300 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-orange-300 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-rose-300 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-5xl sm:text-6xl md:text-[5.5rem] font-black font-display tracking-tighter leading-[1.05] flex flex-col items-center drop-shadow-sm">
            <BlurText
              text="Crecer con"
              delay={150}
              initialDelay={4.8}
              animateBy="words"
              direction="top"
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 pb-2"
            />
            <BlurText
              text="Cristo Redentor"
              delay={250}
              initialDelay={4.8}
              animateBy="words"
              direction="top"
              className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 inline-block pb-2"
            />
          </div>
        </div>

        <motion.p
          className="max-w-2xl text-lg sm:text-xl md:text-2xl text-zinc-700 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          ¡Sumate a vivir en comunidad, crecer en espiritualidad y ponerte en acción para llevar el amor redentor donde más hace falta!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap w-full sm:w-auto items-center justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          {nextRetreat.open ? (
            <Link href={nextRetreat.formsLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <motion.div animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(244,63,94,0)", "0px 0px 20px rgba(244,63,94,0.6)", "0px 0px 0px rgba(244,63,94,0)"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="rounded-full">
                <Button size="lg" className="w-full sm:w-auto group shadow-lg shadow-red-200 text-base bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 border-none">
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  ¡Sumate al {nextRetreat.name}!
                </Button>
              </motion.div>
            </Link>
          ) : (
            <div title="Inscripciones próximamente" className="w-full sm:w-auto">
              <Button size="lg" disabled className="w-full sm:w-auto group text-base opacity-70 cursor-not-allowed">
                <Calendar className="w-5 h-5 mr-2" />
                ¡Pronto abrimos inscripciones!
              </Button>
            </div>
          )}


        </motion.div>

      </div>
    </section>
  );
}
