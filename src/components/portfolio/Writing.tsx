'use client'

import { useState } from 'react'

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
    title: 'Why I Removed Real-Time Collaboration From Synapcity',
    summary:
      'Constraint-driven product thinking: why deliberately excluding real-time features made early validation much easier, and what that decision cost.',
    tags: ['Product Thinking', 'Architecture', 'Scoping'],
    status: 'Planned',
    href: '#',
  },
  {
    title: 'Accountants Don\'t Think About Permissions the Way Developers Do',
    summary:
      'Building Generafi forced me to rethink how role-based access control maps to real accounting workflows — and why the standard dev mental model breaks down fast.',
    tags: ['Permissions', 'RBAC', 'Product', 'Payroll'],
    status: 'Draft',
    href: '#',
  },
  {
    title: 'What Designing Building Systems Taught Me About Software',
    summary:
      'Before code I designed HVAC and plumbing systems. The problems are different, but coordination under constraints, edge cases, and the cost of late changes look almost identical.',
    tags: ['Systems Thinking', 'Career', 'Engineering'],
    status: 'Draft',
    href: '#',
  },
  {
    title: 'Why Every Workflow Eventually Turns Into a State Machine',
    summary:
      'Once you start modeling workflows explicitly — approvals, payroll runs, onboarding sequences — the state machine pattern shows up everywhere. Here\'s why that\'s actually useful.',
    tags: ['Architecture', 'Domain Modeling', 'Workflows'],
    status: 'Planned',
    href: '#',
  },
  {
    title: 'The Problem With Generic SaaS Permissions Models',
    summary:
      'Most permissions models are designed for the tool that ships them, not the business that uses them. A look at where they break down and what a domain-aware model looks like instead.',
    tags: ['Permissions', 'SaaS', 'Architecture'],
    status: 'Planned',
    href: '#',
  },
]

const MOBILE_INITIAL = 3

const statusColor: Record<ArticleStatus, string> = {
  Published: '#4ade80',
  Draft:     '#93c5fd',
  Planned:   '#a8a29e',
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <article
      className="group grid grid-cols-1 gap-3 border-t py-8 md:grid-cols-[100px_1fr] md:gap-6 md:py-10"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="flex items-start pt-0.5">
        <span className="text-xs font-semibold" style={{ color: statusColor[article.status] }}>
          {article.status}
        </span>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold leading-snug" style={{ color: 'var(--fg)' }}>
          {article.href !== '#' ? (
            <a href={article.href} className="hover:underline underline-offset-2">
              {article.title}
            </a>
          ) : (
            article.title
          )}
        </h3>
        <p className="mb-3 text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
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
  )
}

export default function Writing() {
  const [showAll, setShowAll] = useState(false)

  const mobileVisible = showAll ? articles : articles.slice(0, MOBILE_INITIAL)
  const remaining = articles.length - MOBILE_INITIAL

  return (
    <section
      id="writing"
      className="border-t py-24 md:py-32"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
      aria-labelledby="writing-heading"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 md:mb-20">
          <h2
            id="writing-heading"
            className="mb-3 text-3xl font-bold tracking-tight"
            style={{ color: 'var(--fg)' }}
          >
            Things I&apos;m writing about
          </h2>
          <p className="text-base" style={{ color: 'var(--fg-muted)' }}>
            Architecture decisions, trade-offs I had to think through, things I wanted written down somewhere.
          </p>
        </div>

        {/* Mobile: paginated list */}
        <div className="md:hidden">
          <div className="space-y-0">
            {mobileVisible.map(article => (
              <ArticleRow key={article.title} article={article} />
            ))}
          </div>
          {!showAll && remaining > 0 && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-8 w-full rounded-md border py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)', backgroundColor: 'var(--bg-card)' }}
            >
              Show {remaining} more
            </button>
          )}
          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-8 w-full rounded-md border py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)', backgroundColor: 'var(--bg-card)' }}
            >
              Show less
            </button>
          )}
        </div>

        {/* Desktop: full list always visible */}
        <div className="hidden md:block space-y-0">
          {articles.map(article => (
            <ArticleRow key={article.title} article={article} />
          ))}
        </div>

      </div>
    </section>
  )
}
