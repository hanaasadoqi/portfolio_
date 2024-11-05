import React from 'react';

export const EditorContainer = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="flex flex-col space-y-4 dark:bg-secondary-950 p-8">
      {children}
    </div>
  )
}