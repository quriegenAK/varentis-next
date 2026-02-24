import type { Metadata, Viewport } from 'next'
import { Playfair_Display, JetBrains_Mono, Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

/* ─── Fonts ─────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['300', '400', '500'],
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500'],
  display: 'swap',
})

/* ─── Metadata ──────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: 'Varentis · AI & Data Architecture',
    template: '%s · Varentis',
  },
  description:
    'Senior-led platform engineering firm delivering production-grade AI and data architecture for regulated industries — insurance, pharma, energy, and enterprise.',
  metadataBase: new URL('https://varentis.com'),
  openGraph: {
    type: 'website',
    siteName: 'Varentis',
    title: 'Varentis · AI & Data Architecture',
    description: 'Platform engineering for industries where architecture is a matter of consequence.',
    url: 'https://varentis.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varentis · AI & Data Architecture',
    description: 'Platform engineering for industries where architecture is a matter of consequence.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/logos/logo-mark-favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [
      { url: '/logos/logo-mark-favicon.svg' },
    ],
    shortcut: '/logos/logo-mark-favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#070809' },
    { media: '(prefers-color-scheme: light)', color: '#fafaf8' },
  ],
}

/* ─── Layout ────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${playfair.variable} ${jetbrains.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          themes={['dark', 'light']}
          storageKey="vt-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
