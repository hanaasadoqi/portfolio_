import React from 'react'

interface TagProps {
  tag: string
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <span className="mr-2 inline-block rounded text-nowrap bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
      {tag}
    </span>
  )
}

export default Tag
