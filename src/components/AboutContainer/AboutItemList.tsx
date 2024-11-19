'use client'

import { FC, memo } from 'react'
import useScroll from '@/hooks/useScroll'

import dynamic from 'next/dynamic'

const ScrollButton = dynamic(() => import('./ScrollButton'), {
  ssr: false,
})


const scrollButtonStyles =
  'dark:text-white bg-white text-secondary-900 dark:bg-secondary-200 dark:text-secondary-900 dark:hover:bg-secondary-700 dark:hover:text-secondary-100 hover:bg-secondary-700 hover:text-secondary-100 active:bg-secondary-900 focus-visible:bg-secondary-900 text-primary-100 dark:bg-secondary-900'

const AboutItemList: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scrollRef, handleScroll, scrollPosition } = useScroll()

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="scrollbar-hide snap-x snap-mandatory overflow-x-auto overflow-y-hidden whitespace-nowrap p-8 md:snap-none"
      >
        {children}
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
    </div>
  )
}

export default memo(AboutItemList)
