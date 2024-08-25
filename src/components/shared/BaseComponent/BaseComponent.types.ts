import { AriaAttributes, ElementType, ReactNode } from 'react'

// Extend the React AriaAttributes type to include additional attributes if necessary
export type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean | undefined
}

// Define the possible sizes for the components
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

// Define the possible variants for the components
export type ComponentVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'text'
// Define the base props that all components should have
export interface BaseComponentProps<T extends ElementType> {
  as?: T // The HTML element or component to render as (e.g., 'div', 'button', 'a')
  children?: ReactNode // The content inside the component
  className?: string // Additional custom classes
  variant?: ComponentVariant // The variant of the component
  size?: ComponentSize // The size of the component
  rounded?: boolean // Whether the component should have rounded corners
  disabled?: boolean // Whether the component is disabled
  ariaProps?: AriaAttributes // ARIA attributes for accessibility
  data?: Record<string, any> // Custom data attributes
}
