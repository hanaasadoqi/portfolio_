import React, { useRef, useEffect, useCallback } from 'react'
import { useSkillsContext } from '@/context/SkillsContext'
import clsx from 'clsx'
interface FilterProps {
  filterOptions: string[]
}

const Filter: React.FC<FilterProps> = ({ filterOptions }) => {
  const { filters, setFilters } = useSkillsContext()
  const filterRef = useRef<HTMLDivElement>(null)

  const handleFilterChange = useCallback(
    (filter: string) => {
      setFilters((prevFilters: string[]) =>
        prevFilters.includes(filter)
          ? prevFilters.filter(f => f !== filter)
          : [...prevFilters, filter]
      )
    },
    [setFilters]
  )

  // Add correct dependencies to the useEffect
  useEffect(() => {
    filterRef.current?.querySelector('input')?.focus()
    // }
  }, [])

  return (
    <div
      ref={filterRef}
      className="max-h-96 overflow-hidden rounded-lg bg-primary-500 p-4 shadow-md transition-all duration-300 dark:bg-primary-700"
    >
      <h3 className="mb-4 text-lg font-semibold text-white">Filter Options</h3>
      <div className="flex flex-wrap gap-4">
        {filterOptions.map(filter => (
          <label key={filter} className="flex items-center space-x-2">
            <input
              aria-label="Filters"
              type="checkbox"
              className={clsx(
                'form-checkbox h-4 w-4 rounded-md text-primary-600 transition duration-150 ease-in-out focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-primary-600 dark:bg-primary-800 dark:focus:ring-primary-400'
              )}
              onChange={() => handleFilterChange(filter)}
              checked={filters.includes(filter)}
              aria-checked={filters.includes(filter)}
            />
            <span className="text-white">{filter}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

Filter.displayName = 'Filter'

export default Filter
