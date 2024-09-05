'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { IconButton, IconLibrary } from './shared'
import clsx from 'clsx'
import { useScrollContext } from '@/context/ScrollContext'

interface NavLink {
  href: string
  label: string
  ariaLabel: string
}

const navLinks: NavLink[] = [
  { href: '#about', label: 'About', ariaLabel: 'About Me Section' },
  { href: '#skills', label: 'Skills', ariaLabel: 'Technical Skills Section' },
  {
    href: '#experience',
    label: 'Experience',
    ariaLabel: 'Work Experience Section',
  },
  {
    href: '#projects',
    label: 'Projects',
    ariaLabel: 'Personal Projects Section',
  },
  { href: '#writing', label: 'Articles', ariaLabel: 'Articles Section' },
  { href: '#education', label: 'Education', ariaLabel: 'Education Section' },
  { href: '#contact', label: 'Contact', ariaLabel: 'Contact Me Section' },
]

interface TOCItemProps {
  href: string
  label: string
  ariaLabel: string
  currentSection: boolean
}

const TOCItem: React.FC<TOCItemProps> = ({
  href,
  label,
  ariaLabel,
  currentSection,
}) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx('block w-full text-base transition-colors duration-200', {
        'p-2 text-white hover:text-gray-200 dark:text-blue-400': currentSection,
        'text-gray-400 hover:text-gray-300 dark:text-gray-200': !currentSection,
      })}
    >
      {label}
    </Link>
  )
}

const TableOfContents: React.FC = () => {
  const { currentSection } = useScrollContext()
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      data-id="hero"
      className="group fixed right-0 top-1/2 z-50 flex -translate-y-1/2 transform flex-col items-end"
    >
      <IconButton
        className="mb-2 rounded-full bg-primary-700 p-2 text-white transition-opacity duration-300 ease-in-out"
        icon={<IconLibrary.Hamburger />}
        aria-label="Toggle navigation menu"
        variant="secondary"
        aria-expanded={expanded}
        aria-controls="toc-menu"
        onClick={() => setExpanded(prev => !prev)}
      />
      {expanded && (
        <div
          id="toc-menu"
          className={clsx(
            'transition-tranform mr-4 overflow-hidden rounded-lg bg-gray-900 bg-opacity-75 p-4 text-white shadow-lg backdrop-blur-lg backdrop-filter duration-500 ease-in-out'
          )}
        >
          {navLinks.map(({ href, label, ariaLabel }) => (
            <TOCItem
              key={href}
              href={href}
              label={label}
              ariaLabel={ariaLabel}
              currentSection={currentSection === href}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TableOfContents
