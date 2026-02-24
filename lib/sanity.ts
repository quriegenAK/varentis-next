import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

/* ─── Environment ─────────────────────────── */
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'your-project-id',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET    ?? 'production',
  apiVersion: '2024-01-01',
  useCdn:    process.env.NODE_ENV === 'production',
}

export const client = createClient(sanityConfig)

/* ─── Image URL builder ───────────────────── */
const builder = imageUrlBuilder(client)
export const urlFor = (source: SanityImageSource) => builder.image(source)

/* ─── Types ───────────────────────────────── */
export interface Article {
  _id:         string
  title:       string
  slug:        { current: string }
  publishedAt: string
  excerpt:     string
  readTime:    number
  category:    'architecture' | 'regulated-ai' | 'data-platforms' | 'scientific'
  body:        unknown[]          // Portable Text blocks
  coverImage?: SanityImageSource
}

export interface ArticleCard {
  _id:         string
  title:       string
  slug:        { current: string }
  publishedAt: string
  excerpt:     string
  readTime:    number
  category:    string
}

/* ─── GROQ Queries ────────────────────────── */

/** All articles, newest first */
export const ARTICLES_QUERY = `
  *[_type == "article"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, excerpt, readTime, category
  }
`

/** Single article by slug */
export const ARTICLE_QUERY = `
  *[_type == "article" && slug.current == $slug][0] {
    _id, title, slug, publishedAt, excerpt, readTime, category,
    body, coverImage
  }
`

/** Article slugs for static params */
export const ARTICLE_SLUGS_QUERY = `
  *[_type == "article"]{ "slug": slug.current }
`

/* ─── Data fetchers (server-side) ─────────── */

export async function getArticles(): Promise<ArticleCard[]> {
  return client.fetch(ARTICLES_QUERY)
}

export async function getArticle(slug: string): Promise<Article | null> {
  return client.fetch(ARTICLE_QUERY, { slug })
}

export async function getArticleSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(ARTICLE_SLUGS_QUERY)
}
