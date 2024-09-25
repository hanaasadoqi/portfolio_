import React from 'react'
import clsx from 'clsx'

interface CardHeaderProps {
  title: string
  publishedDate?: string
  parent?: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, publishedDate, parent }) => {
  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString()
    : 'Unknown Date'

  return (
    <>
      <h3
        className={clsx('md:mb-2 text-2xl font-semibold', {
          'text-sm mb-4 text-gray-500': parent,
        })}
      >
        {title}
      </h3>
      <p className="md:mb-4 text-sm text-gray-500 dark:text-gray-400">
        Published on {formattedDate}
      </p>
    </>
  )
}

export default CardHeader
