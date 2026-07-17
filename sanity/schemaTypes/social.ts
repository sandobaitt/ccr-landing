import { defineField, defineType } from 'sanity';

export const socialType = defineType({
  name: 'social',
  title: 'Redes Sociales',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Plataforma',
      type: 'string',
      options: {
        list: ['Instagram', 'Spotify', 'TikTok', 'YouTube', 'Facebook', 'Otro'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Enlace (URL)',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Ej: Instagram, Spotify, etc.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo o Usuario',
      type: 'string',
      description: 'Ej: @crecerconcristoredentor',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'platform',
    },
  },
});
