"use client";

import React, { useRef, useEffect } from "react";
import clsx from "clsx";

interface VideoComponentProps {
  src: string;
  poster?: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  type?: string;
  descriptionSource?: string;
  descriptionLabel?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  src,
  poster,
  className,
  muted = true,
  loop = true,
  autoPlay = true,
  controls = false,
  type = "video/mp4",
  descriptionSource,
  descriptionLabel,
  ...rest
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video?.play();
        } else {
          video?.pause();
        }
      },
      { threshold: 0.5 },
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      poster={poster}
      muted={muted}
      loop={loop}
      autoPlay={autoPlay}
      controls={controls}
      className={clsx("h-full w-full object-cover", className)}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
      <track
        kind="descriptions"
        src={descriptionSource}
        label={descriptionLabel}
        default
        {...rest}
      />
    </video>
  );
};

export default VideoComponent;
