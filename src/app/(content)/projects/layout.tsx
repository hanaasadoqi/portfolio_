import React, { Suspense } from 'react'
import Background from '@/components/shared/Background';
import { LoadingOverlay } from '@/components';


export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Background id="projects">
      <section data-id="projects" className="min-h-screen w-screen relative">
        <Suspense fallback={<LoadingOverlay />}>
          {children}
        </Suspense>
      </section>
    </Background>
  )
}