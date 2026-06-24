'use client'

import { useTheme } from './ThemeProvider'

const links = [
  { href: '#experience', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#writing', label: 'Writing' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const { theme, toggle } = useTheme()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Primary navigation"
      >
        <a
          href="#"
          className="text-sm font-semibold tracking-tight"
          style={{ color: 'var(--fg)' }}
        >
          hanaa<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex" role="list">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm transition-colors hover:opacity-100"
                style={{ color: 'var(--fg-muted)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="flex h-8 w-8 items-center justify-center rounded-md border text-sm transition-colors"
          style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)', backgroundColor: 'var(--bg-card)' }}
        >
          {theme === 'dark' ? '☀' : '☽'}
        </button>
      </nav>
    </header>
  )
}
