'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'
import SearchBar from '../../shared/SearchBar'
import dynamic from 'next/dynamic'
import { IconButton, Pagination } from '@/components'
import { ArticlePreviewType } from '@/app/lib/actions/articles';
import { Suggestion } from '@/types';
import { useFilteredArticles } from '@/hooks/useFilteredArticles';
import ArticlesGrid from '../ArticlesGrid/ArticlesGrid';

const DynamicFaSearch = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaSearch),
  { ssr: false }
)

interface ArticlesListProps {
  initialArticles: ArticlePreviewType[];
  suggestions: Suggestion[]
}

const ArticlesList: React.FC<ArticlesListProps> = ({ initialArticles, suggestions }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [articles, setArticles] = useState<ArticlePreviewType[]>([])
  const [titleSuggestions, setTitleSuggestions] = useState<Suggestion[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // const articles = useFilteredArticles(initialArticles, searchQuery)

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 769px) and (max-width:1030px)',
  })
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1030px)' })

  const isXLargeScreen = useMediaQuery({ query: '(min-width: 1600px)' })

  // Adjust items per page based on screen size
  useEffect(() => {
    if (isSmallScreen) {
      setItemsPerPage(1)
    } else if (isMediumScreen) {
      setItemsPerPage(2)
    } else {
      setItemsPerPage(3)
    }
  }, [isSmallScreen, isMediumScreen, isLargeScreen, isXLargeScreen])

  // Calculate total pages

  // Calculate articles to display on current page
  const startIndex = (currentPage - 1) * itemsPerPage

  // Pagination handler
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  useEffect(() => {
    const loadArticles = async () => {
      try {
        await setArticles(initialArticles);
        await setTitleSuggestions(suggestions);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, [initialArticles, suggestions]);

  const filteredArticles = useMemo(() => {
    if (!searchQuery) return articles;
    const query = searchQuery.toLowerCase();
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description?.toLowerCase().includes(query) ||
        article.subtitle.toLowerCase().includes(query) ||
        article.tags.join(" ").toLowerCase().includes(query)
    );
  }, [searchQuery, articles]);

  const currentArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage)

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage)

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-2 md:mb-8 flex w-full flex-col items-center justify-between md:flex-row">
        <h3 className="mb-4 text-center text-2xl text-primary-800 dark:text-primary-200 md:text-left md:text-3xl lg:text-4xl">
          Articles
        </h3>
        <div className="flex justify-center gap-2">
          {isSearchOpen && (
            <SearchBar
              placeholder="Search articles.."
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          )}
          <IconButton
            size="sm"
            icon={<DynamicFaSearch />}
            onClick={toggleSearch}
            ariaLabel="Toggle search"
            variant={isSearchOpen ? 'outline' : 'icon'}
          />
        </div>
      </div>
      {isLoading ? (
        <div className="text-center text-gray-500 dark:text-gray-400">Loading articles...</div>
      ) : filteredArticles.length > 0 ? (
        <>
          <ArticlesGrid articles={currentArticles} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400">No articles found.</div>
      )}
    </div>
  )
}

export default ArticlesList;