"use client"

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { loadIcon } from "./loadIcon";

const FaSpinner = dynamic(() => import("react-icons/fa").then((mod) => mod.FaSpinner));

const IconComponent: React.FC<{
  icon: string;
  className?: string;
  ariaLabel?: string;
}> = ({ icon, className, ariaLabel }) => {
  const [LazyIcon, setLazyIcon] = useState<React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> | null>(null);

  useEffect(() => {
    loadIcon(icon).then((module) => setLazyIcon(() => module.default));
  }, [icon]);

  if (!LazyIcon) {
    return <FaSpinner className="animate-spin text-current" />;
  }

  return (
    <LazyIcon
      size={24}
      className={clsx("text-current", className)}
      aria-label={ariaLabel}
    />
  );
};

export default IconComponent;
