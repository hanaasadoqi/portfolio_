'use client'

import React, { memo, useRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useURLSearchParams } from '../../hooks/useURLSearchParams'
import { useSearchParams } from 'next/navigation';

interface SortOption {
  label: string;
  value: '' | 'Years' | 'Projects' | 'Experience';
}

interface SortProps {
  options: SortOption[];
}

const Sort: React.FC<SortProps> = ({ options }) => {
  const sortInputRef = useRef<HTMLInputElement>(null)
  const [sortBy, setSortBy] = useState<string>('')
  const { updateSearchParams } = useURLSearchParams()
  const searchParams = useSearchParams()

  useEffect(() => {
    sortInputRef.current?.focus()
    const sort = searchParams.get('sortBy')?.toString()
    if (sort) setSortBy(sort)
  }, [searchParams])

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    updateSearchParams('sortBy', sort)
  }

  return (
    <div className="max-h-96 overflow-hidden rounded-lg bg-primary-500 p-4 shadow-md transition-all duration-300 dark:bg-primary-700">
      <h3 className="mb-4 text-lg font-semibold text-white">Sort Options</h3>
      <div className="flex flex-wrap gap-4">
        {options.map(option => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              ref={sortInputRef}
              aria-label="Sort option"
              type="radio"
              name="sort"
              className={clsx(
                'form-radio h-4 w-4 rounded-full text-indigo-600 transition duration-150 ease-in-out focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-indigo-400'
              )}
              onChange={() => handleSortChange(option.value)}
              checked={sortBy === option.value}
              aria-checked={sortBy === option.value}
              value={sortBy}
            />
            <span className="text-white">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default memo(Sort)
