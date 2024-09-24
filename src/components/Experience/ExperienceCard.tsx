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
      className="m-0 md:mx-auto w-full md:max-w-5xl rounded-lg border border-primary-300 bg-gradient-to-r from-primary-100 to-primary-200 p-8 text-left shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:border-primary-800 dark:from-primary-900 dark:to-secondary-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      tabIndex={0}
      aria-labelledby={`experience-title-${id}`}
    >
      <header className="mb-6 flex items-center space-x-4">
        <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
          {logo ? (
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              sizes="56px"
              className="object-contain shadow-inner"
              priority
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-gray-200" />
          )}
        </div>
        <div className="prose-2xl">
          <h3
            id={`experience-title-${id}`}
            className="text-lg font-bold text-primary-800 dark:text-primary-100 md:text-xl lg:text-2xl mb-0"
          >
            {company}
          </h3>
          <p className="text-sm text-secondary-800 dark:text-secondary-300 md:text-base lg:text-lg">
            {role}
          </p>
        </div>
      </header>
      <div className="space-y-4 text-sm text-primary-600 dark:text-white md:text-base lg:text-lg">
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Dates:</strong> {new Date(startDate).toLocaleDateString()} - {new Date(endDate || '').toLocaleDateString()}
        </p>
        <ul className="list-disc space-y-2 pl-5 prose-lg md:prose-xl">
          {description.map((desc: string, index: number) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-primary-800 dark:text-white"
            >
              {desc}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default React.memo(ExperienceCard);
