import React from 'react';
import { fetchProjects } from '@/app/lib/actions/projects';
import ProjectsShowcase from './ProjectsShowcase';

const ProjectGalleryContainer: React.FC = async () => {
  const allProjects = await fetchProjects()

  return (
    <div className="w-full h-full">
      <div className="section-header mb-8 w-full text-center md:text-left lg:mb-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="mt-3 text-base text-gray-400 md:text-lg">
          A showcase of projects built with modern technologies
        </p>
      </div>
      <ProjectsShowcase projects={allProjects} />
    </div>
  )
}

export default ProjectGalleryContainer
