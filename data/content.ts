import type { NewsItem, SupplyItem, DonationInfo } from '@/types/content';

/** Novedades del movimiento */
export const newsItems: NewsItem[] = [
  {
    id: 'retiro-julio-2025',
    title: 'Retiro Espiritual de Julio',
    summary:
      'Un fin de semana de silencio, oración y encuentro personal con Cristo. Cupos limitados para jóvenes de 16 a 30 años.',
    category: 'retiro',
    date: '2025-07-19',
  },
  {
    id: 'recorrida-barrio-toba',
    title: 'Recorrida Barrio Toba',
    summary:
      'Llevamos alimentos, ropa y compañía a las familias del Barrio Toba. ¡Sumate como voluntario!',
    category: 'recorrida',
    date: '2025-07-12',
  },
  {
    id: 'misa-aniversario',
    title: 'Misa por el Aniversario del Movimiento',
    summary:
      'Celebramos un nuevo año de camino juntos con una misa especial presidida por el Padre Rector.',
    category: 'evento',
    date: '2025-08-03',
  },
  {
    id: 'jornada-formacion',
    title: 'Jornada de Formación para Coordinadores',
    summary:
      'Capacitación sobre liderazgo pastoral y organización de grupos para los coordinadores del movimiento.',
    category: 'general',
    date: '2025-07-26',
  },
];

/** Insumos necesarios para las recorridas */
export const supplyItems: SupplyItem[] = [
  {
    id: 'alimentos-no-perecederos',
    name: 'Alimentos No Perecederos',
    description: 'Arroz, fideos, harina, aceite, leche en polvo, conservas.',
    urgent: true,
    icon: 'UtensilsCrossed',
  },
  {
    id: 'ropa-abrigo',
    name: 'Ropa de Abrigo',
    description: 'Camperas, buzos, mantas y frazadas en buen estado.',
    urgent: true,
    icon: 'Shirt',
  },
  {
    id: 'utiles-escolares',
    name: 'Útiles Escolares',
    description: 'Cuadernos, lápices, mochilas y material didáctico.',
    urgent: false,
    icon: 'BookOpen',
  },
  {
    id: 'higiene-personal',
    name: 'Artículos de Higiene',
    description: 'Jabón, dentífrico, toallas, pañales descartables.',
    urgent: false,
    icon: 'Droplets',
  },
];

/** Información bancaria para donaciones monetarias */
export const donationInfo: DonationInfo = {
  bankName: 'Banco Nación',
  accountHolder: 'Parroquia Ntra. Sra. de la Asunción',
  cbu: '0110012340012345678901',
  alias: 'CRECER.CCR.REDENTOR',
};
