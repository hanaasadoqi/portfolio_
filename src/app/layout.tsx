import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Poppins, Raleway, Merriweather } from 'next/font/google'
import Providers from './providers'
import Background from '@/components/Background'
import { DarkModeToggle } from '@/components/shared'
import { LoadingComponent } from '@/components/LoadingComponent'
import clsx from 'clsx'
import '../styles/globals.scss'
import 'react-tooltip/dist/react-tooltip.css'
import ModalWrapper from './ModalWrapper'
import 'prism-themes/themes/prism-vsc-dark-plus.css'

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
  skill,
  project
}: Readonly<{
  children: React.ReactNode
  skill: React.ReactNode
  project: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          'relative',
          poppins.variable,
          raleway.variable,
          merriweather.variable
        )}
      >
        <Providers>
          <Background>
            <Suspense fallback={<LoadingComponent />}>
              <main className="relative z-10 flex min-h-screen w-full flex-col items-center bg-transparent">
                {children}
              </main>
              {skill}
              {project}
            </Suspense>
          </Background>
        </Providers>
      </body>
    </html>
  )
}
