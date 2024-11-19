import { Skill } from "@/types"

export const filterSkills = (
  skills: Skill[],
  searchQuery = '',
  filterByTag = '',
  filterByCategory = '',
  sortBy = ''
) => {
  // Filter by search query, tags, and categories
  const filtered = skills.filter((skill: Skill) => {
    const matchesQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = filterByTag ? skill.tags?.includes(filterByTag) : true
    const matchesCategory = filterByCategory ? skill.categories?.includes(filterByCategory) : true

    return matchesQuery && matchesTag && matchesCategory
  })

  if (sortBy === 'Years') {
    filtered.sort((a, b) => (b.startYear || 0) - (a.startYear || 0))
  } else if (sortBy === 'Projects') {
    filtered.sort((a, b) => (b.projects?.length || 0) - (a.projects?.length || 0))
  } else if (sortBy === 'Experience') {
    filtered.sort((a, b) => (b.experiences?.length || 0) - (a.experiences?.length || 0))
  }

  return searchQuery.length === 0 && filterByCategory.length === 0 && filterByTag.length === 0 ? skills : filtered;
}