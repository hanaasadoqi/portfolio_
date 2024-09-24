import { unstable_cache } from 'next/cache';
import prisma from '@/app/lib/prismaClient';

export const fetchExperiences = unstable_cache(async () => {
  return await prisma.workExperience.findMany({
    select: {
      id: true,
      company: true,
      role: true,
      location: true,
      startDate: true,
      endDate: true,
      url: true,
      logo: true,
      description: true,
    },
  });
}, ["experience"]);
