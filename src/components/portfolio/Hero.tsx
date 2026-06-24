export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-5xl px-6 pb-24 pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-2xl">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-widest"
          style={{ color: 'var(--accent)' }}
        >
          Available for Senior roles
        </p>

        <h1
          id="hero-heading"
          className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          style={{ color: 'var(--fg)', fontFamily: 'var(--font-inter)' }}
        >
          Senior Software Engineer building SaaS platforms and business-critical internal tools.
        </h1>

        <p
          className="mb-8 text-lg leading-relaxed"
          style={{ color: 'var(--fg-muted)' }}
        >
          Previously built and maintained full-stack internal tooling at Stitch Fix, including
          systems that reduced merchandising workflow effort by{' '}
          <span style={{ color: 'var(--fg)' }} className="font-medium">
            300+ hours/month
          </span>
          . I specialize in React, TypeScript, Rails, SQL, SaaS architecture, internal tools, and
          practical product engineering.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/Hanaa_Sadoqi_Resume.pdf"
            download
            className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            Download Resume
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
          >
            View Case Studies
          </a>
          <a
            href="https://github.com/hanaasadoqi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-opacity hover:opacity-100"
            style={{ color: 'var(--fg-muted)' }}
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/hanaa-el-habbal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-opacity hover:opacity-100"
            style={{ color: 'var(--fg-muted)' }}
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
