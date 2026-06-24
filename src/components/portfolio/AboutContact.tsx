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

          <div className="grid grid-cols-1 gap-20 md:grid-cols-[1fr_300px]">
            {/* Text content */}
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              <p>
                I thought I wanted to be a fantasy author growing up. Looking back, I think what I really loved was worldbuilding — characters, histories, rules, governments, the way everything fit together. Later I studied mechanical engineering and designed building systems. Then I learned to code and realized software scratched the same itch.
              </p>
              <p>
                The obsession stayed the same across all three: how complex things work. How to make systems that are both reliable and understandable. How to build something where people actually understand why the rules exist.
              </p>
              <p>
                Now I&apos;m most interested in software where product and operations meet: workflows, permissions, audit trails, internal tools, and the unglamorous details that make systems work. The kind of software that gives people visibility into how things actually work, not just what to do.
              </p>
              <p>
                That&apos;s why Generafi and Synapcity feel right. Both are about giving people the information and tools they need to understand their own systems and make good decisions.
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
