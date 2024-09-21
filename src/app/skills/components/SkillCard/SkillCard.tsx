import React, { memo } from 'react'
import { IconLibrary, Icon } from '@/components'
import SkillIcons from './SkillIcons'
import { FaSpinner } from 'react-icons/fa'
import { Skill } from '../../types'
import clsx from 'clsx'
import { SkillPreview } from '@/types'

// Define the Omitted version of Skill for projects with limited info
type ProjectSkill = Omit<Skill, '_count' | 'categories' | 'tags' | 'startYear' | 'projects'>

// SkillCardProps can either be a full Skill or a ProjectSkill
interface SkillCardProps {
  skill: Skill | ProjectSkill | SkillPreview
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { id, name, icon } = skill

  // if (skill.startYear) {

  // Only calculate `yearsOfExperience`, `workExperiences`, and `projects` if the full `Skill` is provided
  // const yearsOfExperience = 'startYear' in skill ? new Date().getFullYear() - skill.startYear : undefined
  // }/
  // const workExperiences = skill._count?.workExperiences || 0
  // const projects = skill.projects && skill.projects.length || 0

  // Dynamically load the appropriate icon from the icon library
  const IconComponent = icon && icon in IconLibrary
    ? IconLibrary[icon as keyof typeof IconLibrary]
    : IconLibrary.Loading

  return (
    <div
      className={clsx(
        'skill-card group relative h-32 md:h-48 max-h-52 w-full transform cursor-pointer overflow-hidden',
        'rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500',
        'shadow-lg transition-transform duration-300 ease-in-out',
        'hover:scale-105 hover:from-secondary-500 hover:to-primary-500 hover:shadow-2xl',
        'border border-white border-opacity-20'
      )}
      tabIndex={0}
      aria-label={`Skill card for ${name}`}
    >
      {'_count' in skill && (
        <SkillIcons
          id={id}
          experienceCount={1}
          projectsCount={2}
          yearsOfExperience={skill.startYear ? new Date().getFullYear() - skill.startYear : 0}
        />
      )}

      <div className="flex h-full transform flex-col items-center md:items-start justify-end rounded-lg bg-gradient-to-br from-primary-400 to-secondary-300 shadow-md transition-transform hover:scale-105 dark:from-purple-700 dark:to-blue-800 p-2 lg:p-3 gap-2 lg:gap-4 2xl:p-6">
        <React.Suspense fallback={<FaSpinner />}>
          {IconComponent && (
            <Icon
              icon={<IconComponent size={40} />}
              ariaLabel={name}
              className="text-white transition-transform duration-300 group-hover:scale-110 text-3xl xl:text-4xl"
            />
          )}
        </React.Suspense>

        <h3 className="mb-0 overflow-hidden font-semibold text-white text-center md:text-left text-base lg:text-xl">
          {name}
        </h3>
      </div>
    </div>
  )
}

export default memo(SkillCard)
