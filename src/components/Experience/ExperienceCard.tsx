import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ExperienceCardProps {
  id: number
  company: string
  role: string
  location: string
  dates: string
  logo: string
  description: string[]
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  id,
  company,
  role,
  location,
  dates,
  logo,
  description,
}) => {
  return (
    <motion.div
      id={`experience-${id}`}
      className="mx-auto max-w-3xl rounded-lg border border-primary-300 bg-gradient-to-r from-primary-100 to-primary-200 p-8 text-left shadow-lg transition duration-300 ease-in-out hover:shadow-2xl dark:border-primary-800 dark:from-primary-900 dark:to-secondary-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6 flex items-center space-x-4">
        <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
          {logo && (
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              sizes="56px"
              className="object-contain shadow-inner"
            />
          )}
        </div>
        <div>
          <h3 className="mb-0 -space-y-1 text-base font-bold text-primary-800 dark:text-primary-100 md:text-lg lg:text-xl xl:text-2xl">
            {company}
          </h3>
          <p className="text-sm text-secondary-800 dark:text-secondary-300 md:text-base lg:text-lg">
            {role}
          </p>
        </div>
      </div>
      <div className="space-y-4 text-sm text-primary-600 dark:text-white md:text-base lg:text-lg">
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Dates:</strong> {dates}
        </p>
        <ul className="list-disc space-y-2 pl-5">
          {description.map((desc, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="text-primary-800 dark:text-white">{desc}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default React.memo(ExperienceCard)
