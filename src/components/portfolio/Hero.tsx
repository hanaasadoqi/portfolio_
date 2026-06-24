export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-6xl px-6 py-32"
      aria-labelledby="hero-heading"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_360px] items-start">
        {/* Left: headline + copy + CTAs */}
        <div>
          <h1
            id="hero-heading"
            className="mb-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl"
            style={{ color: 'var(--fg)' }}
          >
            I build systems that make messy work easier.
          </h1>

          <div className="mb-12 space-y-5 max-w-xl">
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--fg-muted)' }}
            >
              I&apos;m a software engineer drawn to workflow-heavy products, internal tools, and operational systems — the kind where people, rules, data, and edge cases all have to fit together.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--fg-muted)' }}
            >
              Before software, I designed building systems. Before that, I built fictional worlds. The medium changed, but the obsession stayed the same: how complex things work.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center sm:justify-start rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              View Projects
            </a>

            <a
              href="/Hanaa_Sadoqi_Resume.pdf"
              download
              className="inline-flex items-center justify-center sm:justify-start rounded-md px-5 py-2.5 text-sm font-semibold transition-colors border"
              style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
            >
              Download Resume
            </a>

            <span
              className="hidden h-4 w-px sm:block"
              style={{ backgroundColor: 'var(--border)' }}
              aria-hidden="true"
            />

            <div className="flex gap-4 justify-center sm:justify-start">
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
        </div>

        {/* Right: Headshot with label */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-full rounded-lg overflow-hidden border aspect-square"
            style={{ borderColor: 'var(--border)' }}
          >
            <img
              src="/images/profile_picture.png"
              alt="Hanaa Sadoqi"
              className="w-full h-full object-cover"
            />
          </div>
          <p
            className="text-sm text-center"
            style={{ color: 'var(--fg-muted)' }}
          >
            Brooklyn, NY
          </p>
        </div>
      </div>
    </section>
  )
}
