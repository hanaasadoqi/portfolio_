import React from 'react';

export default function Overlay({ children }: { children?: React.ReactNode }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg group-hover:105">
      {children}
    </div>
  )
}