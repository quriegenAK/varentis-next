'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode, CSSProperties } from 'react'

/* ─── Button gold ────────────────────────────── */
export function BtnGold({
  href, children, style,
}: { href: string; children: ReactNode; style?: CSSProperties }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        padding: '16px 36px',
        background: hov ? 'var(--gold-hi)' : 'var(--gold)',
        color: 'var(--text-inv)',
        fontFamily: 'var(--font-jetbrains), monospace',
        fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase',
        textDecoration: 'none',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? 'var(--shadow-gold)' : 'none',
        transition: 'all 0.25s ease',
        ...style,
      }}
    >
      {children}
    </a>
  )
}

/* ─── Button text ────────────────────────────── */
export function BtnText({
  href, children,
}: { href: string; children: ReactNode }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-jetbrains), monospace',
        fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase',
        color: hov ? 'var(--text-1)' : 'var(--text-2)',
        textDecoration: 'none',
        borderBottom: hov ? '1px solid var(--text-2)' : '1px solid transparent',
        paddingBottom: 2,
        transition: 'all 0.2s ease',
      }}
    >
      {children}
      <span style={{ transition: 'transform 0.2s ease', transform: hov ? 'translateX(4px)' : 'none', display: 'inline-block' }}>→</span>
    </a>
  )
}

/* ─── Tag ────────────────────────────────────── */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span style={{
      fontFamily: 'var(--font-jetbrains), monospace',
      fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase',
      padding: '5px 10px', border: '1px solid var(--border)',
      color: 'var(--text-3)',
    }}>
      {children}
    </span>
  )
}

/* ─── Section label ──────────────────────────── */
export function SLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="s-label" data-n={n} style={{ marginBottom: 32 }}>
      {children}
    </div>
  )
}

/* ─── Reveal on scroll ───────────────────────── */
export function Reveal({
  children, delay = 0, style,
}: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVis(true); obs.disconnect() } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ─── Arrow icon ─────────────────────────────── */
export function ArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
