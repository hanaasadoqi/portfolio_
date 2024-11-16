"use client"

import { Heading, useTOC } from '@/context/TOCContext'
import { useState, useEffect } from 'react'
import { buildTOC } from '../../../MDX/utils/buildTOC'
import TOCItem from './TOCItem'

export default function TOCComponent() {
  const { headings } = useTOC()
  const [tocItems, setTocItems] = useState<Heading[]>([])

  useEffect(() => {
    if (headings && headings.length > 0) {
      const toc = buildTOC(headings)
      setTocItems(toc as Heading[])
    }
  }, [headings])

  if (tocItems.length === 0) {
    return null
  }

  return (
    <nav className="toc bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h6 className="font-bold text-lg dark:text-white mb-2">Table of Contents</h6>
      <ul className="list-none p-0">
        {tocItems.map((heading) => (
          <TOCItem key={heading.id} item={heading} />
        ))}
      </ul>
    </nav>
  )
}
