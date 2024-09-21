import { Skill } from './skill.types';

export interface Education {
  id: string;
  degree?: string;
  school: string;
  location?: string;
  startDate: string;
  endDate?: string;
  skills?: Skill[];
  url?: string;
}