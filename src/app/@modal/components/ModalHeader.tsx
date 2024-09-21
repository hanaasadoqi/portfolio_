'use client'

import React, { memo, useState } from 'react'
import { Icon, IconButton, IconLibrary } from '@/components'
import { Skill as SkillModalType } from '@/app/skills/types'
import clsx from 'clsx'
import { FaCog } from 'react-icons/fa'

interface ModalHeaderProps {
  icon?: React.ReactNode
  title?: string
  onClose?: () => void
  isProject?: boolean
  showSkills?: boolean
  handleSkills?: () => void
}

const ModalHeader: React.FC<ModalHeaderProps> = memo(({ icon, title, onClose, isProject = false, handleSkills, showSkills }) => {
  const IconComponent = icon
    ? IconLibrary[icon as keyof typeof IconLibrary]
    : IconLibrary['Loading']


  return (
    <div className={clsx("flex items-center justify-center w-full border-b border-gray-200 relative z-50 bg-transparent", { "p-4": title })}>
      <div className="flex items-center flex-1 justify-center space-x-4 text-primary w-full">
        {(!icon || !isProject) ?? (IconComponent && <Icon icon={<IconComponent size={48} />} />)}
        {title && <h2 className="mb-0 text-xl md:text-2xl lg:text-3xl font-semibold">{title}</h2>}
        {isProject && <IconButton icon={<FaCog />} size="lg" variant="ghost" tooltip={showSkills ? "Hide" : "Show Skills"} tooltipId="show-skills-tooltip" onClick={handleSkills} />}
      </div>

      <IconButton
        icon={<IconLibrary.close />}
        ariaLabel="Close Modal"
        onClick={onClose}
        size="md"
        className="fixed bottom-4 lg:top-4 lg:bottom-auto right-4"
      />
    </div>
  )
})

export default ModalHeader

ModalHeader.displayName = "Modal Header"