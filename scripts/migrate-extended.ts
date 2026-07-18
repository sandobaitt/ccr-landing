import { createClient } from 'next-sanity';
import dotenv from 'dotenv';
import { supplyItems, coordinators } from '../data/content';

// Cargar variables de entorno
dotenv.config({ path: '.env.local' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  console.error('Faltan variables de entorno para Sanity');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  token,
  apiVersion: '2024-03-14',
});

// Datos de la cinta de horarios extraidos de ScheduleTicker.tsx
const scheduleItems = [
  {
    _type: 'scheduleItem',
    text: 'Domingos 20:00hs - Misa Parroquial',
    icon: 'Clock',
    color: 'rose',
    order: 1,
  },
  {
    _type: 'scheduleItem',
    text: '1er Domingo - Misa Joven',
    icon: 'Flame',
    color: 'orange',
    order: 2,
  },
  {
    _type: 'scheduleItem',
    text: 'Jueves 21:30hs - Adoración Joven',
    icon: 'HeartHandshake',
    color: 'violet',
    order: 3,
  },
];

// Datos de pilares extraidos de Pillars.tsx
const pillars = [
  {
    _type: 'pillar',
    title: 'Espiritualidad',
    description: 'De cada encuentro, retiro, comision u oracion hacemos que crezca en nosotros el amor al Padre',
    icon: 'Church',
    gradient: 'from-rose-100 via-orange-100 to-rose-100',
    iconBg: 'bg-rose-200 text-rose-700',
    order: 1,
  },
  {
    _type: 'pillar',
    title: 'Comunidad',
    description: 'Compartir como Jesus con sus discipulos nos lleva a encontrarnos por dentro y fuera de la parro',
    icon: 'Users',
    gradient: 'from-fuchsia-100 via-purple-100 to-fuchsia-100',
    iconBg: 'bg-fuchsia-200 text-fuchsia-700',
    order: 2,
  },
  {
    _type: 'pillar',
    title: 'Acción Social',
    description: 'Ese amor recibido nos lleva a salir al encuentro del projimo y darle la mano',
    icon: 'HandHeart',
    gradient: 'from-blue-100 via-cyan-100 to-blue-100',
    iconBg: 'bg-cyan-200 text-cyan-700',
    order: 3,
  },
];

async function migrateExtended() {
  console.log('Iniciando migración extendida...');

  // 1. Horarios
  for (const item of scheduleItems) {
    console.log(`Subiendo horario: ${item.text}...`);
    await client.create(item);
  }

  // 2. Pilares
  for (const p of pillars) {
    console.log(`Subiendo pilar: ${p.title}...`);
    await client.create(p);
  }

  // 3. Insumos (Recorridas)
  let supplyOrder = 1;
  for (const s of supplyItems) {
    console.log(`Subiendo insumo: ${s.name}...`);
    await client.create({
      _type: 'supplyItem',
      name: s.name,
      description: s.description,
      urgent: s.urgent,
      icon: s.icon,
      order: supplyOrder++,
    });
  }

  // 4. Coordinadores
  let coordOrder = 1;
  for (const c of coordinators) {
    console.log(`Subiendo coordinador: ${c.name}...`);
    await client.create({
      _type: 'coordinator',
      name: c.name,
      role: c.role,
      phone: c.phone,
      whatsappMsg: c.whatsappMsg,
      order: coordOrder++,
    });
  }

  console.log('✅ Migración extendida completada con éxito!');
}

migrateExtended().catch((err) => {
  console.error('Error durante la migración:', err);
  process.exit(1);
});
