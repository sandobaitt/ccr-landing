'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-zinc-50">
          CCR
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#objetivos" className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors">Objetivos</Link>
          <Link href="#novedades" className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors">Novedades</Link>
          <Button variant="primary" size="sm">Cómo Ayudar</Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 py-4 space-y-4">
          <Link href="#objetivos" className="block text-base font-medium text-zinc-400 hover:text-zinc-50" onClick={() => setIsOpen(false)}>Objetivos</Link>
          <Link href="#novedades" className="block text-base font-medium text-zinc-400 hover:text-zinc-50" onClick={() => setIsOpen(false)}>Novedades</Link>
          <div className="pt-2">
            <Button variant="primary" className="w-full">Cómo Ayudar</Button>
          </div>
        </div>
      )}
    </header>
  );
}
