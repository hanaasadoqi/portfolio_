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
      className="my-48 flex min-h-screen w-screen flex-col items-center justify-center py-24 sm:px-9"
    >
      <div className="relative mx-auto w-full text-left">
        <div className="mb-4 space-y-2 px-4 text-center md:mb-8 md:px-12 md:text-left lg:mb-12">
          <h3>A Little About Me</h3>
          <h4>
            Snapshots of things that interest me, inspire me, or bring me joy.
          </h4>
        </div>

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
