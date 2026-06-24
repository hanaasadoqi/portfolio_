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

const featured = {
  title: 'Generafi — Rebuilding Accounting & Payroll for Modern SaaS',
  subtitle: 'Multi-tenant platform for Moroccan SMB payroll, accounting, and compliance',
  status: 'Architecture demo in progress',
  statusVariant: 'in-progress' as StatusVariant,
  problem:
    'Moroccan SMBs rely on spreadsheets and legacy DOS software for payroll and accounting. They need modern, compliant SaaS that understands local tax regulations (CNSS, withholding, social contributions) without requiring an accountant.',
  solution:
    'Rebuilding a legacy accounting system as a modern multi-tenant SaaS platform. Focus on compliance-first architecture, user-friendly workflows, audit trails, and PDF reporting that actually works for how Moroccan businesses operate.',
  role:
    'Solo product architect and engineer. Responsible for all technical decisions: data modeling, RBAC design, compliance workflows, UI/UX, and infrastructure.',
  challenges: [
    'Multi-tenant data isolation with strict compliance requirements',
    'Payroll rule versioning and recalculation engine for retroactive changes',
    'CNSS/tax compliance workflows embedded in product UX',
    'Audit logs as a first-class architectural concern',
    'Building for regulations that are still evolving',
  ],
  techStack: ['Rails', 'React + TypeScript', 'PostgreSQL', 'Multi-tenancy patterns', 'Stripe billing'],
  learnings: [
    'Regulated industries require compliance to be baked into architecture, not bolted on',
    'Good audit logs save debugging, compliance audits, and customer disputes',
    'Permission models drive how users think about data safety',
  ],
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
  const featuredStyle = statusStyles[featured.statusVariant]
  
  return (
    <section
      id="projects"
      className="border-t py-24"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="case-studies-heading"
          className="mb-1 text-2xl font-bold tracking-tight"
          style={{ color: 'var(--fg)' }}
        >
          Projects
        </h2>
        <p className="mb-16 text-sm" style={{ color: 'var(--fg-muted)' }}>
          Some shipped, some in progress, some still just a good idea.
        </p>

        {/* Featured Project */}
        <article
          className="mb-20 flex flex-col rounded-lg border p-8"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <span
            className="mb-4 inline-flex w-fit rounded px-2 py-0.5 text-xs font-semibold"
            style={{ backgroundColor: featuredStyle.bg, color: featuredStyle.color }}
          >
            {featured.status}
          </span>

          <h3
            className="mb-1 text-2xl font-bold leading-tight"
            style={{ color: 'var(--fg)' }}
          >
            {featured.title}
          </h3>
          <p className="mb-6 text-sm" style={{ color: 'var(--fg-muted)' }}>
            {featured.subtitle}
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-subtle)' }}>
                The problem
              </h4>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--fg-muted)' }}>
                {featured.problem}
              </p>

              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-subtle)' }}>
                The solution
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                {featured.solution}
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-subtle)' }}>
                Key challenges
              </h4>
              <ul className="mb-6 space-y-1.5 text-sm" style={{ color: 'var(--fg-muted)' }}>
                {featured.challenges.map(challenge => (
                  <li key={challenge} className="flex items-start gap-2">
                    <span style={{ color: 'var(--accent)' }} className="mt-1 font-bold">
                      •
                    </span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-subtle)' }}>
                Tech stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {featured.techStack.map(tech => (
                  <span
                    key={tech}
                    className="rounded px-2 py-0.5 text-xs"
                    style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-fg)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t mt-6 pt-6" style={{ borderColor: 'var(--border)' }}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-subtle)' }}>
              Key learnings
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--fg-muted)' }}>
              {featured.learnings.map(learning => (
                <li key={learning} className="flex items-start gap-2">
                  <span style={{ color: 'var(--accent)' }} className="mt-1 font-bold">
                    →
                  </span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Other Projects Grid */}
        <h3 className="mb-6 text-lg font-bold" style={{ color: 'var(--fg)' }}>
          Other projects
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {studies.map(study => {
            const style = statusStyles[study.statusVariant]
            return (
              <article
                key={study.title}
                className="flex flex-col rounded-lg border p-6"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <span
                  className="mb-3 inline-flex w-fit rounded px-2 py-0.5 text-xs font-semibold"
                  style={{ backgroundColor: style.bg, color: style.color }}
                >
                  {study.status}
                </span>

                <h4 className="mb-3 text-base font-semibold" style={{ color: 'var(--fg)' }}>
                  {study.title}
                </h4>

                <div className="mb-3">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-subtle)' }}>
                    Problem
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                    {study.problem}
                  </p>
                </div>

                <div className="mb-3">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-subtle)' }}>
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
