'use client'

import { memo, useEffect, useState, useCallback, Suspense } from 'react'
import { LoadingOverlay, BaseButton } from '@/components'
import SkeletonSkillCard from './SkillCard/SkeletonCard'
import SkillCard from './SkillCard/SkillCard'
import { Skill } from '../types'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const renderSkeletons = (count: number) => {
  return Array.from({ length: count }).map((_, index) => (
    <SkeletonSkillCard key={index} />
  ))
}


const fetchSkillsFromAPI = async (queryParams: string) => {
  const endpoint = queryParams ? `/skills/api/filter?${queryParams}` : '/skills/api';
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error('Failed to fetch skills')
  }

  const data = await response.json();
  console.log('API Response:', data);
  return data;
}

const SkillsList: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [error, setError] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const pageSize = 15

  const fetchData = useCallback(async (page: number) => {
    setIsLoading(true)

    try {
      const query = searchParams.get('q') || ''
      const sortBy = searchParams.get('sortBy') || undefined
      const filterByTag = searchParams.get('filterByTag') || ''
      const filterByCategory = searchParams.get('filterByCategory') || ''

      const params = new URLSearchParams({
        q: query,
        filterByTag,
        filterByCategory,
        sortBy: sortBy || '',
        page: page.toString(),
        pageSize: pageSize.toString(),
      })

      const { skills: newSkills, totalCount } = await fetchSkillsFromAPI(params.toString())

      if (page === 1) {
        setSkills(newSkills)
      } else {
        setSkills(prevSkills => [...prevSkills, ...newSkills])
      }
      setTotalCount(totalCount)
      setError(null)
    } catch (error) {
      console.error('Error fetching skills:', error)
      setError('Failed to load skills. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }, [searchParams])

  useEffect(() => {
    setPage(1)
    fetchData(1)
  }, [fetchData, searchParams])

  const loadMore = async () => {
    const nextPage = page + 1
    setPage(nextPage)
    await fetchData(nextPage)
  }

  return (
    <>
      <div className="h-full w-full">
        <div className="relative">

          {isLoading && <LoadingOverlay />}

          <div className="scrollbar-hide overflow-auto shadow-inner h-96 lg:h-[700px] p-4 md:p-8 grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 overflow-auto smooth-scroll bg-white/30 shadow-lg rounded-2xl backdrop-blur-lg hover:shadow-2xl transition-shadow duration-500">
            {(skills.length == 0 && !isLoading) && (<p>No results found.</p>)}

            {skills.map((skill, index) => (
              <Suspense key={index} fallback={renderSkeletons(1)} >
                <Link key={index} href={`/skills/[id]`} as={`/skills/${skill.id}`} scroll={false}>
                  <SkillCard skill={skill} />
                </Link>
              </Suspense>
            ))}
          </div>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Render the Load More button */}
        <div className="mt-8 w-full mx-auto flex items-center justify-end md:justify-center">
          {skills.length < totalCount && (
            <BaseButton onClick={loadMore} disabled={isLoading} size="lg" className="z-10">
              {isLoading ? 'Loading...' : 'Load More'}
            </BaseButton>
          )}
        </div>
      </div >
    </>
  )
}

export default memo(SkillsList)
