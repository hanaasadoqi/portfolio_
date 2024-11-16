import clsx from 'clsx';
import Image from 'next/image';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt?: string;
  caption?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  priority?: boolean;
}

export const MDXImage: React.FC<ImageProps> = ({
  src,
  alt = '',
  caption,
  className,
  width = 600,
  height = 450,
  fill = false,
  priority = false,
  ...props
}) => {
  if (!src) {
    return null;
  }

  const numericWidth = typeof width === 'string' ? parseInt(width, 10) : width;
  const numericHeight = typeof height === 'string' ? parseInt(height, 10) : height;

  return (
    <figure className="my-6">
      <div className={clsx('relative', className)} style={fill ? { position: 'relative', height: 'auto' } : {}}>
        <Image
          src={src.trim()}
          alt={alt}
          width={fill ? undefined : numericWidth}
          height={fill ? undefined : numericHeight}
          fill={fill}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          placeholder="blur"
          blurDataURL="/path/to/small/placeholder-image.jpg" // Replace with an actual small version of the image
          className={clsx({ 'object-cover': fill }, 'w-full h-auto')}
          priority={priority}
          {...props}
        />
      </div>
      {caption && <figcaption className="text-sm text-gray-500 text-center">{caption}</figcaption>}
    </figure>
  );
};
