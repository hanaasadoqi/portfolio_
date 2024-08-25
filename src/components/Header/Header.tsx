"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaCog, FaHome, FaLink } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  LinkButton,
  NavMenu,
  IconButton,
  IconButtonProps,
  ButtonGroup,
} from "../shared";
import clsx from "clsx";

const navLinks = [
  { href: "#about", label: "About", ariaLabel: "About Me Section" },
  { href: "#skills", label: "Skills", ariaLabel: "Technical Skills Section" },
  {
    href: "#experience",
    label: "Experience",
    ariaLabel: "Work Experience Section",
  },
  {
    href: "#projects",
    label: "Projects",
    ariaLabel: "Personal Projects Section",
  },
  { href: "#writing", label: "Writing", ariaLabel: "Articles/Blogs Section" },
  { href: "#education", label: "Education", ariaLabel: "Education Section" },
  { href: "#contact", label: "Contact", ariaLabel: "Contact Me Section" },
];

const Header: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollTop = useRef(0);

  const iconButtonProps: Partial<IconButtonProps> = {
    variant: "text",
    size: "xs",
    className: "transition-all duration-300 ease border-none",
    iconClassName: "p-2",
    iconOnly: true,
  };

  // Use Intersection Observer to track the current section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Track scrolling direction
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrollingDown(scrollTop > lastScrollTop.current);
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="nav"
      className={clsx(
        "fixed left-0 right-0 z-50 flex items-center justify-between space-x-4 border-b bg-white/25 p-3 bg-blend-lighten drop-shadow-md backdrop-blur-3xl transition-transform duration-300",
        {
          "-translate-y-full opacity-0": isScrollingDown,
          "translate-y-0 opacity-100": !isScrollingDown,
        },
      )}
    >
      <div id="logo-container">
        <LinkButton
          icon={<FaHome />}
          href="/#hero"
          scroll={true}
          iconOnly
          size="xl"
        />
      </div>
      <NavMenu
        links={navLinks.map((link) => ({
          ...link,
          className:
            currentSection === link.href.substring(1)
              ? "bg-gray-300 text-gray-700 text-black font-bold"
              : "",
        }))}
        className="ease relative hidden w-full flex-1 flex-nowrap items-center justify-evenly p-1 backdrop-blur-sm transition-transform duration-300 lg:flex"
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
