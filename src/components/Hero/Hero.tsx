import React, { memo } from 'react'
import ProfileBadge from '@/components/Hero/ProfileBadge'
import CallToAction from '@/components/Hero/CallToAction'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      data-id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12 md:px-12"
      aria-labelledby="hero-heading"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-cyan-600/20 blur-3xl" />

      <div className="flex flex-col items-center space-y-8 lg:items-center">
        <ProfileBadge />

        <div className="flex flex-col space-y-6 text-center">
          <header className="space-y-4" id="hero-heading">
            <h1 className="text-4xl font-bold tracking-tight text-white transition-all duration-300 md:text-6xl lg:text-7xl">
              <span className="gradient-text">Hi, I&apos;m Hanaa</span>
            </h1>
            <p className="text-xl font-medium text-cyan-300 md:text-2xl">
              Full-Stack Developer • Creative Problem Solver
            </p>
            <p className="mx-auto max-w-2xl text-base text-gray-400 md:text-lg">
              Building elegant digital experiences with modern web technologies. Passionate about clean code, performance, and user-centric design.
            </p>
          </header>

          <CallToAction />
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
