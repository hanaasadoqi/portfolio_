import prisma from '@/app/lib/prismaClient'
import { Education } from '@/types'
import { unstable_cache } from 'next/cache';

export const fetchEducation = unstable_cache(async () => {
  const education = await prisma.education.findMany({
    select: {
      id: true,
      degree: true,
      school: true,
      location: true,
      startDate: true,
      endDate: true,
      url: true,
    }
  })
  return education
}, ["education"])