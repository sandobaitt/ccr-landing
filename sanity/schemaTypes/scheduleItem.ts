import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'scheduleItem',
  title: 'Horarios (Cinta)',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Ej: Domingos 20:00hs - Misa Parroquial',
    }),
    defineField({
      name: 'icon',
      title: 'Icono',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Nombre del icono en Lucide React (ej: Clock, Flame, HeartHandshake)',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'Rose (Rojo/Rosa)', value: 'rose' },
          { title: 'Orange (Naranja)', value: 'orange' },
          { title: 'Violet (Violeta)', value: 'violet' },
          { title: 'Blue (Azul)', value: 'blue' },
          { title: 'Emerald (Verde)', value: 'emerald' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición en la cinta (menor número primero)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'icon',
    },
  },
});
