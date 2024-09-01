'use client'
import { useState, useEffect, useMemo } from 'react'
import { Article, ArticleWithDetails } from '@/types/data'

export const useFilteredArticles = (
  initialData: Record<number, ArticleWithDetails>,
  filters: string[],
  sortOption: string | null,
  searchQuery: string
) => {
  // Memoize the initial data conversion to array to avoid repeated work
  const initialArticles = useMemo(
    () => Object.values(initialData),
    [initialData]
  )

  // Memoize the filtered and sorted articles to avoid recalculating unless dependencies change
  const filteredArticles = useMemo(() => {
    // No need to filter if there's no filter criteria
    if (!filters.length && !searchQuery && !sortOption) {
      return initialArticles
    }

    // Start with all articles
    let filtered = initialArticles

    // Apply search query filter
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase()
      filtered = filtered.filter(
        article =>
          article.title.toLowerCase().includes(lowercasedQuery) ||
          article.description.toLowerCase().includes(lowercasedQuery)
      )
    }

    // Apply tag filters
    if (filters.length > 0) {
      filtered = filtered.filter(article =>
        filters.some((filter: string) => article.tags.includes(filter))
      )
    }

    // Apply sorting
    if (sortOption) {
      filtered = [...filtered].sort((a, b) => {
        switch (sortOption) {
          case 'Oldest':
            return (
              new Date(b.publishedDate).getTime() -
              new Date(a.publishedDate).getTime()
            )
          case 'Newest':
            return (
              new Date(a.publishedDate).getTime() -
              new Date(b.publishedDate).getTime()
            )
          default:
            return 0
        }
      })
    }

    return filtered
  }, [initialArticles, filters, sortOption, searchQuery])

  return filteredArticles
}
