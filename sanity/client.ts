import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'n7klxe0y',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
