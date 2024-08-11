import React from "react";
import {
  BaseButton,
  IconButton,
  LinkButton,
  ButtonRole,
  ButtonType,
} from "../../Buttons";

interface DropdownItemProps {
  icon?: React.ReactElement;
  children?: React.ReactNode;
  href?: string;
  label?: string;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  [key: string]: any;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  icon,
  href,
  label,
  ariaLabel,
  onClick,
  children,
  ...props
}) => {
  const sharedProps = {
    type: "button" as ButtonType,
    className:
      "block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100",
    role: "menuitem" as ButtonRole,
    "aria-label": ariaLabel || label,
    onClick,
    tabIndex: 0,
    ...props,
  };

  if (icon) {
    return (
      <IconButton icon={icon} {...sharedProps}>
        {children || label}
      </IconButton>
    );
  } else if (href) {
    return (
      <LinkButton href={href} {...sharedProps}>
        {children || label}
      </LinkButton>
    );
  } else {
    return <BaseButton {...sharedProps}>{children || label}</BaseButton>;
  }
};

export default DropdownItem;
