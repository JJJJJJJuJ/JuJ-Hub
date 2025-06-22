/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
    domains: []
  },
  experimental: {
    // 一些实验性配置
  },
  eslint: {
    // 在生产构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/.well-known/acme-challenge/:path*',
        destination: '/api/acme-challenge/:path*'
      }
    ]
  }
};

module.exports = nextConfig;