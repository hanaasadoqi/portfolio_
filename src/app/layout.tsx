import type { Metadata } from 'next'
import { ScrollProvider } from '@/context/ScrollContext'
import { Poppins, Raleway, Merriweather } from 'next/font/google'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import { AuthProvider } from '@/context/AuthContext'
import Ribbon from '@/components/Ribbon'
import '../styles/globals.scss'
import 'react-tooltip/dist/react-tooltip.css'

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
  description: 'Full-stack Web Developer',
}

const DarkModeProvider = dynamic(
  () => import('../context/DarkModeContext').then(mod => mod.DarkModeProvider),
  { ssr: false }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
        <AuthProvider>
          <DarkModeProvider>
            <ScrollProvider>
              <Ribbon />
              {children}
            </ScrollProvider>
          </DarkModeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
