import { PrismaClient } from '@prisma/client'
import { ProjectData, ArticleData, SeriesData, EducationData, WorkExperienceData, AboutData as AssetData, CommentData, SkillData } from './types'
import { faker } from '@faker-js/faker'
import * as fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function loadJSON(fileName: string) {
  const filePath = path.join(process.cwd(), 'src/lib/data', fileName)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileContent)
}


async function resetDatabase() {
  await prisma.$executeRaw`TRUNCATE TABLE "articles" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "projects" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "skills" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "assets" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "series" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "comments" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "educations" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "work_experiences" CASCADE;`;
}

async function generateComments(numComments: number, entityType: 'article' | 'project') {
  const entities = entityType === 'article' ? await prisma.article.findMany({ select: { id: true } }) : await prisma.project.findMany({ select: { id: true } })

  const comments: CommentData[] = Array.from({ length: numComments }, () => ({
    message: faker.lorem.paragraph(),
    author: faker.person.fullName(),
    [`${entityType}Id`]: entities[Math.floor(Math.random() * entities.length)].id
  }))

  return comments
}

async function seed() {
  const skills: SkillData[] = await loadJSON('skillsData.json')
  const assets: AssetData[] = await loadJSON('assetData.json')
  const projects: ProjectData[] = await loadJSON('projectsData.json')
  const articles: ArticleData[] = await loadJSON('articlesData.json')
  const seriesData: SeriesData[] = await loadJSON('seriesData.json')
  const educationData: EducationData[] = await loadJSON('educationData.json')
  const experiences: WorkExperienceData[] = await loadJSON('experienceData.json')

  await resetDatabase()

  await prisma.skill.createMany({
    data: skills.map((skill: SkillData) => ({
      name: skill.name,
      icon: skill.icon,
      startYear: skill.startYear,
      documentation: skill.documentation,
      categories: skill.categories,
      tags: skill.tags,
    })),
  })

  const allSkills = await prisma.skill.findMany()

  await prisma.asset.createMany({
    data: assets.map((asset: AssetData) => ({
      title: asset.title,
      description: asset.description,
      type: asset.type,
      src: asset.src,
      alt: asset.alt,
      path: asset.path,
      poster: asset.poster,
      aspectRatio: asset.aspectRatio,
      category: asset.category,
      srcSet: asset.srcSet,
      sizes: asset.sizes,
    })),
  });

  const allAssets = await prisma.asset.findMany()

  for (const project of projects) {
    await prisma.project.create({
      data: {
        image: project.image,
        title: project.title,
        description: project.description,
        category: project.category,
        demoUrl: project.demoUrl,
        frontendRepo: project.frontendRepo,
        backendRepo: project.backendRepo,
        codeRepo: project.codeRepo,
        videoDemo: project.videoDemo,
        launchDate: project.launchDate,
        status: project.status,
        slug: project.slug || "/case-studies/introduction",
        tags: project.tags,
        skills: {
          connect: project.skills
            .map((skillName: string) => {
              const foundSkill = allSkills.find((s: SkillData) => s.name === skillName)
              return foundSkill ? { id: foundSkill.id } : undefined
            })
            .filter((skill): skill is { id: string } => skill !== undefined),
        },
      },
    })
  }

  const allProjects = await prisma.project.findMany()

  for (const article of articles) {
    await prisma.article.create({
      data: {
        title: article.title,
        subtitle: article.subtitle,
        type: article.type,
        category: article.category,
        description: article.description,
        image: article.image,
        slug: article.slug,
        publishedDate: article.publishedDate,
        medium: article.medium,
        hashnode: article.hashnode,
        tags: article.tags,
        skills: {
          connect: article.skills
            .map((skillName: string) => {
              const foundSkill = allSkills.find(s => s.name === skillName)
              return foundSkill ? { id: foundSkill.id } : undefined
            })
            .filter((skill): skill is { id: string } => skill !== undefined),
        },
        projects: {
          connect: article.projects
            .map((projectTitle: string) => {
              const foundProject = allProjects.find(
                (p) => p.title === projectTitle
              )
              return foundProject ? { id: foundProject.id } : undefined
            })
            .filter((project): project is { id: string } => project !== undefined),
        },
      },
    })
  }

  const articleComments = await generateComments(50, 'article')
  const projectComments = await generateComments(50, 'project')

  await prisma.comment.createMany({
    data: [...articleComments, ...projectComments]
  })

  const allArticles = await prisma.article.findMany();

  for (const series of seriesData) {
    await prisma.series.create({
      data: {
        title: series.title,
        description: series.description,
        category: series.category,
        type: series.type,
        tags: series.tags,
        articles: {
          connect: series.articles
            .map((articleTitle: string) => {
              const foundArticle = allArticles.find(
                (a) => a.title === articleTitle
              )
              return foundArticle ? { id: foundArticle.id } : undefined
            })
            .filter((article): article is { id: string } => article !== undefined)
        },
      }
    })
  }


  for (const education of educationData) {
    await prisma.education.create({
      data: {
        degree: education.degree,
        school: education.school,
        location: education.location,
        startDate: education.startDate,
        endDate: education.endDate,
        url: education.url,
        skills: {
          connect: education.skills
            .map((skillName: string) => {
              const foundSkill = allSkills.find((skill: SkillData) => skill.name === skillName)
              return foundSkill ? { id: foundSkill.id } : undefined
            })
            .filter((skill): skill is { id: string } => skill !== undefined)
        }
      }
    })
  }

  for (const experience of experiences) {
    await prisma.workExperience.create({
      data: {
        company: experience.company,
        role: experience.role,
        location: experience.location,
        startDate: experience.startDate,
        endDate: experience.endDate,
        url: experience.url,
        logo: experience.logo,
        description: experience.description,
        skills: {
          connect: experience.skills
            .map((skillName: string) => {
              const foundSkill = allSkills.find((skill: SkillData) => skill.name === skillName)
              return foundSkill ? { id: foundSkill.id } : undefined
            })
            .filter((skill): skill is { id: string } => skill !== undefined)
        }
      }
    })
  }


}

seed()
  .then(() => {
    console.log('Database has been seeded successfully!')
  })
  .catch(e => {
    console.error('Failed to seed database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
