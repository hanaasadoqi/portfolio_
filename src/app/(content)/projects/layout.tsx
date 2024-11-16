import { Suspense } from 'react'
import { LoadingOverlay } from '@/components';

export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      {children}
    </Suspense>
  )
}