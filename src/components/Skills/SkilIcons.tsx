import React from 'react'
import { FaBriefcase, FaProjectDiagram, FaCalendarAlt } from 'react-icons/fa'
import { IconButton } from '../shared'

interface SkillIconsProps {
  id: number
  experienceCount: number
  projectsCount: number
  yearsOfExperience: number
}

const SkillIcons: React.FC<SkillIconsProps> = ({
  id,
  experienceCount,
  projectsCount,
  yearsOfExperience,
}) => {
  const commonProps = {
    size: 'xs' as const,
    variant: 'ghost' as const,
  }
  return (
    <div className="absolute right-4 top-4 z-30 flex md:space-x-2">
      {experienceCount > 0 && (
        <IconButton
          iconClassName="w-4 h-4"
          aria-label="Professional Experience"
          icon={<FaBriefcase width="auto" height="auto" />}
          tooltipId={`experience-tooltip-${id}`}
          tooltip={
            `${experienceCount} Professional Experience` +
            (experienceCount > 1 ? 's' : '')
          }
          {...commonProps}
        />
      )}
      {projectsCount > 0 && (
        <IconButton
          iconClassName="w-4 h-4"
          aria-label="Number of Personal Projects"
          className={`projects-tooltip-${id}`}
          icon={<FaProjectDiagram width="auto" height="auto" />}
          tooltipId={`projects-tooltip-${id}`}
          tooltip={`${projectsCount} Project` + (projectsCount > 1 ? 's' : '')}
          {...commonProps}
        />
      )}
      {yearsOfExperience > 0 && (
        <IconButton
          iconClassName="w-4 h-4"
          aria-label="Years of Knpwledge"
          className={`knowledge-tooltip-${id}`}
          icon={<FaCalendarAlt width="auto" height="auto" />}
          tooltipId={`knowledge-tooltip-${id}`}
          tooltip={
            `${yearsOfExperience} Year` + (yearsOfExperience > 1 ? 's' : '')
          }
          {...commonProps}
        />
      )}
    </div>
  )
}

export default React.memo(SkillIcons)
