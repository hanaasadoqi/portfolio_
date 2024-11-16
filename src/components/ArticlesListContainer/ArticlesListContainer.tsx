import { fetchArticles, fetchArticleInfo } from "@/app/lib/actions/articles";
import { ArticlesList } from "./ArticlesList"

export default async function ArticleListContainer() {
  const articles = await fetchArticles();
  const articleTitles = await fetchArticleInfo();
  return (
    <ArticlesList initialArticles={articles} suggestions={articleTitles} />
  )
}