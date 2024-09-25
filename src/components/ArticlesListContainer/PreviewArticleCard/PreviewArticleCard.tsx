import React from 'react'
import CardTags from './CardTags'
import CardImage from './CardImage'
import CardHeader from './CardHeader'
import { ArticlePreviewType } from '@/app/lib/actions/articles'

const PreviewArticleCard: React.FC<Omit<ArticlePreviewType, 'description'>> = ({
  title,
  image,
  slug,
  publishedDate,
  tags,
}) => {
  return (
    <div className="flex flex-col justify-between p-4 bg-primary-100 rounded-lg shadow-lg dark:bg-primary-800 transition-shadow hover:shadow-xl h-[500px] gap-2" aria-label={`Article card for "${title}"`}>
      <CardHeader title={title} publishedDate={publishedDate} />
      {image && <CardImage image={image} slug={slug} title={title} />}
      <CardTags tags={tags} />
    </div>
  )
}

export default PreviewArticleCard
