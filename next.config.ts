import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'logo.clearbit.com' },
    ],
  },
  // Sanity Studio served at /studio
  async rewrites() {
    return [
      { source: '/studio/:path*', destination: '/studio/:path*' },
    ]
  },
}

export default nextConfig
