import React, {
  ComponentProps,
  DetailedHTMLProps,
  ElementType,
  ForwardedRef,
  forwardRef,
  HTMLProps,
  useId,
} from 'react'
import clsx from 'clsx'
import {
  BaseComponentProps,
  ComponentSize,
  ComponentVariant,
} from './BaseComponent.types'
import {
  sizeStyles,
  colorStyles,
  outerStyles,
  roundedStyles,
  disabledStyles,
} from './baseStyles'

const voidElements = [
  'input',
  'img',
  'textarea',
  'br',
  'hr',
  'meta',
  'link',
  'source',
  'track',
  'embed',
  'area',
  'base',
  'col',
  'param',
  'wbr',
]

const BaseComponent = forwardRef(
  <T extends ElementType = 'div'>(
    {
      as: Component = 'div' as T,
      children,
      className,
      variant = 'primary',
      size = 'md',
      rounded = 'md',
      disabled = false,
      ariaProps = {},
      data,
      ...rest
    }: ComponentProps<T> & BaseComponentProps<T>,
    ref: ForwardedRef<Element>
  ) => {
    const id = useId()

    const isVoidElement = voidElements.includes(Component as string)

    const combinedClassName = clsx(
      className,
      sizeStyles[size as ComponentSize],
      roundedStyles[rounded as keyof typeof roundedStyles],
      {
        [outerStyles[variant as ComponentVariant]]: !disabled,
        [colorStyles[variant as ComponentVariant]]: !disabled,
        [disabledStyles]: disabled, // Ensures disabled styles take precedence
      }
    )

    if (!children) {
      return React.createElement(
        Component,
        {
          ref,
          className: clsx(className),
          ...rest,
        },
        !isVoidElement ? children : undefined // Only pass children if it's not a void element
      )
    } else {
      return (
        <Component
          ref={ref}
          id={id}
          {...ariaProps}
          {...data}
          className={combinedClassName}
          aria-disabled={disabled}
          {...(rest as DetailedHTMLProps<HTMLProps<T>, T>)}
        >
          {!isVoidElement && children}
        </Component>
      )
    }
  }
)
BaseComponent.displayName = 'BaseComponent'
export default BaseComponent
