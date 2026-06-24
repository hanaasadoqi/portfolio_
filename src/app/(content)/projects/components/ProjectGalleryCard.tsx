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
    <Link href={`/projects/${project.id}`}>
      <div
        className={`relative group cursor-pointer ${size === 'large' ? 'h-[400px] md:h-[500px]' : 'h-[250px] md:h-[300px]'
          } w-full rounded-xl overflow-hidden transition-all duration-300 border-2 border-accent-one/20 hover:border-accent-one/50 shadow-lg hover:shadow-2xl hover:shadow-accent-one/20`}
      >
        {/* Background Image */}
        <div className="relative w-full h-full">
          <Image
            src={`/images/${toId(project.title)}.jpg`}
            alt={`Image for ${project.title}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes={
              size === 'large'
                ? "(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 800px"
                : "(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 400px"
            }
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
        </div>

        {/* Content - positioned at bottom */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
          {/* Featured badge */}
          {size === 'large' && (
            <div className="mb-3 inline-flex w-fit">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-accent-one to-accent-two text-white">
                Featured
              </span>
            </div>
          )}

          {/* Title and Description */}
          <h2 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold text-white line-clamp-2">
            {project.title}
          </h2>
          <p className="text-sm md:text-base text-gray-100 line-clamp-2 mb-3">
            {project.description}
          </p>

          {/* Links Section */}
          {/* <div className="overflow-x-auto scrollbar-hide flex items-center gap-2">
            <ProjectLinksBar
              title={project.title}
              details={project.details}
              iconOnly
            />
          </div> */}
        </div>

        {/* Accent border glow on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-one to-accent-two rounded-xl opacity-0 group-hover:opacity-30 blur transition-all duration-300 -z-10 group-hover:-z-20"></div>
      </div>
    </Link>
  );
}

export default ProjectGalleryCard
