'use client'

import React, { useMemo } from 'react'
import {
  ButtonVariant,
  colorStyles,
  outerStyles,
  sizeStyles,
  textStyles,
} from '../BaseButton'
import { IconButtonProps, iconButtonSizes } from '../IconButton'
import { Icon } from '../../Icon'
import Link from 'next/link'
import clsx from 'clsx'
import { Tooltip } from 'react-tooltip'
import type { TooltipPosition } from '../IconButton'
export type LinkButtonVariant = 'text' | 'ghost' | 'link'

export interface LinkButtonProps {
  href?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  target?: '_blank' | '_top' | '_parent' | '_self'
  rel?: string
  variant?: ButtonVariant
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  ariaCurrent?: boolean
  icon?: React.ReactElement | React.ReactElement<SVGSVGElement>
  scroll?: boolean
  download?: boolean
  className?: string
  ariaLabel?: string
  iconOnly?: boolean
  disabled?: boolean
  children?: React.ReactNode
  tooltip?: string
  tooltipId?: string
  tooltipPlace?: TooltipPosition
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href = '#',
  onClick,
  target,
  size,
  className,
  children,
  ariaLabel = 'Link Button',
  ariaCurrent = false,
  disabled = false,
  variant = 'text',
  icon,
  iconOnly = false,
  scroll = false,
  download = false,
  tooltip,
  tooltipId,
  tooltipPlace = 'top',
  rel,
  ...rest
}) => {
  const linkSize = useMemo(
    () => (iconOnly ? size && iconButtonSizes[size] : size && sizeStyles[size]),
    [size, iconOnly]
  )
  const linkColor = useMemo(() => colorStyles[variant], [variant])
  const linkOuter = useMemo(() => outerStyles[variant], [variant])
  const linkText = useMemo(() => size && textStyles[size], [size])

  const linkStyles = clsx(
    'group focus:outline-none whitespace-nowrap select-none inline-flex items-center justify-center',
    linkSize,
    linkColor,
    linkOuter,
    linkText,
    'transition-colors transition-shadow duration-300 ease',
    {
      'hover:underline hover:underline-offset-2':
        variant === 'link' && !disabled,
    },
    className
  )

  return (
    <>
      <Link
        href={href}
        onClick={onClick}
        className={
          disabled || !href ? 'cursor-not-allowed opacity-50' : linkStyles
        }
        target={target}
        rel={rel}
        role="link"
        aria-label={ariaLabel}
        aria-disabled={disabled || !href}
        aria-current={ariaCurrent ? 'page' : undefined}
        scroll={scroll}
        download={download}
        data-id={`${href.replace('#', '')}-btn`}
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltip}
        data-tooltip-place={tooltipPlace}
        {...rest}
      >
        {icon && <Icon icon={icon} size={size} className={className} />}
        {!iconOnly && children}
      </Link>
      {tooltip && <Tooltip id={tooltipId} className="z-50" />}
    </>
  )
}

export default LinkButton
