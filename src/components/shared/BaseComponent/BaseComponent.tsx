import React, {
  ComponentProps,
  DetailedHTMLProps,
  ElementType,
  ForwardedRef,
  forwardRef,
  HTMLProps,
} from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { BaseComponentProps } from "./BaseComponent.styles";

// Default component implementation with ref forwarding
const BaseComponent = forwardRef(
  <T extends ElementType = "div">(
    {
      as: Component = "div" as T,
      children,
      className,
      variant = "primary", // Default variant
      aria,
      data,
      ...rest
    }: ComponentProps<T> & BaseComponentProps<T>,
    ref: ForwardedRef<Element>,
  ) => {
    // Combine class names, including variant-based ones if applicable
    const combinedClassName = clsx(className, {
      "variant-primary": variant === "primary",
      "variant-secondary": variant === "secondary",
      "variant-tertiary": variant === "tertiary",
    });

    // Pass all props except `aria` and `data` to the component
    return (
      <Component
        ref={ref}
        {...aria}
        {...data}
        className={combinedClassName}
        {...(rest as DetailedHTMLProps<HTMLProps<T>, T>)}
      >
        {children}
      </Component>
    );
  },
);

// Explicitly set display name for better debugging
BaseComponent.displayName = "BaseComponent";

// PropTypes for runtime validation
BaseComponent.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  aria: PropTypes.object,
  data: PropTypes.object,
};

export default BaseComponent;
