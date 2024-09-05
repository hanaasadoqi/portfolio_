import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import ErrorBoundary from '../shared/ErrorBoundary'
import ErrorFallback from '../shared/ErrorFallback'

const DynamicParagraphSkeleton = dynamic(
  () => import('../shared/ParagraphSkeleton'),
  { ssr: true }
)

const DynamicGuestbookItem = dynamic(() => import('./GuestbookItem'), {
  ssr: false,
})

interface GuestbookListProps {
  entries: {
    id: number
    name: string
    message: string
    avatar?: string
    user_id?: string
    created_at: string
    likes?: number
    dislikes?: number
  }[]
}

const GuestbookList: React.FC<GuestbookListProps> = ({ entries }) => {
  return (
    <ul className="scrollbar-custom flex w-full flex-col items-center justify-center gap-4 overflow-y-auto">
      {entries?.map(entry => (
        <li
          key={`entry-${entry.id}-${entry.created_at}`}
          data-id={entry.id}
          className="w-4/5"
        >
          <ErrorBoundary errorComponent={ErrorFallback}>
            <Suspense fallback={<DynamicParagraphSkeleton />}>
              <DynamicGuestbookItem entry={entry} />
            </Suspense>
          </ErrorBoundary>
        </li>
      ))}
    </ul>
  )
}

export default GuestbookList
