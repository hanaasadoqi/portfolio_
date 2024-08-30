export interface About {
  id: number
  title: string
  description: string
  type?: 'image' | 'video'
  src: string
  alt?: string
  poster?: string
  rows: number
  columns: number
}

export interface Education {
  id: number
  degree: string
  school: string
  location: string
  dates: string
  skills?: number[]
  url?: string
}

export interface EducationWithDetails extends Education {
  skillDetails?: Skill[]
}

export interface WorkExperience {
  id: number
  company: string
  website?: string
  role: string
  location: string
  dates: string
  logo: string
  description: string[]
  skills: number[]
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  backendRepo?: string
  frontendRepo?: string
  codeRepo?: string
  videoDemo?: string
  publishedDate?: string
  demoUrl?: string
  launchDate?: string
  status?: 'Completed' | 'In Progress' | 'Planned'
  tags: string[]
  storybook?: string
  figma?: string
  skills: number[]
  articles?: number[]
  associatedBlogs?: number[]
}

export interface ProjectWithDetails extends Project {
  skillDetails?: Skill[]
  articleDetails?: Article[]
}
export interface Skill {
  id: number
  name: string
  icon: string
  startYear: number
  category?: string
  tags: string[]
  documentation?: string
  projects: number[]
  articles: number[]
  education: number[]
  experience: number[]
}

export interface SkillWithDetails extends Skill {
  experienceDetails?: WorkExperience[]
  projectDetails?: Project[]
  articleDetails?: Article[]
  educationDetails?: Education[]
}

export interface Article {
  id: number
  title: string
  type: string
  description: string
  image: string
  publishedDate: string
  tags: string[]
  url?: string
  medium?: string
  hashnode?: string
  projects?: string[]
  skills?: string[]
}

export interface ArticleWithDetails extends Article {
  projectDetails?: Project[]
  skillDetails?: Skill[]
}

export interface NormalizedData {
  about: About[]
  education: EducationWithDetails[]
  workExperience: WorkExperience[]
  articles: ArticleWithDetails[]
  projects: ProjectWithDetails[]
  skills: SkillWithDetails[]
}
