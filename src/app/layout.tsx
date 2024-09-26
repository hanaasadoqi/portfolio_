import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Poppins, Raleway, Merriweather } from 'next/font/google'
import { LoadingOverlay } from '@/components'
import Providers from './providers'
import clsx from 'clsx'
import '../styles/globals.scss'
import 'react-tooltip/dist/react-tooltip.css'
import 'prism-themes/themes/prism-vsc-dark-plus.css'
import ErrorBoundary from './shared/ErrorBoundary'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '500', '700'],
})

const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: "Hanaa Sadoqi's Portfolio",
  description: 'Full-stack Web Developer | Software Engineer | UI/UX Enthusiast',
  manifest: '/manifest.json',
  authors: [{ name: 'Hanaa Sadoqi' }],
  keywords: [
    'web developer',
    'software',
    'full-stack',
    'frontend',
    'backend',
    'coding',
    'web',
    'development',
    'software engineer',
  ],
  colorScheme: 'dark',
  viewport: { width: 'device-width', initialScale: 1 },
  icons: {
    icon: '/favicon_io/favicon.ico',
    apple: '/favicon_io/icon-192x192.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Link the manifest directly */}
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body
        className={clsx(
          'relative',
          poppins.variable,
          raleway.variable,
          merriweather.variable,
        )}
      >
        <ErrorBoundary>
          <Providers>
            <Suspense fallback={<LoadingOverlay />}>
              <main className="relative z-0 flex min-h-screen w-full flex-col items-center bg-transparent">
                {children}
              </main>
              {modal}
            </Suspense>
          </Providers>
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
