'use client';

import { Flame, Clock, HeartHandshake } from 'lucide-react';
import { LogoLoop, LogoItem } from './LogoLoop/LogoLoop';

export function ScheduleTicker() {
  const scheduleItems: LogoItem[] = [
    {
      node: (
        <div className="flex items-center gap-2 font-bold px-4 py-1.5">
          <Clock className="w-4 h-4 text-rose-500" />
          <span className="text-rose-600">Domingos 20:00hs - Misa Parroquial</span>
        </div>
      ),
    },
    {
      node: (
        <div className="flex items-center gap-2 font-bold px-4 py-1.5">
          <Flame className="w-4 h-4 text-orange-500" />
          <span className="text-orange-600">1er Domingo - Misa Joven</span>
        </div>
      ),
    },
    {
      node: (
        <div className="flex items-center gap-2 font-bold px-4 py-1.5">
          <HeartHandshake className="w-4 h-4 text-violet-500" />
          <span className="text-violet-600">Jueves 21:30hs - Adoración Joven</span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white/90 backdrop-blur-md relative z-50 text-sm overflow-hidden flex items-center justify-center">
      <LogoLoop
        logos={scheduleItems}
        speed={40}
        direction="left"
        logoHeight={24}
        gap={40}
        hoverSpeed={0} // Pausar al hacer hover para que puedan leer bien
        fadeOut={false} // Sin fade out para que parezca una cinta sinfín completa
        className="w-full"
      />
    </div>
  );
}
