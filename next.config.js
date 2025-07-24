/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['aytt.com.br']
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://aytt.com.br'
  }
}

module.exports = nextConfig