import React from 'react';
import { ProjectPreview, Suggestion } from '@/types';
import ProjectsClient from './components/ProjectsClient';
import { fetchProjects, fetchProjectSuggestions } from '@/app/lib/actions/projects';

interface ProjectsPageProps {
  projects: ProjectPreview[];
  projectTitles: Suggestion[];
}

const ProjectsPage = async () => {
  const projects: ProjectPreview[] = await fetchProjects();
  const projectTitles: Suggestion[] = await fetchProjectSuggestions('');

  return <ProjectsClient initialProjects={projects} projectTitles={projectTitles} />;
};

export default ProjectsPage;
