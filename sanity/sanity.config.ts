import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import articleSchema from './schemas/article'
import { sanityConfig } from './client'

export default defineConfig({
  ...sanityConfig,
  name:  'abasin-studio',
  title: 'Abasin Studio',
  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [articleSchema],
  },
})
