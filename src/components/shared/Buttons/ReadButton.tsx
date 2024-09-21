"use client"

import React from 'react'
import Overlay from '../common/Overlay';
import Link from 'next/link';

interface ReadButtonProps {
  href?: string
  as?: string
  slug?: string
  title?: string
}

const ReadButton: React.FC<ReadButtonProps> = ({ slug = '', title = '', href = '#', as }) => {
  const asLink = `${as}/${slug}`
  return (
    <Link href={href} as={asLink} aria-label={`Read more about ${title}`}>
      <Overlay>
        <span className="py-1.5 px-3 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white text-base rounded-full">Read More</span>
      </Overlay>
    </Link>
  )
}

export default ReadButton
