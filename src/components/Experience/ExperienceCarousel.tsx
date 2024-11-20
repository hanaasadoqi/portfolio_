'use client';

import React, { useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { WorkExperience } from '@/types';
import { TimelineDataProps } from './Timeline';

const ExperienceCard = dynamic(() => import('./ExperienceCard'), {
  loading: () => <p>Loading experience...</p>,
  ssr: false,
});
const Timeline = dynamic(() => import('./Timeline'), {
  loading: () => <p>Loading timeline...</p>,
  ssr: false,
});

const ScrollButton = dynamic(() => import('../AboutContainer/ScrollButton'), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

interface ExperienceCarouselProps {
  experiences: WorkExperience[];
  timelineData: TimelineDataProps[];
}

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({ experiences, timelineData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalExperiences = useMemo(() => experiences.length, [experiences.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalExperiences - 1 : prevIndex - 1
    );
  }, [totalExperiences]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalExperiences - 1 ? 0 : prevIndex + 1
    );
  }, [totalExperiences]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <h3
          id="experience-heading"
          className="w-full text-center text-2xl font-semibold text-primary-900 dark:text-primary-100 md:text-left md:text-3xl lg:text-4xl"
        >
          Experience
        </h3>
        <div className="relative z-10 mt-6 w-full">
          <ScrollButton
            direction='left'
            visible={currentIndex !== 0}
            onClick={prevSlide}
            className="md:hidden"
          />
          <ScrollButton
            direction='right'
            visible={currentIndex !== totalExperiences - 1}
            onClick={nextSlide}
            className="md:hidden"
          />

          <div className="relative m-0 md:mx-auto h-full w-full">
            {experiences.map((experience, index) =>
              index === currentIndex ? (
                <ExperienceCard key={index} {...experience} />
              ) : null
            )}
          </div>
        </div>
      </div>
      <Timeline
        experiences={timelineData}
        currentIndex={currentIndex}
        goToSlide={goToSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />

    </>
  );
};

export default React.memo(ExperienceCarousel);