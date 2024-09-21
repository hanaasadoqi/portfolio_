import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt?: string;
  caption?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  layout?: string;
}

export const MDXImage: React.FC<ImageProps> = ({
  src,
  alt = '',
  caption,
  className,
  width = 600,
  height = 450,
  layout = 'intrinsic',
  ...props
}) => {
  if (!src) {
    return null;
  }

  const numericWidth = typeof width === 'string' ? parseInt(width, 10) : width;
  const numericHeight = typeof height === 'string' ? parseInt(height, 10) : height;

  return (
    <figure className="my-6">
      <div className={clsx("relative", className)}>
        <Image
          src={src}
          alt={alt}
          width={layout === 'fill' ? undefined : numericWidth}
          height={layout === 'fill' ? undefined : numericHeight}
          layout={layout}
          style={layout === 'fill' ? { objectFit: 'cover' } : {}}
          {...props}
        />
      </div>
      {caption && <figcaption className="text-sm text-gray-500 text-center">{caption}</figcaption>}
    </figure>
  );
};
