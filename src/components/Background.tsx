'use client'
import React from 'react'
import useStars from '@/hooks/useStars' // Ensure this path is correct

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const stars = useStars('app-wide')

  return (
    <div className="relative min-h-screen bg-app-gradient-light bg-cover dark:bg-app-gradient-dark">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {stars}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default Background
