"use client"

export const getStars = (id: string): number => {
  let starCount;
  switch (id) {
    case 'hero':
      starCount = 0;
      break;
    case 'about':
      starCount = 2;
      break;
    case 'featured':
      starCount = 5;
      break;
    case 'skills':
      starCount = 10;
      break;
    case 'experience':
      starCount = 20;
      break;
    case 'projects':
      starCount = 30;
      break;
    case 'writing':
      starCount = 30;
      break;
    case 'education':
      starCount = 60;
      break;
    case 'contact':
      starCount = 75;
      break;
    case 'app-wide':
      starCount = 150;
      break;
    default:
      starCount = 0;
  }
  return starCount;
};

interface StarProps {
  size: number;
  color: string;
  top: string;
  left: string;
  animate: boolean;
  pulse: boolean;
  float: boolean;
}

export const Star: React.FC<StarProps> = ({
  size,
  color,
  top,
  left,
  animate,
  pulse,
  float,
}) => (
  <div
    className={`absolute rounded-full ${animate ? 'animate-spin' : ''} ${pulse ? 'animate-pulse' : ''
      } ${float ? 'animate-float-slow' : ''}`}
    style={{
      width: `${size / 2}px`,
      height: `${size / 2}px`,
      backgroundColor: color,
      top,
      left,
      boxShadow: `0 1px 2px 1px white, 0 0 50px ${color}, 0 0 100px ${color}`,
    }}
  />
)
