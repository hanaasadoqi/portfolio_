import React from "react";
import IconButton, { IconButtonProps } from "../IconButton/IconButton";
import clsx from "clsx";

export type FabPosition =
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "bottom-center"
  | "center"
  | "top-center"
  | "center-left"
  | "center-right";
export const positionClasses: Record<FabPosition, string> = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  "top-center": "top-4 left-1/2 transform -translate-x-1/2",
  "center-right": "top-1/2 right-4 transform -translate-y-1/2",
  "center-left": "top-1/2 left-4 transform -translate-y-1/2",
};

interface FloatingActionButtonProps extends IconButtonProps {
  position?: FabPosition;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  size = "md",
  className,
  disabled = false,
  position = "bottom-right",
  ...rest
}) => {
  return (
    <IconButton
      size={size}
      icon={icon}
      className={clsx(
        "fixed rounded-full",
        positionClasses[position],
        className,
      )}
      iconOnly
      variant="fab"
      disabled={disabled}
      {...rest}
    />
  );
};

export default FloatingActionButton;
