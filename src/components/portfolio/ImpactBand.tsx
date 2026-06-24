const metrics = [
  {
    stat: '300+ hrs/mo',
    description: 'Merchandising workflow effort reduced at Stitch Fix',
  },
  {
    stat: '4 teams',
    description: 'Cross-functional delivery across Product, Merchandising, IT, and Engineering',
  },
  {
    stat: '40+ engineers',
    description: 'Mentored through full-stack projects as Cohort Lead at Flatiron School',
  },
  {
    stat: 'Rails + React',
    description: 'Full-stack internal tooling shipped end-to-end in production',
  },
]

export default function ImpactBand() {
  return (
    <section
      aria-label="Impact metrics"
      className="border-y"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
    >
      <div className="mx-auto max-w-5xl px-6 py-12">
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(item => (
            <div key={item.stat}>
              <dt
                className="text-2xl font-bold tracking-tight"
                style={{ color: 'var(--fg)', fontFamily: 'var(--font-inter)' }}
              >
                {item.stat}
              </dt>
              <dd
                className="mt-1 text-sm leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
