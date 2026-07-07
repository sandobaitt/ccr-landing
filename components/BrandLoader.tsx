'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function BrandLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-white select-none overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <div className="relative flex flex-col items-center justify-center w-full max-w-xl px-4 mx-auto">

              {/* Texto Superior: CRECER CON */}
              <motion.div
                className="text-sm sm:text-base md:text-lg font-bold tracking-[0.3em] text-zinc-400 mb-2 sm:mb-4 uppercase"
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 2.8, duration: 0.9, ease: 'easeOut' }}
              >
                Crecer con
              </motion.div>

              {/* Contenedor Principal: CRIS + [Cruz] + O */}
              <div className="flex items-center justify-center w-full max-w-full text-4xl sm:text-5xl md:text-[56px]">
                
                {/* Texto CRIS */}
                <motion.span
                  className="font-black tracking-widest text-zinc-50 leading-none z-20"
                  initial={{ opacity: 0, filter: 'blur(8px)', x: -20 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                  transition={{ delay: 2.3, duration: 0.8, ease: 'easeOut' }}
                >
                  CRIS
                </motion.span>

                {/* Contenedor de la Cruz Animada */}
                <motion.div
                  className="relative z-10 flex justify-center items-center w-12 sm:w-16 h-32 sm:h-40 mx-1 sm:mx-2"
                  initial={{ scale: 1.3, y: -10 }}
                  animate={{ scale: 0.55, y: 4 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 2.3 }}
                >
                  <svg
                    width="140"
                    height="200"
                    viewBox="0 0 140 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible absolute"
                  >
                    {/* ============================================= */}
                    {/* PALOMA (arriba, mirando a la izquierda)       */}
                    {/* Cuerpo principal de la paloma                  */}
                    {/* ============================================= */}
                    <motion.path
                      d="M 70 8 C 60 8, 52 12, 50 17 C 48 12, 52 6, 60 5 C 66 4, 72 6, 76 10 C 82 8, 90 8, 96 12 C 88 10, 82 12, 78 16 C 76 12, 73 9, 70 8 Z"
                      fill="#fafafa"
                      stroke="#fafafa" strokeWidth="1" strokeLinejoin="round"
                      initial={{ opacity: 0, scale: 0.5, y: -5 }}
                      animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 1] }}
                      transition={{ duration: 3.1, times: [0, 0.15, 0.7, 1], ease: 'easeInOut', delay: 0.1 }}
                    />
                    {/* Cabeza de la paloma */}
                    <motion.circle
                      cx="50" cy="16" r="5"
                      fill="#fafafa"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 1] }}
                      transition={{ duration: 3.1, times: [0, 0.15, 0.7, 1], ease: 'easeInOut', delay: 0.1 }}
                    />
                    {/* Ojo de la paloma */}
                    <motion.circle
                      cx="47" cy="14" r="1.2"
                      fill="#18181b"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 3.1, times: [0, 0.2, 0.7, 1], ease: 'easeInOut', delay: 0.2 }}
                    />
                    {/* Pico de la paloma */}
                    <motion.path
                      d="M 44 16 L 40 17 L 44 18 Z"
                      fill="#fafafa"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 3.1, times: [0, 0.2, 0.7, 1], ease: 'easeInOut', delay: 0.2 }}
                    />
                    {/* Ala extendida hacia arriba */}
                    <motion.path
                      d="M 58 10 C 64 2, 80 0, 95 4 C 82 3, 70 6, 65 12 Z"
                      fill="#fafafa"
                      stroke="#fafafa" strokeWidth="0.5"
                      initial={{ opacity: 0, rotate: -10, originX: '58px', originY: '10px' }}
                      animate={{ opacity: [0, 1, 1, 0], rotate: [-10, 0, 0, 0] }}
                      transition={{ duration: 3.1, times: [0, 0.2, 0.7, 1], ease: 'easeOut', delay: 0.15 }}
                    />
                    {/* Cola de la paloma */}
                    <motion.path
                      d="M 76 16 L 84 10 L 82 16 L 88 12 L 84 18 Z"
                      fill="#fafafa"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 3.1, times: [0, 0.2, 0.7, 1], ease: 'easeInOut', delay: 0.15 }}
                    />

                    {/* ============================================= */}
                    {/* LANZA (izquierda) — forma "A" más cerrada */}
                    {/* ============================================= */}
                    <motion.path
                      d="M 40 165 L 48 90"
                      stroke="#fafafa" strokeWidth="3" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                      transition={{
                        pathLength: { duration: 0.7, ease: 'easeInOut', delay: 0.2 },
                        opacity: { duration: 3.1, times: [0, 0.15, 0.7, 1], ease: 'easeInOut', delay: 0.2 }
                      }}
                    />
                    {/* Punta de lanza izquierda (flecha hacia arriba) */}
                    <motion.path
                      d="M 43 90 L 50 74 L 53 91 Z"
                      fill="#fafafa" stroke="#fafafa" strokeWidth="1" strokeLinejoin="round"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 1] }}
                      transition={{ duration: 3.1, times: [0, 0.2, 0.7, 1], ease: 'easeOut', delay: 0.3 }}
                    />

                    {/* ============================================= */}
                    {/* CAÑA con ESPONJA (derecha) — forma "A" más cerrada */}
                    {/* ============================================= */}
                    <motion.path
                      d="M 100 165 L 92 90"
                      stroke="#fafafa" strokeWidth="3" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                      transition={{
                        pathLength: { duration: 0.7, ease: 'easeInOut', delay: 0.2 },
                        opacity: { duration: 3.1, times: [0, 0.15, 0.7, 1], ease: 'easeInOut', delay: 0.2 }
                      }}
                    />
                    {/* Esponja (pequeño rectángulo vacío en la punta derecha) */}
                    <motion.rect
                      x="84" y="76" width="16" height="14" rx="3"
                      fill="transparent" stroke="#fafafa" strokeWidth="2.5"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 1] }}
                      transition={{ duration: 3.1, times: [0, 0.2, 0.7, 1], ease: 'easeOut', delay: 0.35 }}
                    />

                    {/* ============================================= */}
                    {/* LETRAS ΙΣ (izquierda) y ΧΣ (derecha) — todo blanco */}
                    {/* ============================================= */}
                    {/* IS - izquierda */}
                    <motion.text
                      x="8" y="118"
                      fontSize="14" fontFamily="serif" fill="#fafafa"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 3.1, times: [0, 0.3, 0.7, 1], ease: 'easeInOut', delay: 0.4 }}
                    >
                      ΙΣ
                    </motion.text>
                    {/* Barra sobre IS */}
                    <motion.line
                      x1="6" y1="103" x2="28" y2="103"
                      stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 3.1, times: [0, 0.3, 0.7, 1], ease: 'easeInOut', delay: 0.45 }}
                    />

                    {/* XC - derecha */}
                    <motion.text
                      x="104" y="118"
                      fontSize="14" fontFamily="serif" fill="#fafafa"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 3.1, times: [0, 0.3, 0.7, 1], ease: 'easeInOut', delay: 0.4 }}
                    >
                      ΧΣ
                    </motion.text>
                    {/* Barra sobre XC */}
                    <motion.line
                      x1="102" y1="103" x2="126" y2="103"
                      stroke="#fafafa" strokeWidth="1.5" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 3.1, times: [0, 0.3, 0.7, 1], ease: 'easeInOut', delay: 0.45 }}
                    />

                    {/* ============================================= */}
                    {/* MONTE CALVARIO (tres líneas en la base)       */}
                    {/* ============================================= */}
                    <motion.path
                      d="M 38 178 L 102 178 M 46 170 L 94 170 M 55 162 L 85 162"
                      stroke="#fafafa" strokeWidth="4" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                      transition={{
                        pathLength: { duration: 0.9, ease: 'easeInOut', delay: 0.5 },
                        opacity: { duration: 3.1, times: [0, 0.25, 0.7, 1], ease: 'easeInOut', delay: 0.3 }
                      }}
                    />

                    {/* ============================================= */}
                    {/* CRUZ REDENTORISTA (3 brazos: INRI, central, diagonal inf.) */}
                    {/* ============================================= */}

                    {/* Barra diagonal inferior (apoyo del pie) */}
                    <motion.line
                      x1="50" y1="150" x2="90" y2="138"
                      stroke="#fafafa" strokeWidth="10" strokeLinecap="square"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.65 }}
                    />

                    {/* Palo vertical principal */}
                    <motion.path
                      d="M 70 30 L 70 160"
                      stroke="#fafafa" strokeWidth="14" strokeLinecap="square"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.7 }}
                    />

                    {/* Brazo horizontal principal (central) */}
                    <motion.line
                      x1="28" y1="75" x2="112" y2="75"
                      stroke="#fafafa" strokeWidth="14" strokeLinecap="square"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.1 }}
                    />

                    {/* Brazo horizontal superior (del título INRI) */}
                    <motion.line
                      x1="46" y1="47" x2="94" y2="47"
                      stroke="#fafafa" strokeWidth="9" strokeLinecap="square"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: 'easeInOut', delay: 1.3 }}
                    />
                  </svg>
                </motion.div>

                {/* Texto O con Espaciador de Balance */}
                <div className="flex items-center">
                  <motion.span
                    className="font-black tracking-widest text-zinc-50 leading-none z-20"
                    initial={{ opacity: 0, filter: 'blur(8px)', x: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                    transition={{ delay: 2.3, duration: 0.8, ease: 'easeOut' }}
                  >
                    O
                  </motion.span>
                  
                  <motion.div
                    initial={{ width: "1.8em" }}
                    animate={{ width: 0 }}
                    transition={{ delay: 2.3, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Texto Inferior: REDENTOR */}
              <motion.div
                className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.4em] sm:tracking-[0.5em] text-red-600 mt-0 sm:mt-2 text-center uppercase ml-2"
                initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 2.8, duration: 0.9, ease: 'easeOut' }}
              >
                Redentor
              </motion.div>

              {/* Pilares de la Comunidad */}
              <motion.div
                className="absolute bottom-[-50px] sm:bottom-[-60px] text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500 text-center uppercase w-full"
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 3.2, duration: 0.9, ease: 'easeOut' }}
              >
                Comunidad • Espiritualidad • Servicio
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}