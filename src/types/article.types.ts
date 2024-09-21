// import { ArticleAsset } from './asset.types';
// import { ArticleComment } from './comment.types';
// import { Project, ProjectPreview } from './project.types';
// import { SeriesPreview } from './series.types';
// import { Skill, SkillPreview } from './skill.types';

import { ArticleAsset } from "./asset.types";
import { ArticleComment } from "./comment.types";
import { Project, ProjectPreview } from "./project.types";
import { SeriesPreview } from "./series.types";
import { Skill, SkillPreview } from "./skill.types";

// export interface Article {
//   id: string;
//   title: string;
//   subtitle: string;
//   type?: string;
//   category?: string;
//   description?: string;
//   fileContent?: string;
//   image: string;
//   slug?: string;
//   published?: boolean;
//   publishedDate?: string;
//   medium?: string;
//   hashnode?: string;
//   tags: string[];
//   viewCount: number;
//   likeCount: number;
//   assets?: ArticleAsset[];
//   comments?: ArticleComment[];
//   projects?: Project[];
//   skills?: Skill[];
//   series?: SeriesPreview;
// }

// export type ArticlePreview = Pick<Article, "publishedDate" | "description" | "subtitle" | "image" | "tags" | "title" | "subtitle" | "image" | "published"> & {
//   slug: string | null;
// };

// export type ArticlePage = Omit<Article, "hashnode" | "medium" | "slug" | "assets" | "projects" | "skills" | "category" | "type" | "description" | "published" | "publishedDate" | "series"> & {
//   category: string | null;
//   published: boolean | null;
//   slug: string | null;
//   medium: string | null;
//   hashnode: string | null;
//   description: string | null;
//   type: string | null;
//   skills: SkillPreview[];
//   projects: ProjectPreview[];
//   assets: Omit<ArticleAsset, "article">[];
//   series: SeriesPreview | null;
// }

// export interface ArticleSuggestions {
//   title: string;
//   slug: string | null;
// }


// Article Interface
export interface Article {
  id: string;
  title: string;
  subtitle: string;
  type?: string;
  category?: string;
  description?: string;
  fileContent?: string;
  image: string;
  slug?: string;
  published?: boolean;
  publishedDate?: string;
  startYear: number;
  medium?: string;
  hashnode?: string;
  tags: string[];
  viewCount: number;
  likeCount: number;
  assets?: ArticleAsset[];
  comments?: ArticleComment[];
  projects?: Project[];
  skills?: Skill[];
  series?: SeriesPreview;
}

// ArticlePreview Type
export type ArticlePreview = Pick<
  Article,
  "publishedDate" | "description" | "subtitle" | "image" | "tags" | "title" | "published" | "id"
> & {
  slug: string | null;
  title: string;
  description: string | null;
  publishedDate: string | null;
  tags: string[] | null;
};

// ArticlePage Type
export type ArticlePage = Omit<
  Article,
  | "hashnode"
  | "medium"
  | "slug"
  | "assets"
  | "projects"
  | "skills"
  | "category"
  | "type"
  | "description"
  | "published"
  | "publishedDate"
  | "series"
> & {
  category: string | null;
  published: boolean | null;
  slug: string | null;
  medium: string | null;
  hashnode: string | null;
  description: string | null;
  type: string | null;
  skills: SkillPreview[];
  projects: ProjectPreview[];
  assets: Omit<ArticleAsset, "article">[];
  series: SeriesPreview | null;
};

// ArticleSuggestions Interface
export interface ArticleSuggestions {
  title: string;
  slug: string | null;
}
