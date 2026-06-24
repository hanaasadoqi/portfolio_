'use client'

import { useState, useEffect } from 'react'

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
    description: 'My dog. Unconditionally supportive of all my decisions.',
  },
  {
    src: '/images/about/brooklyn_bridge.png',
    alt: 'Brooklyn Bridge',
    title: 'Brooklyn',
    description: 'Where I live. Great coffee, great people, great energy.',
  },
  {
    src: '/images/about/morocco.webp',
    alt: 'Morocco',
    title: 'Morocco',
    description: 'Where I\'m from. Always on my mind.',
  },
  {
    src: '/images/about/marrakech.jpg',
    alt: 'Marrakech',
    title: 'Marrakech',
    description: 'The medina. Organized chaos.',
  },
  {
    src: '/images/about/mechanical_plans.png',
    alt: 'Mechanical Engineering',
    title: 'Before Code',
    description: 'Used to work in mechanical engineering. Still love systems thinking.',
  },
]

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0)
  const [showCaption, setShowCaption] = useState(false)

  useEffect(() => {
    if (photos.length <= 1) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const photo = photos[current]

  return (
    <div className="flex flex-col gap-3">
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
        <div className="flex gap-1.5 justify-center">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
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
