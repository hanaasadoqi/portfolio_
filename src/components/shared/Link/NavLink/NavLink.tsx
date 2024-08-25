import React, { ElementType, ForwardedRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router' // Assuming you're using Next.js
import BaseLink, { BaseLinkProps } from '../BaseLink/BaseLink'
import clsx from 'clsx'

type NavLinkProps<T extends ElementType> = BaseLinkProps<T> & {
  exact?: boolean // Whether the active state should be applied only for an exact match
  activeClassName?: string // Custom class name to apply when the link is active
}

const NavLink = forwardRef(
  <T extends ElementType = 'a'>(
    {
      href,
      exact = false,
      activeClassName = 'text-primary95 font-bold',
      className,
      disabled = false,
      ...rest
    }: NavLinkProps<T>,
    ref: ForwardedRef<Element>
  ) => {
    const { pathname } = useRouter()

    // Determine if the link is active based on the current route
    const isActive = exact ? pathname === href : pathname.startsWith(href)

    const combinedClassName = clsx(className, {
      [activeClassName]: isActive && !disabled, // Apply active class if the link is active and not disabled
    })

    return (
      <BaseLink
        href={href}
        className={combinedClassName}
        disabled={disabled}
        ref={ref}
        {...rest}
      />
    )
  }
)

NavLink.displayName = 'NavLink'

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

export default React.memo(NavLink) // Using React.memo to optimize performance
