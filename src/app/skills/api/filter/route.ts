// app/skills/api/filter/route.ts (for Next.js 13 App Router)
import { fetchFilteredSkills, searchSkills } from '@/app/skills/actions'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';
  const filterByTag = searchParams.get('filterByTag') || '';
  const filterByCategory = searchParams.get('filterByCategory') || '';
  const sortBy = searchParams.get('sortBy') as 'Years' | 'Projects' | 'Experience' || '';
  const pageSize = searchParams.get('pageSize') || '10'
  const page = searchParams.get('page') || '1'

  const pageNum = parseInt(page)
  const pageSizeNum = parseInt(pageSize)
  const { skills, totalCount } = await fetchFilteredSkills(query, filterByTag, filterByCategory, sortBy, pageNum, pageSizeNum);
  return NextResponse.json({ skills, totalCount });
}
