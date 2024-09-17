import { SkillPreview } from './skill.types';
import { ProjectAsset } from './asset.types';
import { ArticlePreview } from './article.types';
import { ProjectComment } from './comment.types';

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  demoUrl?: string;
  frontendRepo?: string;
  backendRepo?: string;
  codeRepo?: string;
  videoDemo?: string;
  launchDate?: string;
  status: string;
  slug?: string;
  fileContent?: string;
  tags: string[];
  skills?: SkillPreview[];
  articles?: ArticlePreview[];
  assets?: ProjectAsset[];
  comments?: ProjectComment[];
  viewCount: number;
  likeCount: number;
}

export type ProjectPreview = Pick<Project, "id" | "image" | "title" | "description" | "status"> & {
  slug: string | null
}

export type ProjectPage = Omit<Project, "slug" | "description" | "viewCount" | "likeCount" | "tags" | "fileContent" | "slug" | "launchDate" | "status" | "demoUrl" | "frontendRepo" | "backendRepo" | "codeRepo" | "videoDemo" | "id" | "category" | "title" | "description" | "image"> & {
  id?: string;
  category?: string;
  title?: string;
  description: string | null;
  image?: string;
  status?: string;
  launchDate?: Date | null;
  slug?: string;
  fileContent?: string | null;
  tags?: string | null;
  viewCount?: string | null;
  likeCount?: string | null;
  details: {
    demoUrl?: string | null;
    frontendRepo?: string | null;
    backendRepo?: string | null;
    codeRepo?: string | null;
    videoDemo?: string | null;
  }
}