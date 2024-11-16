import React from 'react'

export default async function MDXLayout({ children }: { children: React.ReactNode; }) {

  return (
    <main className="w-screen min-h-screen w-full">
      {children}
    </main>
  );
}
