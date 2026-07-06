// import type { NewsItem, SupplyItem, DonationInfo, RetreatInfo } from '@/types/content';
import type { NewsItem, SupplyItem, RetreatInfo, CoordinatorInfo } from '@/types/content';

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
    id: 'alimentos',
    name: 'Alimentos',
    description: 'Comida preparada, viandas, pan o alimentos no perecederos.',
    urgent: true,
    icon: 'UtensilsCrossed',
  },
  {
    id: 'abrigo',
    name: 'Abrigo y Mantas',
    description: 'Camperas, buzos, mantas y frazadas para combatir el frío.',
    urgent: true,
    icon: 'Shirt',
  },
  {
    id: 'cafe',
    name: 'Bebidas Calientes',
    description: 'Café, mate cocido, té, azúcar y vasos térmicos descartables.',
    urgent: true,
    icon: 'Coffee',
  },
  {
    id: 'higiene',
    name: 'Artículos de Higiene',
    description: 'Jabón, toallas, alcohol en gel y pañales.',
    urgent: false,
    icon: 'Droplets',
  },
];

/* Oculto temporalmente
/** Información bancaria para donaciones monetarias * /
export const donationInfo = {
  bankName: 'Banco Nación',
  accountHolder: 'Parroquia Ntra. Sra. de la Asunción',
  cbu: '0110012340012345678901',
  alias: 'CRECER.CCR.REDENTOR',
};
*/

/** Contactos de coordinadores generales */
export const coordinators: CoordinatorInfo[] = [
  {
    id: 'coord-1',
    name: 'Mateo Gallardo',
    role: 'Coordinador General',
    phone: '+5493624238806',
    whatsappMsg: '¡Hola Mateo! Quería consultarte sobre el movimiento CCR.',
  },
  {
    id: 'coord-2',
    name: 'Santino Diaz Oddone',
    role: 'Coordinador',
    phone: '+5493624894521',
    whatsappMsg: '¡Hola Santino! Quería consultarte sobre el movimiento CCR.',
  },
];

/** Información del próximo retiro */
export const nextRetreat: RetreatInfo = {
  id: 'ccr-32',
  name: 'CCR 32',
  open: false,
  targetDate: '2026-10-15T18:00:00-03:00',
  formsLink: 'https://docs.google.com/forms/d/e/ejemplo/viewform',
  requirements: [
    'Ropa cómoda (buzo y zapatillas)',
    'Biblia, cuaderno y lapicera',
    'Aislante y bolsa de dormir (o sábanas)',
    'Elementos de higiene personal'
  ],
  minAge: 18,
  maxAge: 30,
};
