import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { PortableTextBlock } from '@portabletext/types'

export interface Article {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  readTime: number
  category: 'architecture' | 'regulated-ai' | 'data-platforms' | 'scientific'
  body: PortableTextBlock[]
  coverImage?: SanityImageSource
}

export interface ArticleCard {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  readTime: number
  category: string
}
