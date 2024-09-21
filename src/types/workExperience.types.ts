import { Skill } from './skill.types';

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate?: string;
  url?: string;
  logo?: string;
  description: string[];
  skills?: Skill[];
}