'use client'

import React, { createContext, useContext, ReactNode, useMemo } from 'react'
import { Article } from '@/types/data'
import { useFilteredArticles } from '@/hooks/useFilteredArticles'

interface ArticlesContextProps {
  filteredArticles: Article[]
  filters: string[]
  sortOption: string | null
  searchQuery: string
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
  setSortOption: (option: string | null) => void
  setSearchQuery: (query: string) => void
  resetFiltersAndSort: () => void
}

const ArticlesContext = createContext<ArticlesContextProps | undefined>(
  undefined
)
export const ArticlesProvider: React.FC<{
  initialData: Record<number, Article>
  children: ReactNode
}> = ({ initialData, children }) => {
  const memoizedData = useMemo(() => initialData, [initialData])
  const [filters, setFilters] = React.useState<string[]>([])
  const [sortOption, setSortOption] = React.useState<string | null>(null)
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const filteredArticles = useFilteredArticles(
    memoizedData,
    filters,
    sortOption,
    searchQuery
  )

  const resetFiltersAndSort = () => {
    setFilters([])
    setSortOption(null)
    setSearchQuery('')
  }

  const value = useMemo(() => {
    return {
      filteredArticles,
      filters,
      sortOption,
      searchQuery,
      setFilters,
      setSortOption,
      setSearchQuery,
      resetFiltersAndSort,
    }
  }, [filteredArticles, filters, sortOption, searchQuery])

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  )
}

export const useArticlesContext = () => {
  const context = useContext(ArticlesContext)
  if (!context) {
    throw new Error(
      'useArticlesContext must be used within an ArticlesProvider'
    )
  }
  return context
}
