import React from 'react';
import Link from 'next/link';
import projectsData from '@/app/lib/data/projectsData.json';
import ProjectGallery from './ProjectGallery';

const ProjectGalleryContainer: React.FC = async () => {
  const allProjects = projectsData as any[];
  const featuredProject = allProjects[0];
  const rightGallery = allProjects.slice(1, 3);
  const bottomGallery = allProjects.slice(3);

  return (
    <div className="w-full h-full space-y-8">
      <div className="space-y-2">
        <h2 className="text-secondary-900 dark:text-secondary-50 text-3xl md:text-4xl lg:text-5xl font-bold">Featured Projects</h2>
        <p className="text-secondary-600 dark:text-secondary-400 text-base md:text-lg">Showcasing my latest work and technical achievements</p>
      </div>
      <ProjectGallery featuredProject={featuredProject} rightProjects={rightGallery} bottomProjects={bottomGallery} />
      <div className="pt-4">
        <Link href="/projects" className="inline-flex items-center gap-2 text-accent-one hover:text-accent-two font-semibold transition-colors">
          View all projects
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ProjectGalleryContainer
