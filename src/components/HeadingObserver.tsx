// "use client"

// import { useEffect, useRef } from 'react'
// import { useTOC } from '../context/TOCContext'

// type HeadingObserverProps = {
//   id: string
//   children: React.ReactNode
// }

// const HeadingObserver: React.FC<HeadingObserverProps> = ({ id, children }) => {
//   const { setActiveHeading } = useTOC()
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const current = ref.current!
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveHeading(id)
//           }
//         })
//       },
//       { rootMargin: '0px 0px -50% 0px', threshold: 0.5 }
//     )

//     if (current) {
//       observer.observe(current)
//     }

//     return () => {
//       if (current) {
//         observer.unobserve(current)
//       }
//     }
//   }, [id, setActiveHeading])

//   return <div ref={ref}>{children}</div>
// }

// export default HeadingObserver


// "use client"

// import { useEffect, useRef } from 'react'
// import { useTOC } from '@/context/TOCContext'

// type HeadingObserverProps = {
//   id: string
//   children: React.ReactNode
// }

// const HeadingObserver: React.FC<HeadingObserverProps> = ({ id, children }) => {
//   const { setActiveHeading } = useTOC()
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const current = ref.current!
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveHeading(id)
//           }
//         })
//       },
//       { rootMargin: '0px 0px -80% 0px', threshold: 0.3 } // Adjusted for better stability
//     )

//     if (current) {
//       observer.observe(current)
//     }

//     return () => {
//       if (current) {
//         observer.unobserve(current)
//       }
//     }
//   }, [id, setActiveHeading])

//   return <div ref={ref}>{children}</div>
// }

// export default HeadingObserver




// "use client"

// import { useEffect, useRef } from 'react'
// import { useTOC } from '@/context/TOCContext'
// import debounce from 'lodash.debounce'

// type HeadingObserverProps = {
//   id: string
//   children: React.ReactNode
// }

// const HeadingObserver: React.FC<HeadingObserverProps> = ({ id, children }) => {
//   const { setActiveHeading } = useTOC()
//   const ref = useRef<HTMLDivElement>(null)

//   // Debounced version of setActiveHeading to reduce rapid state updates
//   const debouncedSetActiveHeading = debounce((headingId: string) => {
//     setActiveHeading(headingId)
//   }, 150) // Adjust the delay as needed for smooth performance

//   useEffect(() => {
//     const current = ref.current!
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             debouncedSetActiveHeading(id)
//           }
//         })
//       },
//       { rootMargin: '0px 0px -50% 0px', threshold: 0.1 } // Lower threshold for less sensitivity
//     )

//     if (current) {
//       observer.observe(current)
//     }

//     return () => {
//       if (current) {
//         observer.unobserve(current)
//       }
//       debouncedSetActiveHeading.cancel() // Clean up debounce on unmount
//     }
//   }, [id, debouncedSetActiveHeading])

//   return <div ref={ref}>{children}</div>
// }

// export default HeadingObserver

















// "use client"

// import { useEffect, useRef } from 'react'
// import { useTOC } from '@/context/TOCContext'

// type HeadingObserverProps = {
//   id: string
//   children: React.ReactNode
// }

// const HeadingObserver: React.FC<HeadingObserverProps> = ({ id, children }) => {
//   const { setActiveHeading } = useTOC()
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const current = ref.current
//     if (!current) return

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setActiveHeading(id)
//         }
//       },
//       { rootMargin: '0px 0px -40% 0px', threshold: 0.1 }
//     )

//     observer.observe(current)

//     return () => {
//       observer.disconnect()
//     }
//   }, [id, setActiveHeading])

//   return <div ref={ref}>{children}</div>
// }

// export default HeadingObserver























"use client"

import { useEffect, useRef } from 'react'
import { useTOC } from '@/context/TOCContext'

type HeadingObserverProps = {
  id: string
  children: React.ReactNode
}

const HeadingObserver: React.FC<HeadingObserverProps> = ({ id, children }) => {
  const { setActiveHeading, activeRef } = useTOC()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = ref.current
    if (!current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && activeRef === ref.current) {
            setActiveHeading(ref.current as HTMLHeadingElement)
          }
        })
      },
      { rootMargin: '0px 0px -40% 0px', threshold: 0.5 }
    )

    observer.observe(current)

    return () => {
      observer.disconnect()
    }
  }, [id, setActiveHeading, activeRef])

  return <div ref={ref}>{children}</div>
}

export default HeadingObserver
