import React from "react";
import {
  ButtonGroup,
  ButtonGroupProps,
  ButtonSize,
  LinkButton,
  LinkButtonProps,
} from "../../shared";
import clsx from "clsx";

export const navItems = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#work",
    label: "Experience",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#writing",
    label: "Writing",
  },
  {
    href: "#education",
    label: "Education",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export interface NavItemProps extends Omit<LinkButtonProps, "children"> {
  label: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  ariaLabel,
  href,
  children,
  className,
  onClick,
  size,
  ...rest
}) => {
  if (!href) {
    const message = "NavItem requires an 'href' prop.";
    console.error(message);
    throw new Error(message);
  }

  return (
    <LinkButton
      ariaLabel={ariaLabel || label}
      href={href}
      onClick={onClick}
      className={clsx("flex items-center justify-center", className)}
      size="lg"
      {...rest}
    >
      {children || label}
    </LinkButton>
  );
};

interface NavMenuProps extends Omit<ButtonGroupProps, "children"> {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  size?: "xs" | "sm" | "md" | "lg";
  links: NavItemProps[];
}

const NavMenu: React.FC<NavMenuProps> = ({
  links,
  size,
  onClick,
  className,
  ...rest
}) => {
  return (
    <nav className={className}>
      <ButtonGroup border divider {...rest}>
        {links.map((item) => (
          <NavItem
            key={item.href}
            label={item.label}
            href={item.href}
            ariaLabel={item.ariaLabel}
            className={item.className}
            disabled={item.disabled}
            icon={item.icon}
            iconOnly={item.iconOnly}
            ariaCurrent
            size={size}
            onClick={onClick}
          />
        ))}
      </ButtonGroup>
    </nav>
  );
};

export default NavMenu;
