import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'coordinator',
  title: 'Coordinadores',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre Completo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rol',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Ej: Coordinador General',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono (WhatsApp)',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Incluir código de país (ej: +5493624123456)',
    }),
    defineField({
      name: 'whatsappMsg',
      title: 'Mensaje Predefinido de WhatsApp',
      type: 'text',
      validation: (rule) => rule.required(),
      description: 'Mensaje automático que envía el usuario al hacer clic',
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
      subtitle: 'role',
    },
  },
});
