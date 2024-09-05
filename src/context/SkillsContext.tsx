'use client'

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
} from 'react'
import { Skill, SkillWithDetails } from '@/types/data'
import { useFilteredSkills } from '@/hooks/useFilteredSkills'

interface SkillsContextProps {
  filteredSkills: SkillWithDetails[]
  filters: string[]
  sortOption: string | null
  searchQuery: string
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
  setSortOption: (option: string | null) => void
  setSearchQuery: (query: string) => void
  resetFiltersAndSort: () => void
}

const SkillsContext = createContext<SkillsContextProps | undefined>(undefined)

export const SkillsProvider: React.FC<{
  initialData: Record<number, SkillWithDetails>
  children: ReactNode
}> = ({ initialData, children }) => {
  const [filters, setFilters] = useState<string[]>([])
  const [sortOption, setSortOption] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredSkills = useFilteredSkills(
    initialData,
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
      filteredSkills,
      filters,
      sortOption,
      searchQuery,
      setFilters,
      setSortOption,
      setSearchQuery,
      resetFiltersAndSort,
    }
  }, [filteredSkills, filters, sortOption, searchQuery])

  return (
    <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>
  )
}

export const useSkillsContext = () => {
  const context = useContext(SkillsContext)
  if (context === undefined) {
    throw new Error('useSkillsContext must be used within a SkillsProvider')
  }
  return context
}
