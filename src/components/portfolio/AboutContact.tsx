export default function AboutContact() {
  return (
    <>
      {/* About */}
      <section
        id="about"
        className="border-t py-20"
        style={{ borderColor: 'var(--border)' }}
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[180px_1fr]">
            <h2
              id="about-heading"
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: 'var(--fg-subtle)' }}
            >
              Working Style
            </h2>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              <p>
                I approach engineering as a product discipline. Good software is not just technically
                correct — it solves the right problem, is maintainable by a team, and ships at a pace
                the business can depend on.
              </p>
              <p>
                I communicate clearly across functions. I&apos;ve worked directly with Product,
                Merchandising, and IT teams to translate business problems into scoped technical
                solutions. I write documentation as part of the work, not after it.
              </p>
              <p>
                I bias toward shipping useful milestones over perfect architecture. I use validation
                to decide what not to build, and I treat premature optimization as a form of waste.
              </p>
              <p>
                I am currently seeking senior full-stack engineering roles at companies building
                SaaS platforms, internal tools, or business-critical systems where engineering
                judgment and cross-functional delivery matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t py-20"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-subtle)' }}
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr]">
            <h2
              id="contact-heading"
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: 'var(--fg-subtle)' }}
            >
              Contact
            </h2>

            <div>
              <p
                className="mb-8 max-w-xl text-base leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                Looking for Senior Software Engineering roles focused on SaaS, internal tools,
                business systems, and product engineering.
              </p>

              <div className="flex flex-wrap gap-3">
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
            Hanaa El Habbal &mdash; Senior Software Engineer
          </span>
          <span className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
            {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  )
}
