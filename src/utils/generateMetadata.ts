import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import mdxComponents from '@/components/mdx/mdxComponents';
import { getMdxFileContent } from '@/utils/getMdxFile';
import { ReactElement } from 'react';

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<{ content: ReactElement; frontmatter: any }> => {
  console.log(params)

  const source = params.slug && getMdxFileContent(params.slug);
  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypePrism, rehypeSlug],
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: true,
    },
    components: mdxComponents,
  });

  return {
    content, frontmatter: {
      title: frontmatter.title as string,
      subtitle: frontmatter.subtitle as string,
      description: frontmatter.description as string,
      image: frontmatter.image as string,
      publishedDate: frontmatter.publishedDate as string,
      tags: frontmatter.tags as string[],
    }
  }
};