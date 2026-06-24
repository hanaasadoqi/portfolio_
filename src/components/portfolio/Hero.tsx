export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-3xl px-6 pb-28 pt-40"
      aria-labelledby="hero-heading"
    >
      <p
        className="mb-5 text-sm font-medium"
        style={{ color: 'var(--fg-muted)' }}
      >
        Hi, I&apos;m Hanaa
        <span
          className="ml-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
          style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
        >
          open to work
        </span>
      </p>

      <h1
        id="hero-heading"
        className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        style={{ color: 'var(--fg)' }}
      >
        I build software that gets out of people&apos;s way.
      </h1>

      <p
        className="mb-4 max-w-xl text-lg leading-relaxed"
        style={{ color: 'var(--fg-muted)' }}
      >
        Full-stack engineer with 5+ years shipping production software. At Stitch Fix I built
        internal tooling that saved merchandising teams{' '}
        <span className="font-semibold" style={{ color: 'var(--fg)' }}>300+ hours a month</span>
        {' '}— the kind of work that nobody outside the company sees, but everybody inside depends on.
      </p>

      <p
        className="mb-10 max-w-xl text-base leading-relaxed"
        style={{ color: 'var(--fg-muted)' }}
      >
        I&apos;m most at home building SaaS platforms, internal tools, and the systems that keep
        companies running. React, TypeScript, Rails, SQL — whatever it takes to ship something
        that actually works.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="/Hanaa_Sadoqi_Resume.pdf"
          download
          className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          Download Resume
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: 'var(--fg-muted)' }}
        >
          See my work
          <span aria-hidden="true">&darr;</span>
        </a>
        <span
          className="hidden h-4 w-px sm:block"
          style={{ backgroundColor: 'var(--border)' }}
          aria-hidden="true"
        />
        <a
          href="https://github.com/hanaasadoqi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-opacity hover:opacity-80"
          style={{ color: 'var(--fg-muted)' }}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/hanaa-el-habbal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-opacity hover:opacity-80"
          style={{ color: 'var(--fg-muted)' }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
