import { Project } from './project.types';
import { Series } from './series.types';
import { Article } from './article.types';
import { WorkExperience } from './workExperience.types';
import { Education } from './education.types';


export interface Skill {
  id: string;
  name: string;
  icon: string | null;
  startYear: number;
  documentation?: string | null;
  categories: string[];
  tags: string[];
  series?: Series[];
  projects?: any[];
  articles?: any[];
  experiences?: WorkExperience[];
  educations?: Education[];
}

export type SkillPreview = Pick<Skill, "id" | "name"> & {
  id: string;
  name: string;
  icon?: string | null;
  documentation?: string | null;
  startYear: number;
}

export type SkillCard = Omit<Skill, "categories" | "tags" | "projects" | "articles" | "educations"> & {
  icon?: string | null;
  startYear: number;
  projects?: number;
  experiences?: number;
}