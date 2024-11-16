"use client";

import React, { useEffect, useState } from "react";
import SideItem from "./SideItem";
import { SearchBar } from "@/components";
import { Suggestion } from "@/types";

interface SideContentProps {
  allPosts?: Array<{
    slug: string | null;
    title: string;
    subtitle?: string;
    description?: string | null;
    tags?: string[];
  }>;
  relatedPosts: Suggestion[] | null;
  currentSlug: string;
  search?: boolean;
  resources?: Suggestion[];
  currentSide: string;
}

const SideContent: React.FC<SideContentProps> = ({
  allPosts = [],
  currentSide,
  relatedPosts,
  currentSlug,
  search = false,
  resources,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Suggestion[]>([]);

  useEffect(() => {
    if (!allPosts) return;

    const query = searchQuery.toLowerCase();

    const filtered = allPosts.filter((post) => {
      const byTitle = post.title?.toLowerCase().includes(query);
      const bySubtitle = post.subtitle?.toLowerCase()?.includes(query) ?? false;
      const byDescription = post.description?.toLowerCase()?.includes(query) ?? false;
      const byTags = post.tags?.join("").toLowerCase().includes(query) ?? false;

      return byTitle || bySubtitle || byDescription || byTags;
    });

    setFilteredPosts(filtered);
  }, [searchQuery, allPosts]);

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <ul className="scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-700 pb-24">
      {search && (
        <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchQuery} />
      )}
      {currentSide === "search" &&
        search &&
        filteredPosts &&
        filteredPosts.map((item) => (
          <SideItem key={item.slug} item={item} isActive={currentSlug === `/blog/${item.slug}`} />
        ))}
      {currentSide === "related" &&
        relatedPosts &&
        relatedPosts.map((item) => (
          <SideItem key={item.slug} item={item} isActive={currentSlug === `/blog/${item.slug}`} />
        ))}
      {currentSide === "resources" &&
        resources &&
        resources.map((item) => (
          <SideItem key={item.slug} item={item} external />
        ))}
    </ul>
  );
};

export default SideContent;
