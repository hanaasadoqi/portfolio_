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
          <div className="mx-auto max-w-3xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[160px_1fr]">
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight"
              style={{ color: 'var(--fg)' }}
            >
              A bit about me
            </h2>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              <p>
                I&apos;m based in Brooklyn. I got into engineering because I liked making things work —
                diagnosing issues, fixing problems, building systems that people depend on. Most of my career
                has been in the unglamorous parts of software: internal platforms, operational tooling, the
                systems that keep businesses running.
              </p>
              <p>
                At Stitch Fix I worked on the systems merchandising teams relied on — data pipeline issues,
                production bugs, workflow improvements. At SiriusXM I shipped consumer features in a massive
                React codebase. At Flatiron and WeWork I learned that teaching is just as hard as building.
              </p>
              <p>
                All of that was my education in how organizations actually function: permissions, workflows,
                reliability, auditability. That knowledge is what I&apos;m now applying to build Generafi
                (payroll &amp; accounting) and Synapcity (team knowledge management).
              </p>
              <p style={{ color: 'var(--fg)' }}>
                I&apos;m open to product engineering, full-stack, and frontend-heavy roles. I care deeply about
                solving real problems. React, TypeScript, Rails, and SQL are my defaults.
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
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[160px_1fr]">
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight"
              style={{ color: 'var(--fg)' }}
            >
              Get in touch
            </h2>

            <div>
              <p
                className="mb-8 max-w-lg text-base leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                If you&apos;re hiring or just want to talk about a project, my inbox is open.
                The best way to reach me is LinkedIn or email.
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
