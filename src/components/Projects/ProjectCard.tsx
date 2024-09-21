'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  FaPlay,
  FaServer,
  FaLaptopCode,
  FaBloggerB,
  FaCode,
} from 'react-icons/fa'
import { MdOpenInBrowser } from 'react-icons/md'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Link from 'next/link'
import { ArticlePreview, ProjectPage, ProjectPreview, SkillPreview } from '@/types'
import ArticleCard from '../ArticlesListContainer/PreviewArticleCard/PreviewArticleCard'

const ProjectCard: React.FC<ProjectPreview> = ({
  title,
  description,
  image,
  // details,
  // skills,
  // articles,
  launchDate,
  status,
  tags,
}) => {
  const [showBlogs, setShowBlogs] = useState(false)
  // const { frontendRepo, backendRepo, codeRepo, demoUrl, videoDemo } = details;

  return (
    <div className="-z-10 flex h-full min-h-[500px] max-w-full flex-col justify-between rounded-lg bg-gradient-to-br from-primary-300 to-secondary-300 p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gradient-to-br dark:from-secondary-800 dark:to-primary-800">
      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
        {image && (
          <Image
            src={image}
            alt={`${title} thumbnail`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        )}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-primary-100">
        {title}
      </h3>

      <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-primary-300">
        {description}
      </p>

      {/* <div className="scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 mb-4 flex gap-2 overflow-x-auto whitespace-nowrap">
        {skills && skills.map((skill: SkillPreview, index: number) => (
          <span
            key={`skill-${skill.name}-${index}`}
            className="whitespace-nowrap rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600 dark:bg-blue-900 dark:text-blue-300"
          >
            {skill.name}
          </span>
        ))} */}
      {/* </div> */}

      <div className="mb-4 flex items-center justify-between text-sm font-medium text-gray-500 dark:text-primary-400">
        <span>{status}</span>
        <span>
          {launchDate
            ?
            new Date(launchDate).toLocaleDateString()
            : 'TBD'}
        </span>
      </div>

      {/* Tags */}
      <div className="scrollbar-thin mb-4 flex gap-2 overflow-x-auto whitespace-nowrap">
        {tags && tags.map((tag: string, index: number) => (
          <span
            key={`${tag}-${index}`}
            className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700 dark:bg-gray-600 dark:text-green-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      {/* <div className="mb-4 flex flex-row items-center justify-center gap-4 overflow-x-auto whitespace-nowrap">
        {videoDemo && (
          <Link
            href={videoDemo}
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Live Demo"
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-500 dark:hover:bg-blue-600"
            aria-label={`${title} Live Demo`}
          >
            <FaPlay />
          </Link>
        )}

        {backendRepo && backendRepo !== 'N/A' && (
          <Link
            href={backendRepo}
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Backend Code"
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
            aria-label={`${title} Backend Repository`}
          >
            <FaServer />
          </Link>
        )}

        {frontendRepo && frontendRepo !== 'N/A' && (
          <Link
            href={frontendRepo}
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Frontend Code"
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
            aria-label={`${title} Frontend Repository`}
          >
            <FaLaptopCode />
          </Link>
        )}

        {codeRepo && codeRepo !== 'N/A' && (
          <Link
            href={codeRepo}
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Code Repository"
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
            aria-label={`${title} Code Repository`}
          >
            <FaCode />
          </Link>
        )}
        {demoUrl && (
          <Link
            href={demoUrl}
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Demo"
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-blue-700"
            aria-label={`${title} Demo`}
          >
            <MdOpenInBrowser />
          </Link>
        )}

        {articles && articles.length > 0 && (
          <button
            type="button"
            data-tooltip-id="link-tooltip"
            data-tooltip-content="Blogs"
            aria-label="Show Associated Blogs"
            onClick={() => setShowBlogs(!showBlogs)}
            className="flex items-center justify-center rounded-full bg-gray-300 p-3 text-gray-800 transition-colors hover:bg-yellow-600 dark:bg-gray-400 dark:text-gray-900 dark:hover:bg-indigo-700"
          >
            <FaBloggerB />
          </button>
        )}
      </div> */}

      {/* Expandable Blogs Section */}
      {/* {showBlogs && articles && (
        <div className="flex flex-col gap-4">
          {articles.map(
            (blog: ArticlePreview) =>
              blog && <ArticleCard key={blog.id} {...blog} parent="project" subtitle={blog.subtitle} slug={blog.slug} />
          )}
        </div>
      )} */}

      {/* <ReactTooltip id="link-tooltip" place="top" /> */}
    </div>
  )
}

export default ProjectCard
