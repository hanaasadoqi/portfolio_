import React from 'react'
import { Project } from '../types'
import Image from 'next/image'

const Card: React.FC<{ project: Project }> = ({ project }) => {
  console.log(project)
  return (
    <div className="border p-4 z-10 flex items-center flex-col justify-center mx-8 bg-white rounded-xl">
      <Image src={project.image} alt={`${project.title} name`} width={400} height={400} priority />
      <h5>{project.title}</h5>
      <div>
        <p className="truncate text-wrap text-pretty line-clamp-3">{project.description}</p>
      </div>
    </div>
  )
}

export default Card