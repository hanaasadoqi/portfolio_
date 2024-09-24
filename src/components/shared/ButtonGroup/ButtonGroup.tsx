import React from "react";
import clsx from "clsx";

export interface ButtonGroupProps {
  border?: boolean; // Whether to display a border
  orientation?: "horizontal" | "vertical"; // Layout direction
  spacing?: "sm" | "md" | "lg" | "xl"; // Tailwind spacing class
  ariaLabel?: string; // ARIA label for accessibility
  className?: string; // Additional custom class names
  children?: React.ReactNode; // Buttons or other children elements
  divider?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  border = false,
  spacing = "md",
  orientation = "horizontal",
  ariaLabel,
  className = "",
  children,
  divider = false,
}) => {
  const spacingClasses = {
    horizontal: {
      sm: "space-x-1",
      md: "space-x-2",
      lg: "space-x-3",
      xl: "space-x-4",
    },
    vertical: {
      sm: "space-y-1",
      md: "space-y-2",
      lg: "space-y-3",
      xl: "space-y-4",
    },
  };

  const dividerStyles = {
    horizontal: "w-full border-r border-gray-200 last:border-transparent",
    vertical: "border-b border-gray-200 last:border-transparent",
  };

  const groupClass = clsx(
    "w-full h-full inline-flex justify-around items-center p-2 rounded-md overflow-hidden transition-all duration-300 ease",
    {
      "flex-col": orientation === "vertical",
      "flex-row": orientation === "horizontal",
      "border-2 border-gray-200": border,
    },
    spacingClasses[orientation][spacing],
    className,
  );

  const dividerClass = divider ? dividerStyles[orientation] : "";

  const ariaAttributes = ariaLabel ? { "aria-label": ariaLabel } : {};

  const childrenWithDividers = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, {
        className: clsx(
          dividerClass,
          (child as React.ReactElement<{ className?: string }>).props.className,
        ),
      });
    }
    return child;
  });

  return (
    <div role="group" className={groupClass} {...ariaAttributes}>
      {childrenWithDividers}
    </div>
  );
};

export default ButtonGroup;
