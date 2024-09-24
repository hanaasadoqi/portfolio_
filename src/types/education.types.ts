import { Skill } from './skill.types';

export interface Education {
  degree?: string | null;
  school: string;
  location?: string | null;
  startDate: string;
  endDate?: string | null;
  skills?: any[];
  url?: string | null;
}