const systemCards = [
  {
    title: 'Model the real workflow first',
    description:
      'Before writing code, understand the actual process — who does what, in what order, under what conditions. Software that ignores real workflow creates workarounds.',
    businessContext: 'The most common reason internal tools fail is that they model the ideal, not the real.',
  },
  {
    title: 'Permissions are product decisions',
    description:
      'Who can see and do what is not a security checkbox — it shapes how users understand the system. Design it early, in the data model, not the UI layer.',
    businessContext: 'Retrofitting permissions onto existing data is expensive and brittle.',
  },
  {
    title: 'Reliability is a user experience',
    description:
      'A system that is technically correct but unreliable erodes trust fast. Consistency, predictable behavior, and graceful failure are features, not extras.',
    businessContext: 'Users stop using tools they can\'t trust, even if the alternative is worse.',
  },
  {
    title: 'Edge cases reveal the system',
    description:
      'The weird cases — partial failures, concurrent edits, retroactive corrections — tell you whether your model is actually right. Don\'t defer them.',
    businessContext: 'Edge cases in production are expensive. Edge cases in design are just thinking.',
  },
  {
    title: 'Internal tools deserve care',
    description:
      'Internal tools that save hours every day have compounding value. They don\'t need a beautiful interface, but they need to be trustworthy and maintainable.',
    businessContext: 'The line between "internal tool" and "core product" is thinner than people admit.',
  },
  {
    title: 'Auditability creates trust',
    description:
      'Knowing who changed what, when, and why is useful for debugging, compliance, and customer conversations. Build it in from the start.',
    businessContext: 'You will always need this eventually. Adding it retroactively is much harder.',
  },
  {
    title: 'Documentation is part of the product',
    description:
      'Decision records, API docs, and runbooks are not optional polish. They reduce onboarding time, prevent mistakes, and keep context alive as teams grow.',
    businessContext: 'Institutional knowledge that lives only in people\'s heads is a liability.',
  },
  {
    title: 'Ship useful before perfect',
    description:
      'A working system that solves the real problem is more valuable than an elegant system that solves a theoretical one. Iterate on real feedback.',
    businessContext: 'Knowing when to stop building is as important as knowing what to build.',
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
            Things I keep coming back to — not rules, just patterns that tend to matter.
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
