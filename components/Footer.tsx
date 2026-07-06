import { MapPin, Clock, AtSign } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        <div className="flex-1">
          <h3 className="font-black text-2xl text-zinc-900 mb-3 tracking-tight">Crecer con Cristo Redentor</h3>
          <p className="text-zinc-600 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
            Movimiento de la Parroquia Nuestra Señora de la Asunción, dedicado a la espiritualidad, vida en comunidad y acción social.
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <Link
              href="https://www.instagram.com/crecerconcristoredentor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 bg-zinc-100 rounded-full text-zinc-600 hover:text-red-600 hover:bg-red-50 transition-colors"
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
          <h4 className="font-bold text-lg text-zinc-900 mb-6 uppercase tracking-wider text-sm">Secretaría Parroquial</h4>

          <div className="space-y-6">
            <div className="flex items-start gap-3 justify-center md:justify-end text-zinc-600">
              <div className="text-right">
                <p className="font-bold text-zinc-800">Dirección</p>
                <p className="text-sm mt-1">Asunción 55</p>
                <p className="text-sm text-zinc-500">Resistencia, Chaco</p>
              </div>
              <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            </div>

            <div className="flex items-start gap-3 justify-center md:justify-end text-zinc-600">
              <div className="text-right">
                <p className="font-bold text-zinc-800">Horarios de Atención</p>
                <p className="text-sm mt-1">Lunes a Viernes</p>
                <p className="text-sm text-zinc-500">08:30 a 12:00 hs · 16:30 a 20:00 hs</p>
              </div>
              <Clock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-200 text-center text-sm text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Movimiento CCR. Todos los derechos reservados. By Sando</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Parroquia Nuestra Señora de la Asunción</p>
      </div>
    </footer>
  );
}
