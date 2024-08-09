import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import {
  FaChevronCircleDown,
  FaDownload,
  FaHamburger,
  FaNetworkWired,
} from "react-icons/fa";

const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "full"],
    },
    iconOnly: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <FaChevronCircleDown />,
    children: "Click me",
  },
};

export const Secondary: Story = {
  args: {
    icon: <FaChevronCircleDown />,
    children: "Secondary",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    icon: <FaDownload />,
    children: "Download",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    icon: <FaDownload />,
    children: "Ghost",
    variant: "ghost",
  },
};

export const Text: Story = {
  args: {
    icon: <FaDownload />,
    children: "Text",
    variant: "text",
  },
};

export const Link: Story = {
  args: {
    icon: <FaNetworkWired />,
    children: "Link",
    variant: "link",
  },
};

export const SmallButton: Story = {
  args: {
    icon: <FaDownload />,
    children: "Small",
    size: "sm",
  },
};
export const MediumButton: Story = {
  args: {
    icon: <FaDownload />,
    children: "Medium",
    size: "md",
  },
};
export const LargeButton: Story = {
  args: {
    icon: <FaDownload />,
    children: "Large",
    size: "lg",
  },
};

export const IconOnly: Story = {
  args: {
    icon: <FaHamburger />,
    iconOnly: true,
    variant: "outline",
    size: "md",
  },
};

export const XSmallIconOnly: Story = {
  args: {
    icon: <FaHamburger />,
    iconOnly: true,
    variant: "outline",
    size: "xs",
    tooltip: "Open Menu",
  },
};

export const SmallIconOnly: Story = {
  args: {
    icon: <FaHamburger />,
    iconOnly: true,
    variant: "outline",
    size: "sm",
    tooltip: "Open Menu",
  },
};

export const LargeIconOnly: Story = {
  args: {
    icon: <FaHamburger />,
    iconOnly: true,
    variant: "outline",
    size: "lg",
    tooltip: "Close Menu",
  },
};

export const XLargeIconOnly: Story = {
  args: {
    icon: <FaHamburger />,
    iconOnly: true,
    variant: "outline",
    size: "xl",
    tooltip: "Close Menu",
  },
};

export const LoadingButton: Story = {
  args: {
    loading: true,
    icon: <FaHamburger />,
    children: "Menu",
  },
};
