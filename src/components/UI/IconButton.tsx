// src/components/UI/IconButton.tsx

import React, { ButtonHTMLAttributes } from 'react'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import { buttonVariants } from '@/styles/buttonVariants'

// Dynamic imports for icons to optimize performance
const DynamicFaFilter = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaFilter),
  { ssr: false }
)
const DynamicFaSort = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaSort),
  { ssr: false }
)
const DynamicFaSearch = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaSearch),
  { ssr: false }
)
const DynamicFaRedo = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaRedo),
  { ssr: false }
)
const DynamicFaBriefcase = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaBriefcase),
  { ssr: false }
)
const DynamicFaProjectDiagram = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaProjectDiagram),
  { ssr: false }
)
const DynamicFaCalendarAlt = dynamic(
  () => import('react-icons/fa').then(mod => mod.FaCalendarAlt),
  { ssr: false }
)

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string
  variant?: keyof typeof buttonVariants
  className?: string
  ariaLabel: string
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'primary',
  className,
  ariaLabel,
  ...rest
}) => {
  const IconComponent = {
    filter: <DynamicFaFilter />,
    sort: <DynamicFaSort />,
    search: <DynamicFaSearch />,
    redo: <DynamicFaRedo />,
  }[icon]

  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded-lg p-2 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-indigo-400',
        buttonVariants[variant],
        className
      )}
      aria-label={ariaLabel}
      {...rest}
    >
      {IconComponent}
    </button>
  )
}

export default React.memo(IconButton)
