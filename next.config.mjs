import withBundleAnalyzer from '@next/bundle-analyzer'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeParse from 'rehype-parse'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypePrism from 'rehype-prism-plus'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import remarkSectionize from 'remark-sectionize'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig = {
  // reactProductionProfiling: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'srev4agitwcxrnzk.public.blob.vercel-storage.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.searchenginejournal.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = join(__dirname, 'src')
    config.resolve.fallback = {
      fs: false,
    }
    return config
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkRehype, remarkParse, remarkSectionize],
    rehypePlugins: [rehypeParse, rehypeSlug, rehypeStringify, rehypePrism],
  },
})

const mdxConfig = withMDX(nextConfig)

export default bundleAnalyzer(mdxConfig)
