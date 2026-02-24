import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({ name: 'tier', title: 'Tier Label', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'price', title: 'Price Range', type: 'string' }),
    defineField({ name: 'per', title: 'Price Period', type: 'string' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({
      name: 'flagship',
      title: 'Flagship Service',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
