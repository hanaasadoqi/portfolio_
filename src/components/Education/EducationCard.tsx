import React from 'react'

type EducationCardProps = {
  school: string
  degree: string
  location: string
  dates: string
}

const EducationCard: React.FC<EducationCardProps> = ({
  school,
  degree,
  location,
  dates,
}) => {
  return (
    <div className="mx-auto mb-8 flex w-full max-w-md flex-col justify-around rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-2 text-2xl font-bold">{school}</h3>
      <div>
        <p className="mb-2 text-gray-700">{degree}</p>
        <p className="mb-2 text-gray-500">{location}</p>
      </div>
      <p className="text-gray-400">{dates}</p>
    </div>
  )
}

export default EducationCard
