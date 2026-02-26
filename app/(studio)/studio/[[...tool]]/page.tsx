'use client'

import { useEffect, useRef } from 'react'
import { Studio } from 'sanity'
import config from '@/sanity.config'

/**
 * Suppress the React "disableTransition" DOM prop warning caused by
 * Sanity Studio internals (sanity v3.x + React 19). This is a known
 * upstream issue — harmless but noisy in dev.
 */
const _origError = console.error
console.error = (...args: unknown[]) => {
  if (typeof args[0] === 'string' && args[0].includes('disableTransition')) return
  _origError.apply(console, args)
}

export default function StudioPage() {
  const ref = useRef<HTMLDivElement>(null)

  /* Sanity Studio expects to fill the viewport */
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [])

  return (
    <div ref={ref} style={{ height: '100dvh', width: '100vw' }}>
      <Studio config={config} />
    </div>
  )
}
