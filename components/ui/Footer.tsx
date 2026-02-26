'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { LogoDark, LogoLight } from '@/components/nav/LogoSvg'
import { useBreakpoint } from '@/components/sections/shared'

export function Footer() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const bp = useBreakpoint()
  const isMobile = bp === 'mobile'
  useEffect(() => setMounted(true), [])

  const links = [
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#services',   label: 'Services'   },
    { href: '#pov',        label: 'POV'        },
    { href: '#contact',    label: 'Contact'    },
  ]

  const padding = isMobile ? '32px 0' : '44px 0'
  const containerPadding = isMobile ? '0 20px' : bp === 'tablet' ? '0 32px' : '0 48px'

  return (
    <footer style={{
      position: 'relative',
      borderTop: '1px solid var(--border)',
      padding,
      background: 'var(--bg-1)',
      transition: 'background 0.4s ease',
    }}>
      <a
        href="https://logo.dev"
        aria-hidden="true"
        tabIndex={-1}
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        Logos provided by Logo.dev
      </a>
      <div style={{
        maxWidth: 1220,
        margin: '0 auto',
        padding: containerPadding,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Row 1: Logo left, nav links right */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 16 : 0,
        }}>
          <div style={{ opacity: 0.55 }}>
            {(!mounted || theme === 'dark') ? <LogoDark /> : <LogoLight />}
          </div>
          <div style={{
            display: 'flex',
            gap: isMobile ? 20 : 28,
            flexWrap: 'wrap',
          }}>
            {links.map(({ href, label }) => (
              <a key={href} href={href} className="footer-link" style={{
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: '0.6rem', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--text-3)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                {label}
              </a>
            ))}
          </div>
        </div>
        {/* Row 2: Copyright left, Privacy · Terms right */}
        <div style={{
          marginTop: 24,
          paddingTop: 24,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 16 : 0,
        }}>
          <span style={{
            fontFamily: 'var(--font-jetbrains), monospace',
            fontSize: '0.6rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--text-3)',
          }}>
            © 2026 Abasin Co. All rights reserved
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link href="/privacy" style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '0.6rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'var(--text-3)',
              textDecoration: 'none',
            }}>
              Privacy Policy
            </Link>
            <span style={{ color: 'var(--text-3)', fontSize: '0.6rem' }}>·</span>
            <Link href="/terms" style={{
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '0.6rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'var(--text-3)',
              textDecoration: 'none',
            }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
