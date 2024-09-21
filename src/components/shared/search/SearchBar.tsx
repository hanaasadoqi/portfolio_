'use client'

import React, { useRef, useEffect } from 'react'
import clsx from 'clsx'

const SearchBar: React.FC<{
  placeholder?: string
  searchQuery?: string
  setSearchQuery: (query: string) => void
}> = React.memo(
  ({ placeholder = 'Search...', searchQuery, setSearchQuery }) => {
    const searchBarRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      inputRef.current?.focus()
    }, [])

    return (
      <div
        ref={searchBarRef}
        className="mb-4 flex w-full max-w-lg items-center justify-center"
      >
        <input
          aria-label="Search skills"
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className={clsx(
            'w-full rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-primary-700 text-primary-900 dark:text-primary-100 dark:placeholder-primary-500 dark:focus-within:bg-primary-600 dark:focus-within:placeholder-primary-700'
          )}
          placeholder={placeholder}
        />
      </div>
    )
  }
)

SearchBar.displayName = 'SearchBar'
export default SearchBar
