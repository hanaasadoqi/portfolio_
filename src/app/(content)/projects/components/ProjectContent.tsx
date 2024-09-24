import React, { JSXElementConstructor, memo, ReactElement, Suspense } from 'react'
import { ProjectPage } from '@/types/project.types'
import Image from 'next/image'
import Link from 'next/link'
import SkeletonSkillCard from '@/app/skills/components/SkillCard/SkeletonCard'
import { Icon, IconLibrary } from '@/components/shared'
import ReadButton from '@/components/ArticlesListContainer/PreviewArticleCard/ReadButton'
import { SkillPreview } from '@/types'
import { ProjectLinksBar } from './ProjectLinksBar'
import type { SkillCard } from '@/types'
import { toId } from '@/utils/toId'

const SkillCard: React.FC<{ skill: SkillPreview }> = memo(({ skill }) => {
  const IconComponent =
    skill.icon && skill.icon in IconLibrary
      ? IconLibrary[skill.icon as keyof typeof IconLibrary]
      : IconLibrary.Loading;

  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-between text-primary-900 dark:text-primary-100 gap-2 w-20 h-20 md:w-28 md:h-28 bg-white/80 dark:bg-black/60 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h6 className="mb-0 text-xs font-semibold text-center">{skill.name}</h6>
      <Link href={`/skills/${skill.id}`} scroll={false}>
        {skill.icon && (
          <Icon
            icon={<IconComponent size={24} />}
            className="text-primary-900 dark:text-primary-100 hover:scale-105 hover:text-primary-200"
            aria-hidden="true"
          />
        )}
      </Link>
      {skill.documentation && (
        <Link
          href={skill.documentation}
          className="hidden md:block text-xs text-blue-500 underline hover:text-blue-600"
          target="_blank"
        >
          Docs
        </Link>
      )}
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

interface ProjectContentProps {
  project: ProjectPage
  showSkills?: boolean
  handleSkills?: () => void
  content?: ReactElement<any, string | JSXElementConstructor<any>>
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project, handleSkills, showSkills, content }) => {
  return (
    <div className="min-h-screen w-screen lg:w-full lg:mx-auto py-4 px-2 lg:px-8 overflow-y-auto bg-white/50 dark:bg-black/50 flex flex-col items-center justify-between">

      <div className="flex flex-col items-center w-full h-full">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-4">{project.title}</h2>
        <div className="flex items-center md:justify-center flex-nowrap gap-2 mb-4 w-full overflow-x-auto scrollbar-hide">
          {project.skills && project.skills.length > 0 && (
            <Suspense fallback={<SkeletonSkillCard />}>
              {project.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </Suspense>
          )}
        </div>

        <div className="flex flex-col justify-center items-center gap-4 mb-4 w-full">
          <Image
            src={`/images/${toId(project.title || '')}.jpg`}
            alt={`${project.title} Image`}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
          <ProjectLinksBar title={project.title} details={project.details} />
        </div>
        <div id="project-details" className="max-w-xl">
          <h5>Description</h5>
          <p>{project.description}</p>
        </div>
      </div>

      <div className="max-w-5xl md:max-w-6xl lg:max-w-7xl w-full mt-8 flex flex-col md:flex-row items-center justify-center">
        {content}
      </div>
    </div>
  )
}

export default memo(ProjectContent)

ProjectContent.displayName = "ProjectContent"
