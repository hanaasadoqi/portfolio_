'use client'

import React, { useState, useMemo } from 'react'
import BentoProjectGrid from '@/components/BentoProjectGrid/BentoProjectGrid'
import ProjectFilterButtons from '@/components/ProjectFilterButtons/ProjectFilterButtons'
import { motion } from 'framer-motion'

interface ProjectData {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  skills: { id: string; name: string; icon?: string }[]
  details: {
    demoUrl?: string
    frontendRepo?: string
    backendRepo?: string
    codeRepo?: string
    videoDemo?: string
  }
  status?: string
}

interface ProjectsShowcaseProps {
  projects: ProjectData[]
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ projects }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Extract all unique skills from projects
  const allSkills = useMemo(() => {
    const skillSet = new Set<string>()
    projects.forEach((project) => {
      project.skills?.forEach((skill) => {
        skillSet.add(skill.name)
      })
    })
    return Array.from(skillSet).sort()
  }, [projects])

  // Convert projects to bento format
  const bentoProjects = useMemo(() => {
    return projects.map((project, index) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      tags: project.skills?.map((s) => s.name) || [],
      link: project.details.demoUrl || `/projects/${project.id}`,
      featured: index === 0,
      size: (index === 0 ? 'large' : index < 3 ? 'medium' : 'small') as 'small' | 'medium' | 'large',
    }))
  }, [projects])

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return bentoProjects

    return bentoProjects.filter((project) =>
      selectedTags.some((tag) => project.tags.includes(tag))
    )
  }, [bentoProjects, selectedTags])

  return (
    <motion.div
      className="w-full space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Filter Section */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Filter by Technology</h3>
          {selectedTags.length > 0 && (
            <span className="text-sm text-cyan-400">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <ProjectFilterButtons
          skills={allSkills}
          onFilterChange={setSelectedTags}
          maxVisible={6}
        />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        key={selectedTags.length}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {filteredProjects.length > 0 ? (
          <BentoProjectGrid projects={filteredProjects} selectedTags={selectedTags} />
        ) : (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-4">No projects found with selected filters</p>
              <button
                onClick={() => setSelectedTags([])}
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="glass-enhanced p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400">{projects.length}</div>
          <div className="text-sm text-gray-400 mt-1">Total Projects</div>
        </div>
        <div className="glass-enhanced p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400">{allSkills.length}</div>
          <div className="text-sm text-gray-400 mt-1">Technologies</div>
        </div>
        <div className="glass-enhanced p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400">100%</div>
          <div className="text-sm text-gray-400 mt-1">Complete</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectsShowcase
