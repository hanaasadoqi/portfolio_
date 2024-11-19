"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode
} from 'react'

export type Heading = {
  id: string;
  text: string
  depth: number
  ref: HTMLHeadingElement | HTMLLIElement | null;
  children?: Heading[]
}

type TOCContextType = {
  headings: Heading[]
  activeRef: HTMLHeadingElement | HTMLLIElement | null
  registerHeading: (heading: Heading) => void
  setActiveHeading: (ref: HTMLHeadingElement | HTMLLIElement) => void
  allRefs: Set<HTMLHeadingElement | HTMLLIElement>
}

const TOCContext = createContext<TOCContextType | undefined>(undefined)

export function TOCProvider({ children }: { children: ReactNode }) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const allRefs = useRef<Set<HTMLHeadingElement | HTMLLIElement>>(new Set())
  const [activeRef, setActiveRef] = useState<HTMLHeadingElement | HTMLLIElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const registerHeading = (heading: Heading) => {
    if (!allRefs.current.has(heading.ref as HTMLHeadingElement)) {
      allRefs.current.add(heading.ref as HTMLHeadingElement)

      setHeadings((prevHeadings) => {
        const addChild = (items: Heading[], parentDepth: number): Heading[] => {
          const last = items[items.length - 1]

          if (last && last.depth < heading.depth) {
            if (!last.children?.some(child => child.id === heading.id)) {
              last.children = addChild(last.children || [], last.depth)
            }
            return items
          }

          if (!items.some(item => item.id === heading.id)) {
            return [...items, { ...heading, children: [] }]
          }

          return items
        }

        return addChild(prevHeadings, 0)
      })
    }
  }


  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter((entry) => entry.isIntersecting)
          console.log(visibleEntries, 'headings', headings)

          const deepestVisible = visibleEntries
            .map((entry) => {
              const ref = entry.target as HTMLHeadingElement | HTMLLIElement
              const heading = headings.find((h) => h.ref === ref)
              return { ref, depth: heading?.depth || 0 }
            })
            .sort((a, b) => b.depth - a.depth)[0]

          if (deepestVisible) {
            setActiveHeading(deepestVisible.ref)
          }

        },
        { rootMargin: '0px 0px -40% 0px', threshold: 0.5 }
      )
    }

    const observer = observerRef.current

    allRefs.current.forEach((headingRef) => {
      if (headingRef) {
        observer.observe(headingRef)
      }
    })
    return () => {
      observer.disconnect()
    }
  }, [headings])


  const setActiveHeading = (ref: HTMLHeadingElement | HTMLLIElement) => {
    setActiveRef(ref)
  }

  return (
    <TOCContext.Provider
      value={{
        headings,
        activeRef,
        registerHeading,
        setActiveHeading,
        allRefs: allRefs.current
      }}
    >
      {children}
    </TOCContext.Provider>
  )
}

export function useTOC() {
  const context = useContext(TOCContext)
  if (!context) {
    throw new Error('useTOC must be used within a TOCProvider')
  }
  return context
}