import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TimelineProps {
  experiences: {
    logo: string
    company: string
  }[]
  currentIndex: number
  goToSlide: (index: number) => void
}

const Timeline: React.FC<TimelineProps> = ({
  experiences,
  currentIndex,
  goToSlide,
}) => {
  return (
    <div className="mb-6 flex items-center justify-center space-x-8 pt-8">
      {experiences.map((experience, index) => (
        <motion.button
          key={index}
          className={`relative flex flex-col items-center transition-all duration-500 ease-in-out focus:outline-none ${
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
                layout="fill"
                objectFit="contain"
                sizes="56px"
                className="shadow-primary-200 rounded-full bg-white"
              />
            ) : (
              <div className="h-14 w-14 rounded-full bg-primary20 dark:bg-primary60" />
            )}
          </div>
          {index === currentIndex && (
            <p className="mt-2 max-w-[100px] whitespace-normal text-center text-sm font-bold">
              {experience.company}
            </p>
          )}
        </motion.button>
      ))}
    </div>
  )
}

export default React.memo(Timeline)
