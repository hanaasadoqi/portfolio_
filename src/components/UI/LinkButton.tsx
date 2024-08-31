import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import { variantClasses } from './styles'

interface LinkButtonProps {
  href: string
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'icon'
  download?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
  target?: string
  rel?: string
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  variant = 'primary',
  download,
  children,
  className,
  onClick,
  ariaLabel,
  target,
  rel,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        'rounded-full transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        {
          'px-6 py-2 shadow-lg': variant !== 'icon',
        },
        variantClasses[variant],
        className
      )}
      onClick={onClick}
      download={download}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  )
}

export default React.memo(LinkButton)
