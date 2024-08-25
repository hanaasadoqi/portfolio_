import withBundleAnalyzer from '@next/bundle-analyzer'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'images.pexels.com',
      'media.licdn.com',
      'www.searchenginejournal.com',
      'miro.medium.com',
      'images.squarespace-cdn.com',
      'localhost.com',
      'cdn.pixabay.com',
    ],
  },
}

export default bundleAnalyzer(nextConfig)
