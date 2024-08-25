'use client'

import React, { useState, useCallback } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'

const ExperienceCard = dynamic(() => import('./ExperienceCard'), {
  loading: () => <p>Loading...</p>,
})
const Timeline = dynamic(() => import('./Timeline'), {
  loading: () => <p>Loading...</p>,
})

interface Experience {
  id: number
  company: string
  role: string
  location: string
  dates: string
  logo: string
  description: string[]
}

interface CarouselProps {
  experienceData: Experience[]
}

const Carousel: React.FC<CarouselProps> = ({ experienceData: experiences }) => {
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
    <div className="relative flex w-full flex-col items-center justify-center">
      <Timeline
        experiences={experiences.map(({ logo, company }) => ({
          logo,
          company,
        }))}
        currentIndex={currentIndex}
        goToSlide={goToSlide}
      />

      {/* Carousel */}
      <div className="relative flex w-full items-center justify-center">
        {/* Left Arrow */}
        {currentIndex !== 0 && (
          <button
            onClick={prevSlide}
            className={clsx(
              'bg-primary-500 hover:bg-primary-400 active:bg-primary-600 absolute z-10 rounded-full p-3 text-white shadow-lg hover:bg-primary40',
              'md:left-4',
              'bottom-4 left-1/4 md:bottom-auto md:translate-y-[-50%]',
              'transition-opacity duration-300 ease-in-out',
              currentIndex === 0 ? 'opacity-0' : 'opacity-100'
            )}
            aria-label="Previous Experience"
          >
            <FaArrowLeft size={24} />
          </button>
        )}
        <div className="flex w-full justify-center">
          <AnimatePresence>
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className={clsx(
                  'p-12 transition-all duration-500 ease-in-out',
                  index === currentIndex
                    ? 'scale-100 transform opacity-100'
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
        </div>
        {/* Right Arrow */}
        {currentIndex !== experiences.length - 1 && (
          <button
            onClick={nextSlide}
            className={clsx(
              'hover:bg-primary-400 active:bg-primary-600 bg-primary-500 absolute z-10 rounded-full p-3 text-white shadow-lg hover:bg-primary40',
              'md:right-4',
              'bottom-4 right-1/4 md:bottom-auto md:translate-y-[-50%]',
              'transition-opacity duration-300 ease-in-out',
              currentIndex === experiences.length - 1
                ? 'opacity-0'
                : 'opacity-100'
            )}
            aria-label="Next Experience"
          >
            <FaArrowRight size={24} />
          </button>
        )}
      </div>
    </div>
  )
}

export default React.memo(Carousel)
