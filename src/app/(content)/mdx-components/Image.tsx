import React from 'react';
import clsx from 'clsx';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  caption?: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, caption, className, width = 800, height = 450, ...props }) => {
  if (!src) {
    return null;
  }

  return (
    <figure className="my-6">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={clsx("rounded-md", className)}
        {...props}
      />
      {caption && <figcaption className="text-sm text-gray-500 text-center">{caption}</figcaption>}
    </figure>
  );
};
