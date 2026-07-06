// import type { NewsItem, SupplyItem, DonationInfo, RetreatInfo } from '@/types/content';
import type { NewsItem, SupplyItem, RetreatInfo, CoordinatorInfo, SaintInfo, CommunityInfo } from '@/types/content';

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

/** Información de los Santos Redentoristas (Nuestras Raíces) */
export const saints: SaintInfo[] = [
  {
    id: 'alfonso',
    name: 'San Alfonso María de Ligorio',
    title: 'Fundador y Doctor de la Iglesia',
    shortDescription: 'Patrono de confesores y moralistas. Fundador de la Congregación del Santísimo Redentor.',
    fullBiography: 'Nacido cerca de Nápoles en 1696, San Alfonso fue un brillante abogado antes de dejar todo por el sacerdocio. Tras conmoverse por la pobreza espiritual y material de los cabreros de las montañas, fundó la Congregación del Santísimo Redentor en 1732. Dedicó su vida a predicar misiones populares, caracterizadas por una profunda sencillez y amor a Cristo Eucaristía y María. Su enorme obra teológica, espiritual y musical sigue iluminando a la Iglesia.',
    connectionToCharism: 'Su opción radical por los más abandonados inspira nuestra acción social y recorridas nocturnas. Su estilo cercano y misionero es la base de nuestra espiritualidad en el CCR.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.redentoristas.org%2Fwp-content%2Fuploads%2F2021%2F07%2Fsanalfonso.jpg&f=1&nofb=1&ipt=0cf6e141e89cc4d2e182decddabdfb70b4edf64377c451b97ef036b0663f5d63'
  },
  {
    id: 'gerardo',
    name: 'San Gerardo Majella',
    title: 'El Hermano Santo',
    shortDescription: 'Patrono de las madres embarazadas y modelo de servicio humilde y milagroso.',
    fullBiography: 'Gerardo, sastre de profesión, entró como Hermano Coadjutor en la Congregación. Aunque solo vivió 29 años (murió en 1755), su obediencia heroica, su constante unión con Dios y su caridad con los pobres lo llenaron de dones místicos. Conocido popularmente como el "santo de los partos felices", pasaba horas en adoración nocturna frente al Sagrario.',
    connectionToCharism: 'Nos enseña el valor inmenso del servicio oculto y la oración constante. Su vida refleja nuestro pilar de "Servicio" y el amor desinteresado por el hermano.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstgerardmajella.org%2Fphotoalbums%2Fsan-gerardo%2FSaint-Gerardo-Maiella%2520Full%2520300%2520dpi%2520copy.jpg&f=1&nofb=1&ipt=ba1a84e503c166312c2d5543f0762d2fb6a82c1558e80560d9eed050dc574996'
  },
  {
    id: 'clemente',
    name: 'San Clemente Hofbauer',
    title: 'El Segundo Fundador',
    shortDescription: 'Inició la expansión de la Congregación más allá de los Alpes, evangelizando en tiempos difíciles.',
    fullBiography: 'Nacido en Moravia, Clemente ejerció varios oficios antes de lograr su sueño de ser sacerdote. Ingresó a los Redentoristas en Roma y fue enviado a extender la obra al norte. En Varsovia y Viena, desplegó una actividad apostólica asombrosa: orfanatos, escuelas, misiones continuas. Su carácter impetuoso, sumado a su profunda fe, le permitió sostener la fe de multitudes frente a la opresión del Estado.',
    connectionToCharism: 'Su tenacidad para adaptar el Evangelio a nuevas realidades anima al CCR a salir siempre al encuentro de los jóvenes de hoy con valentía e ingenio.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.santogiorno.it%2Fsanti%2F520_clemente-maria-hofbauer.jpg&f=1&nofb=1&ipt=292fb6d0399d878f290eaf9def42426ee579b7cd2b3bd93e3b7bfc9208676360'
  },
  {
    id: 'pedro',
    name: 'Beato Pedro Donders',
    title: 'Apóstol de los Leprosos',
    shortDescription: 'Misionero redentorista que entregó su vida cuidando a los marginados en Surinam.',
    fullBiography: 'Sacerdote holandés que viajó a Surinam y, más tarde, se unió a los Redentoristas. Dedicó 30 años de su vida exclusivamente a la colonia de leprosos de Batavia. Fue enfermero, padre y guía espiritual de los más descartados de la sociedad, compartiendo su dolor sin contagiarse de la enfermedad, pero sí de su sufrimiento.',
    connectionToCharism: 'Encarna el máximo grado de compasión y cercanía (Acción Social). Nos desafía a buscar a los Cristos sufrientes de nuestra ciudad sin miedo a "mancharnos las manos".',
    imageUrl: 'http://3.bp.blogspot.com/-y7OTCGtsmRQ/UpP8Om_nNDI/AAAAAAAABzQ/ZcAaWE2JL9k/s1600/Beato+Pedro+Donders,+Presb%C3%ADtero+e+Mission%C3%A1rio+(foto).jpg'
  },
];

/** Comunidades de Perseverancia Post-Retiro */
export const communities: CommunityInfo[] = [
  {
    id: 'musica-shesma',
    name: 'Ministerio de Música Shesma',
    description: 'Servicio a través del canto y la alabanza en retiros y misas.',
    meetings: 'Ensayos semanales',
    icon: 'Music',
  },
  {
    id: 'comision-eventos',
    name: 'Comisión de Eventos',
    description: 'Organización logística de jornadas, celebraciones y peñas comunitarias.',
    meetings: 'Viernes 20:00 hs',
    icon: 'CalendarDays',
  },
  {
    id: 'comision-accion-social',
    name: 'Comisión de Acción Social',
    description: 'Coordinación directa de las recorridas nocturnas y campañas solidarias.',
    meetings: 'Miércoles 20:30 hs',
    icon: 'HeartHandshake',
  },
  {
    id: 'comision-liturgia',
    name: 'Comisión de Liturgia',
    description: 'Preparación profunda de momentos de oración, misas y adoraciones del movimiento.',
    meetings: 'Sábados 18:00 hs',
    icon: 'BookOpenText',
  }
];
