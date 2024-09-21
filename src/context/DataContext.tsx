'use client'

import React, { createContext, useContext, ReactNode, useMemo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { NormalizedData } from '@/types/data'
import { ArticlePreviewType } from '@/app/lib/actions/articles'

const SkillsProvider = dynamic(
  () => import('@/context/SkillsContext').then(mod => mod.SkillsProvider),
  {
    ssr: true,
  }
)

const ProjectProvider = dynamic(
  () => import('@/context/ProjectContext').then(mod => mod.ProjectProvider),
  {
    ssr: true,
  }
)

const ArticlesProvider = dynamic(
  () => import('@/context/ArticlesContext').then(mod => mod.ArticlesProvider),
  {
    ssr: true,
  }
)

const DataContext = createContext<NormalizedData>({} as NormalizedData)

interface DataProviderProps {
  initialData: NormalizedData
  children: ReactNode
}

export const DataProvider = ({ initialData, children }: DataProviderProps) => {
  const memoizedData = useMemo(() => initialData, [initialData])
  const [projects, setProjects] = useState([])
  const [articles, setArticles] = useState<ArticlePreviewType[]>([])

  useEffect(() => {
    fetch(`/api/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))

    fetch(`/api/articles`)
      .then(res => res.json())
      .then(data => setArticles(data))
  })




  return (
    <DataContext.Provider value={memoizedData}>
      <SkillsProvider initialData={memoizedData.skills}>
        <ProjectProvider initialData={projects}>
          <ArticlesProvider initialData={articles}>
            {children}
          </ArticlesProvider>
        </ProjectProvider>
      </SkillsProvider>
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
