
// 'use client'

import React, { Suspense } from 'react'
import clsx from 'clsx'
import { variantStyles, sizeStyles } from './styles'
import Link from 'next/link' // Use a direct import for better performance in this case.
// Dynamically import Tooltip if it's large or rarely used.
const Tooltip = React.lazy(() =>
  import('react-tooltip').then((mod) => ({ default: mod.Tooltip }))
)

export interface LinkButtonProps {
  href?: string
  as?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  target?: '_blank' | '_top' | '_parent' | '_self'
  rel?: string
  variant?: keyof typeof variantStyles
  size?: keyof typeof sizeStyles
  ariaCurrent?: boolean
  icon?: React.ReactNode
  scroll?: boolean
  download?: boolean
  className?: string
  ariaLabel?: string
  iconOnly?: boolean
  disabled?: boolean
  children?: React.ReactNode
  tooltip?: string
  tooltipId?: string
  tooltipPlace?: 'top' | 'bottom' | 'left' | 'right' | 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href = '#',
  as,
  onClick,
  target,
  size = 'md',
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
  // Consolidate styles for the link button.
  const linkStyles = clsx(
    'inline-flex items-center justify-center focus:outline-none transition duration-150',
    variantStyles[variant],
    sizeStyles[size],
    {
      'cursor-not-allowed opacity-50': disabled || !href,
      'whitespace-nowrap': !iconOnly,
    },
    className
  )

  return (
    <>
      <Link
        href={href}
        as={as}
        onClick={onClick}
        className={linkStyles}
        target={target}
        rel={rel}
        role="link"
        aria-label={ariaLabel}
        aria-disabled={disabled || !href}
        aria-current={ariaCurrent ? 'page' : undefined}
        scroll={scroll}
        download={download}
        data-id={`${href.replace('#', '')}-btn`}
        {...(tooltip
          ? {
            'data-tooltip-id': tooltipId,
            'data-tooltip-content': tooltip,
            'data-tooltip-place': tooltipPlace,
          }
          : {})}
        {...rest}
      >
        {/* Render icon */}
        {icon && (
          <span className={clsx(iconOnly ? 'w-5 h-5' : 'mr-2')}>
            {icon}
          </span>
        )}
        {/* Render children */}
        {!iconOnly && children}
      </Link>
      {/* Conditionally render tooltip if required */}
      {tooltip && tooltipId && (
        <Suspense fallback={<div>Loading Tooltip...</div>}>
          <Tooltip id={tooltipId} className="z-50" />
        </Suspense>
      )}
    </>
  )
}

export default LinkButton







// 'use client'

// import React, { Suspense } from 'react'
// import clsx from 'clsx'
// import { variantStyles, sizeStyles } from './styles'
// import Link from 'next/link' // Use a direct import for better performance in this case.
// // Dynamically import Tooltip if it's large or rarely used.
// const Tooltip = React.lazy(() =>
//   import('react-tooltip').then((mod) => ({ default: mod.Tooltip }))
// )

// export interface LinkButtonProps {
//   href?: string
//   as?: string
//   onClick?: React.MouseEventHandler<HTMLAnchorElement>
//   target?: '_blank' | '_top' | '_parent' | '_self'
//   rel?: string
//   variant?: keyof typeof variantStyles
//   size?: keyof typeof sizeStyles
//   ariaCurrent?: boolean
//   icon?: React.ReactNode
//   scroll?: boolean
//   download?: boolean
//   className?: string
//   ariaLabel?: string
//   iconOnly?: boolean
//   disabled?: boolean
//   children?: React.ReactNode
//   tooltip?: string
//   tooltipId?: string
//   tooltipPlace?: 'top' | 'bottom' | 'left' | 'right' | 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
// }

// const LinkButton: React.FC<LinkButtonProps> = ({
//   href = '#',
//   as,
//   onClick,
//   target,
//   size = 'md',
//   className,
//   children,
//   ariaLabel = 'Link Button',
//   ariaCurrent = false,
//   disabled = false,
//   variant = 'text',
//   icon,
//   iconOnly = false,
//   scroll = false,
//   download = false,
//   tooltip,
//   tooltipId,
//   tooltipPlace = 'top',
//   rel,
//   ...rest
// }) => {
//   // Consolidate styles for the link button.
//   const linkStyles = clsx(
//     'inline-flex items-center justify-center focus:outline-none transition duration-150',
//     variantStyles[variant],
//     sizeStyles[size],
//     {
//       'cursor-not-allowed opacity-50': disabled || !href,
//       'whitespace-nowrap': !iconOnly,
//     },
//     className
//   )

//   return (
//     <>
//       <Link
//         href={href}
//         as={as}
//         onClick={onClick}
//         className={linkStyles}
//         target={target}
//         rel={rel}
//         role="link"
//         aria-label={ariaLabel}
//         aria-disabled={disabled || !href}
//         aria-current={ariaCurrent ? 'page' : undefined}
//         scroll={scroll}
//         download={download}
//         data-id={`${href.replace('#', '')}-btn`}
//         {...(tooltip
//           ? {
//             'data-tooltip-id': tooltipId,
//             'data-tooltip-content': tooltip,
//             'data-tooltip-place': tooltipPlace,
//           }
//           : {})}
//         {...rest}
//       >
//         {/* Render icon */}
//         {icon && (
//           <span className={clsx(iconOnly ? 'w-5 h-5' : 'mr-2')}>
//             {icon}
//           </span>
//         )}
//         {/* Render children */}
//         {!iconOnly && children}
//       </Link>
//       {/* Conditionally render tooltip if required */}
//       {tooltip && tooltipId && (
//         <Suspense fallback={<div>Loading Tooltip...</div>}>
//           <Tooltip id={tooltipId} className="z-50" />
//         </Suspense>
//       )}
//     </>
//   )
// }

// export default LinkButton







// 'use client'

// import React, { Suspense } from 'react'
// import clsx from 'clsx'
// import { variantStyles, sizeStyles } from './styles'
// // const Tooltip = React.lazy(() =>
// //   import('react-tooltip').then((mod) => ({ default: mod.Tooltip }))
// // )
// const Link = React.lazy(() => import('next/link'))

// export interface LinkButtonProps {
//   href?: string
//   as?: string
//   onClick?: React.MouseEventHandler<HTMLAnchorElement>
//   target?: '_blank' | '_top' | '_parent' | '_self'
//   rel?: string
//   variant?: LinkButtonVariant
//   size?: LinkButtonSize
//   ariaCurrent?: boolean
//   icon?: React.ReactNode
//   scroll?: boolean
//   download?: boolean
//   className?: string
//   ariaLabel?: string
//   iconOnly?: boolean
//   disabled?: boolean
//   children?: React.ReactNode
//   tooltip?: string
//   tooltipId?: string
//   tooltipPlace?: 'top' | 'bottom' | 'left' | 'right' | 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
// }

// const LinkButton: React.FC<LinkButtonProps> = ({
//   href = '#',
//   as,
//   onClick,
//   target,
//   size = 'md',
//   className,
//   children,
//   ariaLabel = 'Link Button',
//   ariaCurrent = false,
//   disabled = false,
//   variant = 'text',
//   icon,
//   iconOnly = false,
//   scroll = false,
//   download = false,
//   tooltip,
//   tooltipId,
//   tooltipPlace = 'top',
//   rel,
//   ...rest
// }) => {
//   const linkStyles = clsx(
//     'inline-flex items-center justify-center focus:outline-none transition duration-150',
//     variantStyles[variant],
//     sizeStyles[size],
//     {
//       'cursor-not-allowed opacity-50': disabled || !href,
//       'whitespace-nowrap': !iconOnly,
//     },
//     className
//   )

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Link
//         href={href}
//         as={as}
//         onClick={onClick}
//         className={linkStyles}
//         target={target}
//         rel={rel}
//         role="link"
//         aria-label={ariaLabel}
//         aria-disabled={disabled || !href}
//         aria-current={ariaCurrent ? 'page' : undefined}
//         scroll={scroll}
//         download={download}
//         data-id={`${href.replace('#', '')}-btn`}
//         {...(tooltip
//           ? {
//             'data-tooltip-id': tooltipId,
//             'data-tooltip-content': tooltip,
//             'data-tooltip-place': tooltipPlace,
//           }
//           : {})}
//         {...rest}
//       >
//         {icon && (
//           <span className={clsx(iconOnly ? 'w-5 h-5' : 'mr-2')}>
//             {icon}
//           </span>
//         )}
//         {!iconOnly && children}
//       </Link>
//       {/* {tooltip && tooltipId && (
//         <Suspense fallback={<div>Loading Tooltip...</div>}>
//           <Tooltip id={tooltipId} className="z-50" />
//         </Suspense>
//       )} */}
//     </Suspense>
//   )
// }

// export default LinkButton










// 'use client'

// import React, { Suspense } from 'react'
// import clsx from 'clsx'

// // Dynamic imports
// const Tooltip = React.lazy(() => import('react-tooltip'))
// const Link = React.lazy(() => import('next/link'))

// export type LinkButtonVariant = 'text' | 'ghost' | 'link'
// export type LinkButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

// export interface LinkButtonProps {
//   href?: string
//   as?: string
//   onClick?: React.MouseEventHandler<HTMLAnchorElement>
//   target?: '_blank' | '_top' | '_parent' | '_self'
//   rel?: string
//   variant?: LinkButtonVariant
//   size?: LinkButtonSize
//   ariaCurrent?: boolean
//   icon?: React.ReactNode
//   scroll?: boolean
//   download?: boolean
//   className?: string
//   ariaLabel?: string
//   iconOnly?: boolean
//   disabled?: boolean
//   children?: React.ReactNode
//   tooltip?: string
//   tooltipId?: string
//   tooltipPlace?: 'top' | 'bottom' | 'left' | 'right'
// }

// // Styles
// const variantStyles: Record<LinkButtonVariant, string> = {
//   text: 'bg-transparent text-blue-600 hover:bg-blue-100',
//   ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
//   link: 'text-blue-600 hover:underline',
// }

// const sizeStyles: Record<LinkButtonSize, string> = {
//   xs: 'px-2 py-1 text-xs',
//   sm: 'px-3 py-1.5 text-sm',
//   md: 'px-4 py-2 text-base',
//   lg: 'px-5 py-3 text-lg',
//   xl: 'px-6 py-4 text-xl',
//   full: 'w-full px-4 py-2 text-base',
// }

// const LinkButton: React.FC<LinkButtonProps> = ({
//   href = '#',
//   as,
//   onClick,
//   target,
//   size = 'md',
//   className,
//   children,
//   ariaLabel = 'Link Button',
//   ariaCurrent = false,
//   disabled = false,
//   variant = 'text',
//   icon,
//   iconOnly = false,
//   scroll = false,
//   download = false,
//   tooltip,
//   tooltipId,
//   tooltipPlace = 'top',
//   rel,
//   ...rest
// }) => {
//   const linkStyles = clsx(
//     'inline-flex items-center justify-center focus:outline-none transition duration-150',
//     variantStyles[variant],
//     sizeStyles[size],
//     {
//       'cursor-not-allowed opacity-50': disabled || !href,
//       'whitespace-nowrap': !iconOnly,
//     },
//     className
//   )

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Link
//         href={href}
//         as={as}
//         onClick={onClick}
//         className={linkStyles}
//         target={target}
//         rel={rel}
//         role="link"
//         aria-label={ariaLabel}
//         aria-disabled={disabled || !href}
//         aria-current={ariaCurrent ? 'page' : undefined}
//         scroll={scroll}
//         download={download}
//         data-id={`${href.replace('#', '')}-btn`}
//         {...(tooltip
//           ? {
//             'data-tooltip-id': tooltipId,
//             'data-tooltip-content': tooltip,
//             'data-tooltip-place': tooltipPlace,
//           }
//           : {})}
//         {...rest}
//       >
//         {/* Render Icon */}
//         {icon && (
//           <span className={clsx(iconOnly ? 'w-5 h-5' : 'mr-2')}>
//             {icon}
//           </span>
//         )}
//         {!iconOnly && children}
//       </Link>
//       {tooltip && tooltipId && (
//         <Suspense fallback={<div>Loading Tooltip...</div>}>
//           <Tooltip id={tooltipId} className="z-50" />
//         </Suspense>
//       )}
//     </Suspense>
//   )
// }

// export default LinkButton






// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import clsx from 'clsx'
// import { Tooltip } from 'react-tooltip'



// // Types for props
// export type LinkButtonVariant = 'text' | 'ghost' | 'link'
// export type LinkButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

// export interface LinkButtonProps {
//   href?: string
//   as?: string
//   onClick?: React.MouseEventHandler<HTMLAnchorElement>
//   target?: '_blank' | '_top' | '_parent' | '_self'
//   rel?: string
//   variant?: LinkButtonVariant
//   size?: LinkButtonSize
//   ariaCurrent?: boolean
//   icon?: React.ReactNode
//   scroll?: boolean
//   download?: boolean
//   className?: string
//   ariaLabel?: string
//   iconOnly?: boolean
//   disabled?: boolean
//   children?: React.ReactNode
//   tooltip?: string
//   tooltipId?: string
//   tooltipPlace?: 'top' | 'bottom' | 'left' | 'right' | 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
// }

// // Simplified styles
// const variantStyles: Record<LinkButtonVariant, string> = {
//   text: 'bg-transparent text-blue-600 hover:bg-blue-100',
//   ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
//   link: 'text-blue-600 hover:underline',
// }

// const sizeStyles: Record<LinkButtonSize, string> = {
//   xs: 'px-2 py-1 text-xs',
//   sm: 'px-3 py-1.5 text-sm',
//   md: 'px-4 py-2 text-base',
//   lg: 'px-5 py-3 text-lg',
//   xl: 'px-6 py-4 text-xl',
//   full: 'w-full px-4 py-2 text-base',
// }

// const LinkButton: React.FC<LinkButtonProps> = ({
//   href = '#',
//   as,
//   onClick,
//   target,
//   size = 'md',
//   className,
//   children,
//   ariaLabel = 'Link Button',
//   ariaCurrent = false,
//   disabled = false,
//   variant = 'text',
//   icon,
//   iconOnly = false,
//   scroll = false,
//   download = false,
//   tooltip,
//   tooltipId,
//   tooltipPlace = 'top',
//   rel,
//   ...rest
// }) => {
//   // Combine styles
//   const linkStyles = clsx(
//     'inline-flex items-center justify-center focus:outline-none transition duration-150',
//     variantStyles[variant],
//     sizeStyles[size],
//     {
//       'cursor-not-allowed opacity-50': disabled || !href,
//       'whitespace-nowrap': !iconOnly,
//     },
//     className
//   )

//   return (
//     <>
//       <Link
//         href={href}
//         as={as}
//         onClick={onClick}
//         className={linkStyles}
//         target={target}
//         rel={rel}
//         role="link"
//         aria-label={ariaLabel}
//         aria-disabled={disabled || !href}
//         aria-current={ariaCurrent ? 'page' : undefined}
//         scroll={scroll}
//         download={download}
//         data-id={`${href.replace('#', '')}-btn`}
//         {...(tooltip ? {
//           'data-tooltip-id': tooltipId,
//           'data-tooltip-content': tooltip,
//           'data-tooltip-place': tooltipPlace,
//         } : {})}
//         {...rest}
//       >
//         {/* Render Icon */}
//         {icon && (
//           <span className={clsx(iconOnly ? 'w-5 h-5' : 'mr-2')}>
//             {icon}
//           </span>
//         )}
//         {!iconOnly && children}
//       </Link>
//       {tooltip && tooltipId && <Tooltip id={tooltipId} className="z-50" />}
//     </>
//   )
// }

// export default LinkButton










// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import clsx from 'clsx'
// import { Tooltip } from 'react-tooltip'

// // Types for props
// export type LinkButtonVariant = 'text' | 'ghost' | 'link'
// export type LinkButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

// export interface LinkButtonProps {
//   href?: string
//   as?: string
//   onClick?: React.MouseEventHandler<HTMLAnchorElement>
//   target?: '_blank' | '_top' | '_parent' | '_self'
//   rel?: string
//   variant?: LinkButtonVariant
//   size?: LinkButtonSize
//   ariaCurrent?: boolean
//   icon?: React.ReactNode
//   scroll?: boolean
//   download?: boolean
//   className?: string
//   ariaLabel?: string
//   iconOnly?: boolean
//   disabled?: boolean
//   children?: React.ReactNode
//   tooltip?: string
//   tooltipId?: string
//   tooltipPlace?: 'top' | 'bottom' | 'left' | 'right' | "bottom-start" | "bottom-end" | 'top-end' | 'top-start'
// }

// // Simplified styles
// const variantStyles: Record<LinkButtonVariant, string> = {
//   text: 'bg-transparent text-blue-600 hover:bg-blue-100',
//   ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
//   link: 'text-blue-600 hover:underline',
// }

// const sizeStyles: Record<LinkButtonSize, string> = {
//   xs: 'px-2 py-1 text-xs',
//   sm: 'px-3 py-1.5 text-sm',
//   md: 'px-4 py-2 text-base',
//   lg: 'px-5 py-3 text-lg',
//   xl: 'px-6 py-4 text-xl',
//   full: 'w-full px-4 py-2 text-base',
// }

// const LinkButton: React.FC<LinkButtonProps> = ({
//   href = '#',
//   as,
//   onClick,
//   target,
//   size = 'md',
//   className,
//   children,
//   ariaLabel = 'Link Button',
//   ariaCurrent = false,
//   disabled = false,
//   variant = 'text',
//   icon,
//   iconOnly = false,
//   scroll = false,
//   download = false,
//   tooltip,
//   tooltipId,
//   tooltipPlace = 'top',
//   rel,
//   ...rest
// }) => {
//   // Combine styles
//   const linkStyles = clsx(
//     'inline-flex items-center justify-center focus:outline-none transition duration-150',
//     variantStyles[variant],
//     sizeStyles[size],
//     {
//       'cursor-not-allowed opacity-50': disabled || !href,
//       'whitespace-nowrap': !iconOnly,
//     },
//     className
//   )

//   return (
//     <>
//       <Link
//         href={href}
//         as={as}
//         onClick={onClick}
//         className={linkStyles}
//         target={target}
//         rel={rel}
//         role="link"
//         aria-label={ariaLabel}
//         aria-disabled={disabled || !href}
//         aria-current={ariaCurrent ? 'page' : undefined}
//         scroll={scroll}
//         download={download}
//         data-id={`${href.replace('#', '')}-btn`}
//         {...(tooltip ? {
//           'data-tooltip-id': tooltipId,
//           'data-tooltip-content': tooltip,
//           'data-tooltip-place': tooltipPlace,
//         } : {})}
//         {...rest}
//       >
//         {/* Render Icon */}
//         {icon && (
//           <span className={clsx(iconOnly ? 'w-5 h-5' : 'mr-2')}>
//             {icon}
//           </span>
//         )}
//         {!iconOnly && children}
//       </Link>
//       {tooltip && tooltipId && <Tooltip id={tooltipId} className="z-50" />}
//     </>
//   )
// }

// export default LinkButton















// 'use client'

// import React from 'react'
// import {
//   ButtonVariant,
//   colorStyles,
//   outerStyles,
//   sizeStyles,
//   textStyles,
//   iconButtonSizes,
//   TooltipPosition,
// } from '@/components'
// import Link from 'next/link'
// import clsx from 'clsx'
// import { Tooltip } from 'react-tooltip'
// import IconComponent from '@/app/(content)/projects/components/IconComponent'

// export type LinkButtonVariant = 'text' | 'ghost' | 'link'

// export interface LinkButtonProps {
//   href?: string
//   as?: string
//   onClick?: React.MouseEventHandler<HTMLAnchorElement>
//   target?: '_blank' | '_top' | '_parent' | '_self'
//   rel?: string
//   variant?: ButtonVariant
//   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
//   ariaCurrent?: boolean
//   icon?: React.ReactElement | string
//   scroll?: boolean
//   download?: boolean
//   className?: string
//   ariaLabel?: string
//   iconOnly?: boolean
//   disabled?: boolean
//   children?: React.ReactNode
//   tooltip?: string
//   tooltipId?: string
//   tooltipPlace?: TooltipPosition
// }

// const LinkButton: React.FC<LinkButtonProps> = ({
//   href = '#',
//   as,
//   onClick,
//   target,
//   size,
//   className,
//   children,
//   ariaLabel = 'Link Button',
//   ariaCurrent = false,
//   disabled = false,
//   variant = 'text',
//   icon: Icon,
//   iconOnly = false,
//   scroll = false,
//   download = false,
//   tooltip,
//   tooltipId,
//   tooltipPlace = 'top',
//   rel,
//   ...rest
// }) => {
//   const linkStyles = clsx(
//     'group focus:outline-none whitespace-nowrap select-none inline-flex items-center justify-center transition-colors transition-shadow duration-300 ease',
//     iconOnly ? iconButtonSizes[size!] : sizeStyles[size!],
//     colorStyles[variant],
//     outerStyles[variant],
//     textStyles[size!],
//     {
//       'hover:underline hover:underline-offset-2': variant === 'link' && !disabled,
//       'cursor-not-allowed opacity-50': disabled || !href,
//     },
//     className
//   )

//   const renderIcon = () => {
//     if (typeof Icon === 'string') {
//       // return <Icon name={icon} className={clsx('mr-2', className)} size={size} />
//       return <IconComponent icon={Icon} className={clsx('mr-2', className)} />
//     } else if (Icon && typeof Icon !== 'string') {
//       return Icon
//     }
//     return null
//   }

//   return (
//     <>
//       <Link
//         href={href}
//         as={as}
//         onClick={onClick}
//         className={linkStyles}
//         target={target}
//         rel={rel}
//         role="link"
//         aria-label={ariaLabel}
//         aria-disabled={disabled || !href}
//         aria-current={ariaCurrent ? 'page' : undefined}
//         scroll={scroll}
//         download={download}
//         data-id={`${href.replace('#', '')}-btn`}
//         {...(tooltip ? {
//           'data-tooltip-id': tooltipId,
//           'data-tooltip-content': tooltip,
//           'data-tooltip-place': tooltipPlace,
//         } : {})}
//         {...rest}
//       >
//         {/* {icon && renderIcon()} */}
//         {Icon && renderIcon()}
//         {!iconOnly && children}
//       </Link>
//       {tooltip && tooltipId && <Tooltip id={tooltipId} className="z-50" />}
//     </>
//   )
// }

// export default LinkButton
























// 'use client'

// import React, { useMemo } from 'react'
// import {
//   ButtonVariant,
//   colorStyles,
//   outerStyles,
//   sizeStyles,
//   textStyles,
//   iconButtonSizes, TooltipPosition, Icon
// } from '@/components'
// import Link from 'next/link'
// import clsx from 'clsx'
// import { Tooltip } from 'react-tooltip'

// export type LinkButtonVariant = 'text' | 'ghost' | 'link'

// export interface LinkButtonProps {
//   href?: string
//   as?: string
//   onClick?: React.MouseEventHandler<HTMLAnchorElement>
//   target?: '_blank' | '_top' | '_parent' | '_self'
//   rel?: string
//   variant?: ButtonVariant
//   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
//   ariaCurrent?: boolean
//   icon?: React.ReactElement | React.ReactElement<SVGSVGElement>
//   scroll?: boolean
//   download?: boolean
//   className?: string
//   ariaLabel?: string
//   iconOnly?: boolean
//   disabled?: boolean
//   children?: React.ReactNode
//   tooltip?: string
//   tooltipId?: string
//   tooltipPlace?: TooltipPosition
// }

// const LinkButton: React.FC<LinkButtonProps> = ({
//   href = '#',
//   as,
//   onClick,
//   target,
//   size,
//   className,
//   children,
//   ariaLabel = 'Link Button',
//   ariaCurrent = false,
//   disabled = false,
//   variant = 'text',
//   icon,
//   iconOnly = false,
//   scroll = false,
//   download = false,
//   tooltip,
//   tooltipId,
//   tooltipPlace = 'top',
//   rel,
//   ...rest
// }) => {
//   const linkSize = useMemo(
//     () => (iconOnly ? size && iconButtonSizes[size] : size && sizeStyles[size]),
//     [size, iconOnly]
//   )
//   const linkColor = useMemo(() => colorStyles[variant], [variant])
//   const linkOuter = useMemo(() => outerStyles[variant], [variant])
//   const linkText = useMemo(() => size && textStyles[size], [size])

//   const linkStyles = clsx(
//     'group focus:outline-none whitespace-nowrap select-none inline-flex items-center justify-center',
//     linkSize,
//     linkColor,
//     linkOuter,
//     linkText,
//     'transition-colors transition-shadow duration-300 ease',
//     {
//       'hover:underline hover:underline-offset-2':
//         variant === 'link' && !disabled,
//     },
//     className
//   )
//   const IconComponent: React.FC = () => {
//     if (typeof icon === 'string') {
//       return (
//         <Icon name={icon} className={className} size={size} />
//       )
//     } else {
//       return (
//         icon
//       )
//     }
//   }
//   return (
//     <>
//       <Link
//         href={href}
//         as={as}
//         onClick={onClick}
//         className={
//           disabled || !href ? 'cursor-not-allowed opacity-50' : linkStyles
//         }
//         target={target}
//         rel={rel}
//         role="link"
//         aria-label={ariaLabel}
//         aria-disabled={disabled || !href}
//         aria-current={ariaCurrent ? 'page' : undefined}
//         scroll={scroll}
//         download={download}
//         data-id={`${href.replace('#', '')}-btn`}
//         {...(tooltip ? {
//           'data-tooltip-id': tooltipId,
//           'data-tooltip-content': tooltip,
//           'data-tooltip-place': tooltipPlace,
//         } : {})}
//         {...rest}
//       >
//         {icon && <IconComponent />}
//         {!iconOnly && children}
//       </Link>
//       {tooltip && tooltipId && <Tooltip id={tooltipId} className="z-50" />}
//     </>
//   )
// }

// export default LinkButton
