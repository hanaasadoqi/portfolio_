import React from 'react'
import clsx from 'clsx'
import {
  ButtonGroup,
  ButtonGroupProps,
  LinkButton,
  LinkButtonProps,
} from '../../shared'

export interface NavItemProps extends Omit<LinkButtonProps, 'children'> {
  label: string
  href: string
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  className,
  size,
  ...rest
}) => {
  return (
    <LinkButton
      href={href}
      className={clsx('transition-all duration-300', className)}
      {...rest}
    >
      {label}
    </LinkButton>
  )
}

interface NavMenuProps extends Omit<ButtonGroupProps, 'children'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  links: NavItemProps[]
  className?: string
}

const NavMenu: React.FC<NavMenuProps> = ({
  links,
  className,
  size,
  ...rest
}) => {
  return (
    <nav className={clsx('flex space-x-4', className)} {...rest}>
      {links.map(link => (
        <NavItem key={link.href} {...link} />
      ))}
    </nav>
  )
}

export default NavMenu
