'use client'

import React, { useRef, useEffect, useCallback } from 'react'
import SearchBar from '../UI/SearchBar'
import Filter from '../UI/Filter'
import Sort from '../UI/Sort'
import useClickOutside from '@/hooks/useClickOutside'
import { useSkillsContext } from '@/context/SkillsContext'

const SkillControlsDisplay: React.FC<{
  currentControl: string | null
  resetControls: () => void
}> = ({ currentControl, resetControls }) => {
  const displayRef = useRef<HTMLDivElement>(null)
  const { searchQuery, setSearchQuery } = useSkillsContext()

  // Handle click outside event using a callback
  const handleClickOutside = useCallback(() => {
    if (currentControl) {
      resetControls()
    }
  }, [currentControl, resetControls])

  // Attach the click outside handler to the ref
  useClickOutside(displayRef, handleClickOutside)

  return (
    <div ref={displayRef}>
      {currentControl === 'search' && (
        <SearchBar
          placeholder="Search skills..."
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}

      {currentControl === 'filter' && (
        <Filter
          filterOptions={[
            'Frontend',
            'Backend',
            'Full-Stack',
            'Programming Language',
            'API',
          ]}
        />
      )}

      {currentControl === 'sort' && (
        <Sort sortOptions={['Experience', 'Projects', 'Years']} />
      )}
    </div>
  )
}

export default SkillControlsDisplay
