import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeParse from 'rehype-parse'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypePrism from 'rehype-prism-plus'
import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import remarkSectionize from 'remark-sectionize'
import remarkHighlight from './src/remarkHighlight.mjs'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const withMDX = nextMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkRehype,
      remarkParse,
      remarkSectionize,
      remarkHighlight,
      remarkMath,
    ],
    rehypePlugins: [
      rehypeParse,
      rehypeSlug,
      rehypeStringify,
      rehypePrism,
      rehypeKatex,
    ],
  },
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'srev4agitwcxrnzk.public.blob.vercel-storage.com',
        pathname: '/**',
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
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    
  },
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.output = {
      ...config.output,
      chunkLoadTimeout: 30000,
    };
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
}

// export default withBundleAnalyzer(withMDX(nextConfig))
export default withMDX(nextConfig);