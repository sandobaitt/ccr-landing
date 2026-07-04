export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg text-zinc-900 mb-2">Crecer con Cristo Redentor</h3>
          <p className="text-zinc-600 text-sm max-w-sm">
            Movimiento perteneciente a la Parroquia Nuestra Señora de la Asunción, dedicado a la espiritualidad, comunidad y acción social.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 mb-2">Contacto</h4>
          <p className="text-zinc-600 text-sm">Parroquia Ntra. Sra. de la Asunción</p>
          <p className="text-zinc-600 text-sm">Chaco, Argentina</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-zinc-200 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Movimiento CCR. Todos los derechos reservados.
      </div>
    </footer>
  );
}
