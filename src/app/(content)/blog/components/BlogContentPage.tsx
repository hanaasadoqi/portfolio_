
import fs from 'fs'
import React from 'react';
import BlogHeader from "@/app/(content)/blog/components/BlogHeader";
import BlogContainer from "@/app/(content)/blog/components/BlogPage";
import { AutocompleteSearchBar } from '../../../../components/shared';
import { fetchArticleTitles } from '@/app/lib/actions/articles';
import { Suggestion } from '@/types';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import mdxComponents from '@/components/mdx/MDXComponents.server';
import remarkHighlight from '@/remarkHighlight.mjs';
export const runtime = "nodejs";
export const dynamic = "force-static";

interface ContentPageProps {
  params: {
    slug?: string;
  };
}

export default async function BlogContentPage({ params }: ContentPageProps) {
  try {
    const slug = params.slug;

    if (!slug) {
      return <div>Error: Slug not provided</div>;
    }

    const source = fs.readFileSync(
      path.join(process.cwd(), `/src/content/articles/${slug}.mdx`)
    )

    const { content, frontmatter } = await compileMDX({
      source,
      options: {
        mdxOptions: {
          rehypePlugins: [rehypePrism, rehypeSlug],
          remarkPlugins: [remarkGfm, remarkHighlight],
        },
        parseFrontmatter: true,
      },
      components: mdxComponents
    })

    const title = frontmatter.title as string;
    const subtitle = frontmatter.subtitle as string;
    const image = frontmatter.image as string;
    const description = frontmatter.description as string;
    const publishedDate = frontmatter.publishedDate as string;
    const tags = frontmatter.tags as string[];

    let suggestions: Suggestion[] = [];

    try {
      suggestions = await fetchArticleTitles();
    } catch (error) {
      console.error('Error fetching article titles:', error);
      suggestions = [];
    }

    return (
      <div className="min-h-screen w-screen" data-id="skills">
        <div className="max-w-7xl mx-auto">
          <AutocompleteSearchBar
            suggestions={suggestions}
          />
        </div>
        <BlogHeader
          title={title}
          subtitle={subtitle}
          backgroundImage={image}
          description={description}
          publishedDate={publishedDate}
          tags={tags}
        />
        <BlogContainer title={title} subtitle={subtitle}>
          <div className="rounded-lg flex-1 border-x border-gray-300 dark:border-gray-800 md:p-6 pb-24 overflow-y-scroll">
            <div className="prose-pre:!whitespace-pre-wrap prose-pre:break-word  prose prose-2xl dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-strong:text-primary-950 dark:prose-strong:text-primary-100 md:prose-pre:m-4 prose-pre:p-2 p-4 md:p-12 prose-pre:!overflow-visible">
              {content}
            </div>
          </div>
        </BlogContainer>
      </div>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
}