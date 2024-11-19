import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowButton } from './ArrowButton';

interface TimelineProps {
  experiences: TimelineDataProps[]
  currentIndex: number;
  goToSlide: (index: number) => void;
  prevSlide: () => void;
  nextSlide: () => void;
}

export interface TimelineDataProps {
  logo: string;
  company: string;
}

const Timeline: React.FC<TimelineProps> = ({
  experiences,
  currentIndex,
  goToSlide,
  prevSlide,
  nextSlide,
}) => {
  return (
    <nav
      className="w-full relative flex flex-col items-center justify-center gap-4 py-8 md:py-12"
      aria-label="Experience Timeline"
    >
      <div className="max-w-3xl w-full relative">

        {/* Left Arrow Button */}
        <ArrowButton
          onClick={prevSlide}
          direction="left"
          hidden={experiences.length <= 1}
          className="hidden md:block absolute left-0"
          ariaLabel="Previous Experience"
        />
        {/* Right Arrow Button */}
        <ArrowButton
          onClick={nextSlide}
          direction="right"
          hidden={experiences.length <= 1}
          className="hidden md:block absolute right-0"
          ariaLabel="Next Experience"
        />
      </div>

      <ul className="flex justify-center items-center space-x-4 md:space-x-6">
        {experiences.map((experience, index) => (
          <li key={index}>
            <motion.button
              type="button"
              className={clsx(
                'inline-flex flex-col items-center transition-transform duration-500 ease-in-out focus:outline-none  gap-2',
                index === currentIndex
                  ? 'scale-125 opacity-100'
                  : 'scale-90 opacity-50'
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${experience.company}`}
              aria-current={index === currentIndex ? 'step' : undefined}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-10 md:h-14 w-10 md:w-14">
                {experience.logo ? (
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    sizes="(min-width: 768px) 50vw"
                    className="rounded-full bg-white object-contain shadow-primary-200"
                    priority
                  />
                ) : (
                  <div className="h-10 md:h-14 w-10 md:w-14 rounded-full bg-primary-200 dark:bg-primary-600" />
                )}
              </div>
              {index === currentIndex && (
                <span className="mt-8 max-w-[50px] text-center text-sm font-bold text-primary-800 dark:text-primary-200">
                  {experience.company}
                </span>
              )}
            </motion.button>
          </li>
        ))}
      </ul>


    </nav>
  );
};

export default React.memo(Timeline);
