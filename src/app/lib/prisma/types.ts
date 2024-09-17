export interface ProjectData {
  title: string
  description: string
  category: string

  demoUrl?: string | null
  frontendRepo?: string
  backendRepo?: string
  codeRepo?: string
  videoDemo?: string

  launchDate?: string
  status: string
  image: string
  slug?: string
  tags: string[]
  skills: any[]
}


export interface ArticleData {
  title: string
  subtitle: string
  type?: string
  category?: string
  description?: string
  image: string
  slug?: string
  publishedDate?: string
  tags: string[]
  medium?: string
  hashnode?: string
  projects: any[]
  skills: any[]
}

export interface EducationData {
  degree?: string
  school: string
  location?: string
  startDate: string
  endDate?: string
  skills: any[]
  url?: string
}

export interface WorkExperienceData {
  company: string
  role: string
  location?: string
  startDate: string
  endDate?: string
  url?: string
  logo?: string
  description: string[]
  skills: any[]
}

export interface SeriesData {
  title: string
  description?: string
  category?: string

  type?: string
  tags: string[]

  skills: string[]
  articles: string[]
}

export interface CommentData {
  message: string
  author: string
  articleId?: string
  projectId?: string
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

export interface SkillData {
  name: string
  icon: string | null
  startYear: number
  documentation?: string | null
  categories: string[]
  tags: string[]
  projects?: any[]
  articles?: any[]
  series?: any[]
}
