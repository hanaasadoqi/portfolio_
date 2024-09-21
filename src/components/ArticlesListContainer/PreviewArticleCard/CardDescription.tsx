import React from 'react'

interface CardDescriptionProps {
  description: string
}

const CardDescription: React.FC<CardDescriptionProps> = ({ description }) => {
  return (
    <p className="flex-grow break-words line-clamp-3 text-gray-700 dark:text-gray-300 mb-4">
      {description}
    </p>
  )
}

export default CardDescription;
