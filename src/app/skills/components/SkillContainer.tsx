import SkillControlsDisplay from './SkillsControls/ControlsDisplay'
import { memo } from 'react'
import SkillsList from './SkillsList'
import { filterSkills } from './filterSkills'
import skillsData from '@/app/lib/data/skillsData.json'

const pageSize = 15

async function SkillsContainer({ searchParams }: { searchParams: Record<string, string | undefined> }) {
  const { q = '', filterByTag = '', filterByCategory = '', sortBy = '', size = '15' } = await searchParams || {}
  const currentPageSize = parseInt(size, 10)

  const skills = skillsData as any[]
  const totalCount = skills.length

  const filteredSkills = filterSkills(skills, q, filterByTag, filterByCategory, sortBy)



  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="md:relative flex h-3/4 w-full items-center justify-between md:p-4 flex-col md:flex-row">
          <h3 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl">Skills</h3>
          {/* <SkillControlsDisplay /> */}
        </div>
      </div>
      <div className="relative overflow-auto">
        <SkillsList initialSkills={filteredSkills.slice(0, currentPageSize)} totalCount={totalCount} pageSize={currentPageSize} allSkills={skills} />
      </div>
    </>
  )
}

export default memo(SkillsContainer)
