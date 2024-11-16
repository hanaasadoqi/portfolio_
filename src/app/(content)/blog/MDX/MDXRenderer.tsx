import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getMdxOptions } from '../../utils/getMdxOptions';

interface MDXRendererProps {
  source: string;
}

export async function MDXRenderer({ source }: MDXRendererProps) {
  const options = getMdxOptions();
  const { data: frontmatter, content } = matter(source);
  const mdxSource: MDXRemoteSerializeResult = await serialize(content, {
    ...options
  });

  return { frontmatter, content: mdxSource };
}

export async function MDXSource({ source }: { source: string; }) {
  const { data: frontmatter, content } = matter(source);
  return { frontmatter, content }
}