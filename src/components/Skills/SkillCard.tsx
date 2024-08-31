import React from 'react'
import Icon from '../shared/Icon/Icon'
import { IconLibrary } from '../shared/Icon/icons'
import SkillIcons from './SkilIcons'
import clsx from 'clsx'
import { Skill } from '@/types/data'

interface SkillCardProps {
  skill: Skill
  handleClick: (skill: Skill) => void
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, handleClick }) => {
  const { id, name, icon, startYear, experience, projects } = skill
  const IconComponent = icon
    ? IconLibrary[icon as keyof typeof IconLibrary]
    : IconLibrary['Loading']

  const yearsOfExperience = new Date().getFullYear() - startYear

  return (
    <div
      className={clsx(
        'group relative h-40 max-w-60 transform cursor-pointer overflow-hidden',
        'rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500',
        'shadow-lg transition-transform duration-300 ease-in-out',
        'hover:scale-105 hover:from-secondary-500 hover:to-primary-500 hover:shadow-2xl',
        'border border-white border-opacity-20'
      )}
      onClick={() => handleClick(skill)}
      role="button"
      tabIndex={0}
      aria-label={`Skill card for ${name}`}
    >
      <SkillIcons
        id={id}
        experienceCount={experience?.length}
        projectsCount={projects?.length}
        yearsOfExperience={yearsOfExperience}
      />
      <div className="flex h-full transform flex-col items-start justify-end gap-1 rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 p-2 shadow-md transition-transform hover:scale-105 dark:from-purple-700 dark:to-blue-800 md:gap-4 md:p-4">
        <Icon
          icon={<IconComponent />}
          ariaLabel={name}
          className="text-2xl text-white transition-transform duration-300 group-hover:scale-110 md:text-3xl lg:text-4xl"
        />
        <h3 className="text-left text-lg font-medium text-white dark:text-white md:text-xl lg:text-2xl">
          {name}
        </h3>
      </div>
    </div>
  )
}
export default React.memo(SkillCard)
