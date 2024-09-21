// import { Project } from './project.types';
// import { Article } from './article.types';

// export interface Asset {
//   id: string;
//   title: string;
//   description?: string;
//   src: string;
//   alt?: string;
//   poster?: string;
//   path?: string;
//   aspectRatio?: string;
//   type?: string;
//   category?: string;
//   srcSet?: string;
//   sizes?: string;
//   article?: Article;
//   project?: Project;
// }

// type Image = "id" | "src" | "alt" | "aspectRatio" | "srcSet"

// export type ImageAsset = Pick<Asset, Image> & {
//   type: string | null;
//   description: string | null;
//   article: Article | null;
//   project: Project | null;
// }
// export type VideoAsset = Omit<Asset, "alt" | "path" | "aspectRatio" | "category" | "srcSet"> & {
//   type: string | null;
// };

// export type AboutAsset = Omit<ImageAsset | VideoAsset, "category"> & {
//   aspectRatio: string | null;
//   srcSet: string | null;
//   alt: string | null;
//   poster: string | null;
//   type: string | null;
//   sizes: string | null;
//   title: string;
//   description: string;
// }

// export type CommonTypes = "description" | "aspectRatio" | "srcSet" | "alt" | "category" | "article" | "project"
// export type ProjectAsset = Omit<ImageAsset, CommonTypes> & {
//   description: string | null;
//   alt: string | null
//   aspectRatio: string | null;
//   srcSet: string | null;
//   project: {
//     id: string;
//     slug: string | null;
//   };
//   article?: Article;
// };
// export type ArticleAsset = Omit<ImageAsset, CommonTypes> & {
//   description: string | null;
//   alt: string | null
//   aspectRatio: string | null;
//   srcSet: string | null;
//   article: {
//     id: string;
//     slug: string | null;
//   };
//   project?: Project;
// };
// src/types/index.ts

import { Project } from './project.types';
import { Article } from './article.types';
import { SkillPreview } from './skill.types';
import { ProjectPreview } from './project.types';
import { SeriesPreview } from './series.types';

// Asset Types
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
  sizes?: string;
  article?: Article;
  project?: Project;
}

type CommonTypes = "description" | "aspectRatio" | "srcSet" | "alt" | "category" | "article" | "project";

// ImageAsset Type
export type ImageAsset = Pick<Asset, "id" | "title" | "description" | "src" | "alt" | "aspectRatio" | "srcSet"> & {
  type: string | null;
  article: Article | null;
  project: Project | null;
};

// VideoAsset Type
export type VideoAsset = Omit<Asset, "alt" | "path" | "aspectRatio" | "category" | "srcSet"> & {
  type: string | null;
};

// AboutAsset Type
export type AboutAsset = Omit<ImageAsset | VideoAsset, "category"> & {
  aspectRatio: string | null;
  srcSet: string | null;
  alt: string | null;
  poster: string | null;
  type: string | null;
  sizes: string | null;
  title: string;
  description: string;
};

// ProjectAsset Type
export type ProjectAsset = Omit<ImageAsset, CommonTypes> & {
  description: string | null;
  alt: string | null;
  aspectRatio: string | null;
  srcSet: string | null;
  project: {
    id: string;
    slug: string | null;
  };
  article?: Article | null;
};

// ArticleAsset Type
export type ArticleAsset = Omit<ImageAsset, CommonTypes> & {
  description: string | null;
  alt: string | null;
  aspectRatio: string | null;
  srcSet: string | null;
  type: string | null;
  article: {
    id: string;
    slug: string | null;
  };
  project?: Project | null;
};
