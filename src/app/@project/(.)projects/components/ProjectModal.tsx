'use client'

import React, { useState } from 'react'
import Content from './Content'
import ModalContainer from '@/app/@skill/components/ModalContainer'
import { Project } from '@/app/projects/types'

const ProjectModal: React.FC<{ project: Project }> = ({ project }) => {
  const [showSkills, setShowSkills] = useState(false)

  const handleShowSkills = () => {
    setShowSkills(!showSkills)
  }
  return (
    <ModalContainer title={project.title} handleSkills={handleShowSkills} showSkills={showSkills} isProject>
      <Content project={project} handleSkills={handleShowSkills} showSkills={showSkills} />
    </ModalContainer>
  )
}

export default ProjectModal;