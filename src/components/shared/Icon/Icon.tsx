import React from "react";
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
  const validTypes: IconType[] = ["svg", "react-icons"];

  const iconSizes: Record<ButtonSize, string> = {
    xs: "12px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "32px",
    full: "auto",
  };

  if (!validTypes.includes(type)) {
    console.warn(`Invalid type "${type}" provided to Icon component.`);
    return null;
  }

  const sharedProps = {
    "aria-hidden": ariaHidden,
    "aria-label": ariaLabel,
    role,
    "data-testid": "icon-wrapper",
    className: clsx("icon-wrapper inline-block", className),
    style: {
      width: size ? iconSizes[size] : "auto",
      height: size ? iconSizes[size] : "auto",
    },
  };

  const iconStyle = {
    color: "currentColor",
    fill: "currentColor",
    ...style,
  };

  const renderReactIcon = () => {
    if (!icon && !loading) {
      console.error(
        "Icon component requires an icon prop when type is react-icons",
      );
      return null;
    }

    const IconComponent = loading ? (
      <IconLibrary.loading
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
            size: size ? iconSizes[size] : "auto",
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
      console.error("Icon component requires children when type is svg");
      return null;
    }

    return (
      <span {...sharedProps}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) && child.type === "svg"
            ? React.cloneElement(child as React.ReactElement, {
                style: {
                  ...iconStyle,
                  width: size ? iconSizes[size] : "auto",
                  height: size ? iconSizes[size] : "auto",
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

  if (type === "react-icons") {
    return renderReactIcon();
  } else if (type === "svg") {
    return renderSVGIcon();
  } else {
    console.error("Invalid type provided");
    return null;
  }
};

export default Icon;
