export interface Skill {
  id: string
  name: string
  icon: string | null
  startYear: number
  categories: string[]
  tags: string[]
  _count?: {
    projects: number
    workExperiences: number
  },
  projects?: any[]
  articles?: any[]
  series?: any[]
}

export interface SkillModal {
  id: string
  name: string
  icon: string
  startYear: number
  documentation: string
  categories: string[]
  tags: string[]
}

export interface AboutData {
  id: string
  title: string
  description: string
  type: string | null
  src: string
  alt?: string | null
  poster?: string | null
  aspectRatio?: string | null
  path?: string | null
  srcSet?: string | null
  sizes?: string | null
  category?: string | null
}