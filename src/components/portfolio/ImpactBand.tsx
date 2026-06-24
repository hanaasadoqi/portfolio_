const facts = [
  { value: '3', label: 'production teams supported with internal tooling at Stitch Fix' },
  { value: '1000+', label: 'daily active users across internal systems I maintained' },
  { value: '40+', label: 'engineers mentored through full-stack curriculum' },
  { value: '2', label: 'SaaS platforms designed and built end-to-end (Synapcity, Generafi)' },
]

export default function ImpactBand() {
  return (
    <section
      aria-label="Quick facts"
      className="border-y"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
    >
      <div className="mx-auto max-w-3xl px-6 py-10">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(item => (
            <div key={item.value}>
              <dt
                className="text-xl font-bold tracking-tight"
                style={{ color: 'var(--fg)' }}
              >
                {item.value}
              </dt>
              <dd
                className="mt-1 text-sm leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
