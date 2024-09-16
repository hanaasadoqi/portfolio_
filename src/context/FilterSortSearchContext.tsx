'use client'
import { createContext, FormEvent, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

interface FilterSortContextProps {
  filterBy: string | null
  setFilterBy: (filter: string | null) => void
  sortBy: 'Years' | 'Projects' | 'Experience' | null
  setSortBy: (sort: 'Years' | 'Projects' | 'Experience' | null) => void
  searchQuery: string | null
  setSearchQuery: (query: string | null) => void
  resetControls: () => void
  currentControl?: 'filter' | 'search' | 'sort' | null
  toggleControl: (control?: 'filter' | 'search' | 'sort' | null) => void
  submitSearchQuery: () => void
  categories: string[]
  tags: string[]
}

const FilterSortContext = createContext<FilterSortContextProps | undefined>(undefined)

export const useFilterSort = () => {
  const context = useContext(FilterSortContext)
  if (!context) {
    throw new Error('useFilterSort must be used within a FilterSortProvider')
  }
  return context
}

export const FilterSortProvider = ({ categories, tags, children }: { categories: string[]; tags: string[]; children: React.ReactNode }) => {
  const [filterBy, setFilterBy] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'Years' | 'Projects' | 'Experience' | null>(null)
  const [searchQuery, setSearchQuery] = useState<string | null>(null)
  const [currentControl, setCurrentControl] = useState<"filter" | "search" | "sort" | null | undefined>(null)

  const router = useRouter()

  // Throttled function to update the search parameters in the URL
  const updateURLParams = () => {
    const params = new URLSearchParams()

    if (filterBy) params.set('filterBy', filterBy)
    if (sortBy) params.set('sortBy', sortBy)
    if (searchQuery) params.set('searchQuery', searchQuery)

    // Only push new URL if something has changed
    router.push(`?${params.toString()}`, undefined)
  }

  const resetControls = () => {
    setFilterBy(null)
    setSortBy(null)
    setSearchQuery(null)
    updateURLParams()
  }

  const toggleControl = (control?: 'filter' | 'search' | 'sort' | null) => {
    setCurrentControl(control)
  }

  const submitSearchQuery = () => {
    updateURLParams() // Trigger the URL update after the user submits
  }

  return (
    <FilterSortContext.Provider
      value={{
        filterBy,
        setFilterBy: (filter) => {
          setFilterBy(filter)
          updateURLParams()
        },
        sortBy,
        setSortBy: (sort) => {
          setSortBy(sort)
          updateURLParams()
        },
        searchQuery,
        setSearchQuery: (query) => {
          setSearchQuery(query)
          updateURLParams()
        },
        resetControls,
        currentControl,
        toggleControl,
        categories,
        submitSearchQuery,
        tags,
      }}
    >
      {children}
    </FilterSortContext.Provider>
  )
}