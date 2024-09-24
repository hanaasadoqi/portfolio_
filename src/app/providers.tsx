'use client'

import React from 'react'
import { DarkModeProvider } from '@/context/DarkModeContext'
import FabMenu from '@/components/shared/FABMenu'
import { ScrollProvider } from '@/context/ScrollContext'

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <DarkModeProvider>
      <ScrollProvider>
        {children}
      </ScrollProvider>
      <FabMenu />
    </DarkModeProvider>
  )
}
