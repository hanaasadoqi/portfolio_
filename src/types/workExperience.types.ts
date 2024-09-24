import { Skill } from './skill.types';

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location?: string | null;
  startDate: string;
  endDate?: string | null;
  url?: string | null;
  logo?: string | null;
  description: string[];
  skills?: Skill[];
}