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
    <section id="retiro" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-950/30 via-transparent to-transparent opacity-60"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionTitle
          title={`Próximo Retiro: ${nextRetreat.name}`}
          subtitle="Animate a vivir un fin de semana distinto, de encuentro con Cristo y con vos mismo."
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
              backgroundColor="#18181b"
              borderRadius={24}
              glowRadius={40}
              glowIntensity={0.8}
              coneSpread={25}
              animated={true}
              colors={['#ef4444', '#f87171', '#dc2626']}
              className="w-full shadow-sm"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-zinc-100 mb-6 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-red-500 mr-2" />
                  Falta cada vez menos...
                </h3>

                <div className="flex gap-4 sm:gap-6 justify-center">
                  {isClient ? timeBlocks.map((block, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-800 rounded-2xl shadow-sm border border-zinc-700 flex items-center justify-center text-2xl sm:text-3xl font-black text-zinc-100">
                        {block.value.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-500 mt-3 uppercase tracking-wider">
                        {block.label}
                      </span>
                    </div>
                  )) : (
                    <div className="h-[104px] sm:h-[120px] flex items-center justify-center text-zinc-500 w-full">
                      Cargando temporizador...
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 w-full flex items-center justify-center text-zinc-300">
                  <Users className="w-5 h-5 text-red-500 mr-2" />
                  <span className="font-medium">Para jóvenes de entre {nextRetreat.minAge} a {nextRetreat.maxAge} años.</span>
                </div>
              </div>
            </BorderGlow>

            <div className="bg-zinc-800/50 rounded-3xl p-8 shadow-xl shadow-zinc-950/50 border border-zinc-700/50 flex flex-col space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-zinc-100">Fecha del Retiro</h4>
                    <p className="text-zinc-400 text-sm mt-1">{nextRetreat.dateDescription}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-zinc-100">Lugar</h4>
                    <p className="text-zinc-400 text-sm mt-1">{nextRetreat.locationDescription}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                <Info className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-sm text-zinc-400">
                  Para más información, dudas o consultas, podés comunicarte a los números de los <span className="text-zinc-200 font-semibold">coordinadores</span> que se encuentran al final de la página.
                </p>
              </div>

              <div className="pt-2">
                <Button size="lg" disabled className="w-full text-base opacity-70 cursor-not-allowed">
                  <Ticket className="w-5 h-5 mr-2" />
                  Inscripciones Próximamente
                </Button>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
