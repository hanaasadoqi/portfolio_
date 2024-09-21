import BlogContentPage from '@/app/(content)/blog/components/BlogContentPage'
import { LoadingOverlay } from '@/components'
import MDXComponentsProvider from '@/components/mdx/MDXComponentsProvider'
import { Suspense } from 'react'
export default function BlogSlugPage({ params }: {
  [key: string]: any
}) {

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <MDXComponentsProvider>
        <BlogContentPage params={params} />
      </MDXComponentsProvider>
    </Suspense>
  )
}
