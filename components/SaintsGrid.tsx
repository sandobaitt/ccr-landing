'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { saints } from '@/data/content';
import { SaintInfo } from '@/types/content';
import { X } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import Stack from './Stack';

export function SaintsGrid() {
  const [selectedSaint, setSelectedSaint] = useState<SaintInfo | null>(null);

  return (
    <section className="py-16 md:py-24 bg-transparent text-zinc-900 relative overflow-hidden" id="santos">
      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-red-600 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <SectionTitle 
            title="Nuestras Raíces" 
            subtitle="Santos Redentoristas" 
          />
          <p className="text-zinc-600 max-w-2xl mx-auto mt-4">
            Nuestra espiritualidad y servicio se inspiran en la vida de los grandes santos redentoristas. ¡Conocé a los referentes que nos marcan el camino!
          </p>
        </div>

        {/* Contenedor del Stack interactivo */}
        <div className="flex justify-center items-center h-[500px] w-full max-w-sm mx-auto">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false} // El click no lo envía atrás, abre el modal
            cards={saints.map((saint) => (
              <div 
                key={saint.id} 
                className="w-full h-full relative group cursor-pointer select-none"
                draggable={false}
                style={{ WebkitUserDrag: 'none', userSelect: 'none' } as any}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSaint(saint);
                }}
                onDragStart={(e) => e.preventDefault()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={saint.imageUrl} 
                  alt={saint.name} 
                  className="w-full h-full object-cover pointer-events-none select-none"
                  draggable={false}
                  style={{ WebkitUserDrag: 'none', userSelect: 'none' } as any}
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                  <h3 className="font-bold text-2xl text-white mb-1 shadow-black drop-shadow-md">
                    {saint.name}
                  </h3>
                  <p className="text-red-400 font-semibold shadow-black drop-shadow-md">
                    {saint.title}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between opacity-80">
                    <span className="text-xs text-zinc-400 font-medium tracking-wider uppercase">
                      Deslizá para descartar
                    </span>
                    <span className="text-xs text-white bg-red-600/80 px-3 py-1.5 rounded-full font-bold backdrop-blur-sm shadow-lg pointer-events-auto cursor-pointer"
                          style={{ pointerEvents: 'auto' }} // Permitimos click directo aquí también
                    >
                      Conocelo →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          />
        </div>
      </div>

      {/* Modal Interactivo */}
      <AnimatePresence>
        {selectedSaint && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSaint(null)}
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                className="bg-white border border-zinc-200 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative max-h-[90vh] flex flex-col"
                layoutId={`saint-modal-${selectedSaint.id}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                {/* Botón Cerrar */}
                <button 
                  onClick={() => setSelectedSaint(null)}
                  className="absolute top-4 right-4 p-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-800 rounded-full transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-8 sm:p-10 overflow-y-auto custom-scrollbar">
                  <div className="mb-8">
                    <h2 className="text-3xl font-black text-zinc-900 mb-2">
                      {selectedSaint.name}
                    </h2>
                    <p className="text-red-500 font-bold uppercase tracking-wider text-sm">
                      {selectedSaint.title}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-zinc-900 font-semibold mb-2 flex items-center">
                        <span className="w-8 h-[2px] bg-red-600 mr-3"></span>
                        ¿Quién fue?
                      </h4>
                      <p className="text-zinc-700 leading-relaxed text-sm sm:text-base">
                        {selectedSaint.fullBiography}
                      </p>
                    </div>
                    
                    <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                      <h4 className="text-zinc-900 font-semibold mb-2 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-red-600 mr-3"></span>
                        Su huella en el CCR
                      </h4>
                      <p className="text-zinc-700 leading-relaxed text-sm sm:text-base">
                        {selectedSaint.connectionToCharism}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Gradient Fade for Scroll */}
                <div className="h-8 bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 w-full pointer-events-none" />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
