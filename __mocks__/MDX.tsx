'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useMDXComponents } from 'mdx-components';
import LoadingComponent from '@/app/@modal/(.)skills/[id]/loading';
import { Suspense, useEffect } from 'react';
interface MDXProps {
  content: MDXRemoteSerializeResult;
}

export default function MDX({ content }: MDXProps) {
  const components = useMDXComponents();

  useEffect(() => {
    async function loadStyles() {
      if (typeof window !== 'undefined') {
        await import('katex/dist/katex.min.css')
          .then(() => {
            console.log('KaTeX styles loaded successfully.');
          })
          .catch(err => {
            console.error('Failed to load KaTeX CSS:', err);
          });
      }
    }

    loadStyles();
  }, [])

  return (
    <div id="mdx-content" className="sticky top-0 h-screen max-h-screen h-full w-full max-w-5xl prose prose-2xl dark:prose-invert mx-auto px-20 py-8 overflow-y-auto scrollbar-hide bg-white/50 dark:bg-black/70">
      {/* <Suspense fallback={<LoadingComponent />}> */}
      <MDXRemote {...content} components={components} />
      {/* </Suspense> */}
    </div>
  );
}
