import React, { memo } from "react";
import { FaSpinner } from "react-icons/fa";
import clsx from "clsx";
import SkillIcons from "./SkillIcons";
import IconComponent from "@/app/(content)/projects/components/IconComponent";
import { Skill } from "../../types";

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
        "rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500",
        "shadow-lg transition-transform duration-300 ease-in-out",
        "hover:scale-105 hover:from-secondary-500 hover:to-primary-500 hover:shadow-2xl",
        "border border-white border-opacity-20"
      )}
      tabIndex={0}
      aria-label={`Skill card for ${name}`}
    >
      <SkillIcons
        id={id}
        experienceCount={experiences.length || 0}
        projectsCount={projects.length || 0}
        yearsOfExperience={yearsOfExperience}
      />

      <div className="flex h-full flex-col items-center md:items-start justify-end rounded-lg bg-gradient-to-br from-primary-400 to-secondary-300 shadow-md transition-transform hover:scale-105 dark:from-purple-700 dark:to-blue-800 p-2 lg:p-3 gap-2 lg:gap-4 2xl:p-6">
        <React.Suspense fallback={<FaSpinner className="animate-spin text-white" />}>
          <IconComponent
            icon={icon || "FaSpinner"}
            ariaLabel={name}
            className="text-white transition-transform duration-300 group-hover:scale-110 text-3xl xl:text-4xl"
          />
        </React.Suspense>
        <h3 className="my-0 font-semibold text-white text-center md:text-left text-base lg:text-xl">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default memo(SkillCard);