import React, { memo } from 'react'
import ProfileBadge from '@/components/Hero/ProfileBadge'
import CallToAction from '@/components/Hero/CallToAction'
import HeroImage from '@/components/Hero/HeroImage'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      data-id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12 sm:px-6 md:px-8 lg:flex-row lg:justify-between lg:gap-12"
      aria-labelledby="hero-heading"
    >
      {/* Left Content */}
      <div className="flex w-full flex-col items-center justify-center space-y-6 lg:w-1/2 lg:items-start">
        <ProfileBadge />

        <div className="flex w-full flex-col space-y-4 md:space-y-8 lg:space-y-12">
          <header className="text-center lg:text-left" id="hero-heading">
            <h1 className="mb-4 text-4xl font-bold text-secondary-900 dark:text-secondary-50 transition-colors duration-300 sm:text-5xl lg:text-6xl leading-tight">
              Building scalable solutions that make an impact.
            </h1>
            <p className="text-lg font-medium text-secondary-700 dark:text-secondary-300 transition-colors duration-300 sm:text-xl leading-relaxed">
              Senior software engineer with 5+ years building web applications and scalable systems with a focus on performance, maintainability, and exceptional user experiences.
            </p>
          </header>

          <CallToAction />
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-8 w-full lg:mt-0 lg:w-1/2 flex justify-center">
        <HeroImage />
      </div>
    </section>
  )
}

export default memo(Hero)
