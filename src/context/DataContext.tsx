'use client'

import React, { createContext, useContext, ReactNode, useMemo } from 'react'
import { NormalizedData } from '@/types/data'

const DataContext = createContext<NormalizedData | undefined>(undefined)

interface DataProviderProps {
  initialData: NormalizedData
  children: ReactNode
}

export const DataProvider = ({ initialData, children }: DataProviderProps) => {
  const memoizedData = useMemo(() => initialData, [initialData])

  return (
    <DataContext.Provider value={memoizedData}>{children}</DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
