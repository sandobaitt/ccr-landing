'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Flame, Landmark, Footprints, BookOpen, Megaphone, HeartHandshake } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = [
    { name: 'Próximo Retiro', href: '#retiro', icon: Flame },
    { name: 'Nuestros Pilares', href: '#pilares', icon: Landmark },
    { name: 'El Camino CCR', href: '#comunidades', icon: Footprints },
    { name: 'Patronos', href: '#santos', icon: BookOpen },
    { name: 'Novedades', href: '#novedades', icon: Megaphone },
    { name: 'Cómo Ayudar', href: '#ayudar', icon: HeartHandshake },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-zinc-50" onClick={() => setIsOpen(false)}>
            CCR
          </Link>
          
          <button 
            className="p-2 text-zinc-400 hover:text-zinc-50 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu (Right side) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-zinc-950 border-l border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-800/50">
          <span className="font-bold text-lg text-zinc-100 ml-4">Navegación</span>
          <button 
            className="p-2 text-zinc-400 hover:text-zinc-50 transition-colors bg-zinc-900 rounded-lg hover:bg-zinc-800 mr-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className="px-4 py-3 text-base font-medium text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800/50 rounded-xl transition-all duration-200 flex items-center group"
                onClick={() => setIsOpen(false)}
              >
                <div className="mr-4 p-2 rounded-lg border border-red-900/50 bg-zinc-900 text-red-500 group-hover:border-red-500/50 group-hover:text-red-400 group-hover:bg-red-950/20 transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.05)]">
                  <Icon size={18} strokeWidth={2.5} />
                </div>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
