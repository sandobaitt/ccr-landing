// import type { NewsItem, SupplyItem, DonationInfo, RetreatInfo } from '@/types/content';
import type { NewsItem, SupplyItem, RetreatInfo, CoordinatorInfo, SaintInfo, CommunityInfo } from '@/types/content';

/** Novedades del movimiento */
export const newsItems: NewsItem[] = [
  {
    id: 'retiro-julio-2025',
    title: 'Retiro Espiritual de Julio',
    summary:
      '¡Un finde a pleno! Silencio, oración y un encuentro cara a cara con Cristo. Si tenés entre 18 y 30 años, ¡asegurá tu lugar!',
    category: 'retiro',
    date: '2025-07-19',
  },
  {
    id: 'recorrida-barrio-toba',
    title: 'Recorrida Barrio Toba',
    summary:
      'Salimos al Barrio Toba a llevar un plato caliente, abrigo y sobre todo, un buen rato de charla. ¡Ponete la camiseta y sumate!',
    category: 'recorrida',
    date: '2025-07-12',
  },
  {
    id: 'misa-aniversario',
    title: 'Misa por el Aniversario del Movimiento',
    summary:
      '¡Cumplimos un año más haciendo lío juntos! Lo festejamos con una misa especial a cargo del Padre Rector. ¡No faltes!',
    category: 'evento',
    date: '2025-08-03',
  },
  {
    id: 'jornada-formacion',
    title: 'Jornada de Formación para Coordinadores',
    summary:
      'Nos juntamos a cargar pilas y formarnos en liderazgo pastoral para seguir guiando a la comunidad con todo.',
    category: 'general',
    date: '2025-07-26',
  },
];

/** Insumos necesarios para las recorridas */
export const supplyItems: SupplyItem[] = [
  {
    id: 'alimentos',
    name: 'Alimentos',
    description: 'Viandas listas para entregar, pan, facturas o cualquier alimento no perecedero.',
    urgent: true,
    icon: 'UtensilsCrossed',
  },
  {
    id: 'abrigo',
    name: 'Abrigo y Mantas',
    description: 'Camperas, buzos, frazadas o mantas. ¡Todo lo que sirva para ganarle al frío!',
    urgent: true,
    icon: 'Shirt',
  },
  {
    id: 'cafe',
    name: 'Bebidas Calientes',
    description: 'Café, yerba, té, azúcar y vasitos térmicos para compartir algo calentito.',
    urgent: true,
    icon: 'Coffee',
  },
  {
    id: 'higiene',
    name: 'Artículos de Higiene',
    description: 'Jabón, toallas, pañales o alcohol en gel. ¡Siempre vienen al pelo!',
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
    whatsappMsg: '¡Hola Mateo! Quería consultarte sobre el grupo de jovenes redentoristas CCR.',
  },
  {
    id: 'coord-2',
    name: 'Santino Diaz Oddone',
    role: 'Coordinador',
    phone: '+5493624894521',
    whatsappMsg: '¡Hola Santino! Quería consultarte sobre el grupo de jovenes redentoristas CCR.',
  },
];

/** Información del próximo retiro */
export const nextRetreat: RetreatInfo = {
  id: 'ccr-32',
  name: 'CCR 32',
  open: false,
  targetDate: '2026-10-15T18:00:00-03:00',
  formsLink: 'https://docs.google.com/forms/d/e/ejemplo/viewform',
  dateDescription: 'Arrancamos el viernes a la tarde y le damos hasta el domingo.',
  locationDescription: 'En la Casa de Retiros (te pasamos la dire exacta cuando te anotes).',
  minAge: 18,
  maxAge: 30,
};

/** Información de los Santos Redentoristas (Nuestras Raíces) */
export const saints: SaintInfo[] = [
  {
    id: 'perpetuo-socorro',
    name: 'Nuestra Señora del Perpetuo Socorro',
    title: 'Patrona de los Misioneros Redentoristas',
    shortDescription: 'La Virgen que nos acompaña siempre. Un ícono lleno de amor y protección.',
    fullBiography: 'Este bellísimo ícono oriental nos muestra a María sosteniendo al Niño Jesús, quien asustado por los ángeles que le muestran los instrumentos de su futura pasión, se aferra a su Madre (hasta se le cae una sandalia). En 1866, el Papa Pío IX le entregó el ícono original a los Redentoristas con un encargo clarísimo: "¡Denla a conocer por todo el mundo!". Desde entonces, María del Perpetuo Socorro es nuestra madre, protectora y compañera de ruta.',
    connectionToCharism: 'Ella es la primera misionera. Nos acompaña en cada recorrida, en cada retiro y nos recuerda que en el CCR nunca caminamos solos.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fef%2F6a%2F00%2Fef6a0062166d1d90ac1ce0b829ebad9a.jpg&f=1&nofb=1&ipt=b6b7aa66aedccc6c1356ef41b107987100738eb2eb2e1949570eb8ea19b91fc6'
  },
  {
    id: 'alfonso',
    name: 'San Alfonso María de Ligorio',
    title: 'Fundador y Doctor de la Iglesia',
    shortDescription: '¡El fundador! Un bocho total que dejó todo por ir a las periferias y fundar a los Redentoristas.',
    fullBiography: 'Alfonso la rompía como abogado en Nápoles allá por el 1700, pero decidió largar todo cuando se cruzó con los pastores más olvidados de las montañas. Le pegó tanto su realidad que en 1732 fundó a los Redentoristas para ir a misionar a los más alejados, siempre con un estilo re sencillo y un amor gigante por Jesús y María. Además de escribir un montón, ¡hasta componía canciones que se cantan hasta hoy!',
    connectionToCharism: 'Esa pasión por ir a buscar a los más tirados es la nafta de nuestras recorridas nocturnas. ¡Su estilo cercano y sin vueltas es el ADN del CCR!',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.redentoristas.org%2Fwp-content%2Fuploads%2F2021%2F07%2Fsanalfonso.jpg&f=1&nofb=1&ipt=0cf6e141e89cc4d2e182decddabdfb70b4edf64377c451b97ef036b0663f5d63'
  },
  {
    id: 'gerardo',
    name: 'San Gerardo Majella',
    title: 'El Hermano Santo',
    shortDescription: 'Patrono de las embarazadas. Un crack que desde el servicio oculto la rompió toda.',
    fullBiography: 'Gerardo era sastre y entró a la Congregación como Hermano. Vivió apenas 29 años, pero le alcanzó y le sobró para dejar una marca gigante. Era un loco lindo, súper obediente y siempre al pie del cañón para los pobres. Se la pasaba noches enteras rezando frente al Sagrario y Dios le regaló un montón de milagros. Hoy todo el mundo lo conoce como el protector de las mamás embarazadas.',
    connectionToCharism: 'Nos enseña que no hace falta hacer mucho ruido para hacer grandes cosas. Su entrega total y su amor por los demás son nuestra inspiración para servir de corazón.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstgerardmajella.org%2Fphotoalbums%2Fsan-gerardo%2FSaint-Gerardo-Maiella%2520Full%2520300%2520dpi%2520copy.jpg&f=1&nofb=1&ipt=ba1a84e503c166312c2d5543f0762d2fb6a82c1558e80560d9eed050dc574996'
  },
  {
    id: 'clemente',
    name: 'San Clemente Hofbauer',
    title: 'El Segundo Fundador',
    shortDescription: 'El motor que llevó a los Redentoristas por toda Europa. ¡Un tipo que no se achicaba ante nada!',
    fullBiography: 'Clemente laburó de mil cosas antes de cumplir su sueño de ser cura. Se hizo Redentorista en Roma y lo mandaron a misionar para el norte de Europa. ¡Un todoterreno! En Varsovia y Viena armó de todo: orfanatos, escuelas y misiones a lo loco, incluso cuando el gobierno le ponía mil trabas. Su fuerza y empuje mantuvieron viva la fe de un montón de gente.',
    connectionToCharism: 'Esa garra para remarla y buscarle la vuelta a todo nos anima a salir a buscar a los jóvenes de hoy con la misma creatividad y valentía.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.santogiorno.it%2Fsanti%2F520_clemente-maria-hofbauer.jpg&f=1&nofb=1&ipt=292fb6d0399d878f290eaf9def42426ee579b7cd2b3bd93e3b7bfc9208676360'
  },
  {
    id: 'pedro',
    name: 'Beato Pedro Donders',
    title: 'Apóstol de los Leprosos',
    shortDescription: 'Un misionero de fierro que dio la vida por los descartados en Surinam.',
    fullBiography: 'Este cura holandés se fue para Surinam y después se hizo Redentorista. ¡Se pasó 30 años viviendo en una colonia de leprosos! Fue enfermero, amigo y guía de los que nadie quería ver. Vivió entre ellos compartiendo sus dolores y alegrías, demostrando que el amor no tiene asco ni barreras.',
    connectionToCharism: 'Es el claro ejemplo de ensuciarse las manos por los demás. Nos desafía a salir a la calle y abrazar a los que más sufren hoy en nuestra ciudad, sin caretas.',
    imageUrl: 'http://3.bp.blogspot.com/-y7OTCGtsmRQ/UpP8Om_nNDI/AAAAAAAABzQ/ZcAaWE2JL9k/s1600/Beato+Pedro+Donders,+Presb%C3%ADtero+e+Mission%C3%A1rio+(foto).jpg'
  },
  {
    id: 'gaspar',
    name: 'Beato Gaspar Stanggassinger',
    title: 'El Patrono de los Jóvenes',
    shortDescription: 'Un joven que dio su vida por los jóvenes. Su lema: hacer lo extraordinario en lo ordinario.',
    fullBiography: 'Gaspar era un alemán fanático de estar con los jóvenes. Entró a los Redentoristas con una sola idea: educar y acompañar a los pibes para que encuentren a Jesús. Aunque murió súper joven, a los 28 años, dejó una huella gigante por su alegría, su cercanía y su capacidad de escuchar. Él siempre decía que no hace falta hacer cosas raras para ser santo, sino ponerle amor a las cosas de todos los días.',
    connectionToCharism: 'Es nuestro modelo para las comunidades y los coordinadores. Nos enseña que la mejor forma de cambiar el mundo es acompañando a los jóvenes con paciencia, empatía y mucha alegría.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.redentoristas.org%2Fwp-content%2Fuploads%2F2019%2F09%2Fstanggassinger.jpg&f=1&nofb=1&ipt=5bbc066ad02e298083cbe8c8ab581e770338b13758b688697aeffcb03c303cd8'
  },
  {
    id: 'genaro',
    name: 'Beato Genaro María Sarnelli',
    title: 'Compañero de los Marginados',
    shortDescription: 'Mano derecha de San Alfonso, se metió en los peores barrios de Nápoles para rescatar a los descartados.',
    fullBiography: 'Abogado exitoso igual que San Alfonso, Genaro dejó todo para irse a trabajar a las calles más picantes de Nápoles. Se metió de lleno a rescatar niños huérfanos, visitar a los presos en las peores cárceles y ayudar a mujeres que eran explotadas. No le tenía miedo a nada cuando se trataba de defender la dignidad de los más rotos. Murió muy joven, consumido por su entrega total a los pobres.',
    connectionToCharism: 'Es el santo patrono de nuestra Comisión de Acción Social. Su historia nos empuja a no mirar para otro lado y salir a las recorridas nocturnas con el corazón dispuesto a abrazar a los que más sufren.',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.edy.com.mx%2Fwp-content%2Fuploads%2Fbeato_genaro_maria_sarnelli.jpg&f=1&nofb=1&ipt=8fc05d6f15986b518537061e08f432e29ffefbe1bdae6cf1077d226696486a07'
  },
];

/** Comunidades de Perseverancia Post-Retiro */
export const communities: CommunityInfo[] = [
  {
    id: 'musica-shesma',
    name: 'Ministerio de Música Shesma',
    description: 'Le ponemos voz y acordes a los retiros y misas. ¡Alabamos a Dios cantando con todo!',
    meetings: 'Ensayos semanales',
    icon: 'Music',
  },
  {
    id: 'comision-eventos',
    name: 'Comisión de Eventos',
    description: '¡Los que arman la movida! Pensamos y organizamos las jornadas, peñas y festejos del grupo.',
    meetings: 'Viernes 20:00 hs',
    icon: 'CalendarDays',
  },
  {
    id: 'comision-accion-social',
    name: 'Comisión de Acción Social',
    description: 'El corazón solidario. Organizamos las recorridas y movidas para dar una mano donde hace falta.',
    meetings: 'Miércoles 20:30 hs',
    icon: 'HeartHandshake',
  },
  {
    id: 'comision-liturgia',
    name: 'Comisión de Liturgia',
    description: 'Preparamos los momentos más grosos de oración, misas y adoraciones para conectar posta.',
    meetings: 'Sábados 18:00 hs',
    icon: 'BookOpenText',
  }
];
