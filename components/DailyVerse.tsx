'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { verses } from '@/data/content';

export function DailyVerse() {
  const [verseIndex, setVerseIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Calcular el día del año actual para rotar el versículo
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVerseIndex(dayOfYear % verses.length);
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // O un skeleton loader simple
  }

  const verse = verses[verseIndex];

  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-8 sm:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.05)] text-center group overflow-hidden"
        >
          {/* Fondo decorativo */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-ccr-pastel-lavender/30 rounded-full blur-3xl group-hover:bg-ccr-pastel-lavender/50 transition-colors duration-700"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-ccr-pastel-rose/30 rounded-full blur-3xl group-hover:bg-ccr-pastel-rose/50 transition-colors duration-700"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 bg-white/50 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-ccr-accent backdrop-blur-sm border border-white/50">
              <Quote className="w-6 h-6" />
            </div>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-800 leading-relaxed text-balance mb-6">
              {verse.text}
            </p>
            
            <div className="flex items-center space-x-3">
              <div className="h-px w-8 bg-zinc-300"></div>
              <span className="font-bold text-zinc-600 tracking-wide uppercase text-sm">
                {verse.reference}
              </span>
              <div className="h-px w-8 bg-zinc-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
