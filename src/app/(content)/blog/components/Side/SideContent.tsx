"use client"

import React, { useEffect, useState } from 'react';
import SideItem from './SideItem';
import { SideItem as SideItemType } from '@/hooks/useSide';
import SearchSideContainer from '../SearchSideContainer';
import { AutocompleteSearchBar, SearchBar } from '@/components';
import { Suggestion } from '@/types';

interface SideContentProps {
  allPosts: Suggestion[];
  relatedPosts: Suggestion[] | null;
  currentSlug: string;
  search?: boolean;
  resources?: Suggestion[];
  currentSide: string;
}

const SideContent: React.FC<SideContentProps> = ({ allPosts, currentSide, relatedPosts, currentSlug, search = false, resources }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<Suggestion[]>([]);

  useEffect(() => {
    const filtered = allPosts.filter(post => {
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    })
    setFilteredPosts(filtered)
  }, [searchQuery])

  const handleSearchQuery = (query: string) => {
    if (query !== searchQuery) {
      setSearchQuery(query)
    }
  }
  console.log(currentSlug)

  return (
    <ul className="scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-700 pb-24">

      {search && <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchQuery} />}
      {/* {search && relatedPosts && <AutocompleteSearchBar suggestions={relatedPosts} side={search} />} */}
      {search && filteredPosts && filteredPosts.map(item => (
        <SideItem
          key={item.slug}
          item={item}
          isActive={currentSlug === `/blog/${item.slug}`}
        />
      ))}
      {relatedPosts && relatedPosts.map(item => (
        <SideItem
          key={item.slug}
          item={item}
          isActive={currentSlug === `/blog/${item.slug}`}
        />
      ))}
      {currentSide === 'resources' && resources && resources.map(item => (
        <SideItem
          key={item.slug}
          item={item}
          external
        />
      ))}
    </ul>
  );
};

export default SideContent;
