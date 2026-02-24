import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'string' }),
    defineField({ name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text', rows: 2 }),
    defineField({ name: 'heroCtaLabel', title: 'Hero CTA Label', type: 'string' }),
    defineField({ name: 'philosophyHeading', title: 'Philosophy Heading', type: 'string' }),
    defineField({ name: 'philosophyBody', title: 'Philosophy Body', type: 'text', rows: 4 }),
    defineField({ name: 'contactHeading', title: 'Contact Heading', type: 'string' }),
    defineField({ name: 'contactBody', title: 'Contact Body', type: 'text', rows: 3 }),
  ],
})
