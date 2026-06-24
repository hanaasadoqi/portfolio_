'use client'

import { useEffect, useRef } from 'react'

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
  { name: 'Stripe', icon: 'stripe.svg' },
  { name: 'Supabase', icon: 'supabase.svg' },
  { name: 'Redis', icon: 'redis.svg' },
  { name: 'AWS', icon: 'aws.svg' },
  { name: 'MongoDB', icon: 'mongodb.svg' },
]

export default function ImpactBand() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let animationFrameId: number
    let scrollAmount = 0

    const animate = () => {
      scrollAmount += 1
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0
      }
      container.scrollLeft = scrollAmount
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  // Duplicate techs for seamless loop
  const loopedTechs = [...techs, ...techs]

  return (
    <section
      aria-label="Tech stack"
      className="border-y"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
    >
      <div className="py-8 overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 px-6 overflow-x-hidden scroll-smooth"
          style={{ scrollBehavior: 'auto' }}
        >
          {loopedTechs.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex flex-col items-center gap-2 min-w-fit opacity-75 hover:opacity-100 transition-opacity"
              title={tech.name}
            >
              <img
                src={`/icons/${tech.icon}`}
                alt={tech.name}
                className="h-10 w-10 object-contain"
              />
              <span
                className="text-xs font-medium text-center whitespace-nowrap"
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
