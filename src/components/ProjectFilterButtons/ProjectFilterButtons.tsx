'use client'

import React, { useState, useCallback } from 'react'

interface FilterButtonsProps {
  skills: string[]
  onFilterChange: (selectedSkills: string[]) => void
  maxVisible?: number
}

const ProjectFilterButtons: React.FC<FilterButtonsProps> = ({
  skills,
  onFilterChange,
  maxVisible = 8,
}) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [showAll, setShowAll] = useState(false)

  const handleFilterToggle = useCallback((skill: string) => {
    setSelectedSkills((prev) => {
      const newSkills = prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
      onFilterChange(newSkills)
      return newSkills
    })
  }, [onFilterChange])

  const visibleSkills = showAll ? skills : skills.slice(0, maxVisible)

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-wrap gap-3">
        {visibleSkills.map((skill) => (
          <button
            key={skill}
            onClick={() => handleFilterToggle(skill)}
            className={`filter-btn transition-all duration-300 ${
              selectedSkills.includes(skill) ? 'active' : ''
            }`}
            aria-pressed={selectedSkills.includes(skill)}
          >
            {skill}
          </button>
        ))}
      </div>

      {skills.length > maxVisible && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
        >
          {showAll ? 'Show Less' : `Show ${skills.length - maxVisible} More`}
        </button>
      )}

      {selectedSkills.length > 0 && (
        <button
          onClick={() => {
            setSelectedSkills([])
            onFilterChange([])
          }}
          className="text-sm text-gray-400 hover:text-gray-300 font-semibold transition-colors ml-auto block"
        >
          Clear Filters
        </button>
      )}
    </div>
  )
}

export default ProjectFilterButtons
