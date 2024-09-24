import React from 'react';
import ExperienceCarousel from './ExperienceCarousel';
import { WorkExperience } from '@/types';
import { fetchExperiences } from '@/app/lib/actions/experience';
import { TimelineDataProps } from './Timeline';

export default async function ExperienceContainer() {
  const experiences = await fetchExperiences();
  const timelineData = experiences.map((experience: any) => ({
    logo: experience.logo,
    company: experience.company,
  }));

  return <ExperienceCarousel experiences={experiences} timelineData={timelineData} />;
}
