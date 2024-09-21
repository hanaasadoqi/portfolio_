'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { DarkModeToggle } from '@/components/shared'

const DarkModeProvider = dynamic(
  () => import('@/context/DarkModeContext').then(mod => mod.DarkModeProvider),
  { ssr: true }
)

const ScrollProvider = dynamic(
  () => import('@/context/ScrollContext').then(mod => mod.ScrollProvider),
  {
    ssr: true,
  }
)
export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <DarkModeProvider>
      {children}
      {/* <ScrollProvider>
        <DataProvider initialData={normalizedData}>{children}</DataProvider>
      </ScrollProvider> */}
      <DarkModeToggle />
    </DarkModeProvider>
  )
}
