import { defineField, defineType } from 'sanity';

export const saintType = defineType({
  name: 'saint',
  title: 'Nuestras Raíces (Santos)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ej: Patrona de los Misioneros Redentoristas',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descripción Corta',
      type: 'text',
      description: 'Un resumen muy breve (aparece en la tarjeta cerrada)',
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'fullBiography',
      title: 'Biografía Completa',
      type: 'text',
      description: 'La historia completa del santo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'connectionToCharism',
      title: 'Conexión con el CCR',
      type: 'text',
      description: '¿Qué nos enseña para el movimiento hoy?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen (Retrato)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
