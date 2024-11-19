import { fetchArticles } from "@/app/lib/actions/articles";
import { ArticlesList } from "./ArticlesList"

export default async function ArticleListContainer() {
  const articles = await fetchArticles();

  return (
    <ArticlesList initialArticles={articles} />
  )
}