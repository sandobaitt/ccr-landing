'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/components/Button';
import BorderGlow from '@/components/BorderGlow/BorderGlow';
import { Calendar, Clock, MapPin, Users, Ticket, Info } from 'lucide-react';

import { nextRetreat } from '@/data/content';

export function NextRetreat() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  useEffect(() => {
    const targetDate = new Date(nextRetreat.targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];

  return (
    <section id="retiro" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-950/30 via-transparent to-transparent opacity-60"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionTitle
          title={`Próximo Retiro: ${nextRetreat.name}`}
          subtitle="¡Animate a vivir un finde distinto! Un encuentro único con Cristo, con vos mismo y con otros jóvenes."
          align="center"
          theme="dark"
        />

        <div className="mt-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8 w-full max-w-2xl mx-auto"
          >
            <BorderGlow
              edgeSensitivity={30}
              glowColor="0 100 50"
              backgroundColor="#ffffff"
              borderRadius={24}
              glowRadius={40}
              glowIntensity={0.8}
              coneSpread={25}
              animated={false}
              colors={['#ef4444', '#f87171', '#dc2626']}
              className="w-full shadow-sm"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-6 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 animate-gradient bg-[length:200%_auto]">
                  <div>
                    <Clock className="w-6 h-6 text-red-500 mr-2 drop-shadow-sm" />
                  </div>
                  ¡Falta cada vez menos, prepará el corazón!
                </h3>

                <div className="flex gap-4 sm:gap-6 justify-center">
                  {isClient ? timeBlocks.map((block, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sky-100 to-violet-100 rounded-2xl shadow-lg border-2 border-white/60 flex items-center justify-center text-2xl sm:text-3xl font-black text-violet-900">
                        {block.value.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs sm:text-sm font-black text-violet-600 mt-3 uppercase tracking-widest drop-shadow-sm">
                        {block.label}
                      </span>
                    </div>
                  )) : (
                    <div className="h-[104px] sm:h-[120px] flex items-center justify-center text-zinc-500 w-full">
                      Cargando temporizador...
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-200 w-full flex items-center justify-center text-zinc-600">
                  <Users className="w-5 h-5 text-ccr-accent mr-2" />
                  <span className="font-medium">¡Si tenés entre {nextRetreat.minAge} y {nextRetreat.maxAge} años, este retiro es para vos!</span>
                </div>
              </div>
            </BorderGlow>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white via-rose-50/50 to-orange-50/30 rounded-3xl p-8 shadow-[0_20px_40px_rgba(244,63,94,0.1)] border border-rose-100 flex flex-col space-y-6"
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-ccr-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-zinc-900">¿Cuándo es?</h4>
                    <p className="text-zinc-600 text-sm mt-1">{nextRetreat.dateDescription}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-ccr-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-zinc-900">¿Dónde?</h4>
                    <p className="text-zinc-600 text-sm mt-1">{nextRetreat.locationDescription}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start bg-ccr-pastel-lavender/50 p-4 rounded-xl border border-ccr-pastel-lavender">
                <Info className="w-5 h-5 text-ccr-accent mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-sm text-zinc-700">
                  ¿Tenés alguna duda o querés saber más? ¡No dudes en escribirles a los <span className="text-zinc-900 font-bold">coordinadores</span> al final de la página, te están esperando!
                </p>
              </div>

              <div className="pt-2">
                <Button size="lg" disabled className="w-full text-base opacity-70 cursor-not-allowed">
                  <Ticket className="w-5 h-5 mr-2" />
                  ¡Pronto abrimos inscripciones!
                </Button>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
