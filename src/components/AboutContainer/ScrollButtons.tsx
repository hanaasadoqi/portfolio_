"use client"

import useScroll from '@/hooks/useScroll'
import ScrollButton from '../../components/shared/buttons/ScrollButton'

const ScrollButtons: React.FC = () => {
  const { scrollPosition, handleScroll } = useScroll()

  const scrollButtonStyles =
    'dark:text-white bg-white text-secondary-900 dark:bg-secondary-200 dark:text-secondary-900 dark:hover:bg-secondary-700 dark:hover:text-secondary-100 hover:bg-secondary-700 hover:text-secondary-100 active:bg-secondary-900 focus-visible:bg-secondary-900 text-primary-100 dark:bg-secondary-900'

  return (
    <>
      <ScrollButton
        direction="left"
        className={scrollButtonStyles}
        onClick={() => handleScroll('left')}
        visible={scrollPosition.left}
      />
      <ScrollButton
        direction="right"
        onClick={() => handleScroll('right')}
        visible={scrollPosition.right}
        className={scrollButtonStyles}
      />
    </>
  )
}

export default ScrollButtons