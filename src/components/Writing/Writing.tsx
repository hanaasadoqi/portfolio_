'use client'

import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import WritingCard from './WritingCard'
import clsx from 'clsx'
import { useData } from '@/context/DataContext'

const Writing: React.FC = () => {
  const { articles } = useData()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  // Media queries to determine screen size
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' }) // sm
  const isMediumScreen = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1024px)',
  }) // lg
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1025px)' })

  const isXLargeScreen = useMediaQuery({ query: '(min-width: 1600px)' })

  // Adjust items per page based on screen size
  useEffect(() => {
    if (isSmallScreen) {
      setItemsPerPage(1)
    } else if (isMediumScreen) {
      setItemsPerPage(2)
    } else if (isLargeScreen) {
      setItemsPerPage(3)
    } else {
      setItemsPerPage(4)
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

  return (
    <section
      id="writing"
      data-id="writing"
      className="mx-auto my-48 max-w-7xl px-4"
    >
      <h3 className="]text-primary-800 mb-4 text-center text-2xl dark:text-primary-200 md:text-left md:text-3xl lg:text-4xl">
        Articles
      </h3>
      {/* Responsive Grid Layout for Cards */}
      <div
        className={clsx('mx-auto grid gap-8', {
          'grid-cols-1': isSmallScreen,
          'grid-cols-2': isMediumScreen,
          'grid-cols-3': isLargeScreen,
        })}
      >
        {currentArticles.map(item => (
          <WritingCard key={item.id} {...item} />
        ))}
      </div>

      {/* Responsive Pagination Controls */}
      <div className="mt-8 flex flex-wrap items-center justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 rounded-full px-3 py-1 text-sm ${
              currentPage === index + 1
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Writing
