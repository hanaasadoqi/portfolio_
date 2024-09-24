import React from 'react'
import EducationCard from './EducationCard'
import educationData from '../../app/lib/data/educationData.json'

const Education: React.FC = async () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center">
      <div className="w-full">
        <h3 className="text-center text-2xl md:text-left md:text-3xl lg:text-4xl mb-4">
          Education
        </h3>
      </div>
      <div className="flex w-full flex-col justify-center space-y-8">
        {educationData.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Education
