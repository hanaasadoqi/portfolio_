import SectionLayout from '@/app/shared/SectionLayout'
import { AutocompleteSearchBar, Background } from '@/components'
import MDXComponentsProvider from '@/components/mdx/MDXComponentsProvider'
import React from 'react'
import { fetchProjectSuggestions } from '@/app/lib/actions/projects'


export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Background id="projects">
      <SectionLayout id="projects" full>
        {children}
      </SectionLayout>
      <footer>
        Hanaa Sadoqi
      </footer>
    </Background>
  )
}