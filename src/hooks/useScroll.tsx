import { useRef, useState, useEffect, useCallback } from 'react'

const useScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState({
    left: false,
    right: true,
  })

  const handleScroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current
      const scrollAmount = 300
      const scrollTo =
        direction === 'left'
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }, [])

  const checkScrollPosition = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setScrollPosition({
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth,
      })
    }
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    const throttledCheckScroll = () => checkScrollPosition()
    scrollContainer.addEventListener('scroll', throttledCheckScroll)
    checkScrollPosition()

    return () => {
      scrollContainer.removeEventListener('scroll', throttledCheckScroll)
    }
  }, [checkScrollPosition])

  return { scrollRef, scrollPosition, handleScroll }
}

export default useScroll
