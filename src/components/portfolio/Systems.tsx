const systemCards = [
  {
    title: 'Multi-Tenancy',
    description:
      'Row-level isolation strategies, per-tenant configuration, and shared schema vs. schema-per-tenant tradeoffs for SaaS data models.',
    businessContext: 'Enables one codebase to serve many customers with clean data separation.',
  },
  {
    title: 'RBAC & Authorization',
    description:
      'Role-based access control with policy layers, permission inheritance, and audit-safe enforcement across API boundaries.',
    businessContext: 'Reduces security risk and lets teams control who can see and do what.',
  },
  {
    title: 'Audit Logs',
    description:
      'Immutable event logs capturing who changed what and when, designed for compliance, debugging, and operational transparency.',
    businessContext: 'Critical for regulated industries and internal accountability.',
  },
  {
    title: 'Payroll Rule Versioning',
    description:
      'Versioned business rules for payroll calculations, allowing retroactive corrections and regulatory changes without breaking existing records.',
    businessContext: 'Payroll rules change — the system needs to track which rules applied to which period.',
  },
  {
    title: 'Internal Tooling',
    description:
      'Scoped, maintainable admin interfaces and operational tools that reduce manual work without the overhead of a product-grade UX.',
    businessContext: 'Internal tools that save hundreds of hours/month have compounding ROI.',
  },
  {
    title: 'Workflow Automation',
    description:
      'Event-driven workflows, background job patterns, and state machines for complex multi-step business processes.',
    businessContext: 'Automates repetitive coordination work that otherwise falls on humans.',
  },
  {
    title: 'Documentation-Driven Development',
    description:
      'Writing decision records, runbooks, and API documentation as part of the development process — not as an afterthought.',
    businessContext: 'Reduces onboarding time and preserves institutional knowledge as teams grow.',
  },
  {
    title: 'Product Tradeoffs',
    description:
      'Framing technical decisions in terms of business risk, delivery speed, and maintainability. Knowing when not to build is as important as knowing how.',
    businessContext: 'Senior engineers help teams avoid over-engineering and premature optimization.',
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
        <div className="mb-12 flex flex-col gap-2">
          <h2
            id="systems-heading"
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: 'var(--fg-subtle)' }}
          >
            Architecture & Systems Thinking
          </h2>
          <p className="max-w-xl text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            How I connect technical decisions to the business problems they solve.
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
