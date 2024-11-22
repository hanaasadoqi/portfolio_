"use client";

import { useMDXComponents } from 'mdx-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MDXCompilerProps {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: { [key: string]: any };
  scope?: Record<string, MDXRemoteSerializeResult>;
}

export default function MDXCompiler({ mdxSource, frontmatter, scope = {} }: MDXCompilerProps) {
  const components = useMDXComponents()

  return (
    <div className="relative">
      <article id="mdx-content" className="sticky top-0 h-full w-full max-w-5xl prose prose-2xl dark:prose-invert mx-auto px-20 py-8 overflow-y-auto scrollbar-hide bg-white/50 dark:bg-black/85">
        {frontmatter.reusable ? (
          <MDXRemote
            {...mdxSource}
            components={{
              ...components,
              ...Object.fromEntries(Object.entries(scope).map(([key, serializedContent]) => [
                key,
                () => <MDXRemote {...serializedContent} />,
              ]))
            }}
          />
        ) : (
          <MDXRemote {...mdxSource} components={components} />
        )}
      </article>
    </div>
  );
}
