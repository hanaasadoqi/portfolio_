import { Article } from './article.types';
import { Project, ProjectPreview } from './project.types';

export interface Comment {
  id: string;
  author: string;
  message: string;
  article?: Article;
  project?: Project;
}

export type ProjectComment = Omit<Comment, "article" | "project"> & {
  project?: {
    id: string;
  }
};

export type ArticleComment = Omit<Comment, "article" | "project"> & {
  article?: {
    id: string;
  }
};