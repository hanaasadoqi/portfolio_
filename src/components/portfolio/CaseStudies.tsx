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
  title: 'Generafi — Rebuilding accounting & payroll for modern Moroccan businesses',
  subtitle: 'A rebuild of a legacy product into a multi-tenant SaaS with a compliance-first architecture',
  status: 'Active rebuild — architecture in progress',
  statusVariant: 'in-progress' as StatusVariant,
  problem:
    'The existing product is a legacy DOS-era system that Moroccan SMBs still rely on for payroll and accounting. It works, but it\'s brittle, hard to maintain, and difficult to extend. There\'s no multi-tenancy, no audit trail, no real permissions model, and no path to compliance with evolving Moroccan tax and social contribution requirements (CNSS, IR, IS).',
  solution:
    'Rebuilding the system from scratch as a modern multi-tenant SaaS. The goal is not to add features — it\'s to get the foundations right: data isolation, versioned payroll rules, a permissions model that reflects real org structures, audit logs that are useful rather than decorative, and PDF exports that match what Moroccan accountants actually need.',
  role:
    'Solo product architect and engineer. Responsible for all decisions: data modeling, RBAC design, payroll rule engine, compliance workflows, UI, and infrastructure.',
  challenges: [
    'Multi-tenant data isolation with per-tenant configuration and compliance boundaries',
    'Payroll rule versioning — rules change, but past calculations need to stay correct',
    'CNSS, IR, and IS compliance workflows that are part of the product, not bolted on',
    'Audit logs as a first-class concern, not an afterthought',
    'Designing for regulations that are still evolving',
  ],
  techStack: ['Rails API', 'React + TypeScript', 'PostgreSQL', 'Multi-tenancy', 'RBAC', 'PDF generation'],
  learnings: [
    'Compliance has to be in the data model, not the UI layer',
    'Audit logs earn trust — they also make debugging and disputes much easier',
    'Permissions shape how users think about data. Getting them wrong early is expensive to fix',
  ],
}

const studies: CaseStudy[] = [
  {
    title: 'Synapcity — Team knowledge & workflow platform',
    status: 'Early validation',
    statusVariant: 'concept',
    problem:
      'Teams accumulate knowledge but lose access to it. Decisions get buried in Slack, context lives in people\'s heads, and new contributors spend weeks reconstructing what already exists. The tools teams use don\'t talk to each other in any meaningful way.',
    role:
      'Product and engineering lead. Focused on scoping the core knowledge model, validating the problem before building, and thinking through permissions, search, and collaboration architecture.',
    focus: ['Knowledge structure', 'Collaboration', 'Permissions', 'Search & discovery', 'Team workflows', 'Reducing information sprawl'],
    proof: 'Not launched. The current focus is on product thinking, architecture decisions, and validating whether the core problem is worth solving.',
    ctaLabel: 'View notes',
    ctaHref: '#',
  },
  {
    title: 'Blog — Custom MDX publishing site',
    status: 'Live',
    statusVariant: 'shipped',
    problem:
      'The original portfolio had a blog section, but it was tightly coupled to the site. I wanted a dedicated writing space with more control over how content is presented — custom components, interactive elements, annotated code, and flashcard-style learning blocks.',
    role:
      'Full-stack. Designed the content model, built custom MDX components, and separated the blog into its own deployable at blog.hanaasadoqi.dev.',
    focus: ['Next.js 16', 'MDX', 'Custom components', 'Content modeling', 'TypeScript'],
    proof: 'The blog itself is the artifact — a system that gives me full control over how I write and teach.',
    ctaLabel: 'blog.hanaasadoqi.dev',
    ctaHref: 'https://blog.hanaasadoqi.dev',
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
      className="border-t py-32"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-20">
          <h2
            id="case-studies-heading"
            className="mb-3 text-3xl font-bold tracking-tight"
            style={{ color: 'var(--fg)' }}
          >
            Projects
          </h2>
          <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
            Some in active development, some still being validated. None of these are inflated.
          </p>
        </div>

        {/* Featured Project */}
        <article
          className="mb-32 flex flex-col rounded-lg border p-8 md:p-12"
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

        {/* Other Projects */}
        <div className="mb-8">
          <h3 className="mb-6 text-lg font-bold" style={{ color: 'var(--fg)' }}>
            Other projects
          </h3>
        </div>

        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex gap-6 min-w-min">
            {studies.map((study, idx) => {
              const style = statusStyles[study.statusVariant]
              const isGenerafi = idx === 0
              return (
                <article
                  key={study.title}
                  className="flex flex-col rounded-lg border p-6 flex-shrink-0"
                  style={{
                    width: isGenerafi ? '320px' : '280px',
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}
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
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid gap-6 md:grid-cols-2">
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
