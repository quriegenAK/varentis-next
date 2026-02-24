import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import articleSchema from './schemas/article'
import { sanityConfig } from '../lib/sanity'

export default defineConfig({
  ...sanityConfig,
  name:  'varentis-studio',
  title: 'Varentis Studio',
  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [articleSchema],
  },
})
