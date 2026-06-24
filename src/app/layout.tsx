import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/components/portfolio/ThemeProvider'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Hanaa El Habbal — Software Engineer',
  description:
    'Software engineer building workflow-heavy products, internal tools, and operational systems. Open to Product Engineer, Full-Stack, Frontend, and Project Engineer roles.',
  authors: [{ name: 'Hanaa El Habbal' }],
  keywords: ['software engineer', 'product engineer', 'full-stack', 'workflow systems', 'react', 'typescript', 'rails', 'internal tools'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
        <body className={inter.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

