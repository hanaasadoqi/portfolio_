import React from 'react';
import Tag from '../../shared/labels/Tag';

interface CardTagsProps {
  tags: string[]
}

const CardTags: React.FC<CardTagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Tag key={`${tag}-${index}`} tag={tag} />
      ))}
    </div>
  )
}

export default CardTags;
