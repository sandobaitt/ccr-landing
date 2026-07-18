'use client';

import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { LogoLoop, LogoItem } from './LogoLoop/LogoLoop';
import { Flame } from 'lucide-react';

export interface ScheduleItemData {
  _id?: string;
  text: string;
  icon: string;
  color: 'rose' | 'orange' | 'violet' | 'blue' | 'emerald';
}

interface ScheduleTickerProps {
  scheduleItems: ScheduleItemData[];
}

export function ScheduleTicker({ scheduleItems }: ScheduleTickerProps) {
  const mappedItems: LogoItem[] = scheduleItems.map((item) => {
    // @ts-expect-error LucideIcons mapping
    const Icon: LucideIcon = LucideIcons[item.icon] || Flame;
    const colorClasses = {
      rose: 'text-rose-500 text-rose-600',
      orange: 'text-orange-500 text-orange-600',
      violet: 'text-violet-500 text-violet-600',
      blue: 'text-blue-500 text-blue-600',
      emerald: 'text-emerald-500 text-emerald-600',
    };
    
    // Split the color string to get the specific icon and text colors
    // Default to orange if not found
    const classStr = colorClasses[item.color] || colorClasses.orange;
    const [iconClass, textClass] = classStr.split(' ');

    return {
      node: (
        <div key={item._id || item.text} className="flex items-center gap-2 font-bold px-4 py-1.5">
          <Icon className={`w-4 h-4 ${iconClass}`} />
          <span className={textClass}>{item.text}</span>
        </div>
      ),
    };
  });

  // Si no hay horarios cargados o estamos esperando la carga, no renderizamos nada para no romper el layout
  if (!scheduleItems || scheduleItems.length === 0) {
    return null; 
  }

  return (
    <div className="w-full bg-white/90 backdrop-blur-md relative z-50 text-sm overflow-hidden flex items-center justify-center">
      <LogoLoop
        logos={mappedItems}
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
