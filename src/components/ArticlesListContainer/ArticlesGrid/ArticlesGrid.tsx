import clsx from "clsx"
import { PreviewArticleCard } from "../PreviewArticleCard"
import { ArticlePreviewType } from "@/app/lib/actions/articles"

interface ArticlesGridProps {
  articles: ArticlePreviewType[]
  isSmallScreen?: boolean;
  isMediumScreen?: boolean;
  isLargeScreen?: boolean;
}

export default function ArticlesGrid({ articles, isSmallScreen, isMediumScreen, isLargeScreen }: ArticlesGridProps) {
  return (
    <div
      className={clsx('grid justify-center justify-items-center items-center md:gap-2 grid-flow-col auto-cols-fr transition-transform ease duration-300', {
        'grid-cols-1': isSmallScreen,
        'grid-cols-2': isMediumScreen,
        'grid-cols-3': isLargeScreen
      })}
    >
      {articles.slice(0, articles.length).map(item => (
        <PreviewArticleCard key={`${item.slug}-${item.slug}`} {...item} />
      ))}
    </div>
  )
}