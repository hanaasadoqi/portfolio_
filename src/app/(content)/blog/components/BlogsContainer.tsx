"use client"

import { ArticlePreviewType } from "@/app/lib/actions/articles";
import { LoadingOverlay, SearchBar } from "@/components";
import { ArticleSuggestions } from "@/types";
import { useState, useEffect, useMemo, Suspense } from "react";
import { ArticleCard } from "@/components";


export default function BlogsContainer({ fetchedArticles, fetchedTitles }: { fetchedArticles: ArticlePreviewType[]; fetchedTitles: ArticleSuggestions[]; }) {
  const [articles, setArticles] = useState<ArticlePreviewType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<ArticleSuggestions[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setArticles(fetchedArticles);
        setSuggestions(fetchedTitles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, [fetchedArticles, fetchedTitles]);

  const filteredArticles = useMemo(() => {
    if (!searchQuery) return articles;
    const query = searchQuery.toLowerCase();
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description?.toLowerCase().includes(query) ||
        article.subtitle.toLowerCase().includes(query) ||
        article.tags.join(" ").toLowerCase().includes(query)
    );
  }, [searchQuery, articles]);


  return (
    <div className="max-w-7xl w-full mx-auto space-y-6">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search Articles..."
      />
      {isLoading ? (
        <div className="text-center text-gray-500 dark:text-gray-400">Loading articles...</div>
      ) : filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Suspense key={article.id} fallback={<LoadingOverlay />}>
              <ArticleCard article={article} />
            </Suspense>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400">No articles found.</div>
      )}
    </div>
  )
}