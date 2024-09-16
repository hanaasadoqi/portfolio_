'use client'

import React, { Suspense, memo } from 'react'
import useScroll from '@/hooks/useScroll'
import AboutItemCard from './AboutItemCard'
import { AboutData } from '../types'
import { LoadingComponent } from '@/components/LoadingComponent'

const AboutItemList: React.FC<{ about: AboutData[] }> = ({ about }) => {
  const { scrollRef } = useScroll()

  return (
    <div
      ref={scrollRef}
      className="scrollbar-hide snap-x snap-mandatory overflow-x-auto overflow-y-hidden whitespace-nowrap p-8 md:snap-none"
    >
      <div className="grid snap-x snap-mandatory auto-cols-max grid-flow-col items-center gap-4">
        {about.map(item => (
          <Suspense key={`${item.id}-${item.title}`} fallback={<LoadingComponent />}>
            <AboutItemCard item={item} className="snap-center" />
          </Suspense>
        ))}
      </div>
    </div>
  )
}

export default memo(AboutItemList)