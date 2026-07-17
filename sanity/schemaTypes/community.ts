import { defineField, defineType } from 'sanity';

export const communityType = defineType({
  name: 'community',
  title: 'Comisiones y Ministerios',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'meetings',
      title: 'Días de Reunión / Ensayos',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Ícono Representativo',
      description: 'Elegí el tipo de ícono que mejor represente a la comisión',
      type: 'string',
      options: {
        list: [
          { title: '🎸 Música', value: 'Music' },
          { title: '📅 Eventos / Agenda', value: 'CalendarDays' },
          { title: '🤝 Solidaridad / Servicio', value: 'HeartHandshake' },
          { title: '📖 Lectura / Formación', value: 'BookOpenText' },
          { title: '🙏 Oración / Iglesia', value: 'Church' },
          { title: '🗣️ Difusión / Comunicación', value: 'Megaphone' },
          { title: '🎨 Arte / Decoración', value: 'Palette' },
          { title: '👥 Comunidad general', value: 'Users' },
          { title: '☕ Cocina / Recepción', value: 'Coffee' },
          { title: '⛺ Campamento / Salidas', value: 'Tent' }
        ],
        layout: 'dropdown'
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
