'use client';

import React, { useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowButton } from './ArrowButton';
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
      <div className="flex w-full  md:max-w-5xl flex-col items-center justify-center">
        <h3
          id="experience-heading"
          className="w-full text-center text-2xl font-semibold dark:text-primary-900 md:text-left md:text-3xl lg:text-4xl"
        >
          Experience
        </h3>
        <div className="relative z-10 mt-6 w-full">
          {/* Left Arrow Button */}
          <ArrowButton
            onClick={prevSlide}
            direction="left"
            hidden={totalExperiences <= 1}
            className="absolute left-0 -bottom-4 md:hidden"
            ariaLabel="Previous Experience"
          />

          <div className="relative m-0 md:mx-auto h-full w-full">
            <AnimatePresence initial={false}>
              {experiences.map((experience, index) =>
                index === currentIndex ? (
                  <ExperienceCard key={index} {...experience} />
                ) : null
              )}
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <ArrowButton
            onClick={nextSlide}
            direction="right"
            hidden={totalExperiences <= 1}
            className="absolute right-0 -bottom-4 md:hidden"
            ariaLabel="Next Experience"
          />
        </div>
      </div>
      {/* Timeline Component */}
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