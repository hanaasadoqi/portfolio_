"use client"

import AboutFront from './AboutFront'
import AboutBack from './AboutBack'
import { AboutAsset } from '@/types'
import { useState, useEffect } from 'react'

const AboutItemCard = ({
  item,
  className,
}: {
  item: AboutAsset
  className?: string
}) => {
  const type = item.type || (item.src?.endsWith('.mp4') ? 'video' : 'image')

  const [isFlipped, setIsFlipped] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detect touch devices
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkTouchDevice()
    window.addEventListener('resize', checkTouchDevice)
    return () => {
      window.removeEventListener('resize', checkTouchDevice)
    }
  }, [])

  const handleCardClick = () => {
    if (isTouchDevice) {
      setIsFlipped((prev) => !prev)
    }
  }

  return (
    <figure
      className={`relative flex-shrink-0 rounded-xl p-2 transition-transform duration-1000 hover:z-10 hover:scale-105 ${className}`}
      style={{
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
      }}
      onClick={handleCardClick}
    >
      <div className="group relative h-full w-full [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl ring-offset-secondary transition-all duration-1000 [transform-style:preserve-3d] group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-offset-2 group-hover:[transform:rotateY(180deg)]">
          <div
            className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped
              ? 'rotate-y-180' // Mobile flip logic
              : isTouchDevice
                ? ''
                : 'group-hover:rotate-y-180'
              }`}
          >
            <AboutFront {...item} type={type} />
            <AboutBack title={item.title} description={item.description} />
          </div>
        </div>
      </div>
    </figure>
  )
}

export default AboutItemCard