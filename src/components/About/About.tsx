'use client'

import React, { Suspense, memo } from 'react'
import { About as AboutItem } from '@/types/data'
import useScroll from '@/hooks/useScroll'
import ScrollButton from '@/components/UI/ScrollButton'
import AboutItemCard from '@/components/About/AboutItemCard'
import { useData } from '@/context/DataContext'

const About: React.FC = () => {
  const { about } = useData()
  const { scrollRef, scrollPosition, handleScroll } = useScroll()

  const scrollButtonStyles =
    'dark:text-white bg-white text-secondary-900 dark:bg-secondary-200 dark:text-secondary-900 dark:hover:bg-secondary-700 dark:hover:text-secondary-100 hover:bg-secondary-700 hover:text-secondary-100 active:bg-secondary-900 focus-visible:bg-secondary-900 text-primary-100 dark:bg-secondary-900'
  return (
    <section
      id="about"
      data-id="about"
      className="my-48 flex min-h-screen w-screen items-center"
    >
      <div className="relative mx-auto w-full text-left">
        <div className="mb-8 space-y-2 px-12 text-center md:mb-12 md:text-left">
          <h3>A Little About Me</h3>
          <h5>
            Snapshots of things that interest me, inspire me, or bring me joy.
          </h5>
        </div>

        {/* Render scroll buttons based on scroll position */}
        <ScrollButton
          direction="left"
          onClick={() => handleScroll('left')}
          visible={scrollPosition.left}
          className={scrollButtonStyles}
        />
        <ScrollButton
          direction="right"
          onClick={() => handleScroll('right')}
          visible={scrollPosition.right}
          className={scrollButtonStyles}
        />

        {/* Scrollable container for about items */}
        <div
          ref={scrollRef}
          className="scrollbar-hide snap-x snap-mandatory overflow-x-auto overflow-y-hidden whitespace-nowrap p-8 md:snap-none"
        >
          <Suspense fallback={<div>Loading items...</div>}>
            <div className="grid snap-x snap-mandatory auto-cols-max grid-flow-col items-center gap-4">
              {about.map(item => (
                <AboutItemCard
                  key={item.id}
                  item={item}
                  className="snap-center"
                />
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default memo(About)
