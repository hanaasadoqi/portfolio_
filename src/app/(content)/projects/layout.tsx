import SectionLayout from '@/app/shared/SectionLayout'
import { Background } from '@/components'
import React from 'react'


export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Background id="projects">
      <SectionLayout id="projects" className="mt-0">
        {children}
      </SectionLayout>
      <footer>
        Hanaa Sadoqi
      </footer>
    </Background>
  )
}