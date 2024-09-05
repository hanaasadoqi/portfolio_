import React, { Suspense } from 'react'
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
  ssr: true,
})
const Skills = dynamic(() => import('@/components/Skills/SkillsContainer'), {
  ssr: false,
})
const Carousel = dynamic(() => import('@/components/Experience/Carousel'), {
  ssr: false,
})
const Projects = dynamic(() => import('@/components/Projects/Projects'), {
  ssr: false,
})
const EducationComponent = dynamic(
  () => import('@/components/Education/Education'),
  { ssr: false }
)
const Writing = dynamic(() => import('@/components/Writing/Writing'), {
  ssr: false,
})
const Contact = dynamic(() => import('@/components/Contact/Contact'), {
  ssr: false,
})

export default function Home() {
  const normalizedData: NormalizedData = fetchAllData()

  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-hidden bg-transparent">
      <Background>
        <DataProvider initialData={normalizedData}>
          <Hero />
          <AboutComponent />
          <Suspense fallback={<div>Loading...</div>}>
            <SkillsProvider initialData={normalizedData.skills}>
              <Skills />
            </SkillsProvider>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Carousel />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectProvider initialData={normalizedData.projects}>
              <Projects />
            </ProjectProvider>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <ArticlesProvider initialData={normalizedData.articles}>
              <Writing />
            </ArticlesProvider>
          </Suspense>
          <EducationComponent />
          <Contact />
        </DataProvider>
      </Background>
    </main>
  )
}
