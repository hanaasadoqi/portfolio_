import { useRef, useState, useEffect, useCallback } from 'react'

const useScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState({
    left: false,
    right: true,
  })

  const checkScrollPosition = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setScrollPosition({
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth,
      })
    }
  }, [])

  const handleScroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth * 0.8 // Scroll 80% of the container width
      const scrollTo =
        direction === 'left'
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const throttledCheckScroll = throttle(checkScrollPosition, 100) // Check position at most every 100ms
    scrollContainer.addEventListener('scroll', throttledCheckScroll)
    window.addEventListener('resize', throttledCheckScroll) // Adjust position on resize
    checkScrollPosition()

    return () => {
      scrollContainer.removeEventListener('scroll', throttledCheckScroll)
      window.removeEventListener('resize', throttledCheckScroll)
    }
  }, [checkScrollPosition])

  return { scrollRef, scrollPosition, handleScroll }
}

function throttle(func: (...args: any[]) => void, limit: number) {
  let lastFunc: NodeJS.Timeout
  let lastRan: number
  return function (...args: any[]) {
    if (!lastRan) {
      func(...args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

export default useScroll
