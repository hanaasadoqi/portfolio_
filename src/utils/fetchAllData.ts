import fs from 'fs'
import path from 'path'
import {
  About,
  Education,
  WorkExperience,
  Project,
  Skill,
  Article,
  NormalizedData,
} from '@/types/data'
import { normalizeAllData } from './normalizeData'

export function fetchAllData(): NormalizedData {
  const dataDir = path.join(process.cwd(), 'src', 'data')

  const aboutFilePath = path.join(dataDir, 'aboutData.json')
  const skillsFilePath = path.join(dataDir, 'skillsData.json')
  const experienceFilePath = path.join(dataDir, 'experienceData.json')
  const educationFilePath = path.join(dataDir, 'educationData.json')
  const projectsFilePath = path.join(dataDir, 'projectsData.json')
  const articlesFilePath = path.join(dataDir, 'articlesData.json')

  const aboutData = JSON.parse(
    fs.readFileSync(aboutFilePath, 'utf-8')
  ) as About[]
  const skillsData = JSON.parse(
    fs.readFileSync(skillsFilePath, 'utf-8')
  ) as Skill[]
  const experienceData = JSON.parse(
    fs.readFileSync(experienceFilePath, 'utf-8')
  ) as WorkExperience[]
  const educationData = JSON.parse(
    fs.readFileSync(educationFilePath, 'utf-8')
  ) as Education[]
  const projectsData = JSON.parse(
    fs.readFileSync(projectsFilePath, 'utf-8')
  ) as Project[]
  const writingData = JSON.parse(
    fs.readFileSync(articlesFilePath, 'utf-8')
  ) as Article[]

  return normalizeAllData(
    aboutData,
    educationData,
    experienceData,
    projectsData,
    skillsData,
    writingData
  )
}
