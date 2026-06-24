const facts = [
  { value: '5+', label: 'years building products that people actually use' },
  { value: '40+', label: 'engineers I\'ve taught to ship full-stack code' },
  { value: '2', label: 'SaaS platforms architected end-to-end' },
  { value: 'React to SQL', label: 'I own the entire stack' },
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
