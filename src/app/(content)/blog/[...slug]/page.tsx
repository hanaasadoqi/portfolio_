import { Params } from './types';
import TOCContextProvider from './components/TOC/TOCContextProvider';
import { FileLoader } from '../MDX/FileLoader';
import MDXCompiler from '../MDX/MDXCompiler';
import { MDXRenderer } from '../MDX/MDXRenderer'
import BlogContainer from './components/BlogContainer';

const contentSource = 'src/content/articles';

export const dynamicParams = false;

export default async function DocsPage({ params }: Params) {
  const { slug } = await params;

  const source = slug ? await FileLoader({ slug, contentSource }) : null;

  if (!source) {
    return <p>Error: Article not found or could not be loaded.</p>;
  }

  const { frontmatter, content } = await MDXRenderer({ source });

  return (
    <TOCContextProvider>
      <BlogContainer frontmatter={frontmatter}>
        <MDXCompiler mdxSource={content} frontmatter={frontmatter} />
      </BlogContainer>
    </TOCContextProvider>
  );
}
