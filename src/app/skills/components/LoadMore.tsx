'use client'

import { useState } from 'react'
import { Skill } from '../types'
import SkillCard from '../components/SkillCard/SkillCard'

interface LoadMoreProps {
  filteredSkills: Skill[]
}

const LoadMore: React.FC<LoadMoreProps> = ({ filteredSkills }) => {
  const [pageSize, setPageSize] = useState(15)

  const handleLoadMore = () => {
    setPageSize((prev) => prev + 15)
  }

  const paginatedSkills = filteredSkills.slice(0, pageSize)

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {paginatedSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
      {filteredSkills.length > pageSize && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 text-white bg-primary-500 hover:bg-primary-600 rounded-lg shadow-md transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}

export default LoadMore
