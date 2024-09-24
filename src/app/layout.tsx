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
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';



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
  title: 'Hanaa Sadoqi',
  description: 'Full-stack Web Developer',
}

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">

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
