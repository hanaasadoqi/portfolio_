import { Params } from './types';
import TOCContextProvider from './components/TOC/TOCContextProvider';
import MDXCompiler from '../MDX/MDXCompiler';
import { MDXRenderer } from '../MDX/MDXRenderer'
import BlogContainer from './components/BlogContainer';
import { FileLoader } from '../MDX/FileLoader';
import { loadReusableContent } from '../MDX/loadReusableContent';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ReusableFileLoader } from '../MDX/ReusableFileLoader';

const contentSource = 'src/content/articles';

export const dynamicParams = false;

export default async function DocsPage({ params }: Params) {
  const { slug } = await params;

  const source = slug ? await FileLoader({ slug, contentSource }) : null;

  if (!source) {
    return <p>Error: Article not found or could not be loaded.</p>;
  }

  const { reusableContent } = await ReusableFileLoader();
  // const reusableContent = await loadReusableContent();
  console.log('scope', reusableContent)

  const { frontmatter, content } = await MDXRenderer({ source });

  return (
    <TOCContextProvider>
      <BlogContainer frontmatter={frontmatter}>
        <MDXCompiler mdxSource={content} frontmatter={frontmatter} scope={reusableContent} />
      </BlogContainer>
    </TOCContextProvider>
  );
}
