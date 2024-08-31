// src/utils/normalizeData.ts

import {
  About,
  Education,
  WorkExperience,
  Project,
  Skill,
  Article,
  NormalizedData,
} from '@/types/data'

// Function to normalize project data
function normalizeProjects(
  projects: Project[],
  skillsById: Record<number, Skill>,
  articlesById: Record<number, Article>
): Record<
  number,
  Project & { skillDetails?: Skill[]; articleDetails?: Article[] }
> {
  const projectsById: Record<
    number,
    Project & { skillDetails?: Skill[]; articleDetails?: Article[] }
  > = {}

  projects.forEach(project => {
    const skillDetails = project.skills.map(
      skillId => skillsById[Number(skillId)]
    )

    const articleDetails =
      project.associatedBlogs?.map(
        articleId => articlesById[Number(articleId)]
      ) || []

    projectsById[project.id] = {
      ...project,
      skillDetails,
      articleDetails,
    }
  })

  return projectsById
}

// Function to normalize skill data
function normalizeSkills(
  skills: Skill[],
  projectsById: Record<number, Project>,
  articlesById: Record<number, Article>,
  educationById: Record<number, Education>,
  workExperienceById: Record<number, WorkExperience>
): Record<
  number,
  Skill & {
    projectDetails?: Project[]
    articleDetails?: Article[]
    experienceDetails?: WorkExperience[]
    educationDetails?: Education[]
  }
> {
  const skillsById: Record<
    number,
    Skill & {
      projectDetails?: Project[]
      articleDetails?: Article[]
      experienceDetails?: WorkExperience[]
      educationDetails?: Education[]
    }
  > = {}

  skills.forEach(skill => {
    const projectDetails = skill.projects?.map(
      projectId => projectsById[Number(projectId)]
    )
    const experienceDetails = skill.experience?.map(
      experienceId => workExperienceById[Number(experienceId)]
    )
    const articleDetails = skill.articles?.map(
      articleId => articlesById[Number(articleId)]
    )
    const educationDetails = skill.education?.map(
      educationId => educationById[Number(educationId)]
    )

    skillsById[skill.id] = {
      ...skill,
      experienceDetails,
      projectDetails,
      articleDetails,
      educationDetails,
    }
  })

  return skillsById
}

// Function to normalize article data
function normalizeArticles(
  articles: Article[],
  skillsById: Record<number, Skill>,
  projectsById: Record<number, Project>
): Record<
  number,
  Article & { skillDetails?: Skill[]; projectDetails?: Project[] }
> {
  const articlesById: Record<
    number,
    Article & { skillDetails?: Skill[]; projectDetails?: Project[] }
  > = {}

  articles.forEach(article => {
    const skillDetails = article.skills?.map(
      skillId => skillsById[Number(skillId)]
    )
    const projectDetails = article.projects?.map(
      projectId => projectsById[Number(projectId)]
    )

    articlesById[article.id] = {
      ...article,
      skillDetails,
      projectDetails,
    }
  })

  return articlesById
}

function normalizeEducation(
  education: Education[],
  skillsById: Record<number, Skill>
): Record<number, Education & { skillDetails?: Skill[] }> {
  const educationById: Record<number, Education & { skillDetails?: Skill[] }> =
    {}
  education.forEach(edu => {
    const skillDetails = edu.skills?.map(skillId => skillsById[Number(skillId)])
    educationById[edu.id] = {
      ...edu,
      skillDetails,
    }
  })
  return educationById
}

// Function to normalize all data into a single NormalizedData structure
export function normalizeAllData(
  aboutData: About[],
  educationData: Education[],
  workExperienceData: WorkExperience[],
  projectData: Project[],
  skillData: Skill[],
  articleData: Article[]
): NormalizedData {
  const educationById = Object.fromEntries(
    educationData.map(edu => [edu.id, edu])
  )
  const workExperienceById = Object.fromEntries(
    workExperienceData.map(exp => [exp.id, exp])
  )
  const projectsById = Object.fromEntries(
    projectData.map(project => [project.id, project])
  )
  const articlesById = Object.fromEntries(
    articleData.map(article => [article.id, article])
  )

  // Ensure to pass the correctly normalized data to functions that depend on them
  const skillsById = normalizeSkills(
    skillData,
    projectsById,
    articlesById,
    educationById,
    workExperienceById
  )
  const normalizedProjectsById = normalizeProjects(
    projectData,
    skillsById,
    articlesById
  )
  const normalizedArticlesById = normalizeArticles(
    articleData,
    skillsById,
    normalizedProjectsById
  )

  return {
    about: aboutData,
    education: Object.values(educationById),
    workExperience: workExperienceData,
    projects: Object.values(normalizedProjectsById),
    skills: Object.values(skillsById),
    articles: Object.values(normalizedArticlesById),
  }
}

// Example usage
const rawAbout: About[] = [
  {
    id: 1,
    title: 'About Me',
    description: 'Lorem ipsum dolor sit amet.',
    type: 'image',
    src: 'path/to/image.jpg',
    alt: 'About Image',
    rows: 2,
    columns: 3,
  },
]

const rawEducation: Education[] = [
  {
    id: 1,
    degree: 'B.Sc. in Computer Science',
    school: 'University X',
    location: 'City, Country',
    dates: '2010-2014',
    skills: [1, 2],
  },
]

const rawWorkExperience: WorkExperience[] = [
  {
    id: 1,
    company: 'Company Y',
    website: 'https://companyy.com',
    role: 'Software Engineer',
    location: 'City, Country',
    dates: '2015-2018',
    logo: 'path/to/logo.png',
    description: ['Developed software', 'Maintained systems'],
    skills: [1, 3],
  },
]

const rawProjects: Project[] = [
  {
    id: 1,
    title: 'Project Z',
    description: 'Project description.',
    image: 'path/to/project-image.jpg',
    backendRepo: 'https://github.com/backend-repo',
    frontendRepo: 'https://github.com/frontend-repo',
    videoDemo: 'https://youtube.com/demo',
    demoUrl: 'https://livedemo.com',
    launchDate: '2022-01-01',
    status: 'Completed',
    tags: ['JavaScript', 'React'],
    skills: [1, 2],
    articles: [1],
    storybook: 'https://storybook-url',
    figma: 'https://figma-url',
  },
]

const rawSkills: Skill[] = [
  {
    id: 1,
    name: 'JavaScript',
    icon: 'path/to/icon.png',
    startYear: 2010,
    category: 'Programming Language',
    tags: ['ES6', 'React'],
    documentation: 'https://docs.js.com',
    projects: [1],
    articles: [1],
    education: [1],
    experience: [1],
  },
]

const rawArticles: Article[] = [
  {
    id: 1,
    title: 'An Introduction to JavaScript',
    type: 'Blog Post',
    description: 'Introduction to JavaScript and its features.',
    image: 'path/to/article-image.jpg',
    publishedDate: '2022-01-01',
    tags: ['JavaScript', 'Programming'],
    skills: ['JavaScript'],
    projects: ['Project Z'],
    url: 'https://blog.com/article',
    medium: 'medium.com/article',
    hashnode: 'hashnode.com/article',
  },
]

// Normalize all data
const normalizedData = normalizeAllData(
  rawAbout,
  rawEducation,
  rawWorkExperience,
  rawProjects,
  rawSkills,
  rawArticles
)

console.log(normalizedData)
