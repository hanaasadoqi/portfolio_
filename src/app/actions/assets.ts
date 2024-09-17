import prisma from '@/lib/prismaClient';
import { AboutAsset, ArticleAsset, ProjectAsset } from '@/types';

export async function fetchAll() {
  const assets = await prisma.asset.findMany({})
  return assets;
}
export async function fetchAssets(page: number, pageSize: number): Promise<(ArticleAsset | ProjectAsset)[]> {
  const assets = await prisma.asset.findMany({
    where: {
      type: "image"
    },
    select: {
      id: true,
      title: true,
      description: true,
      src: true,
      alt: true,
      aspectRatio: true,
      srcSet: true,
      category: true,
      type: true,
      article: {
        select: {
          id: true,
          slug: true
        }
      },
      project: {
        select: {
          id: true,
          slug: true
        }
      }
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return assets.map(asset => {
    if (asset.article) {
      return {
        ...asset,
        type: "image",
        article: {
          id: asset.article.id,
          slug: asset.article.slug
        }
      } as ArticleAsset;
    } else if (asset.project) {
      return {
        ...asset,
        type: "image",
        project: {
          id: asset.project.id,
          slug: asset.project.slug
        }
      } as ProjectAsset;
    }
    return undefined;
  }).filter((asset): asset is ArticleAsset | ProjectAsset => asset !== undefined);
}


export async function fetchAboutAssets(): Promise<AboutAsset[]> {
  const images = await prisma.asset.findMany({
    select: {
      title: true,
      description: true,
      src: true,
      alt: true,
      aspectRatio: true,
      srcSet: true,
    },
    where: {
      type: "image",
      category: "personal"
    }
  });

  const videos = await prisma.asset.findMany({
    select: {
      title: true,
      description: true,
      src: true,
      poster: true,
    },
    where: {
      type: "video",
      category: "personal"
    }
  });

  const assets = [...images, ...videos] as AboutAsset[];
  return assets;
}

export async function fetchAssetsByArticle(articleId: string): Promise<ArticleAsset[]> {
  const assets = await prisma.asset.findMany({
    where: {
      category: "article",
      articleId: articleId
    },
    select: {
      title: true,
      description: true,
      src: true,
      alt: true,
      aspectRatio: true,
      srcSet: true,
      article: {
        select: {
          id: true,
          slug: true
        }
      }
    }
  })
  return assets.filter((asset): asset is ArticleAsset => asset !== undefined);
}

export async function fetchAssetsByProject(projectId: string): Promise<ProjectAsset[]> {
  const assets = await prisma.asset.findMany({
    where: {
      category: "project",
      projectId: projectId
    },
    select: {
      title: true,
      description: true,
      src: true,
      alt: true,
      aspectRatio: true,
      srcSet: true,
      project: {
        select: {
          id: true,
          slug: true
        }
      }
    }
  });

  return assets.filter((asset): asset is ProjectAsset => asset !== undefined);

}