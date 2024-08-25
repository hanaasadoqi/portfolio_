import React from 'react'
import { render, screen } from '@testing-library/react'
import BaseComponent from './BaseComponent'

describe('BaseComponent', () => {
  // Test that the component renders correctly with default props
  test('renders BaseComponent with default props', () => {
    render(<BaseComponent>Default Content</BaseComponent>)
    const component = screen.getByText('Default Content')

    expect(component).toBeInTheDocument()
    expect(component).toHaveClass('bg-blue-500 text-white')
  })

  // Test that the component applies the correct variant class
  test('applies correct class based on variant prop', () => {
    render(<BaseComponent variant="secondary">Secondary Content</BaseComponent>)
    const component = screen.getByText('Secondary Content')

    expect(component).toHaveClass('bg-gray-500 text-white')
  })

  // Test that the component applies the correct size class
  test('applies correct class based on size prop', () => {
    render(<BaseComponent size="large">Large Content</BaseComponent>)
    const component = screen.getByText('Large Content')

    expect(component).toHaveClass('text-lg py-3 px-6')
  })

  // Test that the component applies the rounded class when rounded prop is true
  test('applies rounded class when rounded prop is true', () => {
    render(<BaseComponent rounded>Rounded Content</BaseComponent>)
    const component = screen.getByText('Rounded Content')

    expect(component).toHaveClass('rounded-full')
  })

  // Test that the component applies the disabled class and aria-disabled attribute
  test('applies disabled class and aria-disabled attribute when disabled prop is true', () => {
    render(<BaseComponent disabled>Disabled Content</BaseComponent>)
    const component = screen.getByText('Disabled Content')

    expect(component).toHaveClass('opacity-50 cursor-not-allowed')
    expect(component).toHaveAttribute('aria-disabled', 'true')
  })

  // Test that the component renders as the specified element type
  test('renders as the specified element type', () => {
    render(<BaseComponent as="button">Button Element</BaseComponent>)
    const component = screen.getByRole('button')

    expect(component.tagName).toBe('BUTTON')
  })

  // Test that the component accepts custom ARIA attributes
  test('accepts custom ARIA attributes', () => {
    render(
      <BaseComponent ariaProps={{ 'aria-label': 'custom label' }}>
        ARIA Content
      </BaseComponent>
    )
    const component = screen.getByText('ARIA Content')

    expect(component).toHaveAttribute('aria-label', 'custom label')
  })

  // Test that the component accepts custom data attributes
  test('accepts custom data attributes', () => {
    render(
      <BaseComponent data={{ 'data-test': 'custom data' }}>
        Data Content
      </BaseComponent>
    )
    const component = screen.getByText('Data Content')

    expect(component).toHaveAttribute('data-test', 'custom data')
  })

  // Test that the component renders correctly with a custom className
  test('applies custom className correctly', () => {
    render(
      <BaseComponent className="custom-class">
        Custom Class Content
      </BaseComponent>
    )
    const component = screen.getByText('Custom Class Content')

    expect(component).toHaveClass('custom-class')
  })
})
