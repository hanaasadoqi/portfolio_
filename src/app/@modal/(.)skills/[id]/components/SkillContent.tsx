import React from 'react'
import { Skill } from '@/app/skills/types'
import Link from 'next/link'
import Image from 'next/image'
import { toId } from '@/utils/toId'

interface SkillContentProps {
  skill: Skill
}

const SkillContent: React.FC<SkillContentProps> = ({ skill }) => {
  return (
    <div className="h-full w-full mx-auto md:p-2 lg:p-8 overflow-y-auto bg-white">

      {/* Projects Section */}
      {skill.projects && skill.projects.length > 0 && (
        <>
          <h3 className="text-xl font-semibold text-center mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skill.projects.map((project, index) => (
              <div key={project.id} className="relative w-full rounded-lg overflow-hidden shadow-lg group py-4 cursor-pointer">
                <Link
                  href="/projects/[id]"
                  as={`/projects/${project.id}`}
                  aria-label={`View details for project ${project.title}`}
                >
                  <Image
                    src={`/images/${toId(project.title)}.jpg`}
                    alt={project.title}
                    width={192}
                    height={192}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-80 text-white p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Articles Section */}
      {skill.articles && skill.articles.length > 0 && (
        <>
          <h3 className="text-xl font-semibold text-center mb-4">Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {skill.articles.map((article) => (
              <div key={article.id} className="relative w-full rounded-lg overflow-hidden shadow-lg group py-4 cursor-pointer">
                <Link
                  href="/blog/[slug]"
                  as={`/blog/${article.slug}`}
                  aria-label={`Read article titled ${article.title}`}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={192}
                    height={192}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-80 text-white p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold">{article.title}</h4>
                  <p className="mb-4">{article.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>

  )
}

export default SkillContent
