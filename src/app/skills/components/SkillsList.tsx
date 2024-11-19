'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Skill } from '../types'

const SkeletonSkillCard = dynamic(() => import('./SkillCard/SkeletonCard'), { ssr: false })
const SkillCard = dynamic(() => import('../components/SkillCard/SkillCard'), { ssr: false })

export default function SkillsList({
  initialSkills,
  totalCount,
  pageSize,
  allSkills
}: {
  initialSkills: Skill[]
  totalCount: number
  pageSize: number
  allSkills: Skill[]
}) {
  const [skills, setSkills] = useState<Skill[]>(initialSkills)
  const [loading, setLoading] = useState(false)

  const handleLoadMore = () => {
    if (skills.length >= totalCount) return;

    setLoading(true)
    try {
      const nextPageSize = Math.min(skills.length + pageSize, totalCount)

      const newSkills = allSkills.slice(skills.length, nextPageSize)

      setSkills(prev => [...prev, ...newSkills])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="relative scrollbar-hide overflow-y-auto shadow-inner h-[500px] md:h-[700px] min-w-[750px] p-2 sm:p-4 md:p-8 grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 smooth-scroll bg-white/30 shadow-lg rounded-2xl backdrop-blur-lg hover:shadow-2xl transition-shadow duration-500">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}

        {loading && Array.from({ length: pageSize }).map((_, idx) => <SkeletonSkillCard key={idx} />)}
      </div>

      {skills.length < totalCount && (
        <div className="mt-8 w-full mx-auto flex items-center justify-center">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-4 py-2 text-white bg-primary-500 hover:bg-primary-600 rounded-lg shadow-md transition duration-300"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}

      {skills.length > 0 && (
        <p className="mt-4 mx-auto text-center text-gray-500 w-full">
          Showing {skills.length} of {totalCount} skills.
        </p>
      )}
    </div>
  )
}
