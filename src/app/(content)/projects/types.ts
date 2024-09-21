export interface Project {
  id: string
  title: string
  description: string
  category: string

  launchDate?: Date | null
  status: string
  image: string
  slug: string
  details: {
    demoUrl?: string | null
    frontendRepo?: string | null
    backendRepo?: string | null
    codeRepo?: string | null
    videoDemo?: string | null
  }
  tags: string[]
  skills?: {
    id: string
    name: string
    icon: string | null
    documentation?: string
  }[];
  articles?: {
    id: string
    title: string
    subtitle: string
    image: string
    slug: string
  };
}