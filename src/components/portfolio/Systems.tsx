const systemCards = [
  {
    title: 'Data isolation at scale',
    description:
      'When one codebase serves many customers, data safety is foundational. Schema design, row-level filtering, and tenant context matter.',
    businessContext: 'Trust breaks if data bleeds between customers.',
  },
  {
    title: 'Permissions as architecture',
    description:
      'Who can see and do what should be clear in your data model, not bolted on later. Permissions shape how users think about data.',
    businessContext: 'Bad permission design leads to security incidents and customer frustration.',
  },
  {
    title: 'Traceability by design',
    description:
      'Audit logs aren\'t compliance theater. They answer: who changed this, when, and why? Build them in from the start.',
    businessContext: 'Saves debugging, answers customer questions, and satisfies audits.',
  },
  {
    title: 'Rules that change',
    description:
      'Business rules evolve: tax rates, payroll regulations, compliance requirements. Your system needs to remember which rules applied when.',
    businessContext: 'Retroactive corrections should be possible, not a disaster.',
  },
  {
    title: 'Operational leverage',
    description:
      'Internal tools that save teams hours every day compound. They\'re not "tech debt" — they\'re revenue multipliers.',
    businessContext: 'A well-built internal tool is arguably more valuable than a product.',
  },
  {
    title: 'Automation, not magic',
    description:
      'Workflows and background jobs should be understandable. State machines and event logs make complex processes inspectable.',
    businessContext: 'When things go wrong, you need to know why. Invisible automation is a liability.',
  },
  {
    title: 'Write once, read always',
    description:
      'Architecture decisions and trade-offs should be written down. New engineers, future you, and customers all benefit.',
    businessContext: 'Institutional knowledge shouldn\'t depend on who\'s in the Slack.',
  },
  {
    title: 'Ship > perfect',
    description:
      'Fast iteration beats extensive planning. User feedback changes everything. But don\'t skip the thinking.',
    businessContext: 'Knowing when to say no is as important as knowing what to build.',
  },
]

export default function Systems() {
  return (
    <section
      id="systems"
      className="border-t py-20"
      style={{ borderColor: 'var(--border)' }}
      aria-labelledby="systems-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 flex flex-col gap-2">
          <h2
            id="systems-heading"
            className="mb-1 text-3xl font-bold tracking-tight"
            style={{ color: 'var(--fg)' }}
          >
            How I think about systems
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            The patterns I reach for and why — not as doctrine, but as a starting point.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t" style={{ borderColor: 'var(--border)' }}>
          {systemCards.map(card => (
            <article
              key={card.title}
              className="border-b border-r p-6"
              style={{ borderColor: 'var(--border)' }}
            >
              <h3
                className="mb-2 text-sm font-semibold"
                style={{ color: 'var(--fg)' }}
              >
                {card.title}
              </h3>
              <p
                className="mb-3 text-sm leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {card.description}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--fg-subtle)' }}
              >
                {card.businessContext}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
