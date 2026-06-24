import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { WorkExperience } from '@/types';

interface ExperienceCardProps extends WorkExperience { }

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  id,
  company,
  role,
  location,
  startDate,
  endDate,
  logo,
  description,
}) => {
  return (
    <motion.article
      id={`experience-${id}`}
      className="relative m-0 md:mx-auto w-full md:max-w-4xl rounded-xl border-2 border-secondary-200 dark:border-accent-one/30 bg-white dark:bg-secondary-900/50 p-6 md:p-8 text-left shadow-md hover:shadow-xl hover:border-accent-one/50 transition-all duration-300 ease-in-out"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      tabIndex={0}
      aria-labelledby={`experience-title-${id}`}
    >
      {/* Timeline dot - optional visual */}
      <div className="absolute -left-4 md:-left-6 top-8 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-accent-one to-accent-two shadow-lg hidden md:block"></div>
      
      <header className="mb-6 flex items-start space-x-4">
        <div className="relative flex h-16 w-16 md:h-20 md:w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 shadow-md">
          {logo ? (
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              sizes="80px"
              className="object-contain p-2"
              priority
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-accent-one/20 to-accent-two/20" />
          )}
        </div>
        <div className="flex-1">
          <h3
            id={`experience-title-${id}`}
            className="text-xl md:text-2xl font-bold text-secondary-900 dark:text-secondary-50 mb-1"
          >
            {company}
          </h3>
          <p className="text-base md:text-lg font-semibold text-accent-one">
            {role}
          </p>
          <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 mt-1">
            {location} • {new Date(startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - {endDate ? new Date(endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present'}
          </p>
        </div>
      </header>

      <ul className="space-y-3 text-sm md:text-base text-secondary-700 dark:text-secondary-300">
        {description.map((desc: string, index: number) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex gap-3"
          >
            <span className="text-accent-one flex-shrink-0 mt-1">▸</span>
            <span>{desc}</span>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
};

export default React.memo(ExperienceCard);
