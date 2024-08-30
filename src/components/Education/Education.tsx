'use client'

import React from 'react'
import EducationCard from './EducationCard'
import { useData } from '@/context/DataContext'

const Education: React.FC = () => {
  const { education: educationData } = useData()

  return (
    <section
      id="education"
      data-id="education"
      className="my-48 flex min-h-screen w-screen items-center justify-center"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center">
        <div className="w-full">
          <h3 className="text-center text-2xl md:text-left md:text-3xl lg:text-4xl">
            Education
          </h3>
        </div>
        <div className="flex w-full flex-col justify-center space-y-8">
          {educationData.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
