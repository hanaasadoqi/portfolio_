import { TOCProvider } from '@/context/TOCContext';
import React from 'react'

export default async function MDXLayout({ children }: { children: React.ReactNode; }) {

  return (
    <TOCProvider>
      <main className="w-screen min-h-screen w-full">
        {children}
      </main>
    </TOCProvider>
  );
}
