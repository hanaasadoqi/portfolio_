
'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import { ProjectPreview } from '@/types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { LinkButton } from '@/components';
import { toId } from '@/utils/toId';

interface ProjectCardProps {
  project: ProjectPreview;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={`/images/${toId(project.title)}.jpg`}
          alt={`Screenshot of ${project.title}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 flex-grow line-clamp-3">{project.description}</p>

        {/* Action IconButtons
        <div className="mt-4 flex space-x-3">
          {project.details?.demoUrl && (
            <LinkButton
              variant="primary"
              size="sm"
              href={project.details.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} Live`}
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </LinkButton>
          )}
          {project.details?.codeRepo && (
            <LinkButton
              variant="secondary"
              size="sm"
              href={project.details.codeRepo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub className="mr-2" />
              GitHub
            </LinkButton>
          )}
        </div> */}
      </div>
    </motion.div>
  );
};
export default memo(ProjectCard);
