import React from 'react'

type ColorType = 'cyan' | 'purple' | 'blue' | 'pink'
type PositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
type SizeType = 'sm' | 'md' | 'lg' | 'xl'

interface AnimatedBlobProps {
  position?: PositionType
  size?: SizeType
  color?: ColorType
  opacity?: number
  delay?: number
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({
  position = 'top-left',
  size = 'lg',
  color = 'cyan',
  opacity = 0.3,
  delay = 0,
}) => {
  const sizeMap = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-96 h-96',
    xl: 'w-full h-full max-w-2xl max-h-2xl',
  }

  const positionMap = {
    'top-left': '-top-40 -left-40',
    'top-right': '-top-40 -right-40',
    'bottom-left': '-bottom-40 -left-40',
    'bottom-right': '-bottom-40 -right-40',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  }

  const colorMap = {
    cyan: 'bg-cyan-500',
    purple: 'bg-purple-500',
    blue: 'bg-blue-500',
    pink: 'bg-pink-500',
  }

  return (
    <div
      className={`absolute ${positionMap[position]} ${sizeMap[size]} ${colorMap[color]} rounded-full blur-3xl -z-10 pointer-events-none blob-pulse`}
      style={{
        animationDelay: `${delay}s`,
        opacity,
      }}
    />
  )
}

export default AnimatedBlob
