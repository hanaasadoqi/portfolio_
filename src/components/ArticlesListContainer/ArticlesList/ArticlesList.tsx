'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'
import { ArticlePreviewType } from '@/app/lib/actions/articles';
import ArticlesGrid from '../ArticlesGrid/ArticlesGrid';

const DynamicFaSearch = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaSearch),
  { ssr: false }
)
const SearchBar = dynamic(
  () => import('@/components/shared/SearchBar'),
  { ssr: false }
)
const IconButton = dynamic(
  () => import('@/components/shared/IconButton/IconButton'),
  { ssr: false }
)
const Pagination = dynamic(
  () => import('@/components/shared/Pagination'),
  { ssr: false }
)

interface ArticlesListProps {
  initialArticles: ArticlePreviewType[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ initialArticles }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [articles, setArticles] = useState<ArticlePreviewType[]>([])
  const [isLoading, setIsLoading] = useState(true)


  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 769px) and (max-width:1030px)',
  })
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1030px)' })

  const isXLargeScreen = useMediaQuery({ query: '(min-width: 1600px)' })

  useEffect(() => {
    if (isSmallScreen) {
      setItemsPerPage(1)
    } else if (isMediumScreen) {
      setItemsPerPage(2)
    } else {
      setItemsPerPage(3)
    }
  }, [isSmallScreen, isMediumScreen, isLargeScreen, isXLargeScreen])

  const startIndex = (currentPage - 1) * itemsPerPage

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setArticles(initialArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, [initialArticles]);

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
      <div className="section-header mb-8 w-full text-center md:text-left lg:mb-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          <span className="gradient-text">Articles & Writing</span>
        </h2>
      </div>
      <div className="my-2 md:mb-8 flex w-full flex-col items-center justify-between md:flex-row">
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
