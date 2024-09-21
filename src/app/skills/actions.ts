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

export const fetchFilteredSkills = async (
  searchQuery?: string,
  filterByTag?: string,
  filterByCategory?: string,
  sortBy?: 'Years' | 'Projects' | 'Experience' | '',
  page: number = 1,
  pageSize: number = 10
): Promise<{ skills: SkillWithoutCategoriesAndTags[], totalCount: number }> => {

  const where: Prisma.SkillWhereInput = {
    OR: [
      {
        name: {
          contains: searchQuery,
          mode: 'insensitive',
        },
      },
      {
        tags: {
          hasSome: [searchQuery || ''],
        },
      },
      {
        categories: {
          hasSome: [searchQuery || ''],
        },
      },
    ],
    ...(filterByCategory && {
      categories: {
        has: filterByCategory,
      },
    }),
    ...(filterByTag && {
      tags: {
        has: filterByTag,
      },
    }),
  };


  const orderBy: any[] = [];
  if (sortBy === 'Years') {
    orderBy.push({ startYear: 'desc' });
  } else if (sortBy === 'Projects') {
    orderBy.push({ projectCount: 'desc' });
  } else if (sortBy === 'Experience') {
    orderBy.push({ experienceLevel: 'desc' });
  }

  const [skills, totalCount] = await prisma.$transaction([
    prisma.skill.findMany({
      where,
      orderBy: orderBy.length ? orderBy : undefined,
      skip: (page - 1) * pageSize,
      take: pageSize,
      select: {
        id: true,
        name: true,
        icon: true,
        startYear: true,
        _count: {
          select: {
            projects: true
          }
        }
      },
    }),
    prisma.skill.count({ where }),
  ]);

  return { skills, totalCount };
};

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
