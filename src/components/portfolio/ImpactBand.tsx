const facts = [
  { value: '5+', label: 'years shipping production software across internal systems and consumer platforms' },
  { value: '40+', label: 'engineers mentored through full-stack curriculum at Flatiron School' },
  { value: '2', label: 'SaaS products designed and architected end-to-end from scratch' },
  { value: 'Multi-tenant', label: 'permissions, workflows, and operational reliability' },
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
