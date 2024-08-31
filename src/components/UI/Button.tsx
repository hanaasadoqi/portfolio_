// src/components/UI/Button.tsx

import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { buttonVariants } from '@/styles/buttonVariants'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
  children: React.ReactNode
  className?: string
  ariaLabel?: string
  disabled?: boolean
  fullWidth?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ariaLabel,
  fullWidth = false,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'rounded-lg px-4 py-2 font-medium shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-indigo-400',
        buttonVariants[variant], // Apply variant styles
        fullWidth && 'w-full', // Apply full width if prop is true
        className
      )}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  )
}

export default React.memo(Button)
