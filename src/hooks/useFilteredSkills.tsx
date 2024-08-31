import { useState, useEffect, useCallback } from 'react'
import { Skill } from '@/types/data'

export const useFilteredSkills = (
  initialData: Record<number, Skill>,
  filters: string[],
  sortOption: string | null,
  searchQuery: string
) => {
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(
    Object.values(initialData)
  )

  const applyFiltersSortAndSearch = useCallback(() => {
    let filtered = Object.values(initialData)

    if (searchQuery) {
      filtered = filtered.filter(
        skill =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.tags.some(tag =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    }

    if (filters.length > 0) {
      filtered = filtered.filter(skill =>
        filters.some((filter: string) => skill.tags.includes(filter))
      )
    }

    if (sortOption) {
      filtered = [...filtered].sort((a, b) => {
        switch (sortOption) {
          case 'Experience':
            return (b.experience?.length || 0) - (a.experience?.length || 0)
          case 'Projects':
            return (b.projects?.length || 0) - (a.projects?.length || 0)
          case 'Years':
            return (
              new Date().getFullYear() -
              (b.startYear || new Date().getFullYear()) -
              (new Date().getFullYear() -
                (a.startYear || new Date().getFullYear()))
            )
          default:
            return 0
        }
      })
    }

    setFilteredSkills(filtered)
  }, [filters, sortOption, searchQuery, initialData])

  useEffect(() => {
    applyFiltersSortAndSearch()
  }, [applyFiltersSortAndSearch])

  return filteredSkills
}
