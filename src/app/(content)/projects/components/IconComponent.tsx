import React, { Suspense } from "react";
import clsx from "clsx";
import { loadIcon } from './loadIcon'
import dynamic from "next/dynamic";

const FaSpinner = dynamic(() => import('react-icons/fa').then(mod => mod.FaSpinner))

const IconComponent: React.FC<{
  icon: string;
  className?: string;
  ariaLabel?: string;
}> = ({ icon, className, ariaLabel }) => {
  const LazyIcon = React.lazy(() => loadIcon(icon));

  return (
    <Suspense fallback={<FaSpinner className="animate-spin text-current" />}>
      <LazyIcon
        size={24}
        className={clsx("text-current", className)}
        aria-label={ariaLabel}
      />
    </Suspense>
  );
};

export default IconComponent;