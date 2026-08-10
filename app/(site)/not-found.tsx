import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      {/* 
        El Navbar y Footer se renderizan por fuera de esto gracias al RootLayout.
        Sólo necesitamos centrar el contenido principal del error aquí.
      */}
      <div className="space-y-6 max-w-md">
        <h1 className="text-8xl font-black text-ccr-accent font-outfit tracking-tighter">
          404
        </h1>
        <h2 className="text-3xl font-bold font-outfit text-foreground">
          ¡Uy! Te perdiste en el desierto.
        </h2>
        <p className="text-foreground/70 font-sans text-lg text-balance">
          La página que estás buscando no existe o fue movida.
          No te preocupes, el camino siempre vuelve a casa.
        </p>
        
        <div className="pt-4">
          <Link href="/">
            <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold uppercase tracking-widest text-sm">
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
