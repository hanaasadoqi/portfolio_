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

export default function ImpactBand() {
  return (
    <section
      aria-label="Technologies I work with"
      className="border-y"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
    >
      <div className="py-6">
        <p
          className="mb-5 text-center text-xs font-semibold uppercase tracking-widest"
          style={{ color: 'var(--fg-subtle)' }}
        >
          Tools I&apos;ve shipped with
        </p>

        {/* Marquee track */}
        <div className="marquee-container overflow-hidden">
          <div className="marquee-track flex gap-10">
            {/* Render twice for seamless loop */}
            {[...techs, ...techs].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex flex-col items-center gap-2 min-w-fit"
                style={{ opacity: 0.6 }}
              >
                <img
                  src={`/icons/${tech.icon}`}
                  alt={tech.name}
                  className="h-9 w-9 object-contain"
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
      </div>
    </section>
  )
}
