"use client"

import React, { useRef, useEffect, useCallback } from 'react'
import { useSkillsContext } from '@/context/SkillsContext'
import clsx from 'clsx'

interface SortProps {
  sortOptions: string[]
}

const Sort: React.FC<SortProps> = React.memo(({ sortOptions }) => {
  const { sortOption, setSortOption } = useSkillsContext()
  const sortRef = useRef<HTMLDivElement>(null)
  const sortInputRef = useRef<HTMLInputElement>(null)

  const handleSortChange = useCallback(
    (option: string) => {
      setSortOption(option)
    },
    [setSortOption]
  )

  useEffect(() => {
    sortInputRef.current?.focus()
  }, [])

  return (
    <div
      ref={sortRef}
      className="max-h-96 overflow-hidden rounded-lg bg-primary-500 p-4 shadow-md transition-all duration-300 dark:bg-primary-700"
    >
      <h3 className="mb-4 text-lg font-semibold text-white">Sort Options</h3>
      <div className="flex flex-wrap gap-4">
        {sortOptions.map(option => (
          <label key={option} className="flex items-center space-x-2">
            <input
              ref={sortInputRef}
              aria-label="Sort option"
              type="radio"
              name="sort"
              className={clsx(
                'form-radio h-4 w-4 rounded-full text-indigo-600 transition duration-150 ease-in-out focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-indigo-400'
              )}
              onChange={() => handleSortChange(option)}
              checked={sortOption === option}
              aria-checked={sortOption === option}
            />
            <span className="text-white">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
})

Sort.displayName = 'Sort'
export default Sort
