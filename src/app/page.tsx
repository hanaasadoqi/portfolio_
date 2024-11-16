import { Suspense } from 'react'
import Hero from '@/components/Hero/Hero'
import SkillsContainer from './skills/components/SkillContainer'
import About from '../components/AboutContainer/AboutContainer'
import SectionLayout from '@/app/shared/SectionLayout'
import { ArticlesListContainer } from '@/components'
import StickySocialMediaLinks from '@/components/shared/StickySocialMediaLinks'
import ProjectGalleryContainer from './(content)/projects/components/ProjectGalleryContainer'
import Education from '@/components/Education/Education'
import ExperienceContainer from '@/components/Experience/ExperienceContainer'
import LoadingComponent from '../app/skills/loading'

export default async function Home() {
  return (
    <>
      <StickySocialMediaLinks />
      <div className="flex h-full w-full flex-col items-center overflow-y-auto overscroll-contain bg-transparent z-20">
        <SectionLayout id="hero" full>
          <Hero />
        </SectionLayout>
        <SectionLayout id="about" screen>
          <Suspense fallback={<LoadingComponent />}>
            <About />
          </Suspense>
        </SectionLayout>
        <SectionLayout id="skills">
          <Suspense fallback={<LoadingComponent />}>
            <SkillsContainer />
          </Suspense>
        </SectionLayout>
        <SectionLayout id="experience">
          <Suspense fallback={<LoadingComponent />}>
            <ExperienceContainer />
          </Suspense>
        </SectionLayout>
        <SectionLayout id="projects">
          <ProjectGalleryContainer />
        </SectionLayout>
        <SectionLayout id="writing">
          <Suspense fallback={<LoadingComponent />}>
            <ArticlesListContainer />
          </Suspense>
        </SectionLayout>
        <SectionLayout id="education">
          <Education />
        </SectionLayout>
      </div>
    </>
  )
}