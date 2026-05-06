import React from 'react';
import { fetchProjects } from '@/app/lib/actions/projects';
import ProjectGallery from './ProjectGallery';

const ProjectGalleryContainer: React.FC = async () => {
  const allProjects = await fetchProjects()
  const featuredProject = allProjects[0];
  const rightGallery = allProjects.slice(1, 3);
  const bottomGallery = allProjects.slice(3);

  return (
    <div className="w-full h-full">
      <div className="section-header mb-8 w-full text-center md:text-left lg:mb-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          <span className="gradient-text">Projects</span>
        </h2>
      </div>
      <ProjectGallery featuredProject={featuredProject} rightProjects={rightGallery} bottomProjects={bottomGallery} />
    </div>
  )
}

export default ProjectGalleryContainer
