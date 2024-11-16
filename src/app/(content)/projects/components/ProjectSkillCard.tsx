'use client'

import { IconLibrary, LinkButton } from "@/components";
import { toId } from "@/utils/toId";
import clsx from "clsx";
import Link from "next/link";
import { memo } from "react";

const ProjectSkillCard: React.FC<{
  skill: any;
  className?: string;
  tooltip?: string;
  iconColorClass?: string;
}> = memo(({ skill, className, tooltip, iconColorClass }) => {
  const IconComponent =
    skill.icon && skill.icon in IconLibrary
      ? IconLibrary[skill.icon as keyof typeof IconLibrary]
      : IconLibrary.Loading;

  const tooltipId = tooltip ? `${skill.id}-${toId(tooltip)}-tooltip` : undefined;

  return (
    <div
      className={clsx(
        "flex flex-col items-center bg-white/80 dark:bg-black/60 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105",
        {
          "h-20 gap-2 w-16 md:w-28 md:h-28 p-2 md:p-4 justify-between": skill.name,
          "h-10 w-10 justify-center": !skill.name,
        },
        className
      )}
    >

      {skill.name && (
        <h6 className="mb-0 text-xs font-semibold text-center">{skill.name}</h6>
      )}

      <LinkButton
        href={`/skills/${skill.id}`}
        scroll={false}
        icon={<IconComponent />}
        tooltip={tooltip}
        tooltipId={tooltipId}
        tooltipPlace="bottom-start"
        variant="ghost"
        iconOnly
        className={iconColorClass}
      />

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

export default ProjectSkillCard

ProjectSkillCard.displayName = 'ProjectSkillCard';
