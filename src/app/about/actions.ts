import prisma from '@/lib/prismaClient'

export async function fetchAssets() {
  return await prisma.asset.findMany();
}
