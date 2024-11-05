import React from 'react';
import clsx from 'clsx';

export const Container = ({ children, id, className, vertical, horizontal }: { children: React.ReactNode, id?: string; className?: string; vertical?: boolean; horizontal?: boolean; }) => {
  return (
    <div className={clsx("flex items-center justify-center", {
      'flex-col': vertical,
      'flex-row': horizontal
    }, className)} data-id={id}>
      {children}
    </div>
  )
}