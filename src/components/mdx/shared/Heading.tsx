"use client"

import { useEffect, useRef, useState } from 'react'
import { extractTextFromChildren, createIdFromText } from '../../../utils/extractTextFromChildren'
import { useTOC } from '@/context/TOCContext'

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  depth: number
  id?: string
}

const Heading: React.FC<HeadingProps> = ({ id, depth, children, ...rest }) => {
  const text = extractTextFromChildren(children)
  const { registerHeading, headings, allRefs } = useTOC()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [headingId, setHeadingId] = useState<string>('')

  // Register the heading using its ref once on mount if not already registered
  useEffect(() => {
    // Only register if the heading is not already registered
    if (headingRef.current && !allRefs.has(headingRef.current) && headingId !== '') {
      console.log('id', headingId)
      registerHeading({ id: headingId, text, depth, ref: headingRef.current })
    }
  }, [registerHeading, headingId, text, depth, headings])

  useEffect(() => {
    const headingId = createIdFromText(text)
    console.log('created', headingId, 'text', text)
    setHeadingId(headingId)
  }, [])

  // Keep the element rendering logic the way you originally wrote it
  switch (depth) {
    case 1:
      return (
        <h1 ref={headingRef} id={headingId} {...rest}>
          {children}
        </h1>
      )
    case 2:
      return (
        <h2 ref={headingRef} id={headingId} {...rest}>
          {children}
        </h2>
      )
    case 3:
      return (
        <h3 ref={headingRef} id={headingId} {...rest}>
          {children}
        </h3>
      )
    case 4:
      return (
        <h4 ref={headingRef} id={headingId} {...rest}>
          {children}
        </h4>
      )
    case 5:
      return (
        <h5 ref={headingRef} id={headingId} {...rest}>
          {children}
        </h5>
      )
    case 6:
      return (
        <h6 ref={headingRef} id={headingId} {...rest}>
          {children}
        </h6>
      )
    default:
      return (
        <div ref={headingRef} id={headingId} {...rest}>
          {children}
        </div>
      )
  }
}

export default Heading








// // 
// // export default Heading

// import { useEffect, useRef } from 'react'
// import { extractTextFromChildren, createIdFromText } from '../../../utils/extractTextFromChildren'
// import { useTOC } from '@/context/TOCContext'

// // Helper to generate a unique ID based on text and current timestamp
// // const generateUniqueId = (baseId: string) => `${baseId}-${Date.now()}`

// export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
//   depth: number
//   id?: string
// }

// const Heading: React.FC<HeadingProps> = ({ id, depth, children, ...rest }) => {
//   const text = extractTextFromChildren(children)
//   const headingId = id || createIdFromText(text)
//   const { registerHeading } = useTOC()
//   const headingRef = useRef<HTMLHeadingElement>(null)

//   useEffect(() => {
//     if (headingRef.current) {
//       registerHeading({ id: headingId, text, depth, ref: headingRef.current })
//     }
//   }, [registerHeading, headingId, text, depth])


//   const renderHeading = () => {
//     switch (depth) {
//       case 1:
//         return (
//           <h1 ref={headingRef} id={headingId} {...rest}>
//             {children}
//           </h1>
//         )
//       case 2:
//         return (
//           <h2 ref={headingRef} id={headingId} {...rest}>
//             {children}
//           </h2>
//         )
//       case 3:
//         return (
//           <h3 ref={headingRef} id={headingId} {...rest}>
//             {children}
//           </h3>
//         )
//       case 4:
//         return (
//           <h4 ref={headingRef} id={headingId} {...rest}>
//             {children}
//           </h4>
//         )
//       case 5:
//         return (
//           <h5 ref={headingRef} id={headingId} {...rest}>
//             {children}
//           </h5>
//         )
//       case 6:
//         return (
//           <h6 ref={headingRef} id={headingId} {...rest}>
//             {children}
//           </h6>
//         )
//       default:
//         return (
//           <div ref={headingRef} id={headingId} {...rest}>
//             {children}
//           </div>
//         )
//     }
//   }

//   return renderHeading()
// }

// export default Heading


// {/* <Link href={`#${headingId}`} passHref> */}
// {/* </Link> */}







// "use client"

// import { useEffect, createElement, useRef } from 'react'
// import Link from 'next/link'
// import { extractTextFromChildren, createIdFromText } from '../../../utils/extractTextFromChildren'
// import HeadingObserver from '@/components/HeadingObserver'
// import { useTOC } from '@/context/TOCContext'

// export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
//   depth: number
//   id?: string
// }

// const Heading: React.FC<HeadingProps> = ({ id, depth, children, ...rest }) => {
//   const text = extractTextFromChildren(children)
//   const baseId = id || createIdFromText(text)
//   const headingId = baseId

//   // Access `registerHeading` from TOC context
//   const { registerHeading } = useTOC()

//   const hasRegistered = useRef(false)

//   function registerHeadingLink() {

//   }

//   useEffect(() => {
//     if (!hasRegistered.current) {
//       registerHeading({ id: headingId, text, depth, children: [] })
//       hasRegistered.current = true
//     }
//   }, [registerHeading])

//   const Tag = `h${depth}` as keyof JSX.IntrinsicElements

//   return (
//     <HeadingObserver id={headingId}>
//       <Link href={`#${headingId}`} passHref>
//         {createElement(Tag, { id: headingId, ...rest }, children)}
//       </Link>
//     </HeadingObserver>
//   )
// }

// export default Heading
// "use client"

// import { useEffect, createElement, useRef } from 'react'
// import Link from 'next/link'
// import { extractTextFromChildren, createIdFromText } from '../../../utils/extractTextFromChildren'
// import HeadingObserver from '@/components/HeadingObserver'
// import { useTOC } from '@/context/TOCContext'

// export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
//   depth: number
//   id?: string
// }

// const Heading: React.FC<HeadingProps> = ({ id, depth, children, ...rest }) => {
//   const text = extractTextFromChildren(children)
//   const baseId = id || createIdFromText(text)
//   const headingId = baseId

//   // Access `registerHeading` from TOC context
//   const { registerHeading } = useTOC()

//   const hasRegistered = useRef(false)

//   useEffect(() => {
//     if (!hasRegistered.current) {
//       registerHeading({ id: headingId, text, depth, children: [] })
//       hasRegistered.current = true
//     }
//   }, []) // Only run this effect once after mounting

//   const Tag = `h${depth}` as keyof JSX.IntrinsicElements

//   return (
//     <HeadingObserver id={headingId}>
//       <Link href={`#${headingId}`} passHref>
//         {createElement(Tag, { id: headingId, ...rest }, children)}
//       </Link>
//     </HeadingObserver>
//   )
// }

// export default Heading




















// "use client"

// import { useEffect, createElement, useRef } from 'react'
// import Link from 'next/link'
// import { extractTextFromChildren, createIdFromText } from '../../../utils/extractTextFromChildren'
// import HeadingObserver from '@/components/HeadingObserver'
// import { useTOC } from '@/context/TOCContext'

// export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
//   depth: number
//   id?: string
// }

// const Heading: React.FC<HeadingProps> = ({ id, depth, children, ...rest }) => {
//   const text = extractTextFromChildren(children)
//   const baseId = id || createIdFromText(text)
//   const headingId = baseId

//   const { registerHeading } = useTOC()
//   const hasRegistered = useRef(false)

//   useEffect(() => {
//     if (!hasRegistered.current) {
//       registerHeading({ id: headingId, text, depth, children: [] })
//       hasRegistered.current = true
//     }
//   }, [headingId]) // Only dependent on headingId

//   const Tag = `h${depth}` as keyof JSX.IntrinsicElements

//   return (
//     <HeadingObserver id={headingId}>
//       {/* <Link href={`#${headingId}`} passHref> */}
//       {createElement(Tag, { id: headingId, ...rest }, children)}
//       {/* </Link> */}
//     </HeadingObserver>
//   )
// }

// export default Heading












// "use client"

// import { useEffect, createElement, useRef } from 'react'
// import Link from 'next/link'
// import { extractTextFromChildren, createIdFromText } from '../../../utils/extractTextFromChildren'
// import HeadingObserver from '@/components/HeadingObserver'
// import { useTOC } from '@/context/TOCContext'

// export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
//   depth: number
//   id?: string
// }

// const Heading: React.FC<HeadingProps> = ({ id, depth, children, ...rest }) => {
//   const text = extractTextFromChildren(children)
//   const headingId = id || createIdFromText(text)

//   const { registerHeading } = useTOC()
//   const hasRegistered = useRef(false)

//   useEffect(() => {
//     if (!hasRegistered.current) {
//       registerHeading({ id: headingId, text, depth })
//       hasRegistered.current = true
//     }
//   }, [headingId, text, depth, registerHeading]) // Only dependent on relevant values

//   const Tag = `h${depth}` as keyof JSX.IntrinsicElements

//   return (
//     <HeadingObserver id={headingId}>
//       {createElement(Tag, { id: headingId, ...rest }, (
//         // <Link href={`#${headingId}`} passHref>
//         children
//         // </Link>
//       ))}
//     </HeadingObserver>
//   )
// }

// export default Heading




















// "use client"

// import { useEffect, createElement, useRef } from 'react'
// import Link from 'next/link'
// import { extractTextFromChildren, createIdFromText } from '../../../utils/extractTextFromChildren'
// import HeadingObserver from '@/components/HeadingObserver'
// import { useTOC } from '@/context/TOCContext'

// export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
//   depth: number
//   id?: string
// }

// const Heading: React.FC<HeadingProps> = ({ id, depth, children, ...rest }) => {
//   const text = extractTextFromChildren(children)
//   const headingId = id || createIdFromText(text)
//   const { registerHeading, headings } = useTOC()
//   const hasRegistered = useRef(false)

//   useEffect(() => {
//     if (!hasRegistered.current && !headings.some((h) => h.id === headingId)) {
//       registerHeading({ id: headingId, text, depth })
//       hasRegistered.current = true
//     }
//   }, [registerHeading, headingId, text, depth, headings])

//   const Tag = `h${depth}` as keyof JSX.IntrinsicElements

//   return (
//     <HeadingObserver id={headingId}>
//       {createElement(Tag, { id: headingId, ...rest }, (
//         children
//       ))}
//     </HeadingObserver>
//   )
// }

// export default Heading

// // {/* </Link> */}
// // <Link href={`#${headingId}`} passHref>


















// "use client"

// import { useEffect, createElement, useRef } from 'react'
// import Link from 'next/link'
// import { extractTextFromChildren, createIdFromText } from '../../../utils/extractTextFromChildren'
// import { useTOC } from '@/context/TOCContext'

// export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
//   depth: number
//   id?: string
// }

// const Heading: React.FC<HeadingProps> = ({ id, depth, children, ...rest }) => {
//   const text = extractTextFromChildren(children)
//   const headingId = id || createIdFromText(text)
//   const { registerHeading, observeHeading, headings } = useTOC()
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (ref.current && !headings.find(heading => heading.id === id)) {
//       registerHeading({ id: headingId, text, depth })
//       observeHeading(ref.current, headingId)
//     }
//   }, [registerHeading, observeHeading, headingId, text, depth])

//   const Tag = `h${depth}` as keyof JSX.IntrinsicElements

//   return (
//     <div ref={ref}>
//       {createElement(Tag, { id: headingId, ...rest }, (
//         children
//       ))}
//     </div>
//   )
// }

// export default Heading
