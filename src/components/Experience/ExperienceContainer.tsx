import React from 'react';
import ExperienceCarousel from './ExperienceCarousel';
import experienceData from '@/app/lib/data/experienceData.json';

export default async function ExperienceContainer() {
  const experiences = experienceData as any[];
  const timelineData = experiences.map((experience: any) => ({
    logo: experience.logo,
    company: experience.company,
  }));

  return (
    <div className="w-full space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-secondary-50">Experience</h2>
        <p className="text-base md:text-lg text-secondary-600 dark:text-secondary-400">My journey building scalable systems and leading technical initiatives</p>
      </div>
      <ExperienceCarousel experiences={experiences} timelineData={timelineData} />
    </div>
  );
}
