import React from 'react'

interface CardDescriptionProps {
  description: string
}

const CardDescription: React.FC<CardDescriptionProps> = ({ description }) => {
  return (
    <p className="break-words line-clamp-3 text-gray-700 dark:text-gray-300">
      {description}
    </p>
  )
}

export default CardDescription;
