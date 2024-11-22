import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getMdxOptions } from '../../utils/getMdxOptions';
import { ReusableFileLoader } from './ReusableFileLoader';
import readingTime from 'reading-time'

interface MDXRendererProps {
  source: string;
}

export async function MDXRenderer({ source }: MDXRendererProps) {
  const options = getMdxOptions();
  const { data: frontmatter, content } = matter(source);

  const wordCount = content.split(/\s+/).length;
  const readingStats = readingTime(content);

  const mdxSource: MDXRemoteSerializeResult = await serialize(content, {
    ...options,
  });

  return {
    frontmatter: {
      ...frontmatter,
      wordCount,
      readingTime: readingStats.text,
    },
    content: mdxSource,
  };
}

export async function MDXSource({ source }: { source: string; }) {
  const { data: frontmatter, content } = matter(source);
  return { frontmatter, content }
}

// import matter from 'gray-matter';
// import { serialize } from 'next-mdx-remote/serialize';
// import { MDXRemoteSerializeResult } from 'next-mdx-remote';
// import { getMdxOptions } from '../../utils/getMdxOptions';
// import readingTime from 'reading-time';

// interface MDXRendererProps {
//   source: string;
// }

// export async function MDXRenderer({ source }: MDXRendererProps) {
//   const options = getMdxOptions();
//   const { data: frontmatter, content } = matter(source);

//   const wordCount = content.split(/\s+/).length;
//   const readingStats = readingTime(content);

//   const mdxSource: MDXRemoteSerializeResult = await serialize(content, {
//     ...options,
//   });

//   return {
//     frontmatter: {
//       ...frontmatter,
//       wordCount,
//       readingTime: readingStats.text,
//     },
//     content: mdxSource,
//   };
// }

// export async function MDXSource({ source }: { source: string; }) {
//   const { data: frontmatter, content } = matter(source);
//   return { frontmatter, content }
// }