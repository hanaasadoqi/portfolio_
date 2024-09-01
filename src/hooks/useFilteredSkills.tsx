import { useState, useEffect } from 'react'
import { Skill, SkillWithDetails } from '@/types/data'

// Function to remove duplicates from an array
function removeDuplicates<T extends { id: number }>(data: T[]): T[] {
  const uniqueIds = new Set<number>()
  return data.filter(item => {
    if (uniqueIds.has(item.id)) {
      console.log(`Duplicate found and removed: ${item.id}`) // Log duplicates
      return false // Filter out duplicate
    } else {
      uniqueIds.add(item.id)
      return true // Keep unique
    }
  })
}

export const useFilteredSkills = (
  initialData: Record<number, SkillWithDetails>,
  filters: string[],
  sortOption: string | null,
  searchQuery: string
) => {
  const [filteredSkills, setFilteredSkills] = useState<SkillWithDetails[]>([])

  useEffect(() => {
    console.log('Initial Data:', initialData) // Debug log

    // Convert initial data to an array
    let skills = Object.values(initialData)

    // Remove duplicates from initial data
    skills = removeDuplicates(skills)
    console.log('After removing duplicates:', skills) // Debug log

    // Apply search query filter
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase()
      skills = skills.filter(
        skill =>
          skill.name.toLowerCase().includes(lowercasedQuery) ||
          skill.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
      )
      console.log('After search query filter:', skills) // Debug log
    }

    // Apply tag filters
    if (filters.length > 0) {
      skills = skills.filter(skill =>
        filters.some(filter => skill.tags.includes(filter))
      )
      console.log('After applying tag filters:', skills) // Debug log
    }

    // Apply sorting
    if (sortOption) {
      skills.sort((a, b) => {
        switch (sortOption) {
          case 'Experience':
            return (b.experience?.length || 0) - (a.experience?.length || 0)
          case 'Projects':
            return (b.projects?.length || 0) - (a.projects?.length || 0)
          case 'Years':
            return (b.startYear || 0) - (a.startYear || 0)
          default:
            return 0
        }
      })
      console.log('After sorting:', skills) // Debug log
    }

    setFilteredSkills(skills)
  }, [initialData, filters, sortOption, searchQuery])

  console.log('Final filtered skills:', filteredSkills) // Debug log

  return filteredSkills
}
