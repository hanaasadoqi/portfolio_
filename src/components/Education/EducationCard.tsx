import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Education } from '@/types'
import Link from 'next/link'

const EducationCard: React.FC<Education> = ({
  school,
  degree,
  location,
  startDate,
  endDate,
  url

}) => {
  return (
    <div className="glass-card group flex h-full w-full flex-col justify-between p-6 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
            {school}
          </h4>
          <div className="mt-2 space-y-1">
            <p className="text-base font-medium text-cyan-400">{degree}</p>
            <p className="text-sm text-gray-400">{location}</p>
          </div>
        </div>
        <Link
          href={url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 flex-shrink-0 text-gray-500 transition-colors hover:text-cyan-400"
        >
          <FaExternalLinkAlt
            size={20}
            aria-label={`Visit ${school} website`}
          />
        </Link>
      </div>
      <p className="mt-4 text-xs text-gray-500">
        {new Date(startDate).toLocaleDateString()} — {new Date(endDate || '').toLocaleDateString()}
      </p>
    </div>
  )
}

export default EducationCard
