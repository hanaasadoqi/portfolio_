import PhotoCarousel from './PhotoCarousel'

export default function AboutContact() {
  return (
    <>
      {/* About */}
      <section
        id="about"
        className="border-t py-32"
        style={{ borderColor: 'var(--border)' }}
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight mb-16"
            style={{ color: 'var(--fg)' }}
          >
            A bit about me
          </h2>

          <div className="grid grid-cols-1 gap-20 md:grid-cols-[1fr_320px]">
            {/* Text content */}
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              <p>
                I&apos;ve always been drawn to systems. As a kid, that meant fantasy worlds — characters,
                histories, rules, governments, and the tiny details that made fictional places feel real.
                In college, it became mechanical engineering and building systems: HVAC, plumbing,
                coordination, constraints, and the physical infrastructure people depend on.
              </p>
              <p>
                Eventually I learned to code and realized software was another version of the same thing.
              </p>
              <p>
                Now I&apos;m most interested in software where product and operations meet: workflows,
                permissions, audit trails, internal tools, and the unglamorous details that make systems
                reliable. Right now that means Generafi and Synapcity — and looking for product engineering,
                full-stack, frontend, and project engineer roles where that kind of thinking is useful.
              </p>
            </div>

            {/* Photo carousel */}
            <div className="flex justify-center md:sticky md:top-32">
              <PhotoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t py-32"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight"
              style={{ color: 'var(--fg)' }}
            >
              Get in touch
            </h2>

            <div>
              <p
                className="mb-10 max-w-lg text-base leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                If you&apos;re hiring for product engineering, full-stack, frontend, or project engineer
                roles — or want to talk about workflow-heavy software — I&apos;d love to connect.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href="/Hanaa_Sadoqi_Resume.pdf"
                  download
                  className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  Download Resume
                </a>
                <a
                  href="https://linkedin.com/in/hanaa-el-habbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors"
                  style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/hanaasadoqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors"
                  style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
                >
                  GitHub
                </a>
                <a
                  href="mailto:hello@hanaa.dev"
                  className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors"
                  style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t px-6 py-8"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
            Hanaa Sadoqi &mdash; Product Engineer
          </span>
          <span className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
            {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  )
}
