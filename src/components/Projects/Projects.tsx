import React from 'react'
import ProjectCard, { ProjectCardProps } from './ProjectCard' // Adjust the import path accordingly

interface ProjectProps {
  projectsData: ProjectCardProps[]
}

const Projects: React.FC<ProjectProps> = ({ projectsData: projects }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}

export default Projects
