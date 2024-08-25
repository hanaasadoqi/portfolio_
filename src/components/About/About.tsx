'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Video } from '../shared/Media'

interface AboutItem {
  id: number
  title: string
  description: string
  type: 'image' | 'video'
  src: string
  poster: string
  alt: string
  rows: number
  columns: number
}

interface AboutProps {
  aboutData: AboutItem[]
}

const About: React.FC<AboutProps> = ({ aboutData: items }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  // Function to handle scrolling
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const scrollAmount = 300
      const scrollTo =
        direction === 'left'
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  // Function to check scroll position
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftButton(scrollLeft > 0)
      setShowRightButton(scrollLeft + clientWidth < scrollWidth)
    }
  }

  // Set up an effect to check scroll position on scroll and on load
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition)
      checkScrollPosition() // Initial check on mount
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollPosition)
      }
    }
  }, [])

  return (
    <div className="relative mx-auto h-full w-full bg-gradient-to-r from-gray-100 to-gray-200 p-12">
      {/* Left Scroll Button */}
      {showLeftButton && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-3 shadow-lg transition duration-300 ease-in-out hover:bg-gray-300"
          aria-label="Scroll Left"
        >
          &lt;
        </button>
      )}

      {/* Right Scroll Button */}
      {showRightButton && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-3 shadow-lg transition duration-300 ease-in-out hover:bg-gray-300"
          aria-label="Scroll Right"
        >
          &gt;
        </button>
      )}

      {/* Container for horizontal scroll */}
      <div
        ref={scrollRef}
        className="scrollbar-hide overflow-x-auto overflow-y-scroll whitespace-nowrap p-8 md:overflow-y-hidden"
        style={{ scrollBehavior: 'smooth' }} // Ensures smooth scrolling behavior
      >
        {/* Grid Container for Items */}
        <div
          className="grid auto-cols-max grid-flow-row grid-cols-2 items-center justify-items-center gap-6 md:grid-flow-col md:grid-rows-5"
          style={{
            gridTemplateRows: 'repeat(2, minmax(200px, 1fr))', // Adjust for multiple rows
            minWidth: 'max-content', // Ensures the grid container is wide enough for horizontal scroll
          }}
        >
          {items.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 rounded-xl p-2 transition-transform duration-300 hover:z-10 hover:scale-105"
              style={{
                width: `${item.columns * 100}px`,
                height: `${item.rows * 100}px`,
              }}
            >
              {/* Card Container */}
              <div className="group relative h-full w-full [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-lg ring-offset-secondary transition-all duration-700 [transform-style:preserve-3d] group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-offset-4 group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 h-full w-full overflow-hidden rounded-xl">
                    {item.type === 'image' && (
                      <Image
                        src={item.src}
                        alt={item.alt || ''}
                        fill
                        className="rounded-xl object-cover transition duration-300 group-hover:brightness-90"
                        sizes="(max-width: 500px) 100vw, (max-width: 750px) 50vw, 33vw"
                      />
                    )}
                    {item.type === 'video' && (
                      <Video
                        src={item.src}
                        poster={item.poster}
                        className="h-full w-full rounded-xl object-cover transition duration-300 group-hover:brightness-90"
                      />
                    )}
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-purple-700 to-indigo-500 p-4 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden whitespace-nowrap text-wrap text-white">
                      <div className="mx-4 px-4 text-center">
                        <h5 className="text-white">{item.title}</h5>
                        <p className="text-white">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
