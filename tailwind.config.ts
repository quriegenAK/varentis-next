import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        serif:  ['var(--font-playfair)', 'Georgia', 'serif'],
        mono:   ['var(--font-jetbrains)', 'monospace'],
        sans:   ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: 'var(--gold)',
          hi:  'var(--gold-hi)',
          lo:  'var(--gold-lo)',
        },
        surface: {
          0: 'var(--bg-0)',
          1: 'var(--bg-1)',
          2: 'var(--bg-2)',
          3: 'var(--bg-3)',
          card: 'var(--bg-card)',
        },
        ink: {
          1: 'var(--text-1)',
          2: 'var(--text-2)',
          3: 'var(--text-3)',
        },
        border: 'var(--border)',
      },
      maxWidth: { wrap: '1220px' },
      animation: {
        marquee: 'marquee 48s linear infinite',
        blink:   'blink 1s step-end infinite',
        scroll:  'scrollPulse 2.2s ease infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        scrollPulse: {
          '0%,100%': { opacity: '0.35', transform: 'scaleY(1)' },
          '50%':     { opacity: '1',    transform: 'scaleY(1.15)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
