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
  title: 'Generafi — Rebuilding Accounting & Payroll for Modern Moroccan Businesses',
  subtitle: 'A rebuild of a legacy Moroccan accounting/payroll product into a modern multi-tenant SaaS',
  status: 'Rebuild in progress',
  statusVariant: 'in-progress' as StatusVariant,
  problem:
    'Moroccan SMBs are trapped between legacy DOS software and spreadsheets. They lack a modern SaaS platform that understands local payroll rules (CNSS, social contributions, tax withholding), requires no accounting background, and can audit every change.',
  solution:
    'A complete rebuild of the legacy system as modern, multi-tenant SaaS. Focus: payroll rules engine, audit trails, permissions that enforce policy, PDF exports that work, and operational workflows that match how businesses actually operate.',
  role:
    'Solo product architect and engineer. Responsible for all technical decisions: data model, multi-tenancy, RBAC, compliance workflows, rule versioning, audit design, and infrastructure.',
  challenges: [
    'Multi-tenant architecture with per-tenant data isolation and strict compliance requirements',
    'Payroll rule versioning and retroactive recalculation engine for legal corrections',
    'Embedding CNSS/tax compliance workflows into product UX, not as an afterthought',
    'Audit trails as a first-class architectural concern, not a feature add-on',
    'Designing for regulations that evolve—systems must handle retroactive changes',
  ],
  techStack: ['Rails', 'React + TypeScript', 'PostgreSQL', 'Multi-tenancy', 'Audit patterns'],
  learnings: [
    'Regulated industries need compliance baked into architecture, not bolted on later',
    'Good audit logs save debugging, compliance work, and customer disputes—they pay for themselves',
    'Permissions are product decisions: they shape how users think about data safety',
  ],
}

const studies: CaseStudy[] = [
  {
    title: 'Blog — Custom MDX Site',
    status: 'Live project',
    statusVariant: 'shipped',
    problem:
      'My original portfolio had a blog, but it was tangled with the site. I wanted to build a separate blog experience with custom MDX components and better content ergonomics.',
    role:
      'Full-stack engineer. Designed the content model, built custom MDX components, and implemented a clean separation between the portfolio and blog.',
    focus: ['Next.js 16', 'MDX', 'TypeScript', 'Custom components', 'Content strategy'],
    proof: 'Demonstrates full-stack thinking: from content modeling to component design to deployment.',
    ctaLabel: 'View blog at blog.hanaasadoqi.dev',
    ctaHref: 'https://blog.hanaasadoqi.dev',
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
