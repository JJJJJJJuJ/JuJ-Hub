import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      's21.ax1x.com',
      'www.jujcsgo.cn',
      'www.5eplay.com',
      'cdn.vxe.com',
      'hub.fgg.com.cn',
      'www.asus.com',
      'assets2.razerzone.com',
      'staticcdn.oopz.cn',
      'screen.bmcx.com',
      'obsproject.com',
      'wooting.io',
      'dldir1.qq.com'
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=59'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://at.alicdn.com; style-src 'self' 'unsafe-inline' https://at.alicdn.com; img-src 'self' data: https:; font-src 'self' https://at.alicdn.com; connect-src 'self' https:;"
          }
        ],
      },
    ]
  }
};

export default nextConfig;
