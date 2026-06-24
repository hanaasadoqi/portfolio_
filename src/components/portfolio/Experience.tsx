const roles = [
  {
    company: 'Stitch Fix',
    title: 'Software Engineer II',
    period: '2021 — 2023',
    tags: ['Rails', 'React', 'TypeScript', 'SQL', 'Internal Tools'],
    bullets: [
      'Built and maintained full-stack internal tooling that reduced merchandising workflow effort by 300+ hours/month.',
      'Owned features end-to-end: scoping, implementation, QA, and documentation across multiple product areas.',
      'Collaborated cross-functionally with Product, Merchandising, and IT to define requirements and ship at pace.',
      'Improved maintainability through refactoring legacy code and writing engineering documentation.',
    ],
  },
  {
    company: 'SiriusXM / Pandora',
    title: 'Apprentice Software Engineer',
    period: '2020 — 2021',
    tags: ['JavaScript', 'React', 'Node.js', 'REST APIs'],
    bullets: [
      'Contributed to consumer-facing features on Pandora\'s web platform across multiple product teams.',
      'Shipped UI components and bug fixes in a large-scale production React codebase.',
      'Participated in code review, sprint planning, and cross-team technical discussions.',
    ],
  },
  {
    company: 'Flatiron School',
    title: 'Online Cohort Lead',
    period: '2019 — 2020',
    tags: ['Technical Leadership', 'Mentorship', 'Ruby on Rails', 'JavaScript'],
    bullets: [
      'Led a cohort of 40+ engineering students through full-stack curriculum covering Rails, JavaScript, and React.',
      'Provided 1:1 debugging support, code reviews, and technical guidance across projects.',
      'Maintained high student retention and project completion rates through structured accountability.',
    ],
  },
  {
    company: 'WeWork',
    title: 'Software Engineering Coach',
    period: '2018 — 2019',
    tags: ['Coaching', 'Full-Stack', 'Curriculum'],
    bullets: [
      'Coached early-career engineers through full-stack projects and professional development milestones.',
      'Designed and delivered technical workshops on software fundamentals and architecture.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-6 py-20"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="mb-12 text-sm font-semibold uppercase tracking-widest"
        style={{ color: 'var(--fg-subtle)' }}
      >
        Professional Experience
      </h2>

      <div className="space-y-0">
        {roles.map((role, idx) => (
          <article
            key={role.company}
            className="group grid grid-cols-1 gap-4 border-t py-10 md:grid-cols-[180px_1fr]"
            style={{ borderColor: 'var(--border)' }}
          >
            {/* Left: meta */}
            <div className="pt-0.5">
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--fg-subtle)' }}
              >
                {role.period}
              </p>
            </div>

            {/* Right: content */}
            <div>
              <div className="mb-4 flex flex-wrap items-baseline gap-x-3">
                <h3
                  className="text-base font-semibold"
                  style={{ color: 'var(--fg)' }}
                >
                  {role.company}
                </h3>
                <span
                  className="text-sm"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {role.title}
                </span>
              </div>

              <ul className="mb-5 space-y-2">
                {role.bullets.map(bullet => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: 'var(--fg-subtle)' }}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {role.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded px-2 py-0.5 text-xs font-medium"
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
    </section>
  )
}
