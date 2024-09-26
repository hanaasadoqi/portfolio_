"use client";

import React from 'react';
import { ArticlePreviewType } from '@/app/lib/actions/articles';
import Image from 'next/image';
import Link from 'next/link';
import ReadButton from '../PreviewArticleCard/ReadButton'

interface ArticleCardProps {
  article: ArticlePreviewType;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="flex flex-col md:flex-row bg-primary-100 dark:bg-primary-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="md:w-1/3 w-full relative h-48 md:h-auto">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          className="object-cover"
          priority={false}
          loading="lazy"
        />
        {article.slug && (
          <ReadButton slug={article.slug} title={article.title} href="/blogs/[slug]" as="/blog" />
        )}
      </div>
      <div className="md:w-2/3 w-full p-4 flex flex-col justify-between">
        <div>
          <Link href={`/blog/[slug]`} as={`/blog/${article.slug}`} className="text-xl font-semibold text-primary-600 dark:text-primary-400 hover:underline">
            {article.title}
          </Link>
          <h3 className="text-base text-gray-600 dark:text-gray-300 m-0">{article.subtitle}</h3>
          <p className="hidden md:block text-gray-700 dark:text-gray-200 mt-4">
            {article.description && article.description.length > 150
              ? `${article.description?.substring(0, 150)}...`
              : article.description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Published on {new Date(article.publishedDate).toLocaleDateString()}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;