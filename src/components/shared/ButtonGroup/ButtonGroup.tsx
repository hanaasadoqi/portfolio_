import React from "react";
import clsx from "clsx";

export interface ButtonGroupProps {
  border?: boolean; // Whether to display a border
  orientation?: "horizontal" | "vertical"; // Layout direction
  spacing?: "sm" | "md" | "lg" | "xl"; // Tailwind spacing class
  ariaLabel?: string; // ARIA label for accessibility
  className?: string; // Additional custom class names
  children: React.ReactNode; // Buttons or other children elements
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  border = true,
  spacing = "md",
  orientation = "horizontal",
  ariaLabel,
  className,
  children,
}) => {
  const spacingStyles = {
    horizontal: {
      sm: "space-x-1",
      md: "space-x-2",
      lg: "space-x-4",
      xl: "space-x-6",
    },
    vertical: {
      sm: "space-y-1",
      md: "space-y-2",
      lg: "space-y-4",
      xl: "space-y-6",
    },
  };
  const groupClass = clsx(
    "inline-flex items-center rounded-md",
    {
      "flex-col": orientation === "vertical",
      "flex-row": orientation === "horizontal",
      "border-2 border-gray-200 p-1": border,
    },
    spacingStyles[orientation][spacing],
    className,
  );

  const ariaAttributes = ariaLabel ? { "aria-label": ariaLabel } : {};

  return (
    <ul role="group" className={groupClass} {...ariaAttributes}>
      {children}
    </ul>
  );
};

export default ButtonGroup;
