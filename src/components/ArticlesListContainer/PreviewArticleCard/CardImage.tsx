import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReadButton from '../../shared/buttons/ReadButton'
import Overlay from '../../shared/common/Overlay'

interface CardImageProps {
  image: string
  slug: string | null
  title: string
}

const CardImage: React.FC<CardImageProps> = ({ image, slug, title }) => {
  return (
    <div className="relative group mb-4">
      <Image
        src={image}
        alt={`${title} thumbnail`}
        width={600}
        height={400}
        className="w-full h-48 sm:h-56 lg:h-64 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        priority={false}
        loading="lazy"
      />
      {slug && (
        <ReadButton slug={slug} title={title} href="/blog/[slug]" as={`/blog/${slug}`} />
      )}
    </div>
  )
}

export default CardImage