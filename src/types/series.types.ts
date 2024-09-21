import { Skill } from './skill.types';
import { Article } from './article.types';

export interface Series {
  id: string;
  title: string;
  description?: string;
  category?: string;
  type?: string;
  skills?: Skill[];
  articles?: Article[];
}

export type SeriesPreview = Pick<Series, "title" | "id">