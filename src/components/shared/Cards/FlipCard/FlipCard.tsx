import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Video } from "../../media";

interface FlipCardProps {
  className?: string;
  children: React.ReactNode;
  rows?: string;
  columns?: string;
}

const FlipCard: React.FC<FlipCardProps> & {
  CardFront: React.FC<CardFrontProps>;
  CardBack: React.FC<CardBackProps>;
} = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "[perspective-1000px] group relative h-full w-full",
        className,
      )}
    >
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {children}
      </div>
    </div>
  );
};

interface CardFrontProps {
  src: string;
  alt?: string;
  className?: string;
  type: string;
  poster?: string;
  columns: number;
  rows: number;
}

const CardFront: React.FC<CardFrontProps> = ({
  src,
  alt = "",
  className = "",
  type = "image",
  poster,
  rows,
  columns,
}) => {
  return (
    <div
      className="absolute inset-0"
      style={{
        gridRowEnd: `span ${rows}`,
        gridColumnEnd: `span ${columns}`,
      }}
    >
      {type === "image" && (
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={columns * 100 || 100}
          height={rows * 100 || 100}
          objectFit="cover"
          className="shadow-secondary95/80 h-full w-full rounded-xl object-cover"
        />
      )}
      {type === "video" && (
        <Video
          src={src}
          poster={poster}
          className="shadow-secondary95/80 h-full w-full rounded-xl object-cover"
        />
      )}
    </div>
  );
};

interface CardBackProps {
  title: string;
  description: string;
  className?: string;
  backdropClassName?: string;
}

const CardBack: React.FC<CardBackProps> = ({
  title,
  description,
  className,
  backdropClassName,
}) => {
  return (
    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
      <div
        className={clsx(
          "flex h-full w-full items-center justify-center text-white",
          className,
        )}
      >
        <div className="p-4 text-center">
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

FlipCard.CardFront = CardFront;
FlipCard.CardBack = CardBack;

export default FlipCard;
