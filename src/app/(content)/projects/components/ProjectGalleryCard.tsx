import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import ProjectLinksBar from './ProjectLinksBar';
import { toId } from '@/utils/toId';
import clsx from 'clsx';

interface ProjectCardProps {
  project: any;
  size?: 'large' | 'medium' | 'small';
}

const ProjectGalleryCard: React.FC<ProjectCardProps> = ({ project, size = 'small' }) => {
  return (
    <div
      className={`relative group ${size === 'large' ? 'h-[500px]' : 'h-[250px]'
        } w-full rounded-md shadow-md group-hover:shadow-lg group-hover:scale-105 transition-transform`}
    >
      <div className="relative aspect-w-16 aspect-h-9 w-full h-full">
        <Image
          src={`/images/${toId(project.title)}.jpg`}
          alt={`Image for ${project.title}`}
          fill
          className="object-cover rounded-md"
          sizes={
            size === 'large'
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 800px"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 400px"
          }
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center shadow-lg rounded-md group-hover:shadow-xl p-4 overflow-hidden">
        <div className="flex flex-col justify-center items-center max-w-full max-h-full space-y-2">

          {/* Title and Description */}
          <Link href="/projects/[id]" as={`/projects/${project.id}`}>
            <h2 className={clsx("mb-2 text-base md:text-lg lg:text-2xl font-bold line-clamp-2", {
              // Additional conditional classes if needed
            })}>
              {project.title}
            </h2>
            <p className="text-sm md:text-base line-clamp-3">
              {project.description}
            </p>
          </Link>

          {/* Links Section */}
          <div className={clsx("overflow-x-auto max-w-full scrollbar-hide flex items-center justify-center mt-2")}>
            <ProjectLinksBar
              title={project.title}
              details={project.details}
              iconOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGalleryCard