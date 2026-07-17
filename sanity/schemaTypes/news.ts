import { defineField, defineType } from 'sanity';

export const newsType = defineType({
  name: 'news',
  title: 'Novedades',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Resumen',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'category',
      title: 'Etiqueta (Categoría)',
      description: 'Palabra corta para clasificar la noticia (ej. Campamento, Retiro, Aviso)',
      type: 'string',
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: 'date',
      title: 'Fecha',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen de Fondo (Opcional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
});
