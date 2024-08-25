import React from 'react'
import EducationCard from './EducationCard'

interface EducationItem {
  school: string
  degree: string
  location: string
  dates: string
}

interface EducationProps {
  educationData: EducationItem[]
}
const Education: React.FC<EducationProps> = ({ educationData: education }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {education.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </div>
  )
}

export default Education
