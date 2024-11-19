import clsx from "clsx"

export type LinkButtonVariant = 'text' | 'ghost' | 'link'
export type LinkButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

export const variantStyles: Record<LinkButtonVariant, string> = {
  text: 'bg-transparent text-blue-600 hover:bg-blue-100',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  link: 'text-blue-600 hover:underline',
}

export const sizeStyles: Record<LinkButtonSize, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
  xl: 'px-6 py-4 text-xl',
  full: 'w-full px-4 py-2 text-base',
}

export const linkStyles = (
  variant: LinkButtonVariant,
  size: LinkButtonSize,
  {
    disabled = false,
    href = '#',
    iconOnly = false,
    className = '',
  }: {
    disabled?: boolean
    href?: string
    iconOnly?: boolean
    className?: string
  } = {}
) =>
  clsx(
    'inline-flex items-center justify-center focus:outline-none transition duration-150',
    variantStyles[variant],
    sizeStyles[size],
    {
      'cursor-not-allowed opacity-50': disabled || !href,
      'whitespace-nowrap': !iconOnly,
    },
    className
  )
