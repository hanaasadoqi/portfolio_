import SkillControlsDisplay from './SkillsControls/ControlsDisplay'
import { memo } from 'react'
import SkillsList from './SkillsList'
import { fetchFilteredSkills } from '../actions'
import { filterSkills } from './filterSkills'

const pageSize = 15

async function SkillsContainer({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const { q = '', filterByTag = '', filterByCategory = '', sortBy = '', size = '15' } = await searchParams || {}
  const currentPageSize = parseInt(size, 10)

  const { skills, totalCount } = await fetchFilteredSkills()

  const filteredSkills = filterSkills(skills, q, filterByTag, filterByCategory, sortBy)



  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="section-header mb-8 w-full text-center md:text-left lg:mb-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            <span className="gradient-text">Skills</span>
          </h2>
        </div>
      </div>
      <div className="relative overflow-auto">
        <SkillsList initialSkills={filteredSkills.slice(0, currentPageSize)} totalCount={totalCount} pageSize={currentPageSize} allSkills={skills} />
      </div>
    </>
  )
}

export default memo(SkillsContainer)
