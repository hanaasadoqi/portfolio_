"use client"

import { ArticlePreviewType } from "@/app/lib/actions/articles";
import { LoadingOverlay } from "@/components";
import { useState, useEffect, useMemo, Suspense } from "react";
import dynamic from "next/dynamic";


const ArticleCard = dynamic(() => import("@/components/ArticlesListContainer/ArticleCard/ArticleCard"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});


const SearchBar = dynamic(() => import("@/components/shared/SearchBar"), {
  ssr: false,
  loading: () => <div>Loading search bar...</div>,
});

export default function BlogsContainer({ fetchedArticles }: { fetchedArticles: ArticlePreviewType[]; }) {
  const [articles, setArticles] = useState<ArticlePreviewType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, [fetchedArticles]);

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
    <div className="max-w-7xl w-full mx-auto space-y-6 px-12 overflow-y-scroll">
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
            <ArticleCard key={article.id} article={article} full />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400">No articles found.</div>
      )}
    </div>
  )
}