// TableOfContents.tsx
'use client'
import React from 'react'
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
  console.log('Current Section:', currentSection)
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx('block w-full text-base transition-colors duration-200', {
        'p-2 text-blue-700 hover:text-blue-600 active:text-blue-800 dark:text-blue-400 hover:dark:text-blue-300 active:dark:text-blue-500':
          currentSection,
        'text-gray-400 hover:text-gray-300 dark:text-gray-200': !currentSection,
      })}
    >
      {label}
    </Link>
  )
}

const TableOfContents: React.FC = () => {
  const { currentSection } = useScrollContext()
  console.log('Current Section:', currentSection)
  return (
    <div
      data-id="hero"
      className="group fixed right-0 top-1/4 z-50 -translate-y-1/2 transform md:right-4"
    >
      {/* IconButton for opening the ToC */}
      <IconButton
        className="bg-primary group-hover:hidden"
        icon={<IconLibrary.Hamburger />}
        aria-label="Toggle navigation menu"
        variant="secondary"
        aria-expanded="false"
        aria-controls="toc-menu"
      />

      {/* Expandable ToC Menu */}
      <div className="flex h-20 w-full cursor-pointer items-center justify-center bg-transparent transition-all duration-300 hover:w-72">
        <div
          id="toc-menu"
          className="hidden w-full flex-col items-start space-y-4 bg-gray-900 bg-opacity-75 p-4 text-white backdrop-blur-lg backdrop-filter group-hover:flex"
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
      </div>
    </div>
  )
}

export default TableOfContents
