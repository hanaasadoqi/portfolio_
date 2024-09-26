import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hanaa Sadoqi's Portfolio",
    short_name: 'Hanaa Sadoqi',
    description: 'Full-stack Web Developer | Software Engineer | UI/UX Enthusiast',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#000',
    orientation: 'landscape',
    icons: [
      {
        src: '/favicon_io/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon_io/icon-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/favicon_io/icon-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        src: '/favicon_io/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        src: '/favicon_io/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
  }
}
