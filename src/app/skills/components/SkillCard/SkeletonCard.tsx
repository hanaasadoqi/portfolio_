import React from 'react'
import clsx from 'clsx'

const SkeletonSkillCard = () => {
  return (
    <div
      className={clsx(
        'group relative lg:min-h-40 h-full w-full transform cursor-pointer overflow-hidden',
        'rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300',
        'shadow-lg transition-transform duration-300 ease-in-out',
        'animate-pulse-slow',
        'border border-white border-opacity-20'
      )}
    >
      <div className="flex h-full transform flex-col items-center md:items-start justify-end gap-2 rounded-lg bg-gradient-to-br from-gray-400 to-gray-500 p-3 shadow-md transition-transform md:gap-4 md:p-4">
        <div className="h-12 w-12 bg-gray-300 rounded-full" />
        <div className="w-3/4 md:w-full h-6 bg-gray-300 rounded mt-2" />
      </div>
    </div>
  )
}

export default SkeletonSkillCard
