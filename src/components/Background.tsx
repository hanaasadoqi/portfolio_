'use client'
import React from 'react'
import useStars from '@/hooks/useStars'

const Background: React.FC<{ children: React.ReactNode, id?: string }> = ({ children, id }) => {
  const stars = useStars(id || 'app-wide')

  return (
    <div data-id={id} id={id} className="relative min-h-screen bg-app-gradient-light bg-cover dark:bg-app-gradient-dark">
      <div className="pointer-events-none absolute opacity-85 inset-0 overflow-hidden">
        {stars}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default Background
