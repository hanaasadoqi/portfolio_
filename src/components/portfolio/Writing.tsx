type ArticleStatus = 'Published' | 'Draft' | 'Planned'

interface Article {
  title: string
  summary: string
  tags: string[]
  status: ArticleStatus
  href: string
}

const articles: Article[] = [
  {
    title: 'Designing Multi-Tenant SaaS for Moroccan Payroll',
    summary:
      'How I approached data isolation, per-tenant configuration, and compliance boundaries for a payroll system operating under Moroccan labor law.',
    tags: ['Architecture', 'Multi-tenancy', 'Payroll', 'SaaS'],
    status: 'Draft',
    href: '#',
  },
  {
    title: 'Why Real-Time Collaboration Is Not the MVP for Synapcity',
    summary:
      'A case for constraint-driven product thinking: why we deliberately excluded real-time features and what that decision unlocks for early validation.',
    tags: ['Product Thinking', 'Architecture', 'Scoping'],
    status: 'Planned',
    href: '#',
  },
  {
    title: 'Building Internal Tools That Save Operational Time',
    summary:
      'Lessons from shipping full-stack internal tooling at Stitch Fix — what makes internal tools succeed and what kills them.',
    tags: ['Internal Tools', 'Rails', 'React', 'Lessons Learned'],
    status: 'Draft',
    href: '#',
  },
  {
    title: 'Modeling Payroll Rules with Versioned Business Logic',
    summary:
      'A technical deep dive into versioning domain rules so that payroll calculations remain correct across regulatory changes and retroactive corrections.',
    tags: ['Domain Modeling', 'Versioning', 'Payroll', 'SQL'],
    status: 'Planned',
    href: '#',
  },
  {
    title: 'Lessons from Repositioning a Developer Portfolio for Senior Roles',
    summary:
      'What changes when you stop optimizing for "showing everything" and start optimizing for credibility, clarity, and hiring signal.',
    tags: ['Career', 'Portfolio', 'Senior SWE'],
    status: 'Planned',
    href: '#',
  },
]

const statusColor: Record<ArticleStatus, string> = {
  Published: '#4ade80',
  Draft: '#93c5fd',
  Planned: '#a8a29e',
}

export default function Writing() {
  return (
    <section
      id="writing"
      className="border-t py-20"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
      aria-labelledby="writing-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="writing-heading"
          className="mb-1 text-2xl font-bold tracking-tight"
          style={{ color: 'var(--fg)' }}
        >
          Things I&apos;m writing about
        </h2>
        <p className="mb-12 text-sm" style={{ color: 'var(--fg-muted)' }}>
          Mostly architecture decisions, hard lessons, and stuff I couldn&apos;t find written down anywhere else.
        </p>

        <div className="space-y-0">
          {articles.map(article => (
            <article
              key={article.title}
              className="group grid grid-cols-1 gap-4 border-t py-8 md:grid-cols-[120px_1fr]"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Status */}
              <div className="flex items-start pt-0.5">
                <span
                  className="text-xs font-semibold"
                  style={{ color: statusColor[article.status] }}
                >
                  {article.status}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3
                  className="mb-2 text-sm font-semibold leading-snug"
                  style={{ color: 'var(--fg)' }}
                >
                  {article.title}
                </h3>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {article.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded px-2 py-0.5 text-xs"
                      style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-fg)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
