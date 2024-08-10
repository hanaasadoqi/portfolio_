import type { Meta, StoryObj } from "@storybook/react";
import NavMenu from "./NavMenu";
import { FaEnvelope, FaHome, FaUser } from "react-icons/fa";

const meta: Meta<typeof NavMenu> = {
  title: "Components/NavMenu",
  component: NavMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    links: {
      control: "object",
      description: "Array of navigation links to be displayed in the menu.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        href: "#home",
        label: "Home",
      },
      {
        href: "#about",
        label: "About",
      },
      {
        href: "#contact",
        label: "Contact",
      },
    ],
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    links: [
      {
        href: "#home",
        label: "Home",
      },
      {
        href: "#about",
        label: "About",
      },
      {
        href: "#contact",
        label: "Contact",
      },
    ],
  },
};

export const WithCustomClasses: Story = {
  args: {
    links: [
      {
        href: "#home",
        label: "Home",
        className: "bg-pink-600 text-white",
      },
      {
        href: "#about",
        label: "About",
        disabled: true,
      },
      {
        href: "#contact",
        label: "Contact",
        className: "text-green-600",
      },
    ],
  },
};

export const NoLinks: Story = {
  args: {
    links: [],
  },
};

export const DisabledLinks: Story = {
  args: {
    links: [
      {
        href: "#home",
        label: "Home",
      },
      {
        href: "#about",
        label: "About",
        disabled: true,
      },
      {
        href: "#contact",
        label: "Contact",
        disabled: true,
      },
    ],
  },
};

export const CustomAriaLabels: Story = {
  args: {
    links: [
      {
        href: "#home",
        label: "Home",
        ariaLabel: "Go to Home Section",
      },
      {
        href: "#about",
        label: "About",
        ariaLabel: "Learn more About Us",
      },
      {
        href: "#contact",
        label: "Contact",
        ariaLabel: "Get in Touch",
      },
    ],
  },
};

export const LinksWithIcons: Story = {
  args: {
    links: [
      {
        href: "#home",
        label: "Home",
        icon: <FaHome />,
      },
      {
        href: "#about",
        label: "About",
        icon: <FaUser />,
      },
      {
        href: "#contact",
        label: "Contact",
        icon: <FaEnvelope />,
        iconOnly: true,
      },
    ],
  },
};

export const XSmallNav: Story = {
  args: {
    size: "xs",
    links: [
      {
        href: "#home",
        label: "Home",
        icon: <FaHome />,
      },
      {
        href: "#about",
        label: "About",
        icon: <FaUser />,
      },
      {
        href: "#contact",
        label: "Contact",
        icon: <FaEnvelope />,
        iconOnly: true,
      },
    ],
  },
};

export const SmallNav: Story = {
  args: {
    size: "sm",
    links: [
      {
        href: "#home",
        label: "Home",
        icon: <FaHome />,
      },
      {
        href: "#about",
        label: "About",
        icon: <FaUser />,
      },
      {
        href: "#contact",
        label: "Contact",
        icon: <FaEnvelope />,
        iconOnly: true,
      },
    ],
  },
};

export const LargeNav: Story = {
  args: {
    size: "lg",
    links: [
      {
        href: "#home",
        label: "Home",
        icon: <FaHome />,
      },
      {
        href: "#about",
        label: "About",
        icon: <FaUser />,
      },
      {
        href: "#contact",
        label: "Contact",
        icon: <FaEnvelope />,
        iconOnly: true,
      },
    ],
  },
};
