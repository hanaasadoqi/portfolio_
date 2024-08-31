import React from 'react'
import Icon from '../shared/Icon/Icon'
import { IconLibrary } from '../shared/Icon/icons'
import { Skill } from '@/types/data'

const SkillModalContent: React.FC<{ skill: Skill }> = ({ skill }) => {
  const IconComponent = IconLibrary[skill.icon as keyof typeof IconLibrary]

  return (
    <div className="flex flex-col items-center text-gray-900 dark:text-gray-200">
      <Icon
        icon={<IconComponent />}
        ariaLabel={skill.name}
        className="mb-4 text-6xl text-indigo-500"
      />
      <h2 className="mb-4 text-2xl font-bold">{skill.name}</h2>
      <div className="w-full text-left">
        <div className="mb-6">
          <h4 className="mb-2 text-lg font-semibold">Experience</h4>
          <ul className="list-disc space-y-1 pl-5">
            {skill.experience.map((exp, index) => (
              <li
                key={index}
                className="rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {exp}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="mb-2 text-lg font-semibold">Projects</h4>
          <ul className="list-disc space-y-1 pl-5">
            {skill.projects.map((project, index) => (
              <li
                key={index}
                className="rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {project}
              </li>
            ))}
          </ul>
        </div>
        <a
          href={skill.documentation}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          View Documentation
        </a>
      </div>
    </div>
  )
}

export default SkillModalContent
