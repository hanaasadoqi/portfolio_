'use client'

import { useState, useEffect } from 'react'

const techs = [
  { name: 'React', icon: 'react.svg' },
  { name: 'TypeScript', icon: 'typescript.svg' },
  { name: 'Next.js', icon: 'nextjs.svg' },
  { name: 'Node.js', icon: 'nodejs.svg' },
  { name: 'PostgreSQL', icon: 'postgresql.svg' },
  { name: 'Rails', icon: 'rubyonrails.svg' },
  { name: 'GraphQL', icon: 'graphql.svg' },
  { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
  { name: 'Docker', icon: 'docker.svg' },
  { name: 'Git', icon: 'git.svg' },
]

export default function ImpactBand() {
  const [rotatedTechs, setRotatedTechs] = useState(techs)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatedTechs(prev => [...prev.slice(1), prev[0]])
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      aria-label="Tech stack"
      className="border-y"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
    >
      <div className="mx-auto max-w-3xl px-6 py-12">
        <p
          className="mb-6 text-center text-sm font-medium"
          style={{ color: 'var(--fg-muted)' }}
        >
          I work with
        </p>
        <div className="flex gap-6 justify-center items-center overflow-x-auto pb-2">
          {rotatedTechs.slice(0, 6).map(tech => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 min-w-fit opacity-75 hover:opacity-100 transition-opacity"
              title={tech.name}
            >
              <img
                src={`/icons/${tech.icon}`}
                alt={tech.name}
                className="h-8 w-8 object-contain"
              />
              <span
                className="text-xs font-medium text-center"
                style={{ color: 'var(--fg-muted)' }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
