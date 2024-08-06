import React from "react";
import { IconContext } from "react-icons";
import clsx from "clsx";

/**
 * Props for the Icon component.
 *
 * @interface IconProps
 * @property { "svg" | "react-icons" } [type="react-icons"] - The type of icon being rendered. Defaults to "react-icons".
 * @property { React.ReactElement } [icon] - The React element to render for "react-icons" type. Required if type is "react-icons".
 * @property { string | number } [size] - The size of the icon. Can be a string or number.
 * @property { React.CSSProperties } [style] - Custom styles to apply to the icon.
 * @property { string } [className] - Additional CSS class names to apply to the icon wrapper.
 * @property { React.ReactNode } [children] - Children to render if type is "svg". Required if type is "svg".
 * @property { string } [ariaLabel] - The aria-label for accessibility purposes.
 * @property { boolean } [ariaHidden=false] - Whether the icon is hidden from screen readers.
 * @property { "img" | "presentation" | "graphic-symbol" } [role="img"] - The ARIA role of the icon.
 */
interface IconProps {
  type?: "svg" | "react-icons";
  icon?: React.ReactElement;
  size?: string | number;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  ariaHidden?: boolean;
  role?: "img" | "presentation" | "graphic-symbol";
}

/**
 * Icon component that supports both react-icons and custom SVG icons.
 *
 * @param {IconProps} props - The props for the component.
 * @returns {JSX.Element} The rendered icon component.
 */
const Icon: React.FC<IconProps> = ({
  type = "react-icons",
  icon,
  size,
  style,
  className = "",
  children,
  ariaLabel,
  ariaHidden = false,
  role = "img",
}) => {
  // Common props applied to the wrapper element of the icon.
  const sharedProps = {
    "aria-hidden": ariaHidden,
    role,
    "data-testid": "icon-wrapper",
    className: clsx(className, "icon-wrapper w-full h-full inline-block"),
  };

  // Styles to apply to the icon element.
  const iconStyle = {
    color: "currentColor",
    fill: "currentColor",
    ...style,
  };

  /**
   * Renders the icon when type is "react-icons".
   *
   * @returns {JSX.Element} The rendered react-icon component.
   * @throws Will throw an error if `icon` prop is not provided.
   */
  const renderReactIcon = () => {
    if (!icon) {
      throw new Error(
        "Icon component requires an icon prop when type is react-icons",
      );
    }

    return (
      <IconContext.Provider
        value={{
          style: iconStyle,
          size: "auto",
        }}
      >
        <span {...sharedProps} aria-label={ariaLabel} tabIndex={-1}>
          {React.cloneElement(icon, {
            "data-testid": "icon",
          })}
        </span>
      </IconContext.Provider>
    );
  };

  /**
   * Renders the icon when type is "svg".
   *
   * @returns {JSX.Element} The rendered SVG icon component.
   * @throws Will throw an error if `children` prop is not provided.
   */
  const renderSVGIcon = () => {
    if (!children) {
      throw new Error("Icon component requires children when type is svg");
    }
    return (
      <span {...sharedProps}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === "svg") {
            return React.cloneElement(child as React.ReactElement, {
              style: {
                width: "100%",
                height: "auto",
                ...iconStyle,
              },
              tabIndex: -1,
              "aria-labelledby": ariaLabel ? "svg-title" : undefined,
              "data-testid": "svg-icon",
              children: (
                <>
                  {ariaLabel && <title id="svg-title">{ariaLabel}</title>}
                  {child.props.children}
                </>
              ),
            });
          }
          return child;
        })}
      </span>
    );
  };

  // Render the appropriate icon based on the `type` prop.
  return type === "react-icons" ? renderReactIcon() : renderSVGIcon();
};

export default Icon;
