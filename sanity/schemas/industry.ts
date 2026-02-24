import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'industry',
  title: 'Industries',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Industry Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'companies', title: 'Companies', type: 'string' }),
    defineField({ name: 'badge', title: 'Badge Label', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})
