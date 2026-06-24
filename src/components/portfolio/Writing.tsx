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
      'A case for constraint-driven product thinking: why we deliberately excluded real-time features and what that decision unlocks for early validation.',
    tags: ['Product Thinking', 'Architecture', 'Scoping'],
    status: 'Draft',
    href: '#',
  },
  {
    title: 'Accountants Don\'t Think About Permissions the Way Developers Do',
    summary:
      'Building Generafi forced me to rethink permissions from first principles. Turns out, the RBAC mental models we inherit from software don\'t map to how businesses actually work.',
    tags: ['Design', 'Permissions', 'User Research'],
    status: 'Planned',
    href: '#',
  },
  {
    title: 'What Designing Building Systems Taught Me About Software',
    summary:
      'Three principles from mechanical engineering that made me a better software engineer: constraints drive clarity, invisible systems are better than visible ones, and the edge cases always matter.',
    tags: ['Architecture', 'Lessons Learned', 'Design'],
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
    title: 'Why Every Workflow Eventually Turns Into a State Machine',
    summary:
      'Once you see it, you can\'t unsee it. Workflows, approval processes, and order management systems are all just state machines in disguise. Understanding that shapes how you build them.',
    tags: ['Architecture', 'Systems Thinking', 'Workflows'],
    status: 'Planned',
    href: '#',
  },
  {
    title: 'The Problem With Generic SaaS Permissions Models',
    summary:
      'Why RBAC is almost always wrong for real operations. What works instead, how to think about permissions as part of your domain model, and why this matters for compliance.',
    tags: ['Permissions', 'SaaS', 'Architecture'],
    status: 'Planned',
    href: '#',
  },
]

const statusColor: Record<ArticleStatus, string> = {
  Published: '#4ade80',
  Draft: '#93c5fd',
  Planned: '#a8a29e',
}

const INITIAL_DISPLAY = 3

export default function Writing() {
  const [showAll, setShowAll] = useState(false)
  const displayedArticles = showAll ? articles : articles.slice(0, INITIAL_DISPLAY)
  const hasMore = articles.length > INITIAL_DISPLAY

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
            Mostly about workflows, systems thinking, permissions, and the details that make software reliable.
          </p>
        </div>

        <div className="space-y-0">
          {displayedArticles.map(article => (
            <article
              key={article.title}
              className="group grid grid-cols-1 gap-4 border-t py-10 md:grid-cols-[120px_1fr]"
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

        {/* Show more button */}
        {hasMore && !showAll && (
          <div className="flex justify-center pt-8 md:pt-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors"
              style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
            >
              Show {articles.length - INITIAL_DISPLAY} more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
