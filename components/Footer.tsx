import { MapPin, Clock, AtSign, Code2, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-transparent py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        <div className="flex-1">
          <h3 className="font-black text-2xl text-zinc-900 mb-3 tracking-tight">Crecer con Cristo Redentor</h3>
          <p className="text-zinc-600 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
            Comunidad juvenil de la Parroquia Nuestra Señora de la Asunción. ¡Sumate a vivir la fe, hacer amigos y ayudar a los demás!
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <Link
              href="https://www.instagram.com/crecerconcristoredentor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 bg-white rounded-full text-zinc-600 hover:text-red-600 hover:bg-red-50 transition-colors border border-zinc-200 shadow-sm"
            >
              <AtSign className="w-5 h-5" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 leading-none mb-0.5">Instagram</p>
                <p className="text-sm font-bold leading-none text-zinc-900">crecerconcristoredentor</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-end">
          <h4 className="font-bold text-lg text-zinc-900 mb-6 uppercase tracking-wider text-sm">Secretaría Parroquial</h4>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 justify-center md:justify-end text-zinc-600">
              <div className="text-center md:text-right order-2 md:order-1">
                <p className="font-bold text-zinc-900">Dirección</p>
                <p className="text-sm mt-1">Asunción 685</p>
                <p className="text-sm text-zinc-500">Resistencia, Chaco</p>
              </div>
              <MapPin className="w-5 h-5 text-ccr-accent shrink-0 mt-0 md:mt-0.5 order-1 md:order-2" />
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 justify-center md:justify-end text-zinc-600">
              <div className="text-center md:text-right order-2 md:order-1">
                <p className="font-bold text-zinc-900">Horarios de Atención</p>
                <div className="text-sm mt-1 space-y-0.5 text-zinc-500">
                  <p><span className="text-zinc-700 font-medium">Mar a Jue:</span> 10 a 12 hs · 17 a 20 hs</p>
                  <p><span className="text-zinc-700 font-medium">Vie:</span> 09 a 12 hs</p>
                  <p><span className="text-zinc-700 font-medium">Sáb:</span> 08 a 12 hs · 17 a 20 hs</p>
                </div>
              </div>
              <Clock className="w-5 h-5 text-ccr-accent shrink-0 mt-0 md:mt-0.5 order-1 md:order-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-200 text-center text-sm text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-1">
          <span>© {new Date().getFullYear()} CCR. Todos los derechos reservados.</span>
          <div className="flex items-center gap-1">
            <span className="md:ml-1">By</span>
            <Link
              href="https://github.com/sandobaitt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-zinc-800 transition-colors opacity-70 hover:opacity-100"
            >
              <Code2 className="w-3 h-3" />
              <span>sandobaitt</span>
            </Link>
            <span className="text-zinc-300 mx-0.5">•</span>
            <Link
              href="https://www.linkedin.com/in/lautarosandoval"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-zinc-800 transition-colors opacity-70 hover:opacity-100"
              title="LinkedIn de Lautaro Sandoval"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Parroquia Nuestra Señora de la Asunción</p>
      </div>
    </footer>
  );
}
