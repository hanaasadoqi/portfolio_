
import React from 'react';
import { fetchArticles } from '@/app/lib/actions/articles';
import BlogsContainer from './components/BlogsContainer';

export const dynamicParams = false;

export async function generateStaticParams() {
  return await generateStaticParams();
}

export default async function BlogsPage() {
  const articles = await fetchArticles()
  return (
    <section className="flex flex-col w-full items-center justify-start min-h-screen p-4">
      <header className="w-full max-w-7xl flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary-900 dark:text-primary-100 mt-2 font-semibold">Articles</h1>
      </header>
      <BlogsContainer fetchedArticles={articles} />
    </section>
  );
};

