import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import clsx from 'clsx'
import { IconButton } from '../shared'

// Define interfaces for props
interface TimelineProps {
  experiences: {
    logo: string
    company: string
  }[]
  currentIndex: number
  goToSlide: (index: number) => void
  prevSlide: () => void
  nextSlide: () => void
}

// Extracted ArrowButton component for better reusability
interface ArrowButtonProps {
  onClick: () => void
  direction: 'left' | 'right'
  hidden: boolean
  className?: string
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  onClick,
  direction,
  hidden,
  className,
}) => (
  <IconButton
    onClick={onClick}
    className={clsx(
      'bottom-50 absolute z-10 rounded-full p-3 text-white shadow-lg transition-opacity duration-300 ease-in-out md:-bottom-12',
      direction === 'left' ? 'left-4' : 'right-4',
      hidden ? 'opacity-0' : 'opacity-100',
      // 'bg-primary-500 hover:bg-primary-400 active:bg-primary-600 dark:bg-primary-700 dark:hover:bg-primary-600 dark:active:bg-primary-800',
      className
    )}
    aria-label={
      direction === 'left' ? 'Previous Experience' : 'Next Experience'
    }
    icon={direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
  />
)

const Timeline: React.FC<TimelineProps> = ({
  experiences,
  currentIndex,
  goToSlide,
  prevSlide,
  nextSlide,
}) => {
  return (
    <div className="relative flex items-center justify-center gap-4 md:pt-16">
      {/* Left Arrow Button */}
      <ArrowButton
        onClick={prevSlide}
        direction="left"
        hidden={currentIndex === 0}
        className="hidden md:block"
      />

      {experiences.map((experience, index) => (
        <motion.button
          key={index}
          className={`hidden flex-col items-center transition-all duration-500 ease-in-out focus:outline-none md:relative md:flex ${
            index === currentIndex
              ? 'scale-125 opacity-100'
              : 'scale-90 opacity-50'
          }`}
          onClick={() => goToSlide(index)}
          aria-label={`Go to ${experience.company}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="relative h-14 w-14">
            {experience.logo ? (
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                fill
                sizes="56px"
                className="rounded-full bg-white object-contain shadow-primary-200"
              />
            ) : (
              <div className="h-14 w-14 rounded-full bg-primary-200 dark:bg-primary-600" />
            )}
          </div>
          {index === currentIndex && (
            <p className="mt-2 max-w-[100px] whitespace-normal text-center text-sm font-bold text-primary-800 dark:text-primary-200">
              {experience.company}
            </p>
          )}
        </motion.button>
      ))}
      {/* Right Arrow Button */}

      <ArrowButton
        onClick={nextSlide}
        direction="right"
        hidden={currentIndex === experiences.length - 1}
        className="hidden md:block"
      />
    </div>
  )
}

export default React.memo(Timeline)
