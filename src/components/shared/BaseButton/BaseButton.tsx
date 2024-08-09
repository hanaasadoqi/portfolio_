import React, { useMemo, useCallback } from "react";
import clsx from "clsx";

export type ButtonType = "button" | "reset" | "submit";
export type ButtonRole = "button";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "text"
  | "ghost"
  | "link"
  | "fab";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  role?: ButtonRole;
  tabIndex?: number;
  id?: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaHasPopup?: boolean;
  iconOnly?: boolean;
  custom?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  [dataAtr: `data-${string}`]: any;
}

const sizeStyles: Record<ButtonSize, string> = {
  xs: "py-0.5 px-1 gap-1",
  sm: "py-0.75 px-2 gap-2",
  md: "py-1 px-3 gap-2.5",
  lg: "py-1.5 px-4 gap-3",
  xl: "py-2 px-6 gap-3",
  full: "w-full",
};

const colorStyles: Record<ButtonVariant, string> = {
  primary:
    "rounded-md bg-gray-600 text-white border-gray-600 hover:bg-gray-500 hover:border-gray-700 focus-visible:ring-gray-700 active:bg-gray-800",
  secondary:
    "rounded-md bg-gray-200 border-gray-200 text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus-visible:ring-gray-100 active:bg-gray-400",
  outline:
    "rounded-md bg-transparent active:bg-gray-100 text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white hover:border-gray-700 focus-visible:bg-gray-600 focus-visible:text-white focus-visible:ring-gray-500 active:bg-gray-900",
  ghost:
    "rounded-md bg-transparent text-gray-600 border-2 border-transparent hover:bg-gray-100 hover:border-gray-700 hover:text-gray-700 hover:shadow-sm focus-visible:ring-gray-100 active:bg-gray-200",
  link: "bg-transparent text-blue-600 hover:text-blue-700 focus-visible:text-blue-800 active:text-blue-900",
  text: "rounded-sm bg-transparent text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus-visible:bg-gray-200 focus-visible:text-gray-800 active:text-gray-900 active:bg-gray-300",
  fab: "bg-gray-200 border-gray-100 hover:bg-gray-100 focus-visible:bg-gray-300 active:bg-gray-200",
};

const outerStyles: Record<ButtonVariant, string> = {
  primary:
    "shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-gray-600",
  secondary:
    "shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-gray-200",
  outline:
    "shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-gray-600",
  ghost:
    "shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-transparent",
  link: "shadow-none border-none",
  text: "shadow-none border-none hover:shadow-md active:shadow-inner",
  fab: "shadow-md border-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-200 hover:shadow-lg active:shadow-inner",
};

const BaseButton: React.FC<BaseButtonProps> = React.memo(
  ({
    type = "button",
    role = "button",
    tabIndex = 0,
    children,
    className,
    disabled = false,
    loading = false,
    ariaLabel = "",
    ariaExpanded,
    ariaControls,
    ariaHasPopup,
    onClick,
    onKeyDown,
    variant = "primary",
    size = "md",
    iconOnly,
    custom,
    ...rest
  }) => {
    const buttonSize = useMemo(() => sizeStyles[size], [size]);
    const buttonColor = useMemo(() => colorStyles[variant], [variant]);
    const buttonOuter = useMemo(() => outerStyles[variant], [variant]);

    const effectsStyles = useMemo(
      () => ({
        "opacity-70 cursor-wait": loading,
        "opacity-50 cursor-not-allowed": disabled,
      }),
      [loading, disabled],
    );

    const animationStyles = useMemo(
      () => "transition-colors duration-300 ease",
      [],
    );

    const textStyles = useMemo(
      () =>
        clsx(
          "antialiased",
          variant === "link" && "hover:underline hover:underline-offset-2",
          {
            "text-sm font-light tracking-normal": size === "xs",
            "text-base font-normal tracking-wide": size === "sm",
            "text-base font-medium tracking-wider": size === "md",
            "text-md font-medium tracking-widest": size === "lg",
            "text-lg font-medium tracking-widest":
              size === "xl" || size === "full",
          },
        ),
      [variant, size],
    );

    const handleKeyPress = useCallback<
      React.KeyboardEventHandler<HTMLButtonElement>
    >(
      (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>);
        }
        onKeyDown?.(event);
      },
      [onClick, onKeyDown],
    );

    const buttonStyles = clsx(
      "focus:outline-none border inline-flex items-center justify-center whitespace-nowrap select-none",
      !iconOnly && buttonSize,
      !custom && buttonColor,
      buttonOuter,
      animationStyles,
      !custom && textStyles,
      !custom && effectsStyles,
      className,
    );

    const accessibilityAttributes = {
      role,
      "aria-label": ariaLabel,
      "aria-disabled": disabled || loading,
      "aria-expanded": ariaExpanded,
      "aria-controls": ariaControls,
      "aria-haspopup": ariaHasPopup,
    };

    return (
      <button
        type={type}
        tabIndex={tabIndex}
        disabled={disabled || loading}
        className={buttonStyles}
        {...accessibilityAttributes}
        {...rest}
        onKeyDown={handleKeyPress}
        onClick={onClick}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  },
);

BaseButton.displayName = "BaseButton";

export default BaseButton;
