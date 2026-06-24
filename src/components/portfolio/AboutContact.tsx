import PhotoCarousel from './PhotoCarousel'

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
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_280px]">
            <div>
              <h2
                id="about-heading"
                className="text-3xl font-bold tracking-tight mb-6"
                style={{ color: 'var(--fg)' }}
              >
                A bit about me
              </h2>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              <p>
                I&apos;m based in Brooklyn. I got into engineering because I genuinely enjoy making things work.
                There&apos;s something satisfying about diagnosing a production issue and shipping the fix. I obsess
                over how systems actually work, not just the theory.
              </p>
              <p>
                I think about permissions, workflows, reliability. I like building software that people depend on,
                even if nobody outside the company hears about it. Right now I&apos;m building Generafi (payroll
                for SMBs) and Synapcity, applying everything I learned from internal systems into products.
              </p>
              <p style={{ color: 'var(--fg)' }}>
                Outside of work: coffee, reading about systems design, hanging with my dog Bowie, exploring Brooklyn.
              </p>
              </div>
            </div>

            {/* Photo carousel */}
            <div className="flex justify-center md:justify-end">
              <PhotoCarousel />
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
