import React from "react";
import {
  ButtonGroup,
  ButtonGroupProps,
  ButtonSize,
  LinkButton,
  LinkButtonProps,
} from "..";

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
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  ariaLabel,
  href,
  children,
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
      size={size}
      {...rest}
    >
      {children || label}
    </LinkButton>
  );
};

interface NavMenuProps extends Omit<ButtonGroupProps, "children"> {
  size?: "xs" | "sm" | "md" | "lg";
  links: NavItemProps[];
}

const NavMenu: React.FC<NavMenuProps> = ({ links, size, ...rest }) => {
  return (
    <nav>
      <ButtonGroup {...rest}>
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
          />
        ))}
      </ButtonGroup>
    </nav>
  );
};

export default NavMenu;
