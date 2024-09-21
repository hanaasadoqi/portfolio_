import { NextResponse } from 'next/server';
import { fetchProjectById } from '@/app/lib/actions/projects';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Invalid project ID' }, { status: 400 });
  }

  try {
    const project = await fetchProjectById(id);
    return NextResponse.json(project);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
