import React from 'react';
import { ProjectPreview, Suggestion } from '@/types';
import { fetchProjects, fetchProjectSuggestions } from '@/app/lib/actions/projects';
import ProjectGallery from './ProjectGallery';

const ProjectGalleryContainer: React.FC = async () => {
  const allProjects = await fetchProjects()
  const featuredProject = allProjects[0];
  const rightGallery = allProjects.slice(1, 3);
  const bottomGallery = allProjects.slice(3);

  return (
    <div className="w-full h-full">
      <h2 className="text-primary-900 dark:text-primary-100 text-2xl md:text-3xl lg:text-4xl">Projects</h2>
      <ProjectGallery featuredProject={featuredProject} rightProjects={rightGallery} bottomProjects={bottomGallery} />
    </div>
  )
}

export default ProjectGalleryContainer