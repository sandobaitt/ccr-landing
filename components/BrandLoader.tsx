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

              {/* Contenedor Principal: CRIS + [+] + O */}
              {/* Le damos el tamaño de fuente al contenedor para usar 'em' en el espaciador */}
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
                    height="160"
                    viewBox="0 0 140 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible absolute"
                  >
                    {/* --- ELEMENTOS SÍMBOLOS --- */}

                    {/* Espíritu Santo (Aureola y Paloma) */}
                    <motion.circle
                      cx="70" cy="18" r="14"
                      stroke="#71717a" strokeWidth="2" strokeDasharray="3 3"
                      initial={{ opacity: 0, rotate: -45 }}
                      animate={{ opacity: [0, 0.8, 0], rotate: 0 }}
                      transition={{ duration: 3.1, times: [0, 0.7, 1], ease: 'easeInOut', delay: 0.2 }}
                    />
                    <motion.path
                      d="M 70 32 C 65 24, 55 20, 45 15 C 58 15, 64 18, 68 22 C 68 15, 72 15, 72 22 C 76 18, 82 15, 95 15 C 85 20, 75 24, 70 32 Z"
                      stroke="#fafafa" strokeWidth="2" strokeLinejoin="round" fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                      transition={{
                        pathLength: { duration: 1.0, ease: 'easeOut', delay: 0.2 },
                        opacity: { duration: 3.1, times: [0, 0.7, 1], ease: 'easeInOut', delay: 0.2 }
                      }}
                    />

                    {/* --- LANZA ROMANA (DERECHA) --- */}
                    <motion.path
                      d="M 28 135 L 90 53 L 94 56 L 108 31 L 86 46 L 90 53"
                      stroke="#a1a1aa" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="#3f3f46"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                      transition={{
                        pathLength: { duration: 0.8, ease: 'easeInOut', delay: 0.2 },
                        opacity: { duration: 3.1, times: [0, 0.7, 1], ease: 'easeInOut', delay: 0.2 }
                      }}
                    />

                    {/* --- CAÑA Y ESPONJA (IZQUIERDA) --- */}
                    <motion.path
                      d="M 112 135 L 48 50"
                      stroke="#71717a" strokeWidth="3.5" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                      transition={{
                        pathLength: { duration: 0.8, ease: 'easeInOut', delay: 0.2 },
                        opacity: { duration: 3.1, times: [0, 0.7, 1], ease: 'easeInOut', delay: 0.2 }
                      }}
                    />
                    <motion.path
                      d="M 44 54 C 38 58, 30 52, 32 44 C 34 36, 42 34, 48 40 C 54 46, 50 50, 44 54 Z M 38 46 A 1 1 0 1 1 38 46.1 Z M 44 48 A 1.5 1.5 0 1 1 44 48.1 Z"
                      stroke="#a1a1aa" strokeWidth="2.5" strokeLinejoin="round" fill="#27272a"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1, 1], opacity: [0, 1, 0] }}
                      transition={{
                        scale: { duration: 1.7, times: [0, 0.3, 1], ease: 'easeOut', delay: 0.4 },
                        opacity: { duration: 3.1, times: [0, 0.7, 1], ease: 'easeInOut', delay: 0.2 }
                      }}
                    />

                    {/* Monte Calvario */}
                    <motion.path
                      d="M 40 150 L 100 150 M 50 140 L 90 140 M 60 130 L 80 130"
                      stroke="#71717a" strokeWidth="4" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                      transition={{
                        pathLength: { duration: 0.9, ease: 'easeInOut', delay: 0.5 },
                        opacity: { duration: 3.1, times: [0, 0.7, 1], ease: 'easeInOut', delay: 0.2 }
                      }}
                    />

                    {/* --- CRUZ CENTRAL (SE MANTIENE COMO CRUZ) --- */}
                    <motion.path
                      d="M 70 40 L 70 130"
                      stroke="#fafafa" strokeWidth="14" strokeLinecap="square"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.7 }}
                    />

                    <motion.line
                      x1="30" y1="70" x2="110" y2="70"
                      stroke="#fafafa" strokeWidth="14" strokeLinecap="square"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.1 }}
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
                  
                  {/* Espaciador dinámico: empieza en 1.8em para balancear el ancho de "CRIS", luego colapsa a 0 para centrar la palabra */}
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