import React from 'react';
import { ArticlePreviewType } from '@/app/lib/actions/articles';
import Image from 'next/image';
import Link from 'next/link';
import ReadButton from '../PreviewArticleCard/ReadButton'
import CardImage from '../PreviewArticleCard/CardImage';

interface ArticleCardProps {
  article: ArticlePreviewType;
  full?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, full }) => {
  return (
    <article className="flex flex-col md:flex-row bg-primary-100 dark:bg-primary-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="md:w-1/3 w-full relative h-48 md:h-auto">
        {full ? (
          <>
            {article.image !== '' && (
              <Image
                src={article.image.trim()}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="object-cover"
                priority={false}
                loading="lazy"
              />
            )}
            {article.slug && (
              <ReadButton slug={article.slug} title={article.title} href="/blog/[slug]" as={`/blog`} />
            )}
          </>
        ) : (
          <CardImage image={article.image} slug={article.slug} title={article.title} />
        )}
      </div>
      <div className="md:w-2/3 w-full p-4 flex flex-col justify-between">
        <div>
          <Link href={`/blog/[slug]`} as={`/blog/${article.slug}`} className="line-clamp-2 text-lg md:text-xl font-semibold text-primary-600 dark:text-primary-400 hover:underline">
            {article.title}
          </Link>
          <h3 className="line-clamp-2 text-base md:text-lg text-gray-600 dark:text-gray-300 mt-2">{article.subtitle}</h3>
          <p className="line-clamp-3 hidden md:block text-gray-700 dark:text-gray-200 mt-4 text-sm md:text-base">
            {article.description && article.description.length > 150
              ? `${article.description?.substring(0, 150)}...`
              : article.description}
          </p>
        </div>
        <div>
          <div className="mt-4 flex gap-2 overflow-x-scroll scrollbar-hide whitespace-nowrap">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs md:text-sm bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          {article.publishedDate && (
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Published on {new Date(article.publishedDate).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;