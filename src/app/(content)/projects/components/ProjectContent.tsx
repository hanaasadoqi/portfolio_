import React, { memo, Suspense } from 'react';
import { ProjectPage } from '@/types/project.types';
import Image from 'next/image';
import { toId } from '@/utils/toId';
import clsx from 'clsx';

const ProjectLinksBar = React.lazy(() => import('./ProjectLinksBar'));
const ProjectSkill = React.lazy(() => import('./ProjectSkill'));
const ProjectInfo = React.lazy(() => import('./ProjectInfo'));

interface ProjectContentProps {
  project: ProjectPage;
  showSkills?: boolean;
  handleSkills?: () => void;
  content?: string;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project, handleSkills, showSkills, content }) => {
  return (
    <div
      className={clsx(
        'container w-full md:mx-auto py-4 px-2 lg:px-8 bg-white/50 dark:bg-black/50 flex flex-col items-center justify-between',
        { 'mt-8 md:mt-16 lg:mt-24 overflow-y-auto': content }
      )}
    >
      <div className="flex flex-col items-center w-full h-full">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-4">{project.title}</h2>

        {project.skills && project.skills.length > 0 && (
          <div className="flex items-center justify-center flex-nowrap gap-2 mb-4 w-full overflow-x-auto scrollbar-hide">
            {project.skills.map((skill, index) => (
              <ProjectSkill key={index} skill={skill} />
            ))}
          </div>
        )}

        <div className="flex flex-col justify-center items-center gap-4 mb-4 w-full">
          <Image
            src={`/images/${toId(project.title || '')}.jpg`}
            alt={`${project.title} Image`}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
          <Suspense fallback={<div>Loading Links...</div>}>
            <ProjectLinksBar title={project.title} details={project.details} />
          </Suspense>
        </div>

        <div id="project-details" className="max-w-xl">
          <h5>Description</h5>
          <p>{project.description}</p>
        </div>
      </div>

      {content && (
        <Suspense fallback={<div>Loading Project Info...</div>}>
          <div className="max-w-5xl md:max-w-6xl lg:max-w-7xl w-full mt-2 flex flex-col justify-center">
            <ProjectInfo content={content} />
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default memo(ProjectContent);

ProjectContent.displayName = 'ProjectContent';
