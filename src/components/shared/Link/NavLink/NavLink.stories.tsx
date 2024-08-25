import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import NavLink from './NavLink'

const meta: Meta<typeof NavLink> = {
  title: 'Components/NavLink',
  component: NavLink,
  argTypes: {
    exact: {
      control: 'boolean',
    },
    activeClassName: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof NavLink>

export const Default: Story = {
  args: {
    href: '/',
    exact: true,
    children: 'Home',
  },
}

export const NonExactMatch: Story = {
  args: {
    href: '/about',
    exact: false,
    children: 'About',
  },
}

export const CustomActiveClass: Story = {
  args: {
    href: '/contact',
    exact: false,
    children: 'Contact',
    activeClassName: 'text-green-500 underline',
  },
}

export const DisabledLink: Story = {
  args: {
    href: '/profile',
    exact: false,
    children: 'Profile (Disabled)',
    disabled: true,
  },
}

export const MultipleLinks: Story = {
  render: args => (
    <nav>
      <NavLink href="/" exact activeClassName={args.activeClassName}>
        Home
      </NavLink>
      <NavLink href="/about" activeClassName={args.activeClassName}>
        About
      </NavLink>
      <NavLink href="/contact" activeClassName={args.activeClassName}>
        Contact
      </NavLink>
      <NavLink href="/profile" disabled>
        Profile (Disabled)
      </NavLink>
    </nav>
  ),
  args: {
    activeClassName: 'text-primary font-bold',
  },
}
