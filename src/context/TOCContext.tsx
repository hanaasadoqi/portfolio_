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

  // const registerHeading = (heading: Heading) => {
  //   if (!allRefs.current.has(heading.ref)) {
  //     allRefs.current.add(heading.ref)

  //     // Register the heading and structure it in the TOC
  //     setHeadings((prevHeadings) => {
  //       const addChild = (items: Heading[], parentDepth: number): Heading[] => {
  //         const last = items[items.length - 1]
  //         if (last && last.depth < heading.depth) {
  //           last.children = addChild(last.children || [], last.depth)
  //           return items
  //         }
  //         return [...items, { ...heading, children: [] }]
  //       }
  //       return addChild(prevHeadings, 0)
  //     })
  //   }
  // }


  // const registerHeading = (heading: Heading) => {
  //   if (!allRefs.current.has(heading.ref)) {
  //     allRefs.current.add(heading.ref)

  //     setHeadings((prevHeadings) => {
  //       // Avoid adding duplicate headings
  //       if (prevHeadings.some(h => h.id === heading.id)) {
  //         return prevHeadings
  //       }

  //       const addChild = (items: Heading[], parentDepth: number): Heading[] => {
  //         const last = items[items.length - 1]
  //         if (last && last.depth < heading.depth) {
  //           last.children = addChild(last.children || [], last.depth)
  //           return items
  //         }
  //         return [...items, { ...heading, children: [] }]
  //       }
  //       return addChild(prevHeadings, 0)
  //     })
  //   }
  // }

  const registerHeading = (heading: Heading) => {
    if (!allRefs.current.has(heading.ref as HTMLHeadingElement)) {
      allRefs.current.add(heading.ref as HTMLHeadingElement)

      setHeadings((prevHeadings) => {
        const addChild = (items: Heading[], parentDepth: number): Heading[] => {
          const last = items[items.length - 1]

          if (last && last.depth < heading.depth) {
            // Add the heading to the last item's children if it doesn't exist
            if (!last.children?.some(child => child.id === heading.id)) {
              last.children = addChild(last.children || [], last.depth)
            }
            return items
          }

          // Only add if not already present
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
          const visibleEntry = entries.find((entry) => entry.isIntersecting)
          if (visibleEntry) {
            setActiveRef(visibleEntry.target as HTMLHeadingElement)
          }
        },
        { rootMargin: '0px 0px -40% 0px', threshold: 0.5 }
      )
    }

    const observer = observerRef.current

    headings.forEach((heading) => {
      observer.observe(heading.ref as HTMLHeadingElement | HTMLLIElement)
    })

    return () => {
      if (observer) {
        observer.disconnect()
      }
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























// "use client"

// import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'

// export type Heading = { id: string; text: string; depth: number; ref: HTMLHeadingElement; children?: Heading[] }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
//   allRefs: Set<HTMLHeadingElement> // Provide access to all refs here
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const allRefs = useRef<Set<HTMLHeadingElement>>(new Set()) // Proper Set initialization
//   const [activeRef, setActiveRef] = useState<HTMLHeadingElement | null>(null)
//   const observerRef = useRef<IntersectionObserver | null>(null)

//   // Register headings using the ref to the element
//   const registerHeading = (heading: Heading) => {
//     // Ensure the heading hasn't been registered already
//     if (!allRefs.current.has(heading.ref)) {
//       allRefs.current.add(heading.ref)

//       // Add as top-level heading or as a child based on depth
//       //   setHeadings((prevHeadings) => {
//       //     if (heading.depth === 2) {
//       //       // Register as top-level heading
//       //       return [
//       //         ...prevHeadings,
//       //         { id: heading.id, text: heading.text, depth: heading.depth, ref: heading.ref, children: [] }
//       //       ]
//       //     } else {
//       //       // Add as a child to an appropriate parent
//       //       return prevHeadings.map((current) => {
//       //         if (current.depth < heading.depth) {
//       //           return {
//       //             ...current,
//       //             children: [...(current.children || []), heading]
//       //           }
//       //         }
//       //         return current
//       //       })
//       //     }
//       //   })
//     }


//   }

//   useEffect(() => {
//     if (!observerRef.current) {
//       observerRef.current = new IntersectionObserver(
//         (entries) => {
//           const visibleEntry = entries.find((entry) => entry.isIntersecting)
//           if (visibleEntry) {
//             setActiveRef(visibleEntry.target)
//           }
//         },
//         { rootMargin: '0px 0px -40% 0px', threshold: 0.5 }
//       )
//     }

//     const observer = observerRef.current

//     // Start observing each heading
//     headings.forEach((heading) => {
//       observer.observe(heading.ref)
//     })

//     return () => {
//       if (observer) {
//         observer.disconnect()
//       }
//     }
//   }, [headings, activeRef])

//   const setActiveHeading = (ref: HTMLHeadingElement) => {
//     setActiveRef(ref)
//   }

//   // useEffect(() => {
//   // function buildTOC(headings: Heading[]): Heading[] {
//   //   const hierarchy: Heading[] = []
//   //   const stack: Heading[] = []

//   //   for (const heading of headings) {
//   //     // Remove items from the stack if they are not parents
//   //     while (stack.length > 0 && stack[stack.length - 1].depth >= heading.depth) {
//   //       stack.pop()
//   //     }

//   //     if (stack.length > 0) {
//   //       // Add as a child to the last valid parent
//   //       const parent = stack[stack.length - 1]
//   //       parent.children = parent.children || []
//   //       parent.children.push({ ...heading, children: [] })
//   //     } else {
//   //       // Add as a top-level heading
//   //       hierarchy.push({ ...heading, children: [] })
//   //     }

//   //     // Add this heading to the stack
//   //     stack.push({ ...heading, children: [] })
//   //   }

//   //   return hierarchy
//   // }

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     if (headings.length > 0) {
//   //       const tocItems = buildTOC(headings)
//   //       setHeadings(tocItems)
//   //     }
//   //   }, 500)
//   // }, [])


//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading, allRefs: allRefs.current }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export function useTOC() {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }










// "use client"

// import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'

// export type Heading = { id: string; text: string; depth: number; ref: HTMLHeadingElement; children?: Heading[] }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const allRefs = useRef<Set<HTMLHeadingElement>>(new Set())
//   const [activeId, setActiveId] = useState<string | null>(null)
//   const observerRef = useRef<IntersectionObserver | null>(null)

//   // Register headings using the ref to the element
//   const registerHeading = (heading: Heading) => {
//     // Ensure the heading hasn't been registered yet and has the correct depth
//     if (!allRefs.current.has(heading.ref) && heading.depth === 2) {
//       allRefs.current.add(heading.ref)

//       // Add a top-level heading
//       setHeadings((prevHeadings) => [
//         ...prevHeadings,
//         { id: heading.id, text: heading.text, depth: heading.depth, ref: heading.ref, children: [] }
//       ])
//     } else if (!allRefs.current.has(heading.ref)) {
//       // Register sub-heading
//       allRefs.current.add(heading.ref)

//       setHeadings((prevHeadings) => {
//         const newHeadings = [...prevHeadings]

//         // Find the appropriate parent to attach this heading to
//         for (let i = newHeadings.length - 1; i >= 0; i--) {
//           const parent = newHeadings[i]
//           if (parent.depth < heading.depth) {
//             parent.children = parent.children || []
//             parent.children.push(heading)
//             break
//           }
//         }

//         return newHeadings
//       })
//     }
//   }

//   // Set up a single IntersectionObserver instance and observe all headings
//   useEffect(() => {
//     if (!observerRef.current) {
//       observerRef.current = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               const targetId = entry.target.id
//               if (targetId && targetId !== activeId) {
//                 setActiveHeading(targetId)
//               }
//             }
//           })
//         },
//         { rootMargin: '0px 0px -40% 0px', threshold: 0.5 }
//       )
//     }

//     const observer = observerRef.current

//     // Start observing each heading
//     headings.forEach((heading) => {
//       observer.observe(heading.ref)
//     })

//     return () => {
//       if (observer) {
//         observer.disconnect()
//       }
//     }
//   }, [headings, activeId])

//   const setActiveHeading = (id: string) => {
//     setActiveId(id)
//   }

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export function useTOC() {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }



// "use client"

// import { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react'

// export type Heading = {
//   id: string
//   text: string
//   depth: number
//   ref: HTMLHeadingElement
//   children?: Heading[]
// }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
//   allRefs: Set<HTMLHeadingElement>(new Set())
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const allRefs = useRef<Set<HTMLHeadingElement>>(new Set())
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const [activeId, setActiveId] = useState<string | null>(null)
//   const observerRef = useRef<IntersectionObserver | null>(null)

//   const registerHeading = (heading: Heading) => {
//     if (allRefs.current.has(heading.ref)) return;
//     allRefs.current.add(heading.ref);
//     setHeadings((prevHeadings) => {
//       // Add the heading only if it doesn't already exist
//       if (prevHeadings.some((h) => h.ref === heading.ref)) {
//         return prevHeadings
//       }

//       return [...prevHeadings, heading]
//     })

//     if (observerRef.current) {
//       observerRef.current.observe(heading.ref)
//     }
//   }

//   useEffect(() => {
//     // Initialize the IntersectionObserver
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         const visibleEntry = entries.find((entry) => entry.isIntersecting)
//         if (visibleEntry) {
//           setActiveId(visibleEntry.target.id)
//         }
//       },
//       { rootMargin: '0px 0px -80% 0px' } // Adjust threshold as needed
//     )

//     return () => {
//       observerRef.current?.disconnect()
//     }
//   }, [])

//   const setActiveHeading = (id: string) => {
//     setActiveId(id)
//   }

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading, allRefs }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export const useTOC = () => {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }





































// "use client"

// import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'

// export type Heading = {
//   id: string
//   text: string
//   depth: number
//   ref: HTMLHeadingElement
//   children?: Heading[]
// }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const [activeId, setActiveId] = useState<string | null>(null)
//   const allHeadings = useRef<Heading[]>([])
//   const observerRef = useRef<IntersectionObserver | null>(null)

//   /**
//    * Builds a clean, hierarchical structure for the table of contents.
//    */
//   const buildHierarchy = (flatHeadings: Heading[]): Heading[] => {
//     const hierarchy: Heading[] = []
//     const stack: Heading[] = []

//     for (const heading of flatHeadings) {
//       // Remove items from the stack if they are not parents
//       while (stack.length > 0 && stack[stack.length - 1].depth >= heading.depth) {
//         stack.pop()
//       }

//       if (stack.length > 0) {
//         // Add to the children of the last item in the stack
//         const parent = stack[stack.length - 1]
//         parent.children = parent.children || []
//         parent.children.push({ ...heading, children: [] })
//       } else {
//         // Add as a top-level item
//         hierarchy.push({ ...heading, children: [] })
//       }

//       // Add this heading to the stack
//       stack.push({ ...heading, children: [] })
//     }

//     return hierarchy
//   }

//   /**
//    * Registers a new heading, ensuring no duplicates.
//    */
//   const registerHeading = (heading: Heading) => {
//     // Skip if heading is already registered
//     if (allHeadings.current.some((h) => h.ref === heading.ref)) return

//     allHeadings.current.push(heading)

//     // Rebuild the hierarchy and update state
//     // const updatedHeadings = buildHierarchy(allHeadings.current)
//     setHeadings(prev => [...prev, heading])

//     // Observe the heading for intersection tracking
//     if (observerRef.current) {
//       observerRef.current.observe(heading.ref)
//     }
//   }

//   /**
//    * Initializes the IntersectionObserver for active heading tracking.
//    */
//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         const visibleEntry = entries.find((entry) => entry.isIntersecting)
//         if (visibleEntry) {
//           setActiveId(visibleEntry.target.id)
//         }
//       },
//       { rootMargin: '0px 0px -80% 0px' }
//     )

//     return () => {
//       observerRef.current?.disconnect()
//     }
//   }, [])

//   /**
//    * Cleans up observer references when headings are updated or removed.
//    */
//   useEffect(() => {
//     const currentObserver = observerRef.current
//     return () => {
//       if (currentObserver) {
//         allHeadings.current.forEach((heading) => {
//           currentObserver.unobserve(heading.ref)
//         })
//       }
//     }
//   }, [headings])

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// /**
//  * Custom hook for accessing the TOC context.
//  */
// export const useTOC = () => {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }


















// "use client"

// import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'

// export type Heading = {
//   id: string
//   text: string
//   depth: number
//   ref: HTMLHeadingElement
//   children?: Heading[]
// }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const [activeId, setActiveId] = useState<string | null>(null)
//   const observerRef = useRef<IntersectionObserver | null>(null)

//   const allHeadings = useRef<Heading[]>([])

//   /**
//    * Builds a proper hierarchy of headings based on their depth.
//    */
//   const buildHierarchy = (headingsList: Heading[]): Heading[] => {
//     const hierarchy: Heading[] = []
//     const stack: Heading[] = []

//     for (const heading of headingsList) {
//       // Pop items off the stack until we find a parent with a smaller depth
//       while (stack.length > 0 && stack[stack.length - 1].depth >= heading.depth) {
//         stack.pop()
//       }

//       // If there's a valid parent, add this heading as a child
//       if (stack.length > 0) {
//         const parent = stack[stack.length - 1]
//         parent.children = parent.children || []
//         parent.children.push({ ...heading, children: [] })
//       } else {
//         // Otherwise, this is a top-level heading
//         hierarchy.push({ ...heading, children: [] })
//       }

//       // Push this heading onto the stack
//       stack.push({ ...heading, children: [] })
//     }

//     return hierarchy
//   }

//   /**
//    * Registers a heading into the context and updates the hierarchy.
//    */
//   const registerHeading = (heading: Heading) => {
//     // Avoid duplicates
//     if (allHeadings.current.find((h) => h.id === heading.id)) return

//     allHeadings.current.push(heading)

//     // Rebuild the hierarchy
//     const updatedHierarchy = buildHierarchy(allHeadings.current)
//     setHeadings(updatedHierarchy)

//     // Observe the new heading for visibility
//     if (observerRef.current) {
//       observerRef.current.observe(heading.ref)
//     }
//   }

//   useEffect(() => {
//     // Initialize the IntersectionObserver
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         const visibleEntry = entries.find((entry) => entry.isIntersecting)
//         if (visibleEntry) {
//           setActiveId(visibleEntry.target.id)
//         }
//       },
//       { rootMargin: '0px 0px -80% 0px' }
//     )

//     return () => {
//       observerRef.current?.disconnect()
//     }
//   }, [])

//   const setActiveHeading = (id: string) => {
//     setActiveId(id)
//   }

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export const useTOC = () => {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }












// "use client"

// import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'

// export type Heading = {
//   id: string
//   text: string
//   depth: number
//   ref: HTMLHeadingElement
//   children?: Heading[]
// }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const [activeId, setActiveId] = useState<string | null>(null)
//   const observerRef = useRef<IntersectionObserver | null>(null)

//   // Keep track of all registered headings
//   const allHeadings = useRef<Heading[]>([])

//   /**
//    * Builds a hierarchical structure of headings based on their depth.
//    */
//   const buildHierarchy = (headingsList: Heading[]): Heading[] => {
//     const hierarchy: Heading[] = []
//     const stack: Heading[] = []

//     headingsList.forEach((heading) => {
//       while (stack.length > 0 && stack[stack.length - 1].depth >= heading.depth) {
//         stack.pop()
//       }
//       if (stack.length > 0) {
//         const parent = stack[stack.length - 1]
//         parent.children = parent.children || []
//         parent.children.push(heading)
//       } else {
//         hierarchy.push(heading)
//       }
//       stack.push(heading)
//     })

//     return hierarchy
//   }

//   /**
//    * Registers a new heading and updates the hierarchy.
//    */
//   const registerHeading = (heading: Heading) => {
//     // Avoid duplicate headings
//     if (allHeadings.current.find((h) => h.id === heading.id)) return

//     allHeadings.current.push(heading)

//     // Update headings hierarchy
//     setHeadings(buildHierarchy(allHeadings.current))

//     // Observe the heading for intersection tracking
//     if (observerRef.current) {
//       observerRef.current.observe(heading.ref)
//     }
//   }

//   /**
//    * Initialize the IntersectionObserver for tracking active headings.
//    */
//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         const visibleEntry = entries.find((entry) => entry.isIntersecting)
//         if (visibleEntry) {
//           setActiveId(visibleEntry.target.id)
//         }
//       },
//       { rootMargin: '0px 0px -80% 0px' }
//     )

//     return () => {
//       observerRef.current?.disconnect()
//     }
//   }, [])

//   /**
//    * Clean up observer references when headings are removed or updated.
//    */
//   useEffect(() => {
//     const currentObserver = observerRef.current
//     return () => {
//       if (currentObserver) {
//         allHeadings.current.forEach((heading) => {
//           currentObserver.unobserve(heading.ref)
//         })
//       }
//     }
//   }, [headings])

//   const setActiveHeading = (id: string) => {
//     setActiveId(id)
//   }

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// /**
//  * Custom hook to use the TOC context.
//  */
// export const useTOC = () => {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }









// "use client"

// import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'

// export type Heading = {
//   id: string
//   text: string
//   depth: number
//   ref: HTMLHeadingElement
//   children?: Heading[]
// }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const [activeId, setActiveId] = useState<string | null>(null)
//   const observerRef = useRef<IntersectionObserver | null>(null)

//   // Build hierarchy iteratively to avoid recursion
//   const addHeadingToHierarchy = (newHeading: Heading): void => {
//     setHeadings((prevHeadings) => {
//       const updatedHeadings = [...prevHeadings]
//       let parent = null

//       for (let i = updatedHeadings.length - 1; i >= 0; i--) {
//         const candidate = updatedHeadings[i]
//         if (candidate.depth < newHeading.depth) {
//           parent = candidate
//           break
//         }
//       }

//       if (parent) {
//         parent.children = parent.children || []
//         parent.children.push({ ...newHeading, children: [] })
//       } else {
//         updatedHeadings.push({ ...newHeading, children: [] })
//       }

//       return updatedHeadings
//     })
//   }

//   const registerHeading = (heading: Heading) => {
//     observeHeading(heading)
//     addHeadingToHierarchy(heading)
//   }

//   useEffect(() => {
//     // Initialize IntersectionObserver
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         const visibleEntry = entries.find((entry) => entry.isIntersecting)
//         if (visibleEntry) {
//           setActiveId(visibleEntry.target.id)
//         }
//       },
//       { rootMargin: '0px 0px -80% 0px' } // Adjust threshold as needed
//     )

//     return () => {
//       observerRef.current?.disconnect()
//     }
//   }, [])

//   const observeHeading = (heading: Heading) => {
//     if (observerRef.current && heading.ref) {
//       observerRef.current.observe(heading.ref)
//     }
//   }

//   const unobserveHeading = (heading: Heading) => {
//     if (observerRef.current && heading.ref) {
//       observerRef.current.unobserve(heading.ref)
//     }
//   }

//   const setActiveHeading = (id: string) => {
//     setActiveId(id)
//   }

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export const useTOC = () => {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }



























// "use client"

// import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'

// export type Heading = { id: string; text: string; depth: number; ref: HTMLHeadingElement; children?: Heading[] }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const allRefs = useRef<Set<HTMLHeadingElement>>(new Set())
//   const [activeId, setActiveId] = useState<string | null>(null)
//   const observerRef = useRef<IntersectionObserver | null>(null)

//   // Register headings using the ref to the element
//   const registerHeading = (heading: Heading) => {
//     // Ensure the heading hasn't been registered yet and has the correct depth
//     if (allRefs.current.has(heading.ref)) return;

//     allRefs.current.add(heading.ref)

//     // Add a top-level heading
//     setHeadings((prevHeadings) => [
//       ...prevHeadings,
//       { id: heading.id, text: heading.text, depth: heading.depth, ref: heading.ref, children: [] }
//     ])

//     setHeadings((prevHeadings) => {
//       let arrayOfHeadings = [...prevHeadings]

//       let idx = prevHeadings.length - 1;

//       while (idx > 0) {
//         const parent = arrayOfHeadings[idx]
//         if (parent.depth === heading.depth) {
//           arrayOfHeadings.push(heading)
//         } else if (parent.depth > heading.depth && parent.children.length === 0) {
//           parent.children.push(heading)
//           return [...prevHeadings, ...arrayOfHeadings]
//         } else {
//           arrayOfHeadings = [...parent.children]
//           idx--
//           break;
//         }

//       }

//       //   // Find the appropriate parent to attach this heading to
//       //   for (let i = newHeadings.length - 1; i >= 0; i--) {
//       //     const parent = newHeadings[i]
//       //     if (parent.depth < heading.depth) {
//       //       parent.children = parent.children || []
//       //       parent.children.push(heading)
//       //       break
//       //     }
//       //   }

//       //   return newHeadings
//     })

//   }

//   // Observe headings once they are registered
//   useEffect(() => {
//     if (!observerRef.current) {
//       observerRef.current = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveHeading(entry.target.id)
//             }
//           })
//         },
//         { rootMargin: '0px 0px -40% 0px', threshold: 0.5 }
//       )
//     }

//     // Add observer to all registered headings
//     const observer = observerRef.current
//     headings.forEach((heading) => {
//       observer.observe(heading.ref)
//     })

//     return () => {
//       if (observer) {
//         observer.disconnect()
//       }
//     }
//   }, [activeId, headings])

//   // Update active heading only if it changes
//   const setActiveHeading = (id: string) => {
//     setActiveId((prevActiveId) => (prevActiveId !== id ? id : prevActiveId))
//   }

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export function useTOC() {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }

// "use client"

// import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'

// export type Heading = {
//   id: string
//   text: string
//   depth: number
//   ref: HTMLHeadingElement
//   children?: Heading[]
// }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const [activeId, setActiveId] = useState<string | null>(null)
//   const observerRef = useRef<IntersectionObserver | null>(null)

//   // Utility to build the hierarchy
//   const addHeadingToHierarchy = (heading: Heading, currentHeadings: Heading[]): Heading[] => {
//     if (currentHeadings.length === 0) {
//       observeHeading(heading)
//       return [...currentHeadings, { ...heading, children: [] }]
//     }

//     const lastHeading = currentHeadings[currentHeadings.length - 1]

//     if (heading.depth > lastHeading.depth) {
//       lastHeading.children = addHeadingToHierarchy(heading, lastHeading.children || [])
//     } else {
//       observeHeading(heading)
//       return [...currentHeadings, { ...heading, children: [] }]
//     }

//     return currentHeadings
//   }

//   const registerHeading = (heading: Heading) => {
//     setHeadings((prevHeadings) => addHeadingToHierarchy(heading, [...prevHeadings]))
//   }

//   useEffect(() => {
//     // Initialize IntersectionObserver for active heading tracking
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         const visibleEntry = entries.find((entry) => entry.isIntersecting)
//         if (visibleEntry) {
//           setActiveId(visibleEntry.target.id)
//         }
//       },
//       { rootMargin: '0px 0px -80% 0px' } // Adjust threshold as needed
//     )

//     return () => {
//       observerRef.current?.disconnect()
//     }
//   }, [activeId, headings])

//   useEffect(() => {
//     headings.forEach(observeHeading)

//     return () => {
//       headings.forEach(unobserveHeading)
//     }
//   }, [])

//   const setActiveHeading = (id: string) => {
//     setActiveId(id)
//   }

//   const observeHeading = (heading: Heading) => {
//     if (observerRef.current && heading.ref) {
//       observerRef.current.observe(heading.ref)
//     }
//   }

//   const unobserveHeading = (heading: Heading) => {
//     if (observerRef.current && heading.ref) {
//       observerRef.current.unobserve(heading.ref)
//     }
//   }

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export const useTOC = () => {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }





// // import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

// // export type Heading = { id: string; text: string; depth: number; children?: Heading[] }

// // type TOCContextType = {
// //   headings: Heading[]
// //   activeId: string | null
// //   registerHeading: (heading: Heading) => void
// //   setActiveHeading: (id: string) => void
// // }

// // const TOCContext = createContext<TOCContextType | undefined>(undefined)

// // export function TOCProvider({ children }: { children: ReactNode }) {
// //   const [headings, setHeadings] = useState<Heading[]>([])
// //   const [activeId, setActiveId] = useState<string | null>(null)
// //   const currentIds = new Set<string>()

// //   const registerHeading = (heading: Heading) => {
// //     if (currentIds.has(heading.id)) return
// //     currentIds.add(heading.id)
// //     setHeadings(prevHeadings => [...prevHeadings, { ...heading, children: [] }])
// //   }

// //   const setActiveHeading = (id: string) => setActiveId(id)

// //   return (
// //     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
// //       {children}
// //     </TOCContext.Provider>
// //   )
// // }

// // export function useTOC() {
// //   const context = useContext(TOCContext)
// //   if (!context) {
// //     throw new Error('useTOC must be used within a TOCProvider')
// //   }
// //   return context
// // }



// "use client"

// import { createContext, useContext, useState, ReactNode, useEffect, useCallback, RefObject } from 'react'

// export type Heading = { ref: HTMLHeadingElement, id: string; text: string; depth: number; children?: Heading[] }

// // Persistent storage for registered headings to prevent re-registration
// const currentIds = new Set<string>()

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const [activeId, setActiveId] = useState<string | null>(null)

//   // Memoized function to register headings, to avoid unnecessary re-creations
//   const registerHeading = useCallback((heading: Heading) => {
//     if (currentIds.has(heading.id)) return
//     currentIds.add(heading.id)
//     setHeadings(prevHeadings => [...prevHeadings, { ...heading, children: [] }])
//   }, [])

//   // Memoized function to set active heading
//   const setActiveHeading = useCallback((id: string) => {
//     setActiveId(id)
//   }, [])

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export function useTOC() {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }




// "use client"

// import { createContext, useContext, useState, ReactNode, useCallback } from 'react'

// export type Heading = { id: string; text: string; depth: number; children?: Heading[] }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// const currentIds = new Set<string>()

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const [activeId, setActiveId] = useState<string | null>(null)

//   const registerHeading = useCallback((heading: Heading) => {
//     if (currentIds.has(heading.id)) return
//     currentIds.add(heading.id)
//     setHeadings(prevHeadings => [...prevHeadings, { ...heading, children: [] }])
//   }, [])

//   const setActiveHeading = useCallback((id: string) => {
//     setActiveId((prevActiveId) => (prevActiveId !== id ? id : prevActiveId)) // Only update if different
//   }, [])

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export function useTOC() {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }





















// // "use client"

// // import { createContext, useContext, useState, ReactNode, useCallback } from 'react'

// // export type Heading = { id: string; text: string; depth: number }

// // type TOCContextType = {
// //   headings: Heading[]
// //   activeId: string | null
// //   registerHeading: (heading: Heading) => void
// //   setActiveHeading: (id: string) => void
// // }

// // const TOCContext = createContext<TOCContextType | undefined>(undefined)

// // export function TOCProvider({ children }: { children: ReactNode }) {
// //   const [headings, setHeadings] = useState<Heading[]>([])
// //   const [activeId, setActiveId] = useState<string | null>(null)

// //   const registerHeading = useCallback((heading: Heading) => {
// //     setHeadings((prevHeadings) => {
// //       // Avoid duplicate registrations
// //       if (prevHeadings.some((h) => h.id === heading.id)) return prevHeadings
// //       return [...prevHeadings, heading]
// //     })
// //   }, [])

// //   const setActiveHeading = useCallback((id: string) => {
// //     setActiveId((prevActiveId) => (prevActiveId !== id ? id : prevActiveId))
// //   }, [])

// //   return (
// //     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
// //       {children}
// //     </TOCContext.Provider>
// //   )
// // }

// // export function useTOC() {
// //   const context = useContext(TOCContext)
// //   if (!context) {
// //     throw new Error('useTOC must be used within a TOCProvider')
// //   }
// //   return context
// // }














// "use client"

// import { createContext, useContext, useState, ReactNode } from 'react'

// export type Heading = { id: string; text: string; depth: number }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   setActiveHeading: (id: string) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const [activeId, setActiveId] = useState<string | null>(null)

//   // Register headings only if they haven't been registered
//   const registerHeading = (heading: Heading) => {
//     if (headings.find((current: Heading) => current.text === heading.text)) {
//       console.log('FOUND', 'current', heading)
//       return;
//     }
//     setHeadings((prevHeadings) => [...prevHeadings, heading])
//   }

//   const setActiveHeading = (id: string) => {
//     setActiveId((prevActiveId) => (prevActiveId !== id ? id : prevActiveId))
//   }

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, setActiveHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export function useTOC() {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }



















// "use client"

// import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react'

// export type Heading = { id: string; text: string; depth: number }

// type TOCContextType = {
//   headings: Heading[]
//   activeId: string | null
//   registerHeading: (heading: Heading) => void
//   observeHeading: (element: HTMLElement, id: string) => void
//   setActiveHeading: (id: string) => void
// }

// const TOCContext = createContext<TOCContextType | undefined>(undefined)

// export function TOCProvider({ children }: { children: ReactNode }) {
//   const [headings, setHeadings] = useState<Heading[]>([])
//   const [activeId, setActiveId] = useState<string | null>(null)
//   const observerRef = useRef<IntersectionObserver | null>(null)

//   // Register a heading in the list
//   const registerHeading = (heading: Heading) => {
//     const found = headings.find(current => current.id === heading.id)
//     if (found) {
//       return found;
//     }
//     setHeadings((prevHeadings) => {
//       if (prevHeadings.some((h) => h.id === heading.id)) return prevHeadings
//       return [...prevHeadings, heading]
//     })
//   }

//   // Function to observe a given heading element
//   const observeHeading = (element: HTMLElement, id: string) => {
//     if (!observerRef.current) {
//       observerRef.current = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveHeading(id)
//             }
//           })
//         },
//         { rootMargin: '0px 0px -40% 0px', threshold: 0.5 }
//       )
//     }

//     if (observerRef.current) {
//       observerRef.current.observe(element)
//     }
//   }

//   // Update the active heading only if it changes
//   const setActiveHeading = (id: string) => {
//     setActiveId((prevActiveId) => (prevActiveId !== id ? id : prevActiveId))
//   }

//   // Clean up observer when the component unmounts
//   useEffect(() => {
//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect()
//       }
//     }
//   }, [])

//   return (
//     <TOCContext.Provider value={{ headings, activeId, registerHeading, observeHeading, setActiveHeading }}>
//       {children}
//     </TOCContext.Provider>
//   )
// }

// export function useTOC() {
//   const context = useContext(TOCContext)
//   if (!context) {
//     throw new Error('useTOC must be used within a TOCProvider')
//   }
//   return context
// }
