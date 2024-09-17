import { Project } from './project.types';
import { Article } from './article.types';

export interface Asset {
  id: string;
  title: string;
  description?: string;
  src: string;
  alt?: string;
  poster?: string;
  path?: string;
  aspectRatio?: string;
  type?: string;
  category?: string;
  srcSet?: string;
  article?: Article;
  project?: Project;
}

export type ImageAsset = Omit<Asset, "id" | "path" | "poster" | "category" | "type" | "article" | "project"> & {
  alt: string | null;
  description: string | null;
  aspectRatio: string | null;
  srcSet: string | null;
  article?: Article | null;
  project?: Project | null;
};

export type VideoAsset = Omit<Asset, "id" | "alt" | "path" | "aspectRatio" | "type" | "category" | "srcSet"> & {
  type: "video";
};

export type AboutAsset = Omit<ImageAsset | VideoAsset, "category" | "type">
export type ProjectAsset = Omit<ImageAsset, "aspectRatio" | "srcSet" | "alt" | "description" | "article" | "project" | "category"> & {
  description: string | null;
  alt: string | null
  aspectRatio: string | null;
  srcSet: string | null;
  project: {
    id: string;
    slug: string | null;
  };
};
export type ArticleAsset = Omit<ImageAsset, "project" | "article" | "category"> & {
  category: "article",
  article: {
    id: string;
    slug: string | null;
  };
};
