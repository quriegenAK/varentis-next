'use client'

import type { ReactNode } from 'react'

const svgProps = { width: 40, height: 40, viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' as const }

function LogoAAA() {
  return (
    <svg {...svgProps} aria-hidden>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="var(--font-playfair), serif" fontSize="14" fontWeight="600" fill="currentColor">AAA</text>
    </svg>
  )
}

function LogoCisco() {
  return (
    <svg {...svgProps} aria-hidden>
      <path d="M8 20 L20 8 L32 20 L20 32 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function LogoGap() {
  return (
    <svg {...svgProps} aria-hidden>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="var(--font-playfair), serif" fontSize="12" fontWeight="600" fill="currentColor">G</text>
    </svg>
  )
}

function LogoSafeway() {
  return (
    <svg {...svgProps} aria-hidden>
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M14 20 L20 14 L26 20 L20 26 Z" fill="currentColor" opacity="0.9" />
    </svg>
  )
}

function LogoAlbertsons() {
  return (
    <svg {...svgProps} aria-hidden>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="var(--font-playfair), serif" fontSize="10" fontWeight="600" fill="currentColor">A</text>
    </svg>
  )
}

function LogoResilience() {
  return (
    <svg {...svgProps} aria-hidden>
      <path d="M10 28 L20 12 L30 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function LogoIntertrust() {
  return (
    <svg {...svgProps} aria-hidden>
      <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 20 L20 12 L28 20 L20 28 Z" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

function LogoTivo() {
  return (
    <svg {...svgProps} aria-hidden>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="var(--font-playfair), serif" fontSize="14" fontWeight="600" fill="currentColor">T</text>
    </svg>
  )
}

function LogoGeminus() {
  return (
    <svg {...svgProps} aria-hidden>
      <path d="M8 12 L20 28 L32 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M14 12 L20 22 L26 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
    </svg>
  )
}

function LogoXenio() {
  return (
    <svg {...svgProps} aria-hidden>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="var(--font-playfair), serif" fontSize="12" fontWeight="600" fill="currentColor">X</text>
    </svg>
  )
}

function LogoArceo() {
  return (
    <svg {...svgProps} aria-hidden>
      <path d="M12 28 L20 12 L28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export const logoMap: Record<string, ReactNode> = {
  aaa:        <LogoAAA />,
  cisco:      <LogoCisco />,
  gap:        <LogoGap />,
  safeway:    <LogoSafeway />,
  albertsons: <LogoAlbertsons />,
  resilience: <LogoResilience />,
  intertrust: <LogoIntertrust />,
  tivo:       <LogoTivo />,
  geminus:    <LogoGeminus />,
  xenio:      <LogoXenio />,
  arceo:      <LogoArceo />,
}

export type LogoKey = keyof typeof logoMap
