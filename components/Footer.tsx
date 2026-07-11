import { MapPin, Clock, AtSign, Code2 } from 'lucide-react';
import Link from 'next/link';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527" />
      <path d="M9 15c1.5-1 4-1 5 .5" />
      <path d="M7 9c2-1 6-2 10 .5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-transparent py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        <div className="flex-1">
          <h3 className="font-black text-2xl text-zinc-900 mb-3 tracking-tight">Crecer con Cristo Redentor</h3>
          <p className="text-zinc-600 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
            Comunidad juvenil de la Parroquia Nuestra Señora de la Asunción. ¡Sumate a vivir la fe, hacer amigos y ayudar a los demás!
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
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

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 bg-white rounded-full text-zinc-600 hover:text-green-600 hover:bg-green-50 transition-colors border border-zinc-200 shadow-sm"
            >
              <SpotifyIcon className="w-5 h-5" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 leading-none mb-0.5">Spotify</p>
                <p className="text-sm font-bold leading-none text-zinc-900">Playlist Minis</p>
              </div>
            </Link>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 bg-white rounded-full text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors border border-zinc-200 shadow-sm"
            >
              <TiktokIcon className="w-5 h-5" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 leading-none mb-0.5">TikTok CCR</p>
                <p className="text-sm font-bold leading-none text-zinc-900">Misas y Adoraciones</p>
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
          <div className="flex items-center gap-1.5">
            <span className="md:ml-1 mr-0.5">By</span>
            <Link
              href="https://github.com/sandobaitt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-zinc-800 transition-colors opacity-70 hover:opacity-100"
              title="GitHub de Lautaro Sandoval"
            >
              <GithubIcon className="w-4 h-4" />
            </Link>
            <span className="text-zinc-300 mx-0.5">•</span>
            <Link
              href="https://www.linkedin.com/in/lautarosandoval"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-zinc-800 transition-colors opacity-70 hover:opacity-100"
              title="LinkedIn de Lautaro Sandoval"
            >
              <LinkedinIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Parroquia Nuestra Señora de la Asunción</p>
      </div>
    </footer>
  );
}
