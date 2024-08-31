// src/utils/filterSortFunctions.ts

import { Skill, Project, Article } from '@/types/data'

export const filterSkills = (
  skill: Skill,
  filters: string[],
  searchQuery: string
): boolean => {
  return (
    (filters.length === 0 ||
      filters.some(filter => skill.tags.includes(filter))) &&
    (searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some(tag =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ))
  )
}

export const sortSkills = (
  a: Skill,
  b: Skill,
  sortOption: string | null
): number => {
  switch (sortOption) {
    case 'Experience':
      return (b.experience?.length || 0) - (a.experience?.length || 0)
    case 'Projects':
      return (b.projects?.length || 0) - (a.projects?.length || 0)
    case 'Years':
      return (
        new Date().getFullYear() -
        (b.startYear || new Date().getFullYear()) -
        (new Date().getFullYear() - (a.startYear || new Date().getFullYear()))
      )
    default:
      return 0
  }
}

export const filterProjects = (
  project: Project,
  filters: string[],
  searchQuery: string
): boolean => {
  return (
    (filters.length === 0 ||
      filters.some(filter => project.tags.includes(filter))) &&
    (searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ))
  )
}
