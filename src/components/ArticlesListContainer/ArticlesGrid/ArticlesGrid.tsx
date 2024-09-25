import React from 'react'
import { PreviewArticleCard } from '../PreviewArticleCard'
import { ArticlePreviewType } from '@/app/lib/actions/articles'

interface ArticlesGridProps {
  articles: ArticlePreviewType[]
}

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform ease duration-300">
      {articles.map(article => (
        <PreviewArticleCard key={article.slug} {...article} />
      ))}
    </div>
  )
}
