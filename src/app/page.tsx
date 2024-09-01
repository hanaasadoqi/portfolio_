import React from 'react'
import { DataProvider } from '@/context/DataContext'
import { SkillsProvider } from '@/context/SkillsContext'
import { ArticlesProvider } from '@/context/ArticlesContext'
import { ProjectProvider } from '@/context/ProjectContext'
import dynamic from 'next/dynamic'
import { NormalizedData } from '@/types/data'
import { fetchAllData } from '@/utils/fetchAllData'

const Background = dynamic(() => import('@/components/Background'), {
  ssr: false,
})
const Hero = dynamic(() => import('@/components/Hero/Hero'), { ssr: true })
const AboutComponent = dynamic(() => import('@/components/About/About'), {
  ssr: false,
})
const Skills = dynamic(() => import('@/components/Skills/SkillsContainer'), {
  ssr: false,
})
const Carousel = dynamic(() => import('@/components/Experience/Carousel'), {
  ssr: false,
})
const Projects = dynamic(() => import('@/components/Projects/Projects'), {
  ssr: true,
})
const EducationComponent = dynamic(
  () => import('@/components/Education/Education'),
  { ssr: true }
)
const Writing = dynamic(() => import('@/components/Writing/Writing'), {
  ssr: true,
})
const Contact = dynamic(() => import('@/components/Contact/Contact'), {
  ssr: true,
})

export default function Home() {
  const normalizedData: NormalizedData = fetchAllData()

  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-hidden bg-transparent">
      <Background>
        <DataProvider initialData={normalizedData}>
          <Hero />
          <AboutComponent />
          <SkillsProvider initialData={normalizedData.skills}>
            <Skills />
          </SkillsProvider>
          <Carousel />
          <ProjectProvider initialData={normalizedData.projects}>
            <Projects />
          </ProjectProvider>
          <ArticlesProvider initialData={normalizedData.articles}>
            <Writing />
          </ArticlesProvider>
          <EducationComponent />
          <Contact />
        </DataProvider>
      </Background>
    </main>
  )
}
