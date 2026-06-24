'use client'

import ImpactBand from './ImpactBand'
import { HeroCopy } from './HeroCopy'

const DownloadIcon = () => (
  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
    <path d="M7.5 10.5l-3.5-3.5h2V2h3v5h2L7.5 10.5zM2 12h11v1.5H2V12z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 .25a8 8 0 00-2.529 15.591c.4.074.546-.174.546-.386l-.01-1.36c-2.225.483-2.695-1.073-2.695-1.073-.364-.924-.888-1.17-.888-1.17-.726-.497.055-.487.055-.487.802.056 1.225.824 1.225.824.713 1.221 1.872.869 2.328.664.072-.516.279-.869.508-1.069-1.776-.202-3.644-.888-3.644-3.953 0-.874.312-1.588.823-2.147-.082-.202-.357-1.016.079-2.117 0 0 .671-.215 2.2.82A7.662 7.662 0 018 4.976c.68.003 1.364.092 2.003.27 1.527-1.035 2.197-.82 2.197-.82.437 1.101.162 1.915.08 2.117.512.559.822 1.273.822 2.147 0 3.073-1.87 3.749-3.653 3.947.288.248.544.735.544 1.482l-.009 2.198c0 .214.144.463.55.385A8.001 8.001 0 008 .25z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
    <path d="M0 1.146C0 .514.516 0 1.146 0h13.708C15.484 0 16 .514 16 1.146v13.708c0 .632-.516 1.146-1.146 1.146H1.146C.516 16 0 15.484 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
  </svg>
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      aria-labelledby="hero-heading"
    >
      <div className="flex-1 flex items-center">
        <div className="mx-auto max-w-5xl w-full px-6 py-16 md:py-20">

          {/* ── Mobile: headline → copy → CTAs ── */}
          <div className="flex flex-col md:hidden">

            {/* Copy */}
            <div className="mb-12">
              <HeroCopy />
            </div>

            {/* Primary CTA — full width */}
            <a
              href="#projects"
              className="mb-3 inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              View Projects
            </a>

            {/* Secondary actions — resume text + icon buttons */}
            <div className="flex items-center gap-2">
              <a
                href="/Hanaa_Sadoqi_Resume.pdf"
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
              >
                <DownloadIcon />
                Resume
              </a>
              <a
                href="https://github.com/hanaasadoqi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center justify-center rounded-md border p-2.5 transition-opacity hover:opacity-80"
                style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)', backgroundColor: 'var(--bg-card)' }}
              >
                <GitHubIcon />
              </a>
              <a
                href="https://linkedin.com/in/hanaa-el-habbal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center justify-center rounded-md border p-2.5 transition-opacity hover:opacity-80"
                style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)', backgroundColor: 'var(--bg-card)' }}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* ── Desktop: full-width text layout ── */}
          <div className="hidden md:block max-w-2xl">
            <HeroCopy />

            <div className="mt-10 flex flex-wrap items-center gap-3">
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
                className="inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
              >
                <DownloadIcon />
                Resume
              </a>
              <span className="h-4 w-px" style={{ backgroundColor: 'var(--border)' }} aria-hidden="true" />
              <a
                href="https://github.com/hanaasadoqi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-80"
                style={{ color: 'var(--fg-muted)' }}
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/hanaa-el-habbal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-80"
                style={{ color: 'var(--fg-muted)' }}
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee — desktop only */}
      <div className="hidden md:block border-t" style={{ borderColor: 'var(--border)' }}>
        <ImpactBand showMarqueeOnly />
      </div>
    </section>
  )
}
