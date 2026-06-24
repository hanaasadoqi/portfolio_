import { NextResponse } from "next/server";
import { fetchArticles } from "@/app/lib/actions/articles";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const articles = await fetchArticles();
    return NextResponse.json(articles)
  } catch (error) {
    return NextResponse.json([]);
  }
}
