'use client'

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react'

interface ScrollContextProps {
  currentSection: string
  setCurrentSection: (section: string) => void
}

const ScrollContext = createContext<ScrollContextProps>({
  currentSection: '',
  setCurrentSection: () => {},
})

export const useScrollContext = () => useContext(ScrollContext)

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSection, setCurrentSection] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

      if (visibleSections.length > 0) {
        const topSectionId = `#${visibleSections[0].target.id}`
        console.log('Intersecting Section:', topSectionId)
        setCurrentSection(topSectionId)
      }
    },
    []
  )

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: [0.2, 0.4, 0.6, 0.8],
    }

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      observerOptions
    )
    const sections = document.querySelectorAll('section')

    sections.forEach(section => observerRef.current?.observe(section))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [handleIntersection])

  return (
    <ScrollContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ScrollContext.Provider>
  )
}
