"use client";

import React from 'react';
import LoadingComponent from "@/app/@modal/(.)skills/[id]/loading";
import dynamic from "next/dynamic";


const TOCContent = dynamic(() => import('./TOC/TOCContent'), { ssr: false, loading: () => <LoadingComponent /> })
const Side = dynamic(() => import('./Side/Side'), { ssr: false });
const TOC = dynamic(() => import('./TOC/TOC'), { ssr: false });

interface MdxClientContainerProps {
  frontmatter: { [key: string]: any };
  children: React.ReactNode;
  allArticles: Array<{
    slug: string | null;
    title: string;
    subtitle?: string;
    description?: string | null;
    tags?: string[];
  }>;
}

export default function BlogSideContainer({ children, frontmatter, allArticles }: MdxClientContainerProps) {
  return (
    <div className='relative'>
      <TOC>
        <TOCContent />
      </TOC>
      {children}
      <Side relatedPosts={frontmatter.relatedPosts || []} allPosts={allArticles} resources={frontmatter.resources || []} />
    </div>
  );
}
