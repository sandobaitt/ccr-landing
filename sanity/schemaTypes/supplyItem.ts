import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'supplyItem',
  title: 'Insumos (Recorridas)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del insumo',
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
      name: 'urgent',
      title: '¿Es Urgente?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'icon',
      title: 'Ícono',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Nombre en Lucide React (ej: UtensilsCrossed, Shirt, Coffee, Droplets)',
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
      title: 'name',
      subtitle: 'urgent',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: subtitle ? '🚨 Urgente' : 'Normal',
      };
    },
  },
});
