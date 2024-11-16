'use client'

import React, { useRef, useEffect, useMemo, useState } from 'react';
import { Star, getStars } from './Star';


const StarryBackgroundCanvas = ({ id = 'app-wide' }: { id?: string; }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const numOfStars = id === 'app-wide' ? 75 : getStars(id);
    const stars = Array.from({ length: numOfStars }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.8 + 0.2,
    }));

    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI / 2);
        context.fill();
      });
      requestAnimationFrame(drawStars);
    };

    drawStars();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [id]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 w-full min-h-full -z-20 pointer-events-none"
    />
  );
};


const InteractiveStars = ({ id = 'app-wide' }: { id?: string }) => {
  const stars = useMemo(() => {
    const numOfStars = getStars(id);
    return Array.from({ length: numOfStars }).map((_, index) => ({
      key: `${id}-star-${index}`,
      size: Math.random() * 5 + 1,
      color: `var(--accent-${['one', 'two', 'three', 'four', 'five'][Math.floor(Math.random() * 5)]})`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animate: Math.random() < 0.3,
      pulse: Math.random() < 0.5,
      float: Math.random() < 0.1,
    }));
  }, [id]);

  return (
    <span className="absolute top-0 w-full min-h-full -z-20 pointer-events-none">
      {stars.map((star) => (
        <Star
          key={star.key}
          size={star.size}
          color={star.color}
          top={star.top}
          left={star.left}
          animate={star.animate}
          pulse={star.pulse}
          float={star.float}
        />
      ))}
    </span>
  );
};

const CombinedStarryBackground = ({ id = 'app-wide', children }: { id?: string; children?: React.ReactNode; }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <span className="relative w-full min-h-full h-full -z-20">
      {children}
      <StarryBackgroundCanvas id={id} />
      <InteractiveStars id={id} />
    </span>
  );
};

export default CombinedStarryBackground;

