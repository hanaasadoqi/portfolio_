'use client'

import { useEffect, useState, ReactNode } from 'react'

interface StarProps {
  size: number
  color: string
  top: string
  left: string
  animate: boolean
  pulse: boolean
  float: boolean
}

const Star: React.FC<StarProps> = ({
  size,
  color,
  top,
  left,
  animate,
  pulse,
  float,
}) => (
  <div
    className={`absolute rounded-full ${animate ? 'animate-spin' : ''} ${
      pulse ? 'animate-pulse' : ''
    } ${float ? 'animate-float-slow' : ''}`}
    style={{
      width: `${size / 2}px`,
      height: `${size / 2}px`,
      backgroundColor: color,
      top,
      left,
      boxShadow: `0 1px 2px 1px white, 0 0 50px ${color}, 0 0 100px ${color}`,
    }}
  />
)

const useStars = (id: string): ReactNode[] => {
  const [stars, setStars] = useState<ReactNode[]>([])

  useEffect(() => {
    let starCount
    switch (id) {
      case 'hero':
        starCount = 0
        break
      case 'about':
        starCount = 2
        break
      case 'featured':
        starCount = 5
        break
      case 'skills':
        starCount = 10
        break
      case 'experience':
        starCount = 20
        break
      case 'projects':
        starCount = 30
        break
      case 'writing':
        starCount = 40
        break
      case 'education':
        starCount = 60
        break
      case 'contact':
        starCount = 75
        break
      case 'app-wide':
        starCount = 300
        break
      default:
        starCount = 0
    }

    // Generate stars based on the updated numStars
    const generatedStars = Array.from({ length: starCount }).map((_, index) => (
      <Star
        key={index}
        size={Math.random() * 5 + 1} // Random size between 2 and 5
        color={`var(--accent-${
          ['pink', 'blue', 'cyan', 'navy', 'yellow'][
            Math.floor(Math.random() * 5)
          ]
        })`} // Random color
        top={`${Math.random() * 100}%`} // Random top position
        left={`${Math.random() * 100}%`} // Random left position
        animate={Math.random() < 0.3} // 30% chance to animate
        pulse={Math.random() < 0.5}
        float={Math.random() < 0.1}
      />
    ))

    setStars(generatedStars)
  }, [id])

  return stars
}

export default useStars
