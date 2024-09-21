import { NextResponse } from "next/server";
import { fetchArticles } from "@/app/lib/actions/articles";

export async function GET() {
  const articles = await fetchArticles();
  return NextResponse.json(articles)
}