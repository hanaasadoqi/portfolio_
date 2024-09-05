'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react'
import throttle from 'lodash.throttle'

// Define the context interface
interface ScrollContextProps {
  currentSection: string
  setCurrentSection: (section: string) => void
}

// Create the ScrollContext
const ScrollContext = createContext<ScrollContextProps>({
  currentSection: '',
  setCurrentSection: () => {},
})

// Hook to use the ScrollContext
export const useScrollContext = () => useContext(ScrollContext)

// ScrollProvider component
export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSection, setCurrentSection] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)
  const currentSectionRef = useRef<string>('')

  // Ref to store the throttled function
  const throttledHandleIntersectionRef = useRef<any>()

  // Intersection handler function
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const visibleSections = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

    if (visibleSections.length > 0) {
      const topSectionId = `#${visibleSections[0].target.id}`
      console.log('Intersecting Section:', topSectionId)

      // Only update state if the section has changed
      if (currentSectionRef.current !== topSectionId) {
        setCurrentSection(topSectionId)
        currentSectionRef.current = topSectionId // Update the ref to the new value
      }
    }
  }

  // Create the throttled version of handleIntersection inside a useEffect
  useEffect(() => {
    // Throttle the intersection handler function
    throttledHandleIntersectionRef.current = throttle(handleIntersection, 200)

    return () => {
      // Cleanup the throttled function on unmount
      throttledHandleIntersectionRef.current?.cancel()
    }
  }, []) // No dependencies needed here because handleIntersection does not change

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: [0.1, 0.25, 0.5, 0.75, 1],
    }

    // Initialize the IntersectionObserver
    observerRef.current = new IntersectionObserver(
      throttledHandleIntersectionRef.current,
      observerOptions
    )

    const sections = document.querySelectorAll('section')

    // Observe each section
    sections.forEach(section => observerRef.current?.observe(section))

    // Cleanup on component unmount
    return () => {
      if (observerRef.current) {
        sections.forEach(section => observerRef.current?.unobserve(section))
        observerRef.current.disconnect()
      }
    }
  }, [throttledHandleIntersectionRef]) // Dependency on the ref to the throttled function

  // Memoize the context value
  const contextValue = useMemo(
    () => ({ currentSection, setCurrentSection }),
    [currentSection] // Dependencies for memoization
  )

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  )
}
