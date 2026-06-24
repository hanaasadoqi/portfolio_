import React, { memo } from "react";
import clsx from "clsx";
import SkillIcons from "./SkillIcons";
import { Skill } from "../../types";
import SkillIcon from "../SkillIcon";

type ProjectSkill = Omit<Skill, "_count" | "categories" | "tags" | "startYear" | "projects">;

interface SkillCardProps {
  skill: any;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { id, name, icon, projects, experiences } = skill;
  const yearsOfExperience = "startYear" in skill ? new Date().getFullYear() - skill.startYear : undefined;

  return (
    <div
      className={clsx(
        "skill-card group relative h-32 md:h-48 max-h-52 w-full transform cursor-pointer overflow-hidden",
        "rounded-2xl",
        "shadow-lg transition-transform duration-300 ease-in-out",
        "hover:scale-105 hover:shadow-2xl",
        "border border-white border-opacity-20"
      )}
      tabIndex={0}
      aria-label={`Skill card for ${name}`}
    >
      <SkillIcons
        id={id}
        experienceCount={Array.isArray(experiences) ? experiences.length : 0}
        projectsCount={Array.isArray(projects) ? projects.length : 0}
        yearsOfExperience={yearsOfExperience}
      />

      <div className="flex h-full flex-col items-center justify-center md:items-start justify-end rounded-lg bg-gradient-to-br from-primary-400 to-secondary-300 shadow-md transition-transform hover:scale-105 dark:from-purple-700 dark:to-blue-800 p-4 md:p-8 gap-2 lg:gap-4 ">
        {/* <React.Suspense fallback={<FaSpinner className="animate-spin text-white" />}> */}
        <SkillIcon skillName={skill.name} altText={`${skill.name} Logo`} />
        {/* </React.Suspense> */}
        <h3 className="truncate line-clamp-3 my-0 font-semibold text-white text-center md:text-left text-base">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default memo(SkillCard);
