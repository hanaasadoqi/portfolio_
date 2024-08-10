import React from "react";
import clsx from "clsx";

const ButtonGroup = ({
  children,
  ariaLabel,
  className,
  orientation = "horizontal",
}: {
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) => (
  <div
    className={clsx(
      "inline-flex",
      {
        "flex-col space-y-2": orientation === "vertical",
        "space-x-2": orientation === "horizontal",
      },
      className,
    )}
    role="group"
    aria-label={ariaLabel}
  >
    {children}
  </div>
);

export default ButtonGroup;
