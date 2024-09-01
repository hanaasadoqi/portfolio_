import type { Metadata } from 'next'
import { Poppins, Raleway, Merriweather } from 'next/font/google'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
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

const TableOfContents = dynamic(() => import('@/components/TableOfContents'), {
  ssr: false,
})
const DarkModeProvider = dynamic(
  () => import('../context/DarkModeContext').then(mod => mod.DarkModeProvider),
  { ssr: false }
)

const DarkModeToggle = dynamic(
  () => import('@/components/shared/DarkModeToggle/DarkModeToggle'),
  { ssr: false }
)

const Header = dynamic(() => import('@/components/Header/Header'), {
  ssr: true,
})

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
        <DarkModeProvider>
          <TableOfContents />
          {children}
          <DarkModeToggle />
        </DarkModeProvider>
      </body>
    </html>
  )
}
