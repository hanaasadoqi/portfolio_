'use client'

import { useState } from 'react'

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
  /** Width class applied to the card in the mobile scroll row */
  mobileWidth: string
}

const featured = {
  title: 'Generafi',
  subtitle: 'Rebuilding accounting and payroll for modern Moroccan businesses',
  status: 'Active rebuild — architecture in progress',
  statusVariant: 'in-progress' as StatusVariant,
  problem:
    "The existing product is a legacy DOS-era system that Moroccan SMBs still rely on for payroll and accounting. It works, but it's brittle, hard to maintain, and difficult to extend. There's no multi-tenancy, no audit trail, no real permissions model, and no path to compliance with evolving Moroccan tax and social contribution requirements (CNSS, IR, IS).",
  solution:
    "Rebuilding the system from scratch as a modern multi-tenant SaaS. The goal is not to add features — it's to get the foundations right: data isolation, versioned payroll rules, a permissions model that reflects real org structures, audit logs that are useful rather than decorative, and PDF exports that match what Moroccan accountants actually need.",
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
    title: 'Synapcity',
    status: 'Early validation',
    statusVariant: 'concept',
    problem:
      "Teams accumulate knowledge but lose access to it. Decisions get buried in Slack, context lives in people's heads, and new contributors spend weeks reconstructing what already exists.",
    role:
      'Product and engineering lead. Focused on scoping the core knowledge model, validating the problem before building, and thinking through permissions, search, and collaboration architecture.',
    focus: ['Knowledge structure', 'Permissions', 'Search & discovery', 'Team workflows'],
    proof: 'Not launched. Currently focused on product thinking, architecture decisions, and problem validation.',
    ctaLabel: 'View notes',
    ctaHref: '#',
    mobileWidth: 'w-[300px]',
  },
  {
    title: 'Blog — Custom MDX site',
    status: 'Live',
    statusVariant: 'shipped',
    problem:
      'The original portfolio had a blog section tightly coupled to the site. I wanted a dedicated writing space with full control over how content is presented.',
    role:
      'Full-stack. Designed the content model, built custom MDX components, and shipped the blog as its own deployable at blog.hanaasadoqi.dev.',
    focus: ['Next.js 16', 'MDX', 'Custom components', 'Content modeling'],
    proof: 'The blog itself is the artifact — a system that gives full control over how I write and teach.',
    ctaLabel: 'blog.hanaasadoqi.dev',
    ctaHref: 'https://blog.hanaasadoqi.dev',
    mobileWidth: 'w-[280px]',
  },
]

const statusStyles: Record<StatusVariant, { bg: string; color: string }> = {
  shipped:      { bg: '#14532d22', color: '#4ade80' },
  'in-progress':{ bg: '#1e3a5f',   color: '#93c5fd' },
  concept:      { bg: '#1c1917',   color: '#a8a29e' },
}

/* ── Shared card ── */
function StudyCard({ study, className = '' }: { study: CaseStudy; className?: string }) {
  const [open, setOpen] = useState(false)
  const style = statusStyles[study.statusVariant]

  return (
    <article
      className={`flex flex-col rounded-lg border p-6 ${className}`}
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <span
        className="mb-3 inline-flex w-fit rounded px-2 py-0.5 text-xs font-semibold"
        style={{ backgroundColor: style.bg, color: style.color }}
      >
        {study.status}
      </span>

      <h4 className="mb-3 text-base font-semibold leading-snug" style={{ color: 'var(--fg)' }}>
        {study.title}
      </h4>

      <p className="mb-4 text-xs leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
        {study.problem}
      </p>

      {/* Expandable details */}
      <div className={open ? 'block' : 'hidden'}>
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
          className="mb-4 border-l-2 pl-3 text-xs italic leading-relaxed"
          style={{ borderColor: 'var(--accent)', color: 'var(--fg-muted)' }}
        >
          {study.proof}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-4">
        <button
          onClick={() => setOpen(o => !o)}
          className="text-xs font-semibold transition-opacity hover:opacity-80"
          style={{ color: 'var(--fg-subtle)' }}
          aria-expanded={open}
        >
          {open ? 'See less' : 'See more'}
        </button>
        <a
          href={study.ctaHref}
          className="ml-auto text-xs font-semibold transition-opacity hover:opacity-80"
          style={{ color: 'var(--accent)' }}
        >
          {study.ctaLabel} &rarr;
        </a>
      </div>
    </article>
  )
}

/* ── Featured project accordion for learnings ── */
function FeaturedLearnings() {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t mt-6 pt-6" style={{ borderColor: 'var(--border)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="mb-3 flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wide"
        style={{ color: 'var(--fg-subtle)' }}
        aria-expanded={open}
      >
        Key learnings
        <span aria-hidden="true" style={{ color: 'var(--fg-subtle)' }}>{open ? '↑' : '↓'}</span>
      </button>
      {open && (
        <ul className="space-y-2 text-sm" style={{ color: 'var(--fg-muted)' }}>
          {featured.learnings.map(learning => (
            <li key={learning} className="flex items-start gap-2">
              <span style={{ color: 'var(--accent)' }} className="mt-0.5 shrink-0">→</span>
              <span>{learning}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function CaseStudies() {
  const featuredStyle = statusStyles[featured.statusVariant]

  return (
    <section
      id="projects"
      className="border-t py-24 md:py-32"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-16 md:mb-20">
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

        {/* ── Featured: Generafi ── */}
        <article
          className="mb-24 md:mb-32 flex flex-col rounded-lg border p-8 md:p-12"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <span
            className="mb-4 inline-flex w-fit rounded px-2 py-0.5 text-xs font-semibold"
            style={{ backgroundColor: featuredStyle.bg, color: featuredStyle.color }}
          >
            {featured.status}
          </span>

          <h3 className="mb-1 text-2xl font-bold leading-tight" style={{ color: 'var(--fg)' }}>
            {featured.title}
          </h3>
          <p className="mb-8 text-sm" style={{ color: 'var(--fg-muted)' }}>
            {featured.subtitle}
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-subtle)' }}>
                The problem
              </h4>
              <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
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
              <ul className="mb-6 space-y-2 text-sm" style={{ color: 'var(--fg-muted)' }}>
                {featured.challenges.map(c => (
                  <li key={c} className="flex items-start gap-2">
                    <span style={{ color: 'var(--accent)' }} className="mt-0.5 shrink-0 font-bold">•</span>
                    <span>{c}</span>
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

          <FeaturedLearnings />
        </article>

        {/* ── Other projects heading ── */}
        <h3 className="mb-6 text-lg font-bold" style={{ color: 'var(--fg)' }}>
          Other projects
        </h3>

        {/* ── Mobile: horizontal snap-scroll row ── */}
        <div
          className="md:hidden relative"
          role="region"
          aria-label="Other projects — scroll horizontally"
        >
          {/* Fade cue — right edge */}
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10"
            style={{ background: 'linear-gradient(to right, transparent, var(--bg) 90%)' }}
            aria-hidden="true"
          />
          <div
            className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {studies.map(study => (
              <div
                key={study.title}
                className={`flex-shrink-0 snap-start ${study.mobileWidth}`}
              >
                <StudyCard study={study} className="h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop: 2-col grid ── */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {studies.map(study => (
            <StudyCard key={study.title} study={study} />
          ))}
        </div>

      </div>
    </section>
  )
}
