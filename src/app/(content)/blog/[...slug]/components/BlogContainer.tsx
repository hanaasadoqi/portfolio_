import { fetchArticleInfo } from "@/app/lib/actions/articles";
import BlogHeader from "./BlogHeader";
import MdxClientContainer from "./BlogSideContainer";
import BlogSideContainer from "./BlogSideContainer";


export default async function MdxContainer({ children, frontmatter }: { children: React.ReactNode; frontmatter: { [key: string]: any } }) {
  const allArticles: Array<{
    slug: string | null;
    title: string;
    subtitle?: string;
    description?: string | null;
    tags?: string[];
  }> = await fetchArticleInfo();

  return (
    <>
      <BlogHeader
        title={frontmatter?.title || ''}
        subtitle={frontmatter?.subtitle || ''}
        description={frontmatter?.description || ''}
        publishedDate={frontmatter?.publishedDate || ''}
        tags={frontmatter?.tags || []}
      />
      <BlogSideContainer frontmatter={frontmatter} allArticles={allArticles}>
        {children}
      </BlogSideContainer>
    </>
  )
}