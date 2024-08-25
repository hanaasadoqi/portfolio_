'use client'

import React from 'react'
import Tag from './Tag'
import Image from 'next/image'

export interface WritingItemProps {
  id: number
  title: string
  description: string
  image: string
  type: string
  url: string
  publishedDate: string
  tags: string[]
}

const WritingCard: React.FC<WritingItemProps> = ({
  id,
  title,
  description,
  image,
  type,
  url,
  publishedDate,
  tags,
}) => {
  return (
    <div className="flex cursor-pointer flex-col justify-evenly rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-gray-500">
        Published on {new Date(publishedDate).toLocaleDateString()}
      </p>
      <Image
        src={image}
        alt={`${title} thumbnail`}
        width={192}
        height={192}
        className="mb-4 h-48 w-full rounded-lg object-cover"
        layout="responsive"
      />
      <p className="mb-4 text-gray-700">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    </div>
  )
}

export default WritingCard
