'use client';

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './MDXComponents.server';

const MDXComponentsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <MDXProvider components={mdxComponents}>
      {children}
    </MDXProvider>
  )
};

export default MDXComponentsProvider;
