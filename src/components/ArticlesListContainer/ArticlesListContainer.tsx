import { ArticlesList } from "./ArticlesList"
import articlesData from "@/app/lib/data/articlesData.json"

export default async function ArticleListContainer() {
  const articles = articlesData as any[];

  return (
    <ArticlesList initialArticles={articles} />
  )
}
