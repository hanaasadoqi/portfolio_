'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SideContainer from './SideContainer';
import SideContent from './SideContent';
import { Suggestion } from '@/types';

interface SideProps {
  relatedPosts?: Suggestion[]
  resources?: Suggestion[]
  allPosts: Suggestion[]
}

const otherItems: { slug: string; title: string; }[] = [
  {
    slug: '/building-a-portfolio-with-nextjs-tailwind',
    title: 'Building a Portfolio using Next.js, TypeScript and TailwindCSS',
  },
  {
    slug: '/refactoring-styling-for-consistency',
    title: 'Refactoring Styling for Consistency',
  },
  {
    slug: '/planning-nextjs-portfolio-file-structure',
    title: 'Planning File Structure for Next.js Projects',
  },
  {
    slug: '/designing-interactive-buttons',
    title: 'Designing Interactive Buttons',
  },
  {
    slug: '/data-structures/arrays',
    title: 'Arrays'
  },
  {
    slug: '/data-structures/data-structures',
    title: 'Data Structures'
  },
  {
    slug: '/data-structures/dsa',
    title: "DSA"
  },
  {
    slug: '/data-structures/strings',
    title: 'Strings'
  },
  {
    slug: '/system-design/system-design',
    title: 'Introduction to System Design'
  },
  {
    slug: '/system-design/components',
    title: 'Components of System Design',
  },
  {
    slug: '/system-design/load-balancers',
    title: 'Load Balancers'
  }
];

const Side: React.FC<SideProps> = ({ relatedPosts, resources, allPosts }) => {
  const [showSide, setShowSide] = useState<boolean>(false);
  const [currentSide, setCurrentSide] = useState("related")
  const currentSlug = usePathname()

  const toggleSide = () => {
    setShowSide(!showSide)
  }

  return (
    <SideContainer resources={resources} relatedPosts={relatedPosts} showSide={showSide} toggleSide={toggleSide} currentSide={currentSide} setCurrentSide={setCurrentSide}>
      <SideContent allPosts={allPosts} currentSide={currentSide} relatedPosts={currentSide === 'related' && relatedPosts ? relatedPosts : currentSide === 'search' ? otherItems : null} resources={resources} currentSlug={currentSlug} search={currentSide === 'search'} />
    </SideContainer>
  );
};

export default Side;