'use client'

import React, { memo, useState, useRef, useEffect } from 'react'
import { useFilterOptions } from '../../hooks/useFilterOptions'
import { useURLSearchParams } from '../../hooks/useURLSearchParams'
import { useSearchParams } from 'next/navigation'

const Filter: React.FC = () => {

  const { categories, tags, isLoading, isError } = useFilterOptions()
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedTag, setSelectedTag] = useState<string>('')
  const filterRef = useRef<HTMLDivElement>(null)
  const { updateSearchParams } = useURLSearchParams()
  const searchParams = useSearchParams()

  useEffect(() => {
    filterRef.current?.querySelector('input')?.focus()

    const category = searchParams.get('filterByCategory')?.toString()
    const tag = searchParams.get('filterByTag')?.toString()

    if (category) {
      setSelectedCategory(category)
    } else if (tag) {
      setSelectedTag(tag)
    }
  }, [searchParams])

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value
    setSelectedCategory(category)
    updateSearchParams('filterByCategory', category)

  }

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tag = e.target.value
    setSelectedTag(tag)
    updateSearchParams("filterByTag", tag)
  }

  if (isLoading) return <div>Loading filters...</div>
  if (isError) return <div>Failed to load filters</div>

  return (
    <div
      ref={filterRef}
      className="max-h-96 overflow-hidden rounded-lg bg-primary-500 p-4 shadow-md transition-all duration-300 dark:bg-primary-700"
    >
      <h3 className="mb-4 text-lg font-semibold text-white">Filter by Category</h3>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="form-select rounded-md p-2 bg-white text-primary-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <h3 className="mt-4 text-lg font-semibold text-white">Filter by Tag</h3>
      <select
        value={selectedTag}
        onChange={handleTagChange}
        className="form-select rounded-md p-2 bg-white text-primary-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <option value="">Select Tag</option>
        {tags.map(tag => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
    </div>
  )
}

export default memo(Filter)
