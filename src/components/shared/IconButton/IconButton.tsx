"use client"

import React from 'react'
import { BaseButton, BaseButtonProps, ButtonSize } from '../../BaseButton'
import { Icon } from '../../common'
import { Tooltip } from 'react-tooltip'
import clsx from 'clsx'

export type TooltipPosition =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'

export interface IconButtonProps extends BaseButtonProps {
  icon: React.ReactElement | React.ReactElement<SVGSVGElement>
  iconPosition?: 'left' | 'right'
  iconOnly?: boolean
  iconClassName?: string
  tooltip?: string
  tooltipPlace?: TooltipPosition
  tooltipId?: string
}

export const iconButtonSizes: Record<ButtonSize, string> = {
  xs: 'p-0.75',
  sm: 'p-1',
  md: 'p-1',
  lg: 'p-2',
  xl: 'p-2',
  full: 'w-full h-full',
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconPosition = 'left',
  size = "md",
  iconOnly = true,
  iconClassName,
  children,
  className,
  tooltip,
  loading = false,
  tooltipPlace = 'bottom',
  tooltipId,
  ...rest
}) => {
  const IconComponent: React.FC = () => (
    <Icon loading={loading} icon={icon} className={iconClassName} size={size} />
  )

  return (
    <>
      <BaseButton
        className={
          iconOnly ? clsx(size && iconButtonSizes[size], className) : className
        }
        iconOnly
        size={size}
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltip}
        data-tooltip-place={tooltipPlace}
        ariaLabel={tooltip}
        {...rest}
      >
        {!iconOnly && iconPosition === 'left' && <IconComponent />}
        {!iconOnly && (loading ? 'Loading...' : children)}
        {!iconOnly && iconPosition === 'right' && <IconComponent />}
        {iconOnly && <IconComponent />}
      </BaseButton>
      <Tooltip id={tooltipId} className="z-50" />
    </>
  )
}

export default IconButton
