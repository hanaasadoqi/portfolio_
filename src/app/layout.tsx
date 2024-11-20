import type { Metadata } from 'next'
import { Poppins, Raleway, Merriweather } from 'next/font/google'
import Providers from './providers'
import ErrorBoundary from './shared/ErrorBoundary'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import clsx from 'clsx'

import '../styles/mixins.scss'
import '@/styles/globals.css'

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
  icons: {
    icon: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
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

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal?: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark dark:bg-app-gradient bg-app-gradient-light">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        id="root"
        className={clsx(
          'relative overscroll-contain',
          poppins.variable,
          raleway.variable,
          merriweather.variable
        )}
      >
        <ErrorBoundary>
          <Providers>
            {children}
            {modal}
            <Analytics />
            <SpeedInsights />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}

