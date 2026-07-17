import { MapPin, Clock, AtSign, Globe } from 'lucide-react';
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

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.16 1 12 1 12s0 3.84.54 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.84 23 12 23 12s0-3.84-.54-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const platformIcons: Record<string, any> = {
  Instagram: AtSign,
  Spotify: SpotifyIcon,
  TikTok: TiktokIcon,
  YouTube: YoutubeIcon,
  Facebook: FacebookIcon,
  Otro: Globe,
};

interface SocialLink {
  _key: string;
  platform: string;
  url: string;
  title: string;
  subtitle: string;
}

interface FooterProps {
  settings?: {
    socialLinks?: SocialLink[];
  };
}

export function Footer({ settings }: FooterProps) {
  // En caso de que no haya links o el panel esté vacío, usamos los predeterminados.
  const links = settings?.socialLinks || [
    { _key: '1', platform: 'Instagram', url: 'https://www.instagram.com/crecerconcristoredentor', title: 'Instagram', subtitle: 'crecerconcristoredentor' },
    { _key: '2', platform: 'Spotify', url: 'https://open.spotify.com/artist/7hB763FwQo4hSIs2gT3d5U', title: 'Spotify', subtitle: 'Playlist Minis' },
    { _key: '3', platform: 'TikTok', url: 'https://www.tiktok.com/@somoscristoredentor', title: 'TikTok CCR', subtitle: 'Misas y Adoraciones' },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-transparent py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        <div className="flex-1">
          <h3 className="font-black text-2xl text-zinc-900 mb-3 tracking-tight">Crecer con Cristo Redentor</h3>
          <p className="text-zinc-600 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
            Comunidad juvenil de la Parroquia Nuestra Señora de la Asunción. ¡Sumate a vivir la fe, hacer amigos y ayudar a los demás!
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
            {links.map((link) => {
              if (!link.url || !link.platform) return null; // Prevents Next.js crash when adding empty items in Sanity
              const Icon = platformIcons[link.platform] || Globe;
              return (
                <Link
                  key={link._key || Math.random().toString()}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 bg-white rounded-full text-zinc-600 hover:text-ccr-accent hover:bg-rose-50 transition-colors border border-zinc-200 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 leading-none mb-0.5">{link.title}</p>
                    <p className="text-sm font-bold leading-none text-zinc-900">{link.subtitle}</p>
                  </div>
                </Link>
              );
            })}
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
