"use client";

import React, { useMemo } from "react";
import { IconContext } from "react-icons";
import clsx from "clsx";
import { IconLibrary } from "./icons";
import { ButtonSize } from "../Buttons";

export type IconType = "svg" | "react-icons";

export interface IconProps {
  type?: IconType;
  icon?: React.ReactElement;
  size?: ButtonSize;
  style?: React.CSSProperties;
  id?: string;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  ariaHidden?: boolean;
  role?: "img" | "presentation" | "graphic-symbol";
  loading?: boolean;
}

const Icon: React.FC<IconProps> = ({
  type = "react-icons",
  icon,
  size = "md",
  style,
  id,
  className,
  children,
  ariaLabel,
  ariaHidden = false,
  role = "img",
  loading = false,
}) => {
  const iconSizes = useMemo(
    () => ({
      xs: "20px",
      sm: "24px",
      md: "28px",
      lg: "32px",
      xl: "36px",
      full: "100%",
    }),
    [],
  );

  const validTypes: IconType[] = useMemo(() => ["svg", "react-icons"], []);

  if (!validTypes.includes(type)) {
    console.warn(`Invalid type "${type}" provided to Icon component.`);
    throw new Error(`Invalid type "${type}" provided to Icon component`);
  }

  const computedSize = useMemo(
    () => (size ? iconSizes[size] : "auto"),
    [size, iconSizes],
  );

  const sharedProps = {
    "aria-hidden": ariaHidden,
    "aria-label": ariaLabel,
    role,
    "data-testid": "icon-wrapper",
    className: clsx("icon-wrapper flex items-center justify-center", className),
  };

  const iconStyle = useMemo(
    () => ({
      color: "currentColor",
      fill: "currentColor",
      ...style,
    }),
    [style],
  );

  const renderReactIcon = () => {
    const IconComponent = loading ? (
      <IconLibrary.Loading
        className="animate-spin transition-transform duration-500"
        data-testid="spinner"
      />
    ) : (
      icon
    );

    return (
      <span
        id={id}
        {...sharedProps}
        aria-label={loading ? "Loading" : ariaLabel}
      >
        <IconContext.Provider
          value={{
            style: iconStyle,
            size: computedSize,
          }}
        >
          {React.cloneElement(IconComponent as React.ReactElement, {
            "data-testid": loading ? "spinner" : "icon",
          })}
        </IconContext.Provider>
      </span>
    );
  };

  const renderSVGIcon = () => {
    if (!children) {
      const message = "Icon component requires children when type is svg";
      console.error(message);
      throw new Error(message);
    }

    return (
      <span {...sharedProps}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) && child.type === "svg"
            ? React.cloneElement(child as React.ReactElement, {
                style: {
                  ...iconStyle,
                  width: computedSize,
                  height: computedSize,
                },
                tabIndex: -1,
                "aria-labelledby": ariaLabel ? "svg-title" : undefined,
                "data-testid": loading ? "spinner" : "svg-icon",
                className: clsx(
                  "select-none pointer-events-auto",
                  child.props.className,
                ),
                children: (
                  <>
                    {ariaLabel && <title id="svg-title">{ariaLabel}</title>}
                    {child.props.children}
                  </>
                ),
              })
            : child,
        )}
      </span>
    );
  };

  return type === "react-icons" ? renderReactIcon() : renderSVGIcon();
};

export default Icon;
