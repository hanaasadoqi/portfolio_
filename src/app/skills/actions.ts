'use server'

import prisma from '@/app/lib/prismaClient'
import { Prisma } from '@prisma/client';

import { Skill } from './types'

export const fetchCategories = async (): Promise<string[]> => {
  const categories = await prisma.skill.findMany({
    distinct: ['categories'],
    select: { categories: true },
  });

  const flattenedCategories = categories.flatMap((skill: any) => skill.categories);
  return Array.from(new Set(flattenedCategories));
}

export const fetchTags = async (): Promise<string[]> => {
  const tags = await prisma.skill.findMany({
    distinct: ['tags'],
    select: { tags: true },
  });
  const flattenedTags = tags.flatMap((skill: any) => skill.tags);
  return Array.from(new Set(flattenedTags));
}

export const fetchSkills = async (): Promise<{ skills: Skill[], totalCount: number }> => {
  const skills = await prisma.skill.findMany();
  const totalCount = await prisma.skill.count();
  return { skills, totalCount };
}

export type SkillWithoutCategoriesAndTags = Omit<Skill, 'categories' | 'tags' | '_count'>;

export const fetchFilteredSkills = async (): Promise<{ skills: Skill[], totalCount: number }> => {
  const skills = await prisma.skill.findMany({
    select: {
      id: true,
      name: true,
      icon: true,
      startYear: true,
      tags: true,
      categories: true,
      projects: true,
      experiences: true
    },
  })

  const totalCount = skills.length
  return { skills, totalCount }
}


export const searchSkills = async (query: string) => {
  const skills = await prisma.skill.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          categories: {
            hasSome: [query],
          },
        },
        {
          tags: {
            hasSome: [query],
          },
        },
      ],
    },
  });
  const totalCount = skills.length;
  return { skills, totalCount };
};

export async function getSkillById(id: string) {
  return await prisma.skill.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      icon: true,
      documentation: true,
      categories: true,
      tags: true,
      startYear: true,
      projects: true,
    },
  })
}
