'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectItem {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  link?: string
  featured?: boolean
  size?: 'small' | 'medium' | 'large'
}

interface BentoProjectGridProps {
  projects: ProjectItem[]
  selectedTags?: string[]
}

const BentoProjectGrid: React.FC<BentoProjectGridProps> = ({
  projects,
  selectedTags = [],
}) => {
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects

    return projects.filter((project) =>
      selectedTags.some((tag) => project.tags.includes(tag))
    )
  }, [projects, selectedTags])

  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 md:row-span-2',
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          className={`bento-item glass-enhanced group relative overflow-hidden ${
            sizeClasses[project.size || 'small']
          }`}
        >
          <Link
            href={project.link || '#'}
            className="block h-full p-6 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <div className="h-full flex flex-col justify-between">
              {/* Image Preview */}
              {project.image && (
                <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs text-gray-500">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white transform group-hover:translate-x-2 transition-transform">
                  →
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default BentoProjectGrid
