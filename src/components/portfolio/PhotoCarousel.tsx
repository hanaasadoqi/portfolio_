'use client'

import { useState, useEffect } from 'react'

interface Photo {
  src: string
  alt: string
  caption?: string
}

const photos: Photo[] = [
  {
    src: '/images/about/bowie.png',
    alt: 'Bowie',
    caption: 'My dog. Unconditionally supportive of career decisions.',
  },
]

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0)

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
      <div
        className="relative w-full rounded-lg overflow-hidden border aspect-square"
        style={{ borderColor: 'var(--border)' }}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      {/* Caption */}
      {photo.caption && (
        <p className="text-xs text-center" style={{ color: 'var(--fg-muted)' }}>
          {photo.caption}
        </p>
      )}

      {/* Dots indicator */}
      {photos.length > 1 && (
        <div className="flex gap-1.5 justify-center">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="w-1.5 h-1.5 rounded-full transition-all"
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
