'use client'

import { useState } from 'react'
import ImpactBand from './ImpactBand'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      aria-labelledby="hero-heading"
    >
      <div className="flex-1 flex items-center">
        <div className="mx-auto max-w-5xl w-full px-6 py-12 md:py-20">
          {/* Mobile-first: stack vertically */}
          <div className="flex flex-col md:grid md:grid-cols-[1fr_280px] gap-8 md:gap-12 items-start">
            {/* Text content */}
            <div>
              {/* Headshot on mobile, top */}
              <div className="md:hidden mb-8 flex justify-center">
                <div
                  className="w-40 h-40 rounded-2xl overflow-hidden border"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <img
                    src="/images/profile_picture.png"
                    alt="Hanaa Sadoqi"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    width={160}
                    height={160}
                  />
                </div>
              </div>

              <div className="mb-6 flex flex-col gap-1">
                <p
                  className="text-sm font-medium"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  Hi, I&apos;m Hanaa.
                </p>
                <span
                  className="w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent)' }}
                >
                  Brooklyn, NY
                </span>
              </div>

              <h1
                id="hero-heading"
                className="mb-4 text-3xl md:text-4xl font-bold leading-tight tracking-tight text-balance"
                style={{ color: 'var(--fg)' }}
              >
                I build systems that make messy work easier.
              </h1>

              <p
                className="mb-6 max-w-lg text-base leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                I&apos;m a software engineer drawn to workflow-heavy products, internal tools, and operational systems — the kind where people, rules, data, and edge cases all have to fit together.
              </p>

              <p
                className="mb-8 max-w-lg text-sm leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                Open to{' '}
                <span className="font-medium" style={{ color: 'var(--fg)' }}>
                  Product Engineer
                </span>
                ,{' '}
                <span className="font-medium" style={{ color: 'var(--fg)' }}>
                  Full-Stack Engineer
                </span>
                ,{' '}
                <span className="font-medium" style={{ color: 'var(--fg)' }}>
                  Frontend Engineer
                </span>
                , and{' '}
                <span className="font-medium" style={{ color: 'var(--fg)' }}>
                  Project Engineer
                </span>{' '}
                roles.
              </p>

              {/* CTAs: Primary button + secondary icon row */}
              <div className="flex flex-col gap-4">
                {/* Primary CTA */}
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 w-full sm:w-auto"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  View Projects
                </a>

                {/* Secondary actions: icons on mobile, text on desktop */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Mobile: Icon buttons */}
                  <a
                    href="/Hanaa_Sadoqi_Resume.pdf"
                    download
                    title="Download Resume"
                    className="inline-flex items-center justify-center h-10 w-10 sm:hidden rounded-md border transition-colors"
                    style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
                    aria-label="Download Resume"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/hanaasadoqi"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="inline-flex items-center justify-center h-10 w-10 sm:hidden rounded-md border transition-colors"
                    style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com/in/hanaa-el-habbal"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="inline-flex items-center justify-center h-10 w-10 sm:hidden rounded-md border transition-colors"
                    style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.642h3.554v1.365c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.51zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.968-1.715 1.197 0 1.915.762 1.948 1.715 0 .953-.75 1.715-1.001 1.715zm-1.586 12.017h3.154V8.765H3.751v12.107zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>

                  {/* Desktop: Text buttons */}
                  <div className="hidden sm:flex items-center gap-3 ml-auto">
                    <a
                      href="/Hanaa_Sadoqi_Resume.pdf"
                      download
                      className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold transition-colors"
                      style={{ borderColor: 'var(--border)', color: 'var(--fg)', backgroundColor: 'var(--bg-card)' }}
                    >
                      Resume
                    </a>
                    <a
                      href="https://github.com/hanaasadoqi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/hanaa-el-habbal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Headshot on desktop, right side */}
            <div className="hidden md:flex justify-center">
              <div
                className="w-64 h-64 rounded-2xl overflow-hidden border sticky top-20"
                style={{ borderColor: 'var(--border)' }}
              >
                <img
                  src="/images/profile_picture.png"
                  alt="Hanaa Sadoqi"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width={256}
                  height={256}
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
