
import React from 'react';
import ProjectGrid from './ProjectGrid';

const ProjectGallery: React.FC<{
  featuredProject: any;
  rightProjects: any[];
  bottomProjects: any[];
}> = ({ featuredProject, rightProjects, bottomProjects }) => {
  return (
    <ProjectGrid
      featuredProject={featuredProject}
      rightProjects={rightProjects}
      bottomProjects={bottomProjects}
    />
  );
};

export default ProjectGallery;
