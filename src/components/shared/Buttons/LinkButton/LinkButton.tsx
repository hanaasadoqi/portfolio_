import React, { useMemo } from "react";
import {
  colorStyles,
  outerStyles,
  sizeStyles,
  textStyles,
} from "../BaseButton";
import { IconButtonProps, iconButtonSizes } from "../IconButton";
import { Icon } from "../../Icon";
import Link from "next/link";
import clsx from "clsx";

export type LinkButtonVariant = "text" | "ghost" | "link";

export interface LinkButtonProps
  extends Omit<
    IconButtonProps,
    "type" | "role" | "onClick" | "size" | "variant" | "icon"
  > {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: "_blank" | "_top" | "_parent" | "_self";
  variant?: LinkButtonVariant;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  ariaCurrent?: boolean;
  icon?: React.ReactElement | React.ReactElement<SVGSVGElement>;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href = "#",
  onClick,
  target,
  size = "md",
  className,
  children,
  ariaLabel = "Link Button",
  ariaCurrent = false,
  disabled = false,
  variant = "text",
  icon,
  iconOnly = false,
}) => {
  const linkSize = useMemo(
    () => (iconOnly ? iconButtonSizes[size] : sizeStyles[size]),
    [size, iconOnly],
  );
  const linkColor = useMemo(() => colorStyles[variant], [variant]);
  const linkOuter = useMemo(() => outerStyles[variant], [variant]);
  const linkText = useMemo(() => textStyles[size], [size]);

  const linkStyles = clsx(
    "group focus:outline-none whitespace-nowrap select-none inline-flex items-center justify-center",
    linkSize,
    linkColor,
    linkOuter,
    linkText,
    "transition-colors transition-shadow duration-300 ease",
    {
      "hover:underline hover:underline-offset-2":
        variant === "link" && !disabled,
    },
    className,
  );

  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        disabled || !href ? "cursor-not-allowed opacity-50" : linkStyles
      }
      target={target}
      role="link"
      aria-label={ariaLabel}
      aria-disabled={disabled || !href}
      aria-current={ariaCurrent ? "page" : undefined}
    >
      {icon && <Icon icon={icon} size={size} className={className} />}
      {!iconOnly && children}
    </Link>
  );
};

export default LinkButton;
