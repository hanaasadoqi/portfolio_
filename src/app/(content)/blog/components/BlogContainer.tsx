'use client'

import React, { useState } from 'react'
import SideTOC from './SideTOC'
import FloatingActionButton from '@/components/shared/Buttons/FloatingActionButton/FloatingActionButton';
import { BiBookContent, BiSolidBookContent } from 'react-icons/bi'
import clsx from 'clsx';

const BlogContainer = ({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle: string; }) => {
  const [showTOC, setShowTOC] = useState<boolean>(false)
  return (
    <div className="container mx-auto flex h-full max-w-7xl border bg-gray-50 dark:border-gray-900 mt-4 relative">

      {children}
      <FloatingActionButton position="center-right" icon={showTOC ? <BiSolidBookContent /> : <BiBookContent />} onClick={() => setShowTOC(!showTOC)} />
      <SideTOC title={title} subtitle={subtitle} className={clsx({ 'hidden': !showTOC, 'flex': showTOC })} />
    </div>
  )
}

export default BlogContainer