import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticles } from '@/lib/sanity'
import type { ArticleCard } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Point of View',
  description: 'Architectural thinking on AI platforms, regulated systems, and data infrastructure from Varentis.',
}

/* Force revalidation every 60s (ISR) */
export const revalidate = 60

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(iso))
}

const categoryLabels: Record<string, string> = {
  'architecture':   'Architecture',
  'regulated-ai':   'Regulated AI',
  'data-platforms': 'Data Platforms',
  'scientific':     'Scientific',
}

/* Fallback articles when Sanity not yet connected */
const PLACEHOLDER_ARTICLES: ArticleCard[] = [
  {
    _id: 'placeholder-1',
    title: 'Why AI Transformations Fail at the Data Layer — Not the Model Layer',
    slug: { current: 'ai-transformations-data-layer' },
    publishedAt: new Date().toISOString(),
    excerpt: 'Every enterprise CTO is under board pressure to "do AI." Most don\'t realize their data architecture is the bottleneck. You cannot LLM your way out of a broken data foundation.',
    readTime: 9,
    category: 'architecture',
  },
  {
    _id: 'placeholder-2',
    title: 'Regulated AI: Turning Compliance Constraints Into Architectural Advantages',
    slug: { current: 'regulated-ai-compliance-architecture' },
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    excerpt: 'Most regulated-industry CTOs treat compliance as a ceiling that limits what they can build. The firms winning in regulated AI have learned to treat it as a structural moat.',
    readTime: 12,
    category: 'regulated-ai',
  },
  {
    _id: 'placeholder-3',
    title: 'The Platform Ceiling Problem: How Year-One Architecture Decisions Define Year-Five Outcomes',
    slug: { current: 'platform-ceiling-problem' },
    publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    excerpt: 'Architectural debt compounds faster than technical debt. We\'ve watched this pattern play out across eight industries over two decades. Here\'s what it costs and how to avoid it.',
    readTime: 11,
    category: 'architecture',
  },
]

export default async function ArticlesPage() {
  let articles: ArticleCard[] = []

  try {
    articles = await getArticles()
  } catch {
    // Sanity not yet configured — show placeholders
    articles = PLACEHOLDER_ARTICLES
  }

  if (articles.length === 0) articles = PLACEHOLDER_ARTICLES

  return (
    <div style={{ background: 'var(--bg-0)', minHeight: '100vh', transition: 'background 0.4s ease' }}>

      {/* Header */}
      <div style={{
        background: 'var(--bg-1)', borderBottom: '1px solid var(--border)',
        paddingTop: 140, paddingBottom: 80, transition: 'background 0.4s ease',
      }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 48px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'var(--gold-lo)', marginBottom: 28,
          }}>
            <span style={{ color: 'var(--text-3)' }}>04</span>
            Point of View
          </div>
          <h1 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontWeight: 400, fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            lineHeight: 1.07, color: 'var(--text-1)',
          }}>
            Opinions worth<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>paying for.</em>
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '1rem', lineHeight: 1.72, color: 'var(--text-2)',
            maxWidth: 520, marginTop: 24,
          }}>
            Architectural thinking on AI platforms, regulated systems, and data infrastructure — from 20 years of building the systems underneath everything.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '80px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 1, background: 'var(--border)' }}>
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </div>

    </div>
  )
}

function ArticleCard({ article }: { article: ArticleCard }) {
  const cat = categoryLabels[article.category] ?? article.category
  return (
    <Link
      href={`/articles/${article.slug.current}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        className="articles-card-hover"
        style={{
        background: 'var(--bg-0)', padding: '44px 40px',
        transition: 'background 0.25s ease, border-color 0.25s ease', height: '100%',
        borderLeft: '2px solid transparent',
        cursor: 'none',
      }}
      >
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 22 }}>
          <span style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            padding: '4px 10px', border: '1px solid var(--border-gold)',
            color: 'var(--gold-lo)', background: 'var(--gold-glow)',
          }}>{cat}</span>
          <span style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.1em',
          }}>{article.readTime} min read</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-playfair), serif',
          fontSize: '1.45rem', fontWeight: 400, lineHeight: 1.25,
          color: 'var(--text-1)', marginBottom: 16,
        }}>{article.title}</h2>

        <p style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--text-2)',
          marginBottom: 28,
        }}>{article.excerpt}</p>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid var(--border)', paddingTop: 20,
        }}>
          <span style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.12em',
          }}>
            {formatDate(article.publishedAt)}
          </span>
          <span style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--gold-lo)', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            Read <span style={{ display: 'inline-block' }}>→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
