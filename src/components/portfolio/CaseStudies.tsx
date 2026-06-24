type StatusVariant = 'shipped' | 'in-progress' | 'concept'

interface CaseStudy {
  title: string
  status: string
  statusVariant: StatusVariant
  problem: string
  role: string
  focus: string[]
  proof: string
  ctaLabel: string
  ctaHref: string
}

const studies: CaseStudy[] = [
  {
    title: 'Stitch Fix — Internal Merchandising Tooling',
    status: 'Shipped professional work',
    statusVariant: 'shipped',
    problem:
      'Merchandising teams relied on manual, error-prone workflows for inventory and product operations. Each task took hours of repetitive effort with no audit trail.',
    role:
      'Full-stack engineer owning feature design, implementation, testing, and documentation across multiple internal tools.',
    focus: ['Rails API', 'React + TypeScript', 'SQL queries', 'Cross-functional delivery', 'Documentation'],
    proof: 'Reduced workflow effort by 300+ hours/month across merchandising operations.',
    ctaLabel: 'View case study',
    ctaHref: '#',
  },
  {
    title: 'Moroccan Accounting & Payroll Platform',
    status: 'Architecture demo in progress',
    statusVariant: 'in-progress',
    problem:
      'Moroccan SMBs lack affordable, compliant payroll and accounting software. Most rely on spreadsheets or expensive legacy tools not built for local regulations.',
    role:
      'Solo architect and engineer. Designing the full system: multi-tenant data model, RBAC, payroll calculation engine, compliance workflows, and audit logs.',
    focus: ['Multi-tenant SaaS', 'RBAC', 'Payroll rule versioning', 'PDF generation', 'Audit logs', 'Compliance'],
    proof: 'Not production-ready. Requires domain and compliance validation. Designed as a portfolio architecture demo.',
    ctaLabel: 'View architecture notes',
    ctaHref: '#',
  },
  {
    title: 'Synapcity — Team Knowledge Platform',
    status: 'Concept validation',
    statusVariant: 'concept',
    problem:
      'Teams lose institutional memory across tools. Decisions, tasks, and context are scattered across Notion, Slack, Jira, and email with no unified structure.',
    role:
      'Product and engineering lead. Scoping the MVP, validating assumptions before building, and documenting architecture decisions.',
    focus: ['Product architecture', 'Workflow design', 'Validation-first scope', 'Knowledge graph', 'Permission model'],
    proof: 'Intentionally not production-ready. Focus is on product thinking, architecture decisions, and validation milestones.',
    ctaLabel: 'View validation notes',
    ctaHref: '#',
  },
]

const statusStyles: Record<StatusVariant, { bg: string; color: string }> = {
  shipped: { bg: '#14532d22', color: '#4ade80' },
  'in-progress': { bg: '#1e3a5f', color: '#93c5fd' },
  concept: { bg: '#1c1917', color: '#a8a29e' },
}

export default function CaseStudies() {
  return (
    <section
      id="projects"
      className="border-t py-20"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2
          id="case-studies-heading"
          className="mb-1 text-2xl font-bold tracking-tight"
          style={{ color: 'var(--fg)' }}
        >
          Projects
        </h2>
        <p className="mb-12 text-sm" style={{ color: 'var(--fg-muted)' }}>
          Some shipped, some in progress, some still just a good idea.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {studies.map(study => {
            const style = statusStyles[study.statusVariant]
            return (
              <article
                key={study.title}
                className="flex flex-col rounded-lg border p-6"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {/* Status badge */}
                <span
                  className="mb-4 inline-flex w-fit rounded px-2 py-0.5 text-xs font-semibold"
                  style={{ backgroundColor: style.bg, color: style.color }}
                >
                  {study.status}
                </span>

                <h3
                  className="mb-3 text-sm font-semibold leading-snug"
                  style={{ color: 'var(--fg)' }}
                >
                  {study.title}
                </h3>

                <div className="mb-3">
                  <p
                    className="mb-1 text-xs font-semibold uppercase tracking-wide"
                    style={{ color: 'var(--fg-subtle)' }}
                  >
                    Problem
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                    {study.problem}
                  </p>
                </div>

                <div className="mb-3">
                  <p
                    className="mb-1 text-xs font-semibold uppercase tracking-wide"
                    style={{ color: 'var(--fg-subtle)' }}
                  >
                    My role
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                    {study.role}
                  </p>
                </div>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {study.focus.map(tag => (
                    <span
                      key={tag}
                      className="rounded px-1.5 py-0.5 text-xs"
                      style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-fg)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  className="mb-5 border-l-2 pl-3 text-xs italic leading-relaxed"
                  style={{ borderColor: 'var(--accent)', color: 'var(--fg-muted)' }}
                >
                  {study.proof}
                </p>

                <div className="mt-auto">
                  <a
                    href={study.ctaHref}
                    className="text-xs font-semibold transition-opacity"
                    style={{ color: 'var(--accent)' }}
                  >
                    {study.ctaLabel} &rarr;
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
