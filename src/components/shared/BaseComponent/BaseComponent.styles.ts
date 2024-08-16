import { AriaRole, ElementType, ReactNode } from "react";

// Define a type for ARIA attributes
export type AriaAttributes = {
  role?: AriaRole;
  ariaLabel?: string;
  [key: string]: any;
};

// Define a type for data attributes
export type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean | undefined;
};

// Define allowed variant values
export type Variant = "primary" | "secondary" | "tertiary";

// Extend the base component props to include additional attributes
export interface BaseComponentProps<T extends ElementType> {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  aria?: AriaAttributes;
  data?: DataAttributes;
}
