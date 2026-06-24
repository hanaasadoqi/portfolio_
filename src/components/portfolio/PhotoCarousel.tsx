'use client'

import { useState, useEffect, useRef } from 'react'

interface Photo {
  src: string
  alt: string
  title: string
  description: string
}

// Curated selection of photos for the carousel
const photos: Photo[] = [
  {
    src: '/images/about/bowie.png',
    alt: 'Bowie',
    title: 'Bowie',
    description: 'Best decision maker I know.',
  },
  {
    src: '/images/about/brooklyn_bridge.png',
    alt: 'Brooklyn Bridge',
    title: 'Brooklyn',
    description: 'Home. I live here.',
  },
  {
    src: '/images/about/morocco.webp',
    alt: 'Morocco',
    title: 'Morocco',
    description: 'Where I\'m from.',
  },
  {
    src: '/images/about/mechanical_plans.png',
    alt: 'Mechanical Engineering',
    title: 'Before Code',
    description: 'Systems thinking started here.',
  },
]

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0)
  const [showCaption, setShowCaption] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Intersection observer to detect when carousel is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Auto-rotate only when in view
  useEffect(() => {
    if (photos.length <= 1) return

    if (isInView) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % photos.length)
      }, 7000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      // Reset to first photo when out of view
      setCurrent(0)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isInView])

  const photo = photos[current]

  return (
    <div className="flex flex-col gap-3" ref={containerRef}>
      {/* Image with hover caption overlay */}
      <div
        className="relative w-full rounded-lg overflow-hidden border aspect-square group cursor-pointer"
        style={{ borderColor: 'var(--border)' }}
        onMouseEnter={() => setShowCaption(true)}
        onMouseLeave={() => setShowCaption(false)}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Caption overlay - show on hover */}
        {showCaption && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-black/70 to-transparent"
          >
            <p className="text-sm font-semibold text-white text-center">
              {photo.title}
            </p>
            <p className="text-xs text-white/80 text-center mt-1">
              {photo.description}
            </p>
          </div>
        )}
      </div>

      {/* Dots indicator */}
      {photos.length > 1 && (
        <div className="flex gap-2 justify-center items-center">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="rounded-full transition-all duration-300 hover:scale-110"
              style={{
                width: idx === current ? '20px' : '8px',
                height: '8px',
                backgroundColor:
                  idx === current ? 'var(--accent)' : 'var(--border)',
              }}
              aria-label={`Go to photo ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
