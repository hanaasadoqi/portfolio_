import React, { Suspense } from 'react'
import Hero from '@/components/Hero/Hero'
import SkillsContainer from './skills/components/SkillContainer'
import About from '../components/AboutContainer/AboutContainer'
import { ContactForm } from '../components/ContactForm'
import { Background } from '@/components/shared'
import SectionLayout from '@/app/shared/SectionLayout'
import { ArticlesListContainer } from '@/components'
import { LoadingOverlay } from '@/components/shared'
import StickySocialMediaLinks from '@/components/shared/menus/StickySocialMediaLinks'
import ProjectGalleryContainer from './(content)/projects/components/ProjectGalleryContainer'

export default function Home() {
  return (
    <Background>
      <StickySocialMediaLinks />
      <div className="flex h-full w-full flex-col items-center overflow-hidden bg-transparent scrollbar-hide">
        <SectionLayout id="hero" full>
          <Hero />
        </SectionLayout>
        <SectionLayout id="about" screen>
          <Suspense fallback={<LoadingOverlay />}>
            <About />
          </Suspense>
        </SectionLayout>
        <SectionLayout id="skills">
          <Suspense fallback={<LoadingOverlay />}>
            <SkillsContainer />
          </Suspense>
        </SectionLayout>
        <SectionLayout id="projects">
          <ProjectGalleryContainer />
        </SectionLayout>
        <SectionLayout id="writing">
          <Suspense fallback={<LoadingOverlay />}>
            <ArticlesListContainer />
          </Suspense>
        </SectionLayout>

        <SectionLayout id="contact-me" full>
          <ContactForm />
        </SectionLayout>
      </div>
    </Background>
  )
}