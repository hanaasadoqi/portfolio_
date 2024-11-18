// Icon.tsx
import React, { Suspense } from 'react';
import { IconLibrary } from './icons';

interface IconProps {
  name: keyof typeof IconLibrary;
  size?: number | string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className }) => {
  // Dynamically import the specified icon
  const LazyIcon = React.lazy(IconLibrary[name]);
  const sizeOfIcon = typeof size === "number" ? size : parseInt(size)
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <LazyIcon size={sizeOfIcon} className={className} />
    </Suspense>
  );
};

export default Icon;