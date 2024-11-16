import rehypePrism from 'rehype-prism-plus';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
export function getMdxOptions() {
  return {
    scope: {},
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypePrism]
    },
    parseFrontmatter: true,
  };
}
