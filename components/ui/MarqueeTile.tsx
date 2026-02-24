'use client'

import { useState } from 'react'
import Image from 'next/image'

export function MarqueeTile({ name, logoKey }: { name: string; logoKey: string }) {
  const [imgError, setImgError] = useState(false)
  const logoSrc = `/clientLogos/logo-${logoKey}.svg`

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: '0 52px',
        minWidth: 120,
        flexShrink: 0,
        opacity: 0.55,
        transition: 'opacity 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.opacity = '1'
        const logoEl = el.querySelector('[data-logo]') as HTMLElement | null
        if (logoEl) logoEl.style.filter = 'brightness(1.2)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.opacity = '0.55'
        const logoEl = el.querySelector('[data-logo]') as HTMLElement | null
        if (logoEl) logoEl.style.filter = 'none'
      }}
    >
      <div
        data-logo
        style={{
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'filter 0.3s ease',
        }}
      >
        {!imgError ? (
          <Image
            src={logoSrc}
            alt={name}
            width={40}
            height={40}
            unoptimized
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1rem', color: 'var(--gold-lo)' }}>
            {name.charAt(0)}
          </span>
        )}
      </div>

      <span
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: '0.58rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-3)',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </span>
    </div>
  )
}
