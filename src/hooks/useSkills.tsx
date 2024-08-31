'use client'

import { Skill } from '../types/data'

import { useState, useEffect, useCallback } from 'react'
import useDebounce from './useDebounce'

const useSkills = (initialData: Skill[]) => {
  const [filters, setFilters] = useState<string[]>([])
  const [sortOption, setSortOption] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(initialData)

  const debouncedFilters = useDebounce(filters, 300)
  const debouncedSortOption = useDebounce(sortOption, 300)
  const debouncedSearchQuery = useDebounce(searchQuery, 300)
  const applyFiltersSortAndSearch = useCallback(() => {
    let filtered = initialData

    if (debouncedSearchQuery) {
      filtered = filtered.filter(
        skill =>
          skill.name
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase()) ||
          skill.tags.some(tag =>
            tag.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
          )
      )
    }

    if (debouncedFilters.length > 0) {
      filtered = filtered.filter(skill =>
        debouncedFilters.some((filter: string) => skill.tags.includes(filter))
      )
    }

    if (debouncedSortOption) {
      filtered = [...filtered].sort((a, b) => {
        switch (debouncedSortOption) {
          case 'Experience':
            return b.experience.length - a.experience.length
          case 'Projects':
            return b.projects.length - a.projects.length
          case 'Years':
            return (
              new Date().getFullYear() -
              b.startYear -
              (new Date().getFullYear() - a.startYear)
            )
          default:
            return 0
        }
      })
    }

    setFilteredSkills(filtered)
  }, [debouncedFilters, debouncedSearchQuery, debouncedSortOption, initialData])

  useEffect(() => {
    applyFiltersSortAndSearch()
  }, [
    applyFiltersSortAndSearch,
    debouncedFilters,
    debouncedSortOption,
    debouncedSearchQuery,
  ])

  return {
    filteredSkills,
    filters,
    sortOption,
    searchQuery,
    setFilters,
    setSortOption,
    setSearchQuery,
    resetFiltersAndSort: () => {
      setFilters([])
      setSortOption(null)
      setSearchQuery('')
      setFilteredSkills(initialData)
    },
  }
}

export default useSkills
