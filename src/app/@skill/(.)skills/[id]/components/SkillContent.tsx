
import React from 'react'
import { Skill } from '@/app/skills/types'
import Link from 'next/link'
import Image from 'next/image'

interface SkillContentProps {
  skill: Skill
}

const SkillContent: React.FC<SkillContentProps> = ({ skill }) => {
  return (
    <div className="h-full w-full mx-auto md:p-2 lg:p-8 overflow-y-auto overflow-scroll bg-white">
      <h3 className="text-xl font-semibold text-center">Projects</h3>
      {skill.projects && skill.projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center justify-center gap-2">
          {skill.projects.map((project, index) => (
            <Link key={index} href="/projects/[id]" as={`/projects/${project.id}`}>

              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group py-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-80 text-white p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                  <p className="mb-4 text-white">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default SkillContent
