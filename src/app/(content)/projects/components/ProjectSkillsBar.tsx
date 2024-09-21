import SkeletonSkillCard from '@/app/skills/components/SkillCard/SkeletonCard';
import SkillCard from '@/app/skills/components/SkillCard/SkillCard';
import type { SkillCard as SkillCardType } from '@/types';
import clsx from 'clsx';
import React, { memo, Suspense } from 'react';

interface SkillsBarProps {
  skills: SkillCardType[]
}

function ProjectSkillsBar({ skills }: SkillsBarProps) {
  return (
    <div className="skills-section mt-8 flex items-center justify-center w-full">
      <ul className={clsx("hidden md:flex overflow-x-auto max-w-sm md:max-w-sm lg:max-w-2xl items-center justify-center md:gap-2 lg:gap-6 md:p-2 lg:p-4")}>
        {skills.map((skill: SkillCardType, index: number) => (
          <li key={index}>
            <Suspense fallback={<SkeletonSkillCard />}>
              <SkillCard
                skill={skill}
              />
            </Suspense>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(ProjectSkillsBar)