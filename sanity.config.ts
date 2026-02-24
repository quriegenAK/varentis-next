import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'varentis',
  title: 'Varentis CMS',
  projectId: 'n7klxe0y',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.listItem()
              .title('Founder')
              .child(S.document().schemaType('founder').documentId('founder')),
            S.divider(),
            S.documentTypeListItem('article').title('Articles / POV'),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('industry').title('Industries'),
          ])
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
