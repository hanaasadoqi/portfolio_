import prisma from '@/app/lib/prismaClient';
import { ArticlePreview, ArticleSuggestions } from '@/types';

export type ArticlePreviewType = Omit<ArticlePreview, "description"> & { description: string | null; publishedDate?: string }

export async function fetchArticles(): Promise<any[]> {
  const articles = await prisma.article.findMany({
    select: {
      id: true,
      image: true,
      title: true,
      subtitle: true,
      description: true,
      slug: true,
      tags: true,
      publishedDate: true
    }
  })

  return articles;
}

export async function fetchArticleBySlug(slug: string): Promise<any> {
  const article = await prisma.article.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      image: true,
      title: true,
      subtitle: true,
      description: true,
      type: true,
      category: true,
      slug: true,
      published: true,
      publishedDate: true,
      medium: true,
      hashnode: true,
      tags: true,
      viewCount: true,
      likeCount: true,
      assets: {
        select: {
          id: true,
          title: true,
          src: true,
          alt: true,
          description: true,
          aspectRatio: true,
          srcSet: true,
          type: true,
        }
      },
      comments: {
        select: {
          id: true,
          author: true,
          message: true
        }
      },
      skills: {
        select: {
          id: true,
          name: true,
          icon: true,
          documentation: true,
          startYear: true,
        }
      },
      series: {
        select: {
          id: true,
          title: true,
        }
      },
      projects: {
        select: {
          id: true,
          title: true,
          description: true,
          image: true,
          status: true,
          slug: true,
          tags: true,
        }
      }
    }
  });

  if (!article) {
    return null;
  }

  return article;
}

export async function fetchArticleTitles(): Promise<ArticleSuggestions[]> {
  const titles = await prisma.article.findMany({
    select: {
      title: true,
      slug: true,
    }
  });

  return titles;
}
