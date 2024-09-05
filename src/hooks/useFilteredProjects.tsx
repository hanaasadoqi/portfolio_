import { useState, useEffect } from 'react'
import { ProjectWithDetails } from '@/types/data'

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

export const useFilteredProjects = (
  initialData: Record<number, ProjectWithDetails>,
  filters: string[],
  sortOption: string | null,
  searchQuery: string
) => {
  const [filteredProjects, setFilteredProjects] = useState<
    ProjectWithDetails[]
  >([])

  useEffect(() => {
    console.log('Initial Data:', initialData) // Debug log

    // Convert initial data to an array
    let projects = Object.values(initialData)

    // Remove duplicates from initial data
    projects = removeDuplicates(projects)
    console.log('After removing duplicates:', projects) // Debug log

    // Apply search query filter
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase()
      projects = projects.filter(
        project =>
          project.title.toLowerCase().includes(lowercasedQuery) ||
          (project.tags &&
            project.tags.some(tag =>
              tag.toLowerCase().includes(lowercasedQuery)
            )) ||
          project.description.toLowerCase().includes(lowercasedQuery)
      )
      console.log('After search query filter:', projects) // Debug log
    }

    // Apply tag filters
    if (filters.length > 0) {
      projects = projects.filter(project =>
        filters.every(filter => project.tags.includes(filter))
      )
      console.log('After applying tag filters:', projects) // Debug log
    }

    // Apply sorting
    if (sortOption) {
      projects.sort((a, b) => {
        switch (sortOption) {
          case 'Date':
            return (
              new Date(b.launchDate || 'TBD').getTime() -
              new Date(a.launchDate || 'TBD').getTime()
            )
          case 'Title':
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase()) // Corrected sorting logic for strings
          default:
            return 0
        }
      })
      console.log('After sorting:', projects) // Debug log
    }

    setFilteredProjects(projects)
  }, [initialData, filters, sortOption, searchQuery])

  console.log('Final filtered projects:', filteredProjects) // Debug log
  console.count('Projects Component Rendered')

  return filteredProjects
}
