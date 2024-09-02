'use client'

import React, { useState, useCallback } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowButton } from './Timeline'
import { useData } from '@/context/DataContext'

// Dynamically import components for better performance
const ExperienceCard = dynamic(() => import('./ExperienceCard'), {
  loading: () => <p>Loading experience...</p>,
})
const Timeline = dynamic(() => import('./Timeline'), {
  loading: () => <p>Loading timeline...</p>,
})

// Define interfaces for props and data types
interface Experience {
  id: number
  company: string
  role: string
  location: string
  dates: string
  logo: string
  description: string[]
}

const Carousel: React.FC = () => {
  const { workExperience: experiences } = useData()
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    )
  }, [experiences.length])

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    )
  }, [experiences.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return (
    <section
      id="experience"
      data-id="experience"
      className="my-48 flex min-h-screen w-screen flex-col items-center justify-center py-24 sm:px-12"
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="flex max-w-5xl flex-col items-center justify-center">
          {/* Right Arrow Button */}

          <h3 className="w-full text-center text-2xl dark:text-primary-900 md:text-left md:text-3xl lg:text-4xl">
            Experience
          </h3>
          {/* <div className="relative z-10"> */}
          <ArrowButton
            onClick={prevSlide}
            direction="left"
            hidden={currentIndex === 0}
            className="md:top-50 -bottom-16 -left-2 md:bottom-auto md:hidden"
          />
          <AnimatePresence>
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={clsx(
                  'transition-all duration-500 ease-in-out',
                  index === currentIndex
                    ? 'scale-100 opacity-100'
                    : 'hidden opacity-0'
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                {index === currentIndex && <ExperienceCard {...experience} />}
              </motion.div>
            ))}
          </AnimatePresence>
          <ArrowButton
            onClick={nextSlide}
            direction="right"
            hidden={currentIndex === experiences.length - 1}
            className="md:top-50 -bottom-16 -right-2 md:bottom-auto md:hidden"
          />
          {/* </div> */}
        </div>
        <Timeline
          experiences={experiences.map(({ logo, company }) => ({
            logo,
            company,
          }))}
          currentIndex={currentIndex}
          goToSlide={goToSlide}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
      </div>
    </section>
  )
}

export default React.memo(Carousel)
