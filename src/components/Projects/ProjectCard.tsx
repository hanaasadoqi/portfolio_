import React from 'react'
import Image from 'next/image'

export interface ProjectCardProps {
  id: number
  title: string
  description: string
  imageUrl: string
  backendRepoUrl: string
  frontendRepoUrl: string
  demoUrl: string
  skills: string[]
  publishedDate: string
  status: string
  tags: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  backendRepoUrl,
  frontendRepoUrl,
  demoUrl,
  skills,
  publishedDate,
  status,
  tags,
}) => {
  return (
    <div className="mx-auto mb-8 flex h-full max-w-md flex-col justify-evenly rounded-lg bg-white p-6 shadow-lg">
      <Image
        src={imageUrl}
        alt={`${title} thumbnail`}
        width={192}
        height={192}
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">{status}</span>
        <span className="text-sm text-gray-500">
          {new Date(publishedDate).toLocaleDateString()}
        </span>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
        <a
          href={demoUrl}
          className="whitespace-nowrap rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Live Demo
        </a>
        <a
          href={backendRepoUrl}
          className="whitespace-nowrap rounded-full bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
        >
          Backend
        </a>
        {frontendRepoUrl && (
          <a
            href={frontendRepoUrl}
            className="whitespace-nowrap rounded-full bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
          >
            Frontend
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
