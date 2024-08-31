import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa' // Import an icon from React Icons
import { EducationWithDetails } from '@/types/data'
import Link from 'next/link'

const EducationCard: React.FC<EducationWithDetails> = ({
  school,
  degree,
  location,
  dates,
  url,
}) => {
  return (
    <div className="mb-8 flex h-full w-full flex-col justify-between rounded-lg bg-primary-200 p-6 shadow-lg dark:bg-primary-800">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {school}
        </h4>
        <Link
          href={url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-gray-600 hover:text-blue-500 dark:text-gray-300"
        >
          <FaExternalLinkAlt
            width={56}
            height={56}
            aria-label={`Visit ${school} website`}
          />
        </Link>
      </div>
      <div className="-space-y-1">
        <p className="text-lg text-gray-700 dark:text-gray-300">{degree}</p>
        <p className="text-md text-gray-600 dark:text-gray-400">{location}</p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{dates}</p>
    </div>
  )
}

export default EducationCard
