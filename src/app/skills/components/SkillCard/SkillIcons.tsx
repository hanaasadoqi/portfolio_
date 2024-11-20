import React from 'react'
import { icons } from './icons'
import { SkillTooltip } from '@/components/shared/Tooltip'

interface SkillIconsProps {
  id: string
  experienceCount?: number
  projectsCount?: number
  yearsOfExperience?: number
}

const SkillIcons: React.FC<SkillIconsProps> = ({
  id,
  experienceCount,
  projectsCount,
  yearsOfExperience,
}) => {
  const commonProps = {
    size: 'sm' as const,
    variant: 'icon' as const,
  }

  const iconData = [
    {
      condition: experienceCount && experienceCount > 0,
      icon: icons.briefcase,
      tooltip: `${experienceCount} Professional Experience${experienceCount && experienceCount > 1 ? 's' : ''}`,
    },
    {
      condition: projectsCount && projectsCount > 0,
      icon: icons.project,
      tooltip: `${projectsCount} Project${projectsCount && projectsCount > 1 ? 's' : ''}`,
    },
    {
      condition: yearsOfExperience && yearsOfExperience >= 0,
      icon: icons.calendar,
      tooltip: `${yearsOfExperience} Year${yearsOfExperience && yearsOfExperience > 1 ? 's' : ''}`,
    },
  ]

  return (
    <div className="absolute md:right-4 md:top-4 h-full md:h-auto z-30 flex flex-col md:flex-row justify-center items-center gap-2">
      {iconData
        .filter((data) => data.condition)
        .map((data, index) => (
          <button
            key={`${id}-${index}`}
            className="p-2 bg-primary-200 text-primary-800 hover:text-primary-950 hover:bg-primary-300 dark:bg-primary-800 dark:text-white rounded-full shadow-md dark:hover:bg-primary-950 hover:text-white"
            aria-label={data.tooltip}
            title={data.tooltip}
            data-tooltip-id={`skill-tooltip-${id}`}
            data-tooltip-content={data.tooltip}
          >
            {data.icon}
          </button>
        ))}
      <SkillTooltip id={id} />
    </div>
  )
}

export default React.memo(SkillIcons)
