import React from 'react';
import Tag from '../../shared/Tag';

interface CardTagsProps {
  tags: string[]
}

const CardTags: React.FC<CardTagsProps> = ({ tags }) => {
  return (
    <div className="flex whitespace-nowrap gap-2 overflow-x-scroll scrollbar-hide">
      {tags.map((tag, index) => (
        <Tag key={`${tag}-${index}`} tag={tag} />
      ))}
    </div>
  )
}

export default CardTags;
