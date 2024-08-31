'use client'

import React, { useRef } from 'react'
import SearchBar from '../UI/SearchBar'
import Filter from '../UI/Filter'
import Sort from '../UI/Sort'
import useClickOutside from '@/hooks/useClickOutside'

const SkillControlsDisplay: React.FC<{
  currentControl: string | null
  resetControls: () => void
}> = ({ currentControl, resetControls }) => {
  const displayRef = useRef<HTMLDivElement>(null)

  useClickOutside(displayRef, resetControls)

  return (
    <div ref={displayRef}>
      {currentControl === 'search' && <SearchBar />}

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
