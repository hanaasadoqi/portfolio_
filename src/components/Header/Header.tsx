'use client'

import React, { useEffect, useState, useRef } from 'react'
import { FaCog, FaHome, FaLink } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  LinkButton,
  NavMenu,
  IconButton,
  IconButtonProps,
  ButtonGroup,
} from '../shared'
import clsx from 'clsx'

const navLinks = [
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
  { href: '#writing', label: 'Writing', ariaLabel: 'Articles/Blogs Section' },
  { href: '#education', label: 'Education', ariaLabel: 'Education Section' },
  { href: '#contact', label: 'Contact', ariaLabel: 'Contact Me Section' },
]

const Header: React.FC = () => {
  const timeoutRef = useRef<number | null>(null)
  const hideTimeoutRef = useRef<number | null>(null)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const lastScrollTop = useRef(0)
  const [currentSection, setCurrentSection] = useState('#hero')
  const isHoveringRef = useRef(false) // Track hover state

  const iconButtonProps: Partial<IconButtonProps> = {
    variant: 'text',
    className: 'transition-all duration-300 ease border-none',
    iconClassName: 'h-6 w-6',
    iconOnly: true,
  }

  // Use Intersection Observer to track the current section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(`#${entry.target.id}`) // Include '#' to match href
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, []) // Removed `currentSection` dependency here

  // Handle scroll events to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const isScrollingDown = scrollTop > lastScrollTop.current
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop

      if (isScrollingDown) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }

      // Clear timeout when user scrolls up
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      // Set a delay to hide the header if user stops scrolling
      timeoutRef.current = window.setTimeout(() => {
        if (!isHoveringRef.current) setIsHeaderVisible(false)
      }, 3000)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // Show header on hover
  const handleMouseEnter = () => {
    console.log('mouse enter')
    isHoveringRef.current = true
    setIsHeaderVisible(true)
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
  }

  // Hide header after hover if no further interaction
  const handleMouseLeave = () => {
    isHoveringRef.current = false
    hideTimeoutRef.current = window.setTimeout(() => {
      setIsHeaderVisible(false)
    }, 3000)
  }

  return (
    <header
      id="nav"
      className={clsx(
        'pointer-events-auto fixed left-0 right-0 border-b bg-white/25 p-3 bg-blend-lighten drop-shadow-md backdrop-blur-3xl',
        {
          'pointer-events-none opacity-0': !isHeaderVisible,
          'pointer-events-auto opacity-100': isHeaderVisible,
        }
      )}
    >
      <div
        className="flex h-full w-full items-center justify-between space-x-4"
        role="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
      >
        <div id="logo-container">
          <LinkButton
            icon={<FaHome />}
            href="/#hero"
            scroll={true}
            iconOnly
            size="xl"
          />
        </div>
        <NavMenu
          links={navLinks}
          currentSection={currentSection}
          className="ease relative hidden w-full flex-1 flex-nowrap items-center justify-evenly p-1 backdrop-blur-sm transition-transform duration-300 lg:flex"
        />
        <div id="nav-icon-menu">
          <ButtonGroup spacing="md" border divider>
            <IconButton icon={<FaLink />} {...iconButtonProps}>
              {"Let's Connect"}
            </IconButton>
            <IconButton icon={<FaCog />} {...iconButtonProps}>
              Settings
            </IconButton>
            <IconButton
              icon={<GiHamburgerMenu />}
              variant="text"
              iconOnly
              className="ease flex transition-all duration-300 lg:hidden"
            />
          </ButtonGroup>
        </div>
      </div>
    </header>
  )
}

export default Header
