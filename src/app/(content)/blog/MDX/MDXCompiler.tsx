"use client";

import { useMDXComponents } from 'mdx-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MDXCompilerProps {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: { [key: string]: any };
}

export default function MDXCompiler({ mdxSource, frontmatter }: MDXCompilerProps) {
  const components = useMDXComponents()

  return (
    <article className="relative">
      <div id="mdx-content" className="sticky top-0 h-screen max-h-screen h-full w-full max-w-5xl prose prose-2xl dark:prose-invert mx-auto px-20 py-8 overflow-y-auto scrollbar-hide bg-white/50 dark:bg-black/85">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </article>
  );
}
