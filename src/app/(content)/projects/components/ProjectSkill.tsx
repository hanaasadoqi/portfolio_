import { toId } from '@/utils/toId';
import clsx from 'clsx';
import React, { memo, Suspense } from 'react';
import DocumentationLink from './DocumentationLink';
import IconComponent from './IconComponent';

const ProjectSkillCard: React.FC<{
  skill: any;
  className?: string;
  tooltip?: string;
  iconColorClass?: string;
}> = memo(async ({ skill, className, tooltip, iconColorClass }) => {
  const tooltipId = tooltip ? `${skill.id}-${toId(tooltip)}-tooltip` : undefined;

  return (
    <div
      className={clsx(
        'flex flex-col items-center bg-white/80 dark:bg-black/60 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105',
        {
          'h-20 gap-2 w-16 md:w-28 md:h-28 p-2 md:p-4 justify-between': skill.name,
          'h-10 w-10 justify-center': !skill.name,
        },
        className
      )}
    >
      {skill.name && (
        <h6 className="mb-0 text-xs font-semibold text-center">{skill.name}</h6>
      )}

      <IconComponent icon={skill.icon} className={iconColorClass} />

      {skill.documentation && (
        <DocumentationLink documentation={skill.documentation} />
      )}
    </div>
  );
});

export default ProjectSkillCard;

ProjectSkillCard.displayName = 'ProjectSkillCard';