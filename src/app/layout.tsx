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
  title: 'Hanaa El Habbal — Senior Software Engineer',
  description:
    'Senior Software Engineer building SaaS platforms, internal tools, and business-critical systems. Specializing in React, TypeScript, Rails, and multi-tenant architecture.',
  authors: [{ name: 'Hanaa El Habbal' }],
  keywords: ['senior software engineer', 'saas', 'react', 'typescript', 'rails', 'internal tools'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.variable} style={{ backgroundColor: '#0d1117', color: '#e6edf3' }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

