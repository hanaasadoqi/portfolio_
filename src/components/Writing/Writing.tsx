'use client'

import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import WritingCard from './WritingCard'
import clsx from 'clsx'
import { useArticlesContext } from '@/context/ArticlesContext'
import SearchBar from '../ui/SearchBar'
import dynamic from 'next/dynamic'
import { IconButton } from '../shared'
import articles from '@/lib/data/articlesData.json'

const DynamicFaSearch = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaSearch),
  { ssr: false }
)

const Writing: React.FC = () => {
  // const {
  //   filteredArticles: articles,
  //   resetFiltersAndSort,
  //   searchQuery,
  //   setSearchQuery,
  // } = useArticlesContext()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')


  // Media queries to determine screen size
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' }) // sm
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 769px) and (max-width:1030px)',
  }) // lg
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
  const totalPages = Math.ceil(articles.length / itemsPerPage)

  // Calculate articles to display on current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage)

  // Pagination handler
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <>
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

      <div
        className={clsx('grid justify-center justify-items-center items-center md:gap-2 grid-flow-col auto-cols-fr transition-transform ease duration-300', {
          'grid-cols-1': isSmallScreen,
          'grid-cols-2': isMediumScreen,
          'grid-colls-3': isLargeScreen
        })}
      >
        {currentArticles.slice(0, currentArticles.length).map(item => (
          <WritingCard key={item.id} {...item} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`m-1 rounded-full flex items-center justify-center px-3 py-1 text-sm ${currentPage === index + 1
              ? 'bg-primary-500 text-white'
              : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default Writing
