import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import BaseComponent from './BaseComponent'
import { ComponentSize, ComponentVariant } from './BaseComponent.types'

const meta: Meta<typeof BaseComponent> = {
  title: 'Components/BaseComponent',
  component: BaseComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'link',
        'text',
        'fab',
      ] as ComponentVariant[],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'] as ComponentSize[],
    },
    rounded: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof BaseComponent>

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    rounded: false,
    disabled: false,
    children: 'Base Component',
  },
}

export const AllVariants: Story = {
  render: args => (
    <div className="space-y-4">
      {(
        [
          'primary',
          'secondary',
          'outline',
          'ghost',
          'link',
          'text',
          'fab',
        ] as ComponentVariant[]
      ).map(variant => (
        <BaseComponent key={variant} {...args} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
        </BaseComponent>
      ))}
    </div>
  ),
  args: {
    size: 'md',
    rounded: false,
    disabled: false,
  },
}

export const AllSizes: Story = {
  render: args => (
    <div className="space-y-4">
      {(['xs', 'sm', 'md', 'lg', 'xl', 'full'] as ComponentSize[]).map(size => (
        <BaseComponent key={size} {...args} size={size}>
          {size.toUpperCase()} Size
        </BaseComponent>
      ))}
    </div>
  ),
  args: {
    variant: 'primary',
    rounded: false,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    rounded: false,
    disabled: true,
    children: 'Disabled Component',
  },
}

export const Rounded: Story = {
  render: args => (
    <div className="space-y-4">
      {(['none', 'sm', 'md', 'lg', 'xl', 'full'] as const).map(rounded => (
        <BaseComponent key={rounded} {...args} rounded={rounded}>
          {rounded.charAt(0).toUpperCase() + rounded.slice(1)} Rounded
        </BaseComponent>
      ))}
    </div>
  ),
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
}

export const Responsive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    rounded: false,
    disabled: false,
    children: 'Responsive Component',
  },
}
