"use client"

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useTOC, Heading } from '@/context/TOCContext'
import dynamic from 'next/dynamic'

interface TOCItemProps {
  item: Heading
}

const Minus = dynamic(() => import('react-icons/fa').then(mod => mod.FaMinus))
const Plus = dynamic(() => import('react-icons/fa').then(mod => mod.FaPlus))

const TOCItem: React.FC<TOCItemProps> = React.memo(({ item }) => {
  const { activeRef, setActiveHeading } = useTOC()
  const [expanded, setExpanded] = useState(false)

  const isActive = useMemo(() => activeRef === item.ref, [activeRef, item.ref])
  const hasChildren = useMemo(() => item.children && item.children.length > 0, [item.children])

  const toggleExpanded = () => setExpanded((prev) => !prev)

  return (
    <li className={clsx('py-2', `ml-${item.depth / 2}`)}>
      <div
        className={clsx(
          'w-full flex justify-between items-center px-2 py-1',
          {
            'font-bold text-md dark:text-white': isActive,
            'hover:dark:bg-primary-900 rounded-md': true
          }
        )}
      >
        <Link
          href={`#${item.id}`}
          onClick={(e) => setActiveHeading(item.ref as HTMLLIElement | HTMLHeadingElement)}
          className="flex-1 text-left"
        >
          {item.text}
        </Link>
        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault()
              toggleExpanded()
              setActiveHeading(item.ref as HTMLLIElement | HTMLHeadingElement)
            }}
            aria-expanded={expanded}
            aria-label={expanded ? 'Collapse' : 'Expand'}
            className="h-6 w-6 flex items-center justify-center dark:hover:bg-primary-800 dark:hover:text-white dark:active:bg-primary-700 hover:shadow-md hover:scale-110"
          >
            {expanded ? <Minus /> : <Plus />}
          </button>
        )}
      </div>
      {hasChildren && expanded && (
        <ul className="mt-2 space-y-2">
          {item.children!.map((child) => (
            <TOCItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  )
})

TOCItem.displayName = 'TOCItem'

export default TOCItem





















// "use client"

// import React, { useMemo, useState } from 'react'
// import Link from 'next/link'
// import clsx from 'clsx'
// import { useTOC, Heading } from '@/context/TOCContext'
// import { IconButton } from '@/components'
// import dynamic from 'next/dynamic'

// interface TOCItemProps {
//   item: Heading
// }
// const Minus = dynamic(() => import('react-icons/fa').then(mod => mod.FaMinus))
// const Plus = dynamic(() => import('react-icons/fa').then(mod => mod.FaPlus))

// const TOCItem: React.FC<TOCItemProps> = React.memo(({ item }) => {
//   const { activeRef, setActiveHeading } = useTOC()
//   const [expanded, setExpanded] = useState(false)

//   const isActive = useMemo(() => activeRef === item.ref, [activeRef, item.ref])
//   const hasChildren = useMemo(() => item.children && item.children.length > 0, [item.children])

//   const toggleExpanded = () => setExpanded((prev) => !prev)

//   return (
//     <li className={clsx('py-2', `ml-${item.depth}`)}>
//       <div
//         className={clsx('w-full flex justify-center', {
//           'font-bold text-md dark:text-white': isActive,
//           'hover:dark:bg-primary-900 rounded-md px-2': true,
//           'gap-2': hasChildren
//         })}
//       >
//         {(
//           <Link href={`#${item.id}`} onClick={() => setActiveHeading(item.ref)} className="w-full inline-flex items-start justify-center">
//             {item.text}
//           </Link>
//         )}
//         {hasChildren && (
//           <IconButton
//             onClick={toggleExpanded}
//             aria-expanded={expanded}
//             aria-label={expanded ? 'Collapse' : 'Expand'}
//             className=""
//             size="xs"
//             icon={expanded ? <Minus /> : <Plus />}
//           />
//         )}
//       </div>
//       {hasChildren && expanded && (
//         <ul className="ml-2 mt-2">
//           {item.children!.map((child) => (
//             <TOCItem key={child.id} item={child} />
//           ))}
//         </ul>
//       )}
//     </li>
//   )
// })

// TOCItem.displayName = 'TOCItem'

// export default TOCItem




















// // "use client"

// import React, { useMemo, useState } from 'react'
// import Link from 'next/link'
// import clsx from 'clsx'
// import { type Heading, useTOC } from '@/context/TOCContext'



// interface TOCItemProps {
//   item: Heading;
// }

// const TOCItem: React.FC<TOCItemProps> = React.memo(({ item }) => {
//   const { activeId, setActiveHeading } = useTOC()
//   const [expanded, setExpanded] = useState(false)
//   const hasChildren = item.children && item.children.length > 0

//   const isActive = useMemo(() => {
//     const checkIfActive = (item: Heading): boolean => {
//       if (item.id === activeId) return true
//       return item.children?.some(child => checkIfActive(child)) ?? false
//     }
//     return checkIfActive(item)
//   }, [activeId, item])

//   const isExpanded = (isActive && hasChildren) || expanded

//   return (
//     <li
//       className={clsx(`flex-1 py-2 ml-${item.depth}`)}
//       onClick={() => setActiveHeading(item.id)}
//     >
//       <div
//         className={clsx('flex items-center', {
//           'dark:bg-primary-950 hover:dark:bg-primary-900 px-2 rounded-md font-semibold': isActive,
//           'font-bold text-md dark:text-white': item.id === activeId
//         })}
//       >
//         <Link
//           href={`#${item.id}`}
//           className={clsx('flex-1', {
//             'dark:text-white font-bold text-md active': item.id === activeId,
//             'dark:text-white': isActive
//           })}
//         >
//           {item.text}
//         </Link>
//         {hasChildren && (
//           <button
//             onClick={() => setExpanded(prev => !prev)}
//             aria-expanded={isExpanded}
//             aria-label={isExpanded ? 'Collapse' : 'Expand'}
//           >
//             {isExpanded ? '[-]' : '[+]'}
//           </button>
//         )}
//       </div>
//       {hasChildren && isExpanded && (
//         <ul className={`ml-${item.depth} mt-2`}>
//           {item.children!.map(child => (
//             <TOCItem key={child.id} item={child} />
//           ))}
//         </ul>
//       )}
//     </li>
//   )
// })

// export default TOCItem

// TOCItem.displayName = "TOC Item"