import { MapPin, Clock, AtSign } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        <div className="flex-1">
          <h3 className="font-black text-2xl text-zinc-100 mb-3 tracking-tight">Crecer con Cristo Redentor</h3>
          <p className="text-zinc-500 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
            Movimiento de la Parroquia Nuestra Señora de la Asunción, dedicado a la espiritualidad, vida en comunidad y acción social.
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <Link
              href="https://www.instagram.com/crecerconcristoredentor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-red-400 hover:bg-red-950/30 transition-colors border border-zinc-700/50"
            >
              <AtSign className="w-5 h-5" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 leading-none mb-0.5">Instagram</p>
                <p className="text-sm font-bold leading-none">crecerconcristoredentor</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-end">
          <h4 className="font-bold text-lg text-zinc-100 mb-6 uppercase tracking-wider text-sm">Secretaría Parroquial</h4>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 justify-center md:justify-end text-zinc-400">
              <div className="text-center md:text-right order-2 md:order-1">
                <p className="font-bold text-zinc-300">Dirección</p>
                <p className="text-sm mt-1">Asunción 55</p>
                <p className="text-sm text-zinc-500">Resistencia, Chaco</p>
              </div>
              <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0 md:mt-0.5 order-1 md:order-2" />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 justify-center md:justify-end text-zinc-400">
              <div className="text-center md:text-right order-2 md:order-1">
                <p className="font-bold text-zinc-300">Horarios de Atención</p>
                <p className="text-sm mt-1">Lunes a Viernes</p>
                <p className="text-sm text-zinc-500">08:30 a 12:00 hs · 16:30 a 20:00 hs</p>
              </div>
              <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0 md:mt-0.5 order-1 md:order-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Movimiento CCR. Todos los derechos reservados. By Sando</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Parroquia Nuestra Señora de la Asunción</p>
      </div>
    </footer>
  );
}
