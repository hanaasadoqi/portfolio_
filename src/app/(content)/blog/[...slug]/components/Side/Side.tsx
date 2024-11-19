'use client';

import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import SideContainer from './SideContainer';
import SideContent from './SideContent';
import { Suggestion } from '@/types';

interface SideProps {
  relatedPosts?: Suggestion[];
  resources?: Suggestion[];
  allPosts?: Array<{
    slug: string | null;
    title: string;
    subtitle?: string;
    description?: string | null;
    tags?: string[];
  }>;
}

const STOP_WORDS = new Set([
  'the', 'and', 'or', 'a', 'an', 'to', 'in', 'with', 'of', 'for', 'on', 'at', 'by', 'it', 'this', 'that', 'is', 'are', 'was', 'were', 'be', 'as', 'from', 'but'
]);

const tokenize = (str: string | undefined | null) => {
  if (!str) return [];
  return str
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word && !STOP_WORDS.has(word));
};

const Side: React.FC<SideProps> = ({ relatedPosts = [], resources, allPosts = [] }) => {
  const [showSide, setShowSide] = useState<boolean>(false);
  const [currentSide, setCurrentSide] = useState<'related' | 'search' | 'resources'>('related');
  const currentSlug = usePathname();
  const [fullRelatedPosts, setFullRelatedPosts] = useState<Suggestion[]>([]);
  const sideRef = useRef(null)

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (sideRef.current && !(sideRef.current as Node).contains(event.target as Node)) {
      setShowSide(false);
    }
  }, []);


  useEffect(() => {
    if (showSide) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showSide, handleClickOutside]);

  const toggleSide = () => {
    setShowSide((prev) => !prev);
  };

  const findRelatedPosts = useCallback((currentSlug: string | null) => {
    if (!allPosts || !currentSlug) return [];

    const currentPost = allPosts.find((post) => `/blog/${post.slug}` === currentSlug);
    if (!currentPost) return [];

    const currentTitleTokens = new Set(tokenize(currentPost.title));
    const currentSubtitleTokens = new Set(tokenize(currentPost.subtitle));
    const currentDescriptionTokens = new Set(tokenize(currentPost.description));
    const currentTagTokens = new Set(currentPost.tags?.map((tag) => tag.toLowerCase()) || []);

    return allPosts
      .filter((post) => `/blog/${post.slug}` !== currentSlug)
      .map((post) => {
        let overlapCount = 0;

        const postTitleTokens = new Set(tokenize(post.title));
        const postSubtitleTokens = new Set(tokenize(post.subtitle));
        const postDescriptionTokens = new Set(tokenize(post.description));
        const postTagTokens = new Set(post.tags?.map((tag) => tag.toLowerCase()) || []);

        if ([...currentTitleTokens].some((token) => postTitleTokens.has(token))) {
          overlapCount++;
        }

        if ([...currentSubtitleTokens].some((token) => postSubtitleTokens.has(token))) {
          overlapCount++;
        }

        if ([...currentDescriptionTokens].some((token) => postDescriptionTokens.has(token))) {
          overlapCount++;
        }

        if ([...currentTagTokens].some((token) => postTagTokens.has(token))) {
          overlapCount++;
        }

        console.log(`Comparing to Post: ${post.slug}`, `Overlap Count: ${overlapCount}`);

        return { post, overlapCount };
      })
      .filter(({ overlapCount }) => overlapCount > 0)
      .sort((a, b) => b.overlapCount - a.overlapCount)
      .map(({ post }) => post)
      .slice(0, 5);
  }, [allPosts])

  const computedRelatedPosts = useMemo(() => {
    if (currentSide === 'related') {
      const filteredPosts = findRelatedPosts(currentSlug);
      const formattedRelatedPosts = filteredPosts.map((post) => ({
        slug: post.slug,
        title: post.title,
      }));
      return [...relatedPosts, ...formattedRelatedPosts];
    }
    return [];
  }, [currentSide, currentSlug, relatedPosts, findRelatedPosts]);

  useEffect(() => {
    if (currentSide === 'related') {
      setFullRelatedPosts(computedRelatedPosts);
    }
  }, [computedRelatedPosts, currentSide]);

  return (
    <SideContainer
      resources={resources}
      relatedPosts={fullRelatedPosts}
      showSide={showSide}
      toggleSide={toggleSide}
      currentSide={currentSide}
      setCurrentSide={setCurrentSide}
      ref={sideRef}
    >
      <SideContent
        allPosts={allPosts}
        currentSide={currentSide}
        relatedPosts={
          currentSide === 'related'
            ? fullRelatedPosts
            : null
        }
        resources={resources}
        currentSlug={currentSlug}
        search={currentSide === 'search'}
      />
    </SideContainer>
  );
};

export default Side;
