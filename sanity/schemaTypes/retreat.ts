import { defineField, defineType } from 'sanity';

export const retreatType = defineType({
  name: 'retreat',
  title: 'Próximo Retiro',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Edición (Ej: CCR 32)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'open',
      title: '¿Inscripciones Abiertas?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'targetDate',
      title: 'Fecha y Hora Exacta (Para el contador)',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'formsLink',
      title: 'Link de Google Forms (Inscripción)',
      type: 'url',
    }),
    defineField({
      name: 'dateDescription',
      title: 'Descripción de Fecha (Ej: Arrancamos el viernes...)',
      type: 'text',
      initialValue: 'Arrancamos el viernes por la tarde y le mandamos hasta el domingo.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locationDescription',
      title: 'Lugar del Retiro',
      type: 'string',
      initialValue: 'En la Casa de Retiros, Parroquia Nuestra Señora de la Asunción.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'minAge',
      title: 'Edad Mínima',
      type: 'number',
      initialValue: 18,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'maxAge',
      title: 'Edad Máxima',
      type: 'number',
      initialValue: 30,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
