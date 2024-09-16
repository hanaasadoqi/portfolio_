export interface AboutData {
  id: string
  title: string
  description?: string
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

export interface SkillData {
  name: string
  icon: string
  startYear: number
  documentation?: string
  categories: string[]
  tags: string[]
  projects?: any[]
  articles?: any[]
  series?: any[]
}
