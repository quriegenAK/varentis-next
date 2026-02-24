import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'founder',
  title: 'Founder',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'credentials', title: 'Credentials Line', type: 'string' }),
    defineField({ name: 'experience', title: 'Experience Line', type: 'string' }),
    defineField({ name: 'bio1', title: 'Bio Paragraph 1', type: 'text', rows: 4 }),
    defineField({ name: 'bio2', title: 'Bio Paragraph 2', type: 'text', rows: 4 }),
    defineField({ name: 'bio3', title: 'Bio Paragraph 3', type: 'text', rows: 4 }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'skills', title: 'Skill Tags', type: 'array', of: [{ type: 'string' }] }),
  ],
})
