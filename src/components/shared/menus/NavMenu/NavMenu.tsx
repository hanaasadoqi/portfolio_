import React from 'react'
import clsx from 'clsx'
import { ButtonGroupProps, LinkButton, LinkButtonProps } from '../..'

export interface NavItemProps extends Omit<LinkButtonProps, 'children'> {
  label: string
  href: string
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  currentSection?: boolean
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  className,
  size = 'full',
  currentSection = false,
  ...rest
}) => {
  return (
    <LinkButton
      href={href}
      className={clsx(
        'w-full font-bold text-primary-950 transition-all duration-300 dark:text-primary-50',
        {
          'active-section': currentSection,
        },
        className
      )}
      scroll={true}
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
  currentSection?: string
}

const NavMenu: React.FC<NavMenuProps> = ({
  links,
  className,
  size,
  currentSection,
  ...rest
}) => {
  return (
    <nav
      className={clsx('flex items-center justify-evenly', className)}
      {...rest}
    >
      {links.map(link => (
        <NavItem
          key={link.href}
          {...link}
          currentSection={link.href === currentSection}
        />
      ))}
    </nav>
  )
}

export default NavMenu
