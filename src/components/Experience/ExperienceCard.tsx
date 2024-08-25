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
  company,
  role,
  location,
  dates,
  logo,
  description,
}) => {
  return (
    <motion.div
      className="dark:border-primary-800 border-primary-300 bg-primary-100 dark:bg-primary-700 mx-auto max-w-3xl rounded-lg border p-8 text-left shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6 flex items-center space-x-4">
        <div className="bg-primary-200 dark:bg-primary-600 relative h-14 w-14 rounded-full">
          {logo && (
            <Image
              src={logo}
              alt={`${company} logo`}
              layout="fill"
              objectFit="contain"
              sizes="56px"
              priority
              className="shadow-primary-200 rounded-full bg-white shadow-md"
            />
          )}
        </div>
        <div>
          <h3 className="text-primary-800 dark:text-primary-800 text-2xl font-bold">
            {company}
          </h3>
          <p className="text-secondary-800 dark:text-secondary-800 text-lg">
            {role}
          </p>
        </div>
      </div>
      <div className="text-primary-600 dark:text-primary-200 text-lg">
        <p className="mb-4">
          <strong>Location:</strong> {location}
        </p>
        <p className="mb-4">
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
              {desc}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default React.memo(ExperienceCard)
