import React from 'react'

interface CardHeaderProps {
  title: string
  publishedDate?: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, publishedDate }) => {
  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString()
    : 'Unknown Date'

  return (
    <div className="flex flex-col space-y-1">
      <h3 className="text-lg font-semibold line-clamp-3">{title}</h3>
      <p className="text-sm text-gray-500">Published on {formattedDate}</p>
    </div>
  )
}

export default CardHeader
