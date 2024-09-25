import React from 'react'
import { FaBriefcase, FaProjectDiagram, FaCalendarAlt, FaInfo } from 'react-icons/fa'
import { IconButton } from '@/components/shared'

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

  return (
    <div>
      {/* Skill Icons that show additional info */}
      <div className="absolute right-4 top-4 z-30 lg:flex space-x-3">
        <IconButton
          className="block lg:hidden opacity-75 hover:opacity-100 text-primary-900"
          icon={<FaInfo size={24} />}
          tooltipId={`info-tooltip-${id}`}
          tooltip="More Info"
          {...commonProps}
        />

        {experienceCount && experienceCount > 0 ? (
          <IconButton
            className="hidden lg:block text-primary-900 hover:text-white"
            aria-label="Professional Experience"
            icon={<FaBriefcase size={24} />}
            tooltipId={`experience-tooltip-${id}`}
            tooltip={`${experienceCount} Professional Experience${experienceCount > 1 ? 's' : ''}`}
            {...commonProps}
          />
        ) : null}

        {projectsCount && projectsCount > 0 ? (
          <IconButton
            aria-label="Number of Personal Projects"
            className="hidden lg:block text-primary-900 hover:text-white"
            icon={<FaProjectDiagram size={24} />}
            tooltipId={`projects-tooltip-${id}`}
            tooltip={`${projectsCount} Project${projectsCount > 1 ? 's' : ''}`}
            {...commonProps}
          />
        ) : null}

        {yearsOfExperience && yearsOfExperience >= 0 ? (
          <IconButton
            aria-label="Years of Knowledge"
            className="hidden lg:block text-primary-900 hover:text-white"
            icon={<FaCalendarAlt size={24} />}
            tooltipId={`knowledge-tooltip-${id}`}
            tooltip={`${yearsOfExperience} Year${yearsOfExperience > 1 ? 's' : ''}`}
            {...commonProps}
          />
        ) : null}
      </div>
    </div>
  );
}

export default React.memo(SkillIcons);
