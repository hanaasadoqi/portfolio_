import React from "react";
import {
  ButtonGroup,
  IconButton,
  IconButtonProps,
  LinkButton,
  NavMenu,
} from "../shared";
import { FaCog, FaHome, FaLink } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  {
    href: "#about",
    label: "About",
    ariaLabel: "About Me Section",
  },
  {
    href: "#skills",
    label: "Skills",
    ariaLabel: "Technical Skills Section",
  },
  {
    href: "#work",
    label: "Experience",
    ariaLabel: "Work Experience Section",
  },
  {
    href: "#projects",
    label: "Projects",
    ariaLabel: "Personal Projects Section",
  },
  {
    href: "#writing",
    label: "Writing",
    ariaLabel: "Articles/Blogs Section",
  },
  {
    href: "#education",
    label: "Education",
    ariaLabel: "Education Section",
  },
  {
    href: "#contact",
    label: "Contact",
    ariaLabel: "Contact Me Section",
  },
];

const Header: React.FC = () => {
  const iconButtonProps: Partial<IconButtonProps> = {
    variant: "text",
    size: "xs",
    className: "transition-all duration-300 ease border-none",
    iconClassName: "p-2",
    iconOnly: true,
  };

  return (
    <header className="absolute left-0 right-0 flex items-center justify-between space-x-4 border-b p-3 drop-shadow-md md:space-x-8 lg:space-x-12">
      <div id="logo-container">
        <LinkButton icon={<FaHome />} href="/" iconOnly size="xl" />
      </div>
      <NavMenu
        links={navLinks}
        className="ease hidden w-full flex-1 flex-nowrap items-center justify-evenly p-1 transition-transform duration-300 lg:flex"
      />
      <div id="nav-icon-menu">
        <ButtonGroup spacing="md" border divider>
          <IconButton icon={<FaLink />} {...iconButtonProps}>
            {"Let's Connect"}
          </IconButton>
          <IconButton icon={<FaCog />} {...iconButtonProps}>
            Settings
          </IconButton>
          <IconButton
            icon={<GiHamburgerMenu />}
            variant="text"
            iconOnly
            className="ease flex transition-all duration-300 lg:hidden"
          />
        </ButtonGroup>
      </div>
    </header>
  );
};

export default Header;
