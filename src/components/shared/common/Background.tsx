'use client'

import React from 'react'
import useStars from '@/hooks/useStars'
import clsx from 'clsx'

const Background: React.FC<{ children: React.ReactNode, id?: string }> = ({ children, id = "app-wide" }) => {
  const numOfStars = id ? 300 : undefined
  const stars = useStars(id || 'app-wide', numOfStars)

  return (
    <div data-id={id} id={id} className={clsx("relative min-h-screen bg-cover", {
      "dark:bg-app-gradient-dark bg-app-gradient-light": id === 'app-wide',
      "dark:from-primary-900 dark:to-secondary-800 from-primary-300 to-secondary-300": id === "writing",
      "bg-projects-gradient dark:bg-projects-gradient-dark": id === "projects",
      "bg-skills-gradient dark:bg-skills-gradient-dark": id === "skills"
    })}>
      <div className="pointer-events-none absolute opacity-85 inset-0 overflow-hidden">
        {stars}
      </div>
      <div data-id={id} className="relative z-10">{children}</div>
    </div>
  )
}

export default Background
