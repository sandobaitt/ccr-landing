'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/components/Button';
import BorderGlow from '@/components/BorderGlow/BorderGlow';
import { Calendar, Clock, MapPin, CheckCircle2, Ticket } from 'lucide-react';
import Link from 'next/link';
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
    setIsClient(true);
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
    <section id="retiro" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50 via-transparent to-transparent opacity-60"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title={`Próximo Retiro: ${nextRetreat.name}`}
          subtitle="Animate a vivir un fin de semana distinto, de encuentro con Cristo y con vos mismo."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <BorderGlow
              edgeSensitivity={30}
              glowColor="0 100 50"
              backgroundColor="#fcfcfc"
              borderRadius={24}
              glowRadius={40}
              glowIntensity={0.8}
              coneSpread={25}
              animated={true}
              colors={['#ef4444', '#f87171', '#dc2626']}
              className="w-full shadow-sm"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center">
                  <Clock className="w-5 h-5 text-red-600 mr-2" />
                  Falta cada vez menos...
                </h3>
                
                <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start">
                  {isClient ? timeBlocks.map((block, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-2xl sm:text-3xl font-black text-zinc-800">
                        {block.value.toString().padStart(2, '0')}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-500 mt-3 uppercase tracking-wider">
                        {block.label}
                      </span>
                    </div>
                  )) : (
                    <div className="h-[104px] sm:h-[120px] flex items-center text-zinc-400">
                      Cargando temporizador...
                    </div>
                  )}
                </div>
              </div>
            </BorderGlow>

            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900">Fecha del Retiro</h4>
                  <p className="text-zinc-600">Comienza el viernes por la tarde y finaliza el domingo.</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900">Lugar</h4>
                  <p className="text-zinc-600">Casa de Retiros (Se informará a los inscriptos).</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-zinc-200/50 border border-zinc-100"
          >
            <h3 className="text-2xl font-black text-zinc-900 mb-2">Requisitos y Detalles</h3>
            <p className="text-zinc-600 mb-6">
              Para jóvenes entre {nextRetreat.minAge} y {nextRetreat.maxAge} años.
            </p>

            <ul className="space-y-3 mb-8">
              {nextRetreat.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-700 font-medium">{req}</span>
                </li>
              ))}
            </ul>

            {nextRetreat.open ? (
              <Link href={nextRetreat.formsLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full shadow-lg shadow-red-900/20 group text-base">
                  <Ticket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Quiero Inscribirme
                </Button>
              </Link>
            ) : (
              <div title="Inscripciones próximamente" className="w-full">
                <Button size="lg" disabled className="w-full shadow-sm text-base opacity-70 cursor-not-allowed">
                  <Ticket className="w-5 h-5 mr-2" />
                  Inscripciones Próximamente
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
