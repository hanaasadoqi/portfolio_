import React from 'react'

interface TagProps {
  tag: string
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
      {tag}
    </span>
  )
}

export default Tag
