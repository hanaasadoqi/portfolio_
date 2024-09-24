import React from 'react'
import clsx from 'clsx'

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  className?: string
}

const variantClasses = {
  primary: 'bg-primary-500 text-white',
  secondary: 'bg-gray-600 text-white',
  success: 'bg-green-500 text-white',
  danger: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-black',
}

const sizeClasses = {
  small: 'text-xs px-2 py-1',
  medium: 'text-sm px-3 py-1.5',
  large: 'text-md px-4 py-2',
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className,
}) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-semibold',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  )
}

export default React.memo(Badge)
