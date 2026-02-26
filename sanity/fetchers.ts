import { client } from './client'
import { articlesQuery, articleBySlugQuery } from './queries'
import type { Article, ArticleCard } from './types'

export async function getArticles(): Promise<ArticleCard[]> {
  return client.fetch(articlesQuery)
}

export async function getArticle(slug: string): Promise<Article | null> {
  return client.fetch(articleBySlugQuery, { slug })
}

export async function getArticleSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(`*[_type == "article"]{ "slug": slug.current }`)
}
