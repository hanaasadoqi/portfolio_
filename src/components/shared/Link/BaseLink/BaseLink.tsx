import React, { ElementType, ForwardedRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { BaseComponent, BaseComponentProps } from '../../BaseComponent'

export type BaseLinkProps<T extends ElementType> = BaseComponentProps<T> & {
  href: string
  target?: string
  rel?: string
}

const BaseLink = forwardRef(
  <T extends ElementType = 'a'>(
    {
      href,
      target = '_self',
      rel = 'noopener noreferrer',
      disabled = false,
      ariaProps = {},
      ...rest
    }: BaseLinkProps<T>,
    ref: ForwardedRef<Element>
  ) => {
    return (
      <BaseComponent
        as="a"
        ref={ref}
        href={!disabled ? href : undefined}
        aria-disabled={disabled}
        disabled={disabled}
        target={target}
        rel={rel}
        {...ariaProps}
        {...rest}
      />
    )
  }
)

BaseLink.displayName = 'BaseLink'

BaseLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  disabled: PropTypes.bool,
  ariaProps: PropTypes.object,
}

export default React.memo(BaseLink) // Using React.memo to prevent unnecessary re-renders
