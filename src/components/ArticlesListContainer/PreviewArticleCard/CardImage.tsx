import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const ReadButton = dynamic(() => import('./ReadButton'), { ssr: true })

interface CardImageProps {
  image: string
  slug: string | null
  title: string
}

const CardImage: React.FC<CardImageProps> = ({ image, slug, title }) => {
  return (
    <div className="relative flex-grow group transition-transform duration-300 ease">
      {image && <Image
        src={image.trim() || '/images/data-structures.webp'}
        alt={`${title} image`}
        width={600}
        height={400}
        className="rounded-lg object-cover w-full h-full group-hover:scale-105"
        priority={false}
        loading="lazy"
      />}
      {slug && (
        <ReadButton slug={slug} title={title} href="/blog/[slug]" as={`/blog`} />
      )}
    </div>
  )
}

export default CardImage
