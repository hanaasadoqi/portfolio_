import React from 'react'
import { TOC } from './TOC'

const BlogPage = ({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle: string; }) => {
  return (
    <div className="rounded-md shadow-md container mx-auto flex flex-grow h-full max-w-7xl bg-gray-50 dark:bg-gray-950 dark:border-gray-900 relative w-full">
      {children}
      <TOC title={title} subtitle={subtitle} />
    </div>
  )
}

export default BlogPage