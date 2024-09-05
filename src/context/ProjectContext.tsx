'use client'

import React, { createContext, useContext, ReactNode, useMemo } from 'react'
import { ProjectWithDetails } from '@/types/data'
import { useFilteredProjects } from '@/hooks/useFilteredProjects'

interface ProjectContextProps {
  filteredProjects: ProjectWithDetails[]
  filters: string[]
  sortOption: string | null
  searchQuery: string
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
  setSortOption: (option: string | null) => void
  setSearchQuery: (query: string) => void
  resetFiltersAndSort: () => void
}

const ProjectContext = createContext<ProjectContextProps | undefined>(undefined)

export const ProjectProvider: React.FC<{
  initialData: Record<number, ProjectWithDetails>
  children: ReactNode
}> = ({ initialData, children }) => {
  const [filters, setFilters] = React.useState<string[]>([])
  const [sortOption, setSortOption] = React.useState<string | null>(null)
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const filteredProjects = useFilteredProjects(
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
      filteredProjects,
      filters,
      sortOption,
      searchQuery,
      setFilters,
      setSortOption,
      setSearchQuery,
      resetFiltersAndSort,
    }
  }, [filteredProjects, filters, sortOption, searchQuery])

  console.count('Projects Component Rendered')

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  )
}

export const useProjectContext = () => {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider')
  }
  return context
}
