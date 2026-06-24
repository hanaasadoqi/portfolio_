export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-5xl px-6 pb-24 pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_280px] items-start">
        <div>
          <p
            className="mb-4 text-sm font-medium"
            style={{ color: 'var(--fg-muted)' }}
          >
            Hi, I&apos;m Hanaa
            <span
              className="ml-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
            >
              Brooklyn, NY
            </span>
          </p>

          <h1
            id="hero-heading"
            className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            style={{ color: 'var(--fg)' }}
          >
            I build software.
          </h1>

          <p
            className="mb-8 text-base leading-relaxed"
            style={{ color: 'var(--fg-muted)' }}
          >
            Full-stack engineer focused on workflow, reliability, and systems that make sense.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3">
            {/* Primary CTA */}
            <a
              href="/Hanaa_Sadoqi_Resume.pdf"
              download
              className="inline-flex items-center justify-center sm:justify-start rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Download Resume
            </a>

            <span
              className="hidden h-4 w-px sm:block"
              style={{ backgroundColor: 'var(--border)' }}
              aria-hidden="true"
            />

            {/* Social links */}
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

          {/* Scroll to projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 mt-8 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: 'var(--fg-muted)' }}
          >
            See what I&apos;m building
            <span aria-hidden="true">&darr;</span>
          </a>
        </div>

        {/* Headshot */}
        <div className="flex justify-center md:justify-end">
          <div
            className="w-64 h-64 rounded-lg overflow-hidden border"
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
    </section>
  )
}
