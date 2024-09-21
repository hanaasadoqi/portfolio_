'use client'

import { useMemo } from 'react'
import { ArticlePreviewType } from '@/app/lib/actions/articles'
import { ArticlePreview } from '@/types'

export const useFilteredArticles = (
  initialData: Record<number, ArticlePreviewType>,
  searchQuery?: string
) => {
  // Memoize the initial data conversion to array to avoid repeated work
  const initialArticles = useMemo(
    () => Object.values(initialData),
    [initialData]
  )

  // Memoize the filtered and sorted articles
  // const filteredArticles = useMemo(() => {
  //   // Check for filters to avoid recalculation for every request
  //   if (filters && !filters.length && !searchQuery && !sortOption) {
  //     return initialArticles
  //   }


  const filteredArticles = useMemo(() => {
    let filtered = initialArticles
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase()
      filtered = filtered.filter(
        article =>
          article.title.toLowerCase().includes(lowercasedQuery) ||
          article.description?.toLowerCase().includes(lowercasedQuery)
      )
    }

    //     if (filters && filters.length > 0) {
    //       filtered = filtered.filter(article =>
    //         filters.some((filter: string) => article.tags.includes(filter))
    //       )
    //     }

    //     if (sortOption) {
    //       filtered = [...filtered].sort((a, b) => {
    //         if (a.publishedDate && b.publishedDate) {

    //           switch (sortOption) {
    //             case 'Oldest':
    //               return (
    //                 new Date(b.publishedDate).getTime() -
    //                 new Date(a.publishedDate).getTime()
    //               )
    //             case 'Newest':
    //               return (
    //                 new Date(a.publishedDate).getTime() -
    //                 new Date(b.publishedDate).getTime()
    //               )
    //             default:
    //               return 0
    //           }
    //         } else {
    //           return 0
    //         }
    //       })
    //     }

    return filtered
  }, [initialArticles, searchQuery])
  // }, [initialArticles, filters, sortOption, searchQuery])

  return initialArticles
}


// 'use client';

// import { useMemo } from 'react';
// import { Article } from '@/types';

// const useFilteredArticles = (articles: Article[], query: string): Article[] => {
//   const filtered = useMemo(() => {
//     if (!query.trim()) return articles;
//     const lowerCaseQuery = query.toLowerCase();
//     return articles.filter(article =>
//       article.title.toLowerCase().includes(lowerCaseQuery) ||
//       article.content.toLowerCase().includes(lowerCaseQuery) ||
//       (article.tags && article.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)))
//     );
//   }, [articles, query]);

//   return filtered;
// };

// export default useFilteredArticles;
