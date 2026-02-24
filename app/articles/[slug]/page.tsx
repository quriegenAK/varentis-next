import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { getArticle, getArticleSlugs } from '@/lib/sanity'

export const revalidate = 60

/* ─── Static Params ───────────────────────── */
export async function generateStaticParams() {
  try {
    const slugs = await getArticleSlugs()
    return slugs.map(({ slug }) => ({ slug }))
  } catch {
    return []
  }
}

/* ─── Metadata ────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  try {
    const article = await getArticle(slug)
    if (!article) return { title: 'Article Not Found' }
    return {
      title: article.title,
      description: article.excerpt,
    }
  } catch {
    return { title: 'Article' }
  }
}

/* ─── Portable Text Components ────────────── */
const ptComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 style={{
        fontFamily: 'var(--font-playfair), serif',
        fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 400,
        color: 'var(--text-1)', margin: '2.5rem 0 1rem', lineHeight: 1.2,
      }}>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 style={{
        fontFamily: 'var(--font-inter), sans-serif',
        fontSize: '1rem', fontWeight: 500, letterSpacing: '0.06em',
        textTransform: 'uppercase', color: 'var(--text-1)', margin: '2rem 0 0.75rem',
      }}>{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p style={{
        fontFamily: 'var(--font-inter), sans-serif',
        fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)', marginBottom: '1.5rem',
      }}>{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote style={{
        borderLeft: '2px solid var(--gold)', padding: '1rem 1.5rem',
        margin: '2rem 0', background: 'var(--gold-glow)',
      }}>
        <p style={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic', color: 'var(--text-1)', margin: 0, fontSize: '1.1rem', lineHeight: 1.7 }}>{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong style={{ color: 'var(--text-1)', fontWeight: 500 }}>{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code style={{
        fontFamily: 'var(--font-jetbrains), monospace', fontSize: '0.82rem',
        background: 'var(--bg-2)', color: 'var(--gold)', padding: '2px 6px',
      }}>{children}</code>
    ),
  },
  types: {
    codeBlock: ({ value }: { value: { code: string; language?: string } }) => (
      <div style={{ margin: '2rem 0', background: 'var(--bg-1)', border: '1px solid var(--border)' }}>
        <div style={{ height: 32, background: 'var(--bg-2)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 7 }}>
          {[['#ff5f57'],['#febc2e'],['#28c840']].map(([c], i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
          ))}
          {value.language && (
            <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', marginLeft: 'auto' }}>{value.language}</span>
          )}
        </div>
        <pre style={{ padding: '20px 22px', overflow: 'auto', margin: 0 }}>
          <code style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '0.8rem', lineHeight: 1.75, color: 'var(--text-2)' }}>{value.code}</code>
        </pre>
      </div>
    ),
  },
}

/* ─── Page ────────────────────────────────── */
export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  let article = null

  try {
    article = await getArticle(slug)
  } catch {
    // Sanity not configured
  }

  if (!article) notFound()

  const publishedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  }).format(new Date(article.publishedAt))

  return (
    <div style={{ background: 'var(--bg-0)', minHeight: '100vh', transition: 'background 0.4s ease' }}>

      {/* Back nav */}
      <div style={{ position: 'fixed', top: 84, left: 48, zIndex: 100 }}>
        <Link href="/articles" className="articles-back-link" style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--text-3)', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 8,
          transition: 'color 0.2s',
        }}>
          ← All Articles
        </Link>
      </div>

      {/* Article header */}
      <div style={{
        background: 'var(--bg-1)', borderBottom: '1px solid var(--border)',
        paddingTop: 140, paddingBottom: 72, transition: 'background 0.4s ease',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 48px' }}>

          {/* Meta row */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 32, flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '4px 10px', border: '1px solid var(--border-gold)',
              color: 'var(--gold-lo)', background: 'var(--gold-glow)',
            }}>{article.category.replace(/-/g, ' ')}</span>
            <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '0.6rem', color: 'var(--text-3)' }}>{publishedDate}</span>
            <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '0.6rem', color: 'var(--text-3)' }}>{article.readTime} min read</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontWeight: 400, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            lineHeight: 1.12, color: 'var(--text-1)', marginBottom: 28,
          }}>{article.title}</h1>

          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '1.1rem', lineHeight: 1.72, color: 'var(--text-2)',
          }}>{article.excerpt}</p>

          {/* Gold rule */}
          <div style={{ width: 48, height: 1, background: 'var(--gold)', marginTop: 36 }} />
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '72px 48px 140px' }}>
        {article.body && (
          // @ts-expect-error — portabletext types
          <PortableText value={article.body} components={ptComponents} />
        )}

        {/* Author footer */}
        <div style={{
          marginTop: 72, paddingTop: 48, borderTop: '1px solid var(--border)',
          display: 'flex', gap: 24, alignItems: 'center',
        }}>
          <div style={{
            width: 56, height: 56, background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.1rem', color: 'var(--gold-lo)' }}>AK</span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-1)', marginBottom: 4 }}>Ash Khan</div>
            <div style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-lo)' }}>Founder & Principal Architect · Varentis</div>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 56, padding: '40px 44px',
          background: 'var(--bg-1)', border: '1px solid var(--border)',
          position: 'relative', overflow: 'hidden',
          transition: 'background 0.4s ease',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,var(--gold),transparent)' }} />
          <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-1)', marginBottom: 12 }}>
            Facing a platform challenge?
          </h3>
          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-2)', marginBottom: 24 }}>
            If this piece resonated, let&apos;s talk directly. 30 minutes, no sales process.
          </p>
          <a href="https://cal.com/ash-khan" className="articles-cta-btn" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '13px 28px', background: 'var(--gold)', color: 'var(--text-inv)',
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'background 0.25s ease',
          }}>
            Schedule a Conversation →
          </a>
        </div>
      </div>
    </div>
  )
}
