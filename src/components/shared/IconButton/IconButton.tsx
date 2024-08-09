import React from "react";
import BaseButton, {
  BaseButtonProps,
  ButtonSize,
} from "../BaseButton/BaseButton";
import Icon from "../Icon/Icon";
import { Tooltip } from "react-tooltip";
import clsx from "clsx";

export type TooltipPosition =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";

export interface IconButtonProps extends BaseButtonProps {
  icon: React.ReactElement | React.ReactElement<SVGSVGElement>;
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
  iconClassName?: string;
  tooltip?: string;
  tooltipPlace?: TooltipPosition;
}

export const iconButtonSizes: Record<ButtonSize, string> = {
  xs: "p-1",
  sm: "p-2",
  md: "p-3",
  lg: "p-4",
  xl: "p-5",
  full: "w-full h-full",
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconPosition = "left",
  size = "md",
  iconOnly = false,
  iconClassName,
  children,
  className,
  tooltip,
  loading = false,
  tooltipPlace = "bottom",
  ...rest
}) => {
  const IconComponent: React.FC = () => (
    <Icon loading={loading} icon={icon} className={iconClassName} size={size} />
  );

  return (
    <>
      <BaseButton
        className={
          iconOnly ? clsx(iconButtonSizes[size], className) : className
        }
        iconOnly={iconOnly}
        size={size}
        data-tooltip-id="icon-btn-tooltip"
        data-tooltip-content={tooltip}
        data-tooltip-place={tooltipPlace}
        ariaLabel={tooltip}
        {...rest}
      >
        {!iconOnly && iconPosition === "left" && <IconComponent />}
        {!iconOnly && (loading ? "Loading..." : children)}
        {!iconOnly && iconPosition === "right" && <IconComponent />}
        {iconOnly && <IconComponent />}
      </BaseButton>
      <Tooltip id="icon-btn-tooltip" />
    </>
  );
};

export default IconButton;
