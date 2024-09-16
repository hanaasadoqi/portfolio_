'use client'

import React, { memo, useRef, useEffect, useTransition, useState } from 'react'
import clsx from 'clsx'
import { useDebouncedCallback } from 'use-debounce'
import { useURLSearchParams } from '../../hooks/useURLSearchParams'

const SearchBar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { updateSearchParams } = useURLSearchParams()

  const [isPending, startTransition] = useTransition()
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearchChange = (term: string) => {
    setSearchQuery(term)
    handleSearch(term)
  }

  const handleSearch = useDebouncedCallback((term: string) => {
    startTransition(() => {
      updateSearchParams('q', term)
    })
  }, 300)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="mb-4 flex w-full max-w-xl items-center justify-center relative">
      <input
        aria-label="Search skills"
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearchChange(e.target.value)}
        className={clsx(
          'w-full rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-primary-700 dark:text-white dark:placeholder-primary-400 dark:focus-within:bg-primary-300 dark:focus-within:placeholder-primary-700'
        )}
        placeholder="Search for skills..."
      />
      {isPending && <div className="absolute right-0 top-0 p-2">Searching...</div>}
    </div>
  )
}

export default memo(SearchBar)
