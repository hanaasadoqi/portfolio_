'use client'

import { useState } from 'react'
import './marquee.css'

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
  { name: 'Ruby', icon: 'ruby.svg' },
]

interface ImpactBandProps {
  showMarqueeOnly?: boolean
}

export default function ImpactBand({ showMarqueeOnly = false }: ImpactBandProps) {
  const [failedIcons, setFailedIcons] = useState<Set<string>>(new Set())

  const handleImageError = (name: string) => {
    setFailedIcons(prev => new Set(prev).add(name))
  }

  const filteredTechs = techs.filter(tech => !failedIcons.has(tech.name))

  const Marquee = () => (
    <div className="marquee-container overflow-hidden">
      <div className="marquee-track flex gap-10">
        {/* Render twice for seamless loop */}
        {[...filteredTechs, ...filteredTechs].map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex flex-col items-center gap-2 min-w-fit"
            style={{ opacity: 0.4 }}
          >
            <img
              src={`/icons/${tech.icon}`}
              alt={tech.name}
              className="h-9 w-9 object-contain"
              style={{ filter: 'invert(var(--icon-filter, 0%)) brightness(var(--icon-brightness, 1))' }}
              onError={() => handleImageError(tech.name)}
            />
            <span
              className="text-xs font-medium whitespace-nowrap"
              style={{ color: 'var(--fg-muted)' }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

  if (showMarqueeOnly) {
    return (
      <div className="py-5">
        <Marquee />
      </div>
    )
  }

  return (
    <section
      aria-label="Technologies I work with"
      className="border-y"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
    >
      <div className="py-6">
        <Marquee />
      </div>
    </section>
  )
}
