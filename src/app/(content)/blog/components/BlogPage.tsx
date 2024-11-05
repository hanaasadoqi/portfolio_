import React from 'react'
import { TOC } from './TOC'
import { Side } from './Side'
import { Suggestion } from '@/types';

const BlogPage = ({ allPosts, children, title, subtitle, slug, relatedPosts, resources }: { allPosts: Suggestion[]; children: React.ReactNode; title: string; subtitle: string; slug?: string | string[] | undefined; relatedPosts?: Suggestion[]; resources?: Suggestion[]; }) => {
  return (
    <div className="rounded-md shadow-md container mx-auto flex flex-grow h-full max-w-7xl bg-gray-50 dark:bg-gray-950 dark:border-gray-900 relative w-full">
      <Side allPosts={allPosts} relatedPosts={relatedPosts} resources={resources} />
      {children}
      <TOC title={title} subtitle={subtitle} />
    </div>
  )
}

export default BlogPage