import Image from 'next/image'
import ImpactBand from './ImpactBand'

const DownloadIcon = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 15 15" fill="currentColor">
    <path d="M7.5 10.5l-3.5-3.5h2V2h3v5h2L7.5 10.5zM2 12h11v1.5H2V12z" />
  </svg>
)

const GitHubIcon = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 .25a8 8 0 00-2.529 15.591c.4.074.546-.174.546-.386l-.01-1.36c-2.225.483-2.695-1.073-2.695-1.073-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.487.055-.487.802.056 1.225.824 1.225.824.713 1.221 1.872.869 2.328.664.072-.516.279-.869.508-1.069-1.776-.202-3.644-.888-3.644-3.953 0-.874.312-1.588.823-2.147-.082-.202-.357-1.016.079-2.117 0 0 .671-.215 2.2.82A7.662 7.662 0 018 4.976c.68.003 1.364.092 2.003.27 1.527-1.035 2.197-.82 2.197-.82.437 1.101.162 1.915.08 2.117.512.559.822 1.273.822 2.147 0 3.073-1.87 3.749-3.653 3.947.288.248.544.735.544 1.482l-.009 2.198c0 .214.144.463.55.385A8.001 8.001 0 008 .25z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M0 1.146C0 .514.516 0 1.146 0h13.708C15.484 0 16 .514 16 1.146v13.708c0 .632-.516 1.146-1.146 1.146H1.146C.516 16 0 15.484 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
)

const MailIcon = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.026A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
  </svg>
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col"
      aria-labelledby="hero-heading"
    >
      {/* ── Main hero content ── */}
      <div className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 md:pt-24 md:pb-20">

        {/* ── Mobile layout ── */}
        <div className="flex flex-col md:hidden">
          {/* Photo */}
          <div className="mb-8 flex justify-center">
            <div className="hero-photo-frame relative size-24 shrink-0">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, transparent 60%)',
                  opacity: 0.15,
                  transform: 'translate(3px, 3px)',
                }}
                aria-hidden="true"
              />
              <div
                className="relative size-24 overflow-hidden rounded-2xl"
                style={{ border: '1.5px solid var(--border)' }}
              >
                <Image
                  src="/images/profile_picture.png"
                  alt="Hanaa Sadoqi"
                  fill
                  className="object-cover"
                  priority
                  sizes="96px"
                />
              </div>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-2.5">
            <span
              className="text-sm font-medium"
              style={{ color: 'var(--fg-muted)' }}
            >
              Hi, I&apos;m Hanaa.
            </span>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: 'var(--accent-muted)',
                color: 'var(--accent)',
              }}
            >
              Brooklyn, NY
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="mb-4 text-[2rem] font-bold leading-tight tracking-tight text-balance"
            style={{ color: 'var(--fg)' }}
          >
            I build systems that make messy work easier.
          </h1>

          {/* Description */}
          <p
            className="mb-2 text-sm leading-relaxed"
            style={{ color: 'var(--fg-muted)' }}
          >
            Software engineer working on workflow-heavy products, internal tools, and
            operational systems — the kind where people, rules, data, and edge cases all
            have to fit together.
          </p>
          <p
            className="mb-8 text-xs leading-relaxed"
            style={{ color: 'var(--fg-subtle)' }}
          >
            Open to Product Engineer, Full-Stack, Frontend, and Project Engineer roles.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              View Projects
            </a>
            <div className="flex gap-2.5">
              <a
                href="/Hanaa_Sadoqi_Resume.pdf"
                download
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--fg)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <DownloadIcon />
                Resume
              </a>
              <a
                href="https://github.com/hsadoqi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center justify-center rounded-lg border p-2.5 transition-opacity hover:opacity-80"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--fg-muted)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <GitHubIcon />
              </a>
              <a
                href="https://linkedin.com/in/hanaasadoqi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center justify-center rounded-lg border p-2.5 transition-opacity hover:opacity-80"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--fg-muted)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                aria-label="Send email"
                className="inline-flex items-center justify-center rounded-lg border p-2.5 transition-opacity hover:opacity-80"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--fg-muted)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden md:grid md:grid-cols-[1fr_220px] md:items-center md:gap-16 lg:grid-cols-[1fr_256px] lg:gap-20">

          {/* Left: copy + actions */}
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--fg-muted)' }}
              >
                Hi, I&apos;m Hanaa.
              </span>
              <span
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: 'var(--accent-muted)',
                  color: 'var(--accent)',
                }}
              >
                Brooklyn, NY
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="mb-5 text-5xl font-bold leading-[1.1] tracking-tight text-balance lg:text-6xl"
              style={{ color: 'var(--fg)' }}
            >
              I build systems that make messy work easier.
            </h1>

            {/* Description */}
            <p
              className="mb-2 max-w-lg text-base leading-relaxed"
              style={{ color: 'var(--fg-muted)' }}
            >
              Software engineer working on workflow-heavy products, internal tools, and
              operational systems — the kind where people, rules, data, and edge cases
              all have to fit together.
            </p>
            <p
              className="mb-10 max-w-lg text-sm leading-relaxed"
              style={{ color: 'var(--fg-subtle)' }}
            >
              Open to Product Engineer, Full-Stack, Frontend, and Project Engineer roles.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#projects"
                className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                View Projects
              </a>
              <a
                href="/Hanaa_Sadoqi_Resume.pdf"
                download
                className="inline-flex items-center gap-1.5 rounded-lg border px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--fg)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <DownloadIcon />
                Resume
              </a>

              {/* Divider */}
              <span
                className="mx-1 h-4 w-px"
                style={{ backgroundColor: 'var(--border)' }}
                aria-hidden="true"
              />

              <a
                href="https://github.com/hsadoqi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--fg-muted)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/hanaasadoqi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--fg-muted)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                aria-label="Send email"
                className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--fg-muted)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <MailIcon />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="flex justify-end">
            <div className="relative">
              {/* Accent offset shadow */}
              <div
                className="absolute rounded-2xl"
                style={{
                  inset: 0,
                  background: 'var(--accent)',
                  opacity: 0.08,
                  transform: 'translate(6px, 6px)',
                  borderRadius: '1rem',
                }}
                aria-hidden="true"
              />
              {/* Photo frame */}
              <div
                className="relative overflow-hidden rounded-2xl md:size-[220px] lg:size-[256px]"
                style={{ border: '1.5px solid var(--border)' }}
              >
                <Image
                  src="/images/profile_picture.png"
                  alt="Hanaa Sadoqi"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width: 1024px) 256px, 220px"
                />
              </div>
              {/* Availability badge */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium shadow-sm"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--fg-muted)',
                }}
              >
                <span
                  className="mr-1.5 inline-block size-1.5 rounded-full align-middle"
                  style={{ backgroundColor: '#22c55e' }}
                  aria-hidden="true"
                />
                Open to opportunities
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Tech marquee band ── */}
      <div
        className="border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <ImpactBand showMarqueeOnly />
      </div>
    </section>
  )
}
