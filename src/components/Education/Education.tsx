import React from 'react'
import EducationCard from './EducationCard'
import educationData from '../../app/lib/data/educationData.json'

const Education: React.FC = async () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center">
      <div className="section-header mb-8 w-full text-center md:text-left lg:mb-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          <span className="gradient-text">Education</span>
        </h2>
      </div>
      <div className="flex w-full flex-col justify-center space-y-6">
        {educationData.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Education
