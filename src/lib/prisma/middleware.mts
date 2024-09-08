import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import path from "path";
import { createInterface } from "readline/promises";

const prisma = new PrismaClient();

async function loadJSON(fileName: string) {
  const filePath = path.join(process.cwd(), 'src/data', fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

interface SkillData {
  name: string;
  icon: string;
  startYear: number;
  documentation?: string;
  categories: string[];
  tags: string[];
}

interface ProjectData {
  title: string;
  description: string;
  category: string;
  demoUrl?: string;
  frontendRepo?: string;
  backendRepo?: string;
  codeRepo?: string;
  videoDemo?: string;
  launchDate?: string | null;
  status: string;
  image: string;
  skills: string[];
}

interface ArticleData {
  title: string;
  type: string;
  description: string;
  image: string;
  url: string;
  publishedDate: string | Date;
  tags: string[];
  medium?: string;
  hashnode?: string;
  projects: string[];
  skills: string[];
}
  interface EducationData {
  degree: string;
  school: string;
  location: string;

  startDate: string | Date;
  endDate: string | Date;
  skills: string[];
  url: string;
}

interface WorkExperienceData {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  website: string;
  logo: string;
  description: string[];
  skills: string[];
}

async function seed() {
  const skills: SkillData[] = await loadJSON("skillsData.json");
  const projects: ProjectData[] = await loadJSON("projectsData.json");
  const articles: ArticleData[] = await loadJSON("articlesData.json");
  const education: EducationData[] = await loadJSON("educationData.json");
  const experience: WorkExperienceData[] = await loadJSON("experienceData.json");

  await prisma.skill.createMany({
    data: skills.map((skill: SkillData) => ({
      name: skill.name,
      icon: skill.icon,
      startYear: skill.startYear,
      documentation: skill.documentation,
      categories: skill.categories,
      tags: skill.tags
    }))
  })

  const allSkills = await prisma.skill.findMany();

  for(const project of projects) {
    const createdProject = await prisma.project.create({
      data: {
        title: project.title,
        description: project.description,
        category: project.category,
        demoUrl: project.demoUrl,
        frontendRepo: project.frontendRepo,
        backendRepo: project.backendRepo,
        codeRepo: project.codeRepo,
        videoDemo: project.videoDemo,
        launchDate: project.launchDate ? new Date(project.launchDate) : null,
        status: project.status,
        image: project.image,
        skills: {
          connect: project.skills
            .map((skillName: string) => {
              const foundSkill = allSkills.find(s => s.name === skillName)
              return foundSkill ? { id: foundSkill.id } : undefined
            })
            .filter((skill): skill is { id: string } => skill !== undefined),
        }
      }
    })

    console.log(`Created project: ${createdProject.title}`)
  }

  const allProjects = await prisma.project.findMany();

  for(const article of articles) {
    const createdArticle = await prisma.article.create({
      data: {
        title: article.title,
        type: article.type,
        description: article.description,
        image: article.image,
        publishedDate: new Date(article.publishedDate)|| new Date(),
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
              ); // Find the project by title
              return foundProject ? { id: foundProject.id } : undefined; // Connect by ID
            })
            .filter((project): project is { id: string } => project !== undefined),
        },
      },
    });
  
    console.log(`Created article: ${createdArticle.title}`)
  }

  for(const edu of education) {
    const createdEducation = await prisma.education.create({
      data: {
        degree: edu.degree,
        school: edu.school,
        location: edu.location,
        startDate: edu.startDate ? new Date(edu.startDate) : new Date(),
        endDate: edu.endDate ? new Date(edu.endDate) : null,
        url: edu.url,
        skills: {
          connect: edu.skills
            .map((skillName: string) => {
              const foundSkill = allSkills.find(s => s.name === skillName)
              return foundSkill ? { id: foundSkill.id } : undefined
            })
            .filter((skill): skill is { id: string } => skill !== undefined),
        }
      }
    })
    console.log(`Created education: ${createdEducation.school}`)
  }

  for(const exp of experience) {
    const createdExperience = await prisma.workExperience.create({
      data: {
        company: exp.company,
        role: exp.role,
        location: exp.location,
        startDate: exp.startDate ? new Date(exp.startDate) : new Date(),
        endDate: exp.endDate ? new Date(exp.endDate) : null,
        logo: exp.logo,
        description: exp.description,
        website: exp.website,
        skills: {
          connect: exp.skills
            .map((skillName: string) => {
              const foundSkill = allSkills.find(s => s.name === skillName)
              return foundSkill? { id: foundSkill.id } : undefined
            })
            .filter((skill): skill is { id: string } => skill!== undefined),
        }
      }
    })
    console.log(`Created experience: ${createdExperience.company}`)
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