import ImpactBand from './ImpactBand'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      aria-labelledby="hero-heading"
    >
      {/* Main content — centered vertically on larger screens */}
      <div className="flex-1 flex items-center">
        <div className="mx-auto max-w-5xl w-full px-6 py-20">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_260px] items-center">
        {/* Text */}
        <div>
          <p
            className="mb-5 text-sm font-medium"
            style={{ color: 'var(--fg-muted)' }}
          >
            Hi, I&apos;m Hanaa&nbsp;
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
            >
              Brooklyn, NY
            </span>
          </p>

          <h1
            id="hero-heading"
            className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl text-balance"
            style={{ color: 'var(--fg)' }}
          >
            I build systems that make messy work easier.
          </h1>

          <p
            className="mb-4 max-w-xl text-base leading-relaxed"
            style={{ color: 'var(--fg-muted)' }}
          >
            I&apos;m a software engineer drawn to workflow-heavy products, internal tools, and operational
            systems — the kind where people, rules, data, and edge cases all have to fit together.
          </p>

          <p
            className="mb-10 max-w-xl text-sm leading-relaxed"
            style={{ color: 'var(--fg-subtle)' }}
          >
            Before software, I designed building systems. Before that, I built fictional worlds.
            The medium changed, but the obsession stayed the same: how complex things work.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              View Projects
            </a>
            <a
              href="/Hanaa_Sadoqi_Resume.pdf"
              download
              className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
            >
              Download Resume
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
        </div>

        {/* Headshot */}
        <div className="flex justify-center md:justify-end order-first md:order-last">
          <div
            className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border"
            style={{ borderColor: 'var(--border)' }}
          >
            <img
              src="/images/profile_picture.png"
              alt="Hanaa Sadoqi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
        </div>
      </div>

      {/* Marquee at bottom — desktop only */}
      <div className="hidden md:block border-t" style={{ borderColor: 'var(--border)' }}>
        <ImpactBand showMarqueeOnly />
      </div>
    </section>
  )
}
