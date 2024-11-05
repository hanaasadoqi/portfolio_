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
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkMermaid } from '@theguild/remark-mermaid';
import { notFound } from 'next/navigation';
import MermaidRenderer from './MermaidRenderer';

import 'katex/dist/katex.min.css';
export const runtime = "nodejs";
export const dynamic = "force-static";

interface ContentPageProps {
  params: {
    slug: string | string[];
  };
}

export async function dynamicParams() {
  const articlesDir = path.join(process.cwd(), 'src/content/articles');
  const paths: { slug: string[] }[] = [];

  const traverseFolder = (dir: string) => {
    const filesAndFolders = fs.readdirSync(dir);
    filesAndFolders.forEach((name) => {
      const fullPath = path.join(dir, name);
      if (fs.lstatSync(fullPath).isDirectory()) {
        traverseFolder(fullPath);
      } else if (name.endsWith('.mdx')) {
        const relativePath = path.relative(articlesDir, fullPath);
        const slug = relativePath.replace(/\.mdx$/, '').replace(/\\/g, '/');
        paths.push({ slug: slug.split('/') });
      } else if (name === 'index.mdx') {
        const relativePath = path.relative(articlesDir, dir)
        paths.push({ slug: relativePath.split('/') })
      }
    });
  };

  traverseFolder(articlesDir);

  return paths;
}

export default async function ArticlePage({ params }: ContentPageProps) {
  try {
    const slug = Array.isArray(params.slug) ? params.slug : [params.slug];

    if (!slug) {
      notFound();
    }

    const articlesDir = path.join(process.cwd(), 'src/content/articles');
    let filePath;

    const directMdxPath = path.join(articlesDir, `${slug.join('/')}.mdx`);

    if (fs.existsSync(directMdxPath)) {
      filePath = directMdxPath
    } else {
      const indexTsPath = path.join(articlesDir, ...slug, 'index.mdx')
      if (fs.existsSync(indexTsPath)) {
        // filePath = path.join(articlesDir, ...slug, 'content.mdx');
        filePath = indexTsPath
      } else {
        notFound()
      }
    }

    if (!filePath || !fs.existsSync(filePath)) {
      notFound();
    }

    const source = fs.readFileSync(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX({
      source,
      options: {
        mdxOptions: {
          rehypePlugins: [rehypePrism, rehypeSlug, rehypeKatex],
          remarkPlugins: [remarkGfm, remarkHighlight, remarkMath, remarkMermaid],
        },
        parseFrontmatter: true,
      },
      components: mdxComponents
    });

    const title = frontmatter.title as string;
    const subtitle = frontmatter.subtitle as string;
    const image = frontmatter.image as string;
    const description = frontmatter.description as string;
    const publishedDate = frontmatter.publishedDate as string;
    const tags = frontmatter.tags as string[];
    const relatedPosts = frontmatter.relatedPosts as Suggestion[];
    const resources = frontmatter.resources as Suggestion[];

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
          <AutocompleteSearchBar suggestions={suggestions} />
        </div>
        <BlogHeader
          title={title}
          subtitle={subtitle}
          backgroundImage={image}
          description={description}
          publishedDate={publishedDate}
          tags={tags}
        />
        <MermaidRenderer>
          <BlogContainer allPosts={suggestions} title={title} subtitle={subtitle} slug={params.slug} relatedPosts={relatedPosts} resources={resources}>
            <div className="rounded-lg flex-1 border-x border-gray-300 dark:border-gray-800 p-6 pb-24 overflow-y-scroll w-full">
              <div className="prose-pre:!whitespace-pre-wrap prose-pre:break-word prose prose-2xl dark:prose-invert prose-a:no-underline hover:prose-a:underline prose-strong:text-primary-950 dark:prose-strong:text-primary-100 md:prose-pre:m-4 prose-pre:p-2 p-4 py-8 md:p-12 prose-pre:!overflow-visible mx-auto">
                {content}
              </div>
            </div>
          </BlogContainer>
        </MermaidRenderer>
      </div>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
}
