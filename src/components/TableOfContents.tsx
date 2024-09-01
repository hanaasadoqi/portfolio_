'use client'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import { IconButton, IconLibrary } from './shared'
import clsx from 'clsx'

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
      className={clsx(
        'block w-full p-2 text-base transition-colors duration-200',
        {
          'text-xl text-gray-800 dark:text-blue-400': currentSection,
          'text-gray-600 hover:text-gray-800 dark:text-gray-200':
            !currentSection,
        }
      )}
    >
      {label}
    </Link>
  )
}

const TableOfContents: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const visibleSections = entries.filter(entry => entry.isIntersecting)
      if (visibleSections.length > 0) {
        const topMostSection = visibleSections.reduce((prev, current) => {
          return prev.boundingClientRect.top < current.boundingClientRect.top
            ? prev
            : current
        })
        setCurrentSection(`#${topMostSection.target.id}`)
      }
    },
    []
  )

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      observerOptions
    )
    const sections = document.querySelectorAll('section')

    sections.forEach(section => {
      if (observerRef.current) observerRef.current.observe(section)
    })

    return () => {
      if (observerRef.current) {
        sections.forEach(section => observerRef.current?.unobserve(section))
        observerRef.current.disconnect()
      }
    }
  }, [handleIntersection])

  return (
    <div className="group fixed right-0 top-1/2 z-50 -translate-y-1/2 transform">
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
