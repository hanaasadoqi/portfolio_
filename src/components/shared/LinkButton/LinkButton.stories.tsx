import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from "./LinkButton";
import { FaConnectdevelop, FaLinkedin } from "react-icons/fa";

const meta: Meta<typeof LinkButton> = {
  title: "Components/Buttons/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
    size: { control: "radio", options: ["xs", "sm", "md", "lg"] },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    href: "#",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    href: "#",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    href: "#",
    variant: "link",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Link",
    href: "#",
    variant: "link",
    icon: <FaConnectdevelop />,
  },
};

export const XSmall: Story = {
  args: {
    children: "X-Small",
    variant: "link",
    size: "xs",
    icon: <FaConnectdevelop />,
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    variant: "link",
    size: "sm",
    icon: <FaConnectdevelop />,
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    variant: "link",
    size: "lg",
    icon: <FaConnectdevelop />,
  },
};

export const LinkedIn: Story = {
  args: {
    href: "https://linkedin.com/in/hanaasadoqi",
    target: "_blank",
    icon: <FaLinkedin />,
    iconOnly: true,
    className: "group-hover:text-blue-700",
  },
};
