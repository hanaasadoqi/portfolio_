'use client'

import React, { useMemo, useCallback } from 'react'
import clsx from 'clsx'

export type ButtonType = 'button' | 'reset' | 'submit'
export type ButtonRole = 'button'
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'text'
  | 'ghost'
  | 'link'
  | 'fab'
  | 'icon'
  | 'danger'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface BaseButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType
  role?: ButtonRole
  tabIndex?: number
  id?: string
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  loading?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
  ariaLabel?: string
  ariaExpanded?: boolean
  ariaControls?: string
  ariaHasPopup?: boolean
  iconOnly?: boolean
  custom?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onFocus?: React.FocusEventHandler<HTMLButtonElement>
  onBlur?: React.FocusEventHandler<HTMLButtonElement>
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>
  [dataAtr: `data-${string}`]: any
}

export const sizeStyles: Record<ButtonSize, string> = {
  xs: 'py-0.5 px-1 gap-1',
  sm: 'py-0.5 px-1 gap-1 md:py-0.75 md:px-2 md:gap-2',
  md: 'py-0.75 px-2 gap-2 md:py-1 md:px-3 md:gap-2.5',
  lg: 'py-1 px-3 gap-2.5 md:py-1.5 md:px-4 md:gap-3',
  xl: 'py-1.5 px-4 gap-3 md:py-2 md:px-6 md:gap-3',
  full: 'w-full h-full',
}

export const colorStyles: Record<ButtonVariant, string> = {
  primary:
    'dark:hover:text-white rounded-md bg-gray-200 dark:bg-gray-900 dark:text-primary-100 dark:hover:bg-primary-800 dark:active:text-gray-900 hover:text-gray-800 border-primary-600 hover:bg-primary-300 hover:border-primary-700 focus-visible:ring-primary-700 active:bg-primary-400',
  secondary:
    'rounded-md bg-gray-400 text-primary-700 hover:bg-primary-500 hover:border-primary-300 focus-visible:ring-primary-100 active:bg-primary-500',
  outline:
    'rounded-md bg-primary-600 active:bg-primary-100 text-secondary-300 dark:text-secondary-800 border-primary-600 hover:bg-primary-500 hover:text-white hover:border-primary-700 focus-visible:bg-primary-600 focus-visible:text-white focus-visible:ring-primary-500 active:bg-primary-900',
  ghost:
    'rounded-md text-primary-500 border-transparent hover:bg-primary-100 hover:border-primary-700 hover:text-primary-700 hover:shadow-sm focus-visible:ring-primary-100 active:bg-primary-200',
  link: 'text-blue-600 bg-transparent hover:text-blue-700 focus-visible:text-blue-800 active:text-blue-900',
  text: 'rounded-sm bg-transparent text-primary-800 hover:bg-primary-200 hover:text-primary-700 focus-visible:bg-primary-200 focus-visible:text-primary-900 active:text-primary-900 active:bg-primary-300',
  fab: 'bg-primary-200 border-primary-100 hover:bg-primary-100 focus-visible:bg-primary-300 active:bg-primary-200',
  danger:
    'rounded-md text-red-600 hover:bg-red-500 dark:hover:text-white hover:bg-red-500 active:bg-red-700 dark:hover:bg-red-500 dark:active:bg-red-600',
  icon: 'text-primary-500 bg-transparent hover:text-primary-300 active:text-primary-600',
}

export const outerStyles: Record<ButtonVariant, string> = {
  primary:
    'shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-primary-600',
  secondary:
    'shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-primary-200',
  outline:
    'shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-primary-600',
  ghost:
    'shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-transparent',
  link: 'shadow-none',
  text: 'shadow-none hover:shadow-md active:shadow-inner',
  fab: 'shadow-md border-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-200 hover:shadow-lg active:shadow-inner',
  danger:
    'hover:shadow-lg  border-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 hover:shadow-lg active:shadow-inner hover:text-white',
  icon: 'border-none',
}

export const textStyles: Record<ButtonSize, string> = {
  xs: 'text-xs md:text-sm font-light tracking-normal',
  sm: 'text-sm md:text-base md:font-normal md:tracking-wide',
  md: 'text-base font-normal md:font-extrabold md:tracking-wide',
  lg: 'text-base md:text-md font-bold md:tracking-widest',
  xl: 'text-md md:text-lg font-extrabold md:tracking-widest',
  full: 'text-lg font-extrabold tracking-widest',
}

const BaseButton: React.FC<BaseButtonProps> = React.memo(
  ({
    type = 'button',
    role = 'button',
    tabIndex = 0,
    children,
    className,
    disabled = false,
    loading = false,
    ariaLabel = '',
    ariaExpanded,
    ariaControls,
    ariaHasPopup,
    onClick,
    onKeyDown,
    variant = 'primary',
    size = 'md',
    iconOnly,
    custom,
    ...rest
  }) => {
    const buttonSize = useMemo(() => sizeStyles[size], [size])
    const buttonColor = useMemo(() => colorStyles[variant], [variant])
    const buttonOuter = useMemo(() => outerStyles[variant], [variant])
    const buttonText = useMemo(() => textStyles[size], [size])

    const handleKeyPress = useCallback<
      React.KeyboardEventHandler<HTMLButtonElement>
    >(
      event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>)
        }
        onKeyDown?.(event)
      },
      [onClick, onKeyDown]
    )

    const buttonStyles = clsx(
      'focus:outline-none border inline-flex items-center justify-center whitespace-nowrap select-none transition-colors duration-300 ease text-bold',
      {
        'hover:underline hover:underline-offset-2': variant === 'link',
        'opacity-50 cursor-not-allowed': disabled,
        'opacity-70 cursor-wait': loading,
      },
      !iconOnly && buttonSize,
      buttonColor,
      buttonOuter,
      buttonText,
      className
    )

    const accessibilityAttributes = {
      role,
      'aria-label': ariaLabel,
      'aria-disabled': disabled || loading,
      'aria-expanded': ariaExpanded,
      'aria-controls': ariaControls,
      'aria-haspopup': ariaHasPopup,
    }

    return (
      <button
        type={type}
        tabIndex={tabIndex}
        disabled={disabled || loading}
        className={buttonStyles}
        {...accessibilityAttributes}
        {...rest}
        onKeyDown={handleKeyPress}
        onClick={onClick}
      >
        {loading ? 'Loading...' : children}
      </button>
    )
  }
)

BaseButton.displayName = 'BaseButton'

export default BaseButton
