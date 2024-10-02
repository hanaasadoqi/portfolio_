import React from 'react';
import clsx from 'clsx';

export const Container = ({ children, id, className }: { children: React.ReactNode, id?: string; className?: string; }) => {
  return (
    <div className={clsx("h-full w-full flex flex-col items-center justify-center", className)} data-id={id}>
      {children}
    </div>
  )
}