import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pillar',
  title: 'Pilares',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Ícono',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Nombre en Lucide React (ej: Church, Users, HandHeart)',
    }),
    defineField({
      name: 'gradient',
      title: 'Fondo Animado (Tailwind)',
      type: 'string',
      description: 'Clases de gradiente (ej: from-rose-100 via-orange-100 to-rose-100)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'iconBg',
      title: 'Fondo del Ícono (Tailwind)',
      type: 'string',
      description: 'Clases para el ícono (ej: bg-rose-200 text-rose-700)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
