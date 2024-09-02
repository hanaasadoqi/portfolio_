'use client'

import React from 'react'
import Tag from '../shared/Tag'
import Image from 'next/image'
import { ArticleWithDetails } from '@/types/data'
import clsx from 'clsx'

const WritingCard: React.FC<ArticleWithDetails & { parent?: string }> = ({
  id,
  title,
  description,
  image,
  type,
  url,
  publishedDate,
  tags,
  parent,
}) => {
  return (
    <div className="flex cursor-pointer flex-col justify-evenly rounded-lg bg-primary-100 p-6 text-primary-900 shadow-md transition-shadow hover:shadow-lg dark:bg-primary-800 dark:text-primary-100">
      <h3
        className={clsx('mb-2 text-2xl font-semibold', {
          'mb-4 text-sm text-gray-500': parent,
        })}
      >
        {title}
      </h3>
      <p className="mb-4 text-sm text-gray-500">
        Published on {new Date(publishedDate).toLocaleDateString()}
      </p>
      {!parent && (
        <Image
          src={image}
          alt={`${title} thumbnail`}
          width={192}
          height={192}
          className="mb-4 h-48 w-full rounded-lg object-cover"
        />
      )}
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    </div>
  )
}

export default WritingCard
