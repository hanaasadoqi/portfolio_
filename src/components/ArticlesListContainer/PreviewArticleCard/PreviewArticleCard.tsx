import React from 'react'
import { ArticlePreviewType } from '@/app/lib/actions/articles'
import CardTags from './CardTags'
import CardImage from './CardImage'
import CardHeader from './CardHeader'

interface ArticleCardProps extends ArticlePreviewType {
  parent?: string;
}

const PreviewArticleCard: React.FC<Omit<ArticleCardProps, "description">> = ({
  title,
  image,
  slug,
  publishedDate,
  tags,
  parent,
}) => {
  return (
    <div
      className="space-y-2 flex flex-col justify-between rounded-lg bg-primary-100 text-primary-900 shadow-md transition-shadow hover:shadow-lg dark:bg-primary-800 dark:text-primary-100 p-4 m-2 w-full max-w-sm md:max-w-md lg:max-w-lg h-full"
      aria-label={`Article card for ${title}`}
    >
      {/* Title and Date */}
      <CardHeader title={title} publishedDate={publishedDate} />

      {/* Image with Overlay */}
      {(!parent && image) && (
        <CardImage image={image} slug={slug} title={title} />
      )}

      <CardTags tags={tags} />
    </div>
  )
}

export default PreviewArticleCard
