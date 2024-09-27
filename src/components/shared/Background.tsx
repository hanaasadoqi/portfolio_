'use client'

import React from 'react'
import useStars from '@/hooks/useStars'
import clsx from 'clsx'

const Background: React.FC<{ children: React.ReactNode, id?: string }> = ({ children, id = "app-wide" }) => {
  const numOfStars = id ? 500 : undefined
  const stars = useStars(id || 'app-wide', numOfStars)

  return (
    <div data-id={id} id={id} className={clsx("relative min-h-screen bg-cover", {
      "dark:bg-app-gradient-dark bg-app-gradient-light": id === 'app-wide',
      "bg-writing-light dark:bg-writing-dark": id === "writing",
      "bg-projects-light dark:bg-projects-dark": id === "projects"
    })}>
      <div className="pointer-events-none absolute opacity-85 inset-0 overflow-hidden">
        {stars}
      </div>
      <div data-id={id} className="relative z-10">{children}</div>
    </div>
  )
}

export default Background
