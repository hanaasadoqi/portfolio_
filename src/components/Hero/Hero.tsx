import React, { memo } from 'react'
import ProfileBadge from '@/components/Hero/ProfileBadge'
import CallToAction from '@/components/Hero/CallToAction'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      data-id="hero"
      className="flex min-h-screen w-full flex-col items-center justify-center py-12 md:px-12 lg:flex-row lg:justify-between"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col items-center space-y-6 lg:items-start">
        <ProfileBadge />

        <div className="flex flex-col space-y-4 md:space-y-8 lg:space-y-12">
          <header className="text-center lg:text-left" id="hero-heading">
            <h1 className="mb-2 text-2xl font-bold text-primary-900 transition-all duration-300 dark:text-white md:text-3xl lg:text-4xl">
              {"Hi, I'm Hanaa Sadoqi"}
            </h1>
            <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 md:text-xl lg:text-2xl">
              Full-stack Web Developer | UI/UX Enthusiast | Lifelong Learner
            </h2>
          </header>

          <CallToAction />
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
