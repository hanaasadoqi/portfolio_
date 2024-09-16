'use client'

import { useEffect, useState } from 'react'
import { fetchCategories, fetchTags } from '@/app/skills/actions'

export const useFilterOptions = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        setIsLoading(true)
        const [fetchedCategories, fetchedTags] = await Promise.all([
          fetchCategories(),
          fetchTags(),
        ])
        console.log('categories', fetchedCategories, 'tags', fetchedTags)
        setCategories(fetchedCategories)
        setTags(fetchedTags)
      } catch (error) {
        setIsError(true)
        console.error('Failed to fetch filter options:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFilters()
  }, [])

  return { categories, tags, isLoading, isError }
}
