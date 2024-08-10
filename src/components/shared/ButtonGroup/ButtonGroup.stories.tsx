import { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";
import { BaseButton, IconButton } from "../Buttons";
import {
  FaAdjust,
  FaDownload,
  FaHamburger,
  FaPaste,
  FaRegCopy,
} from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
    },
    spacing: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg", "xl"],
      },
    },
    border: {
      control: "boolean",
    },
    ariaLabel: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <BaseButton>Button</BaseButton>,
  },
};

export const WithBorder: Story = {
  args: {
    border: true,
    children: (
      <>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton>Primary</BaseButton>
      </>
    ),
  },
};

export const WithoutBorder: Story = {
  args: {
    border: false,
    children: (
      <>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton>Primary</BaseButton>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    children: (
      <>
        <BaseButton variant="link" size="sm">
          Learn More
        </BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton>Primary</BaseButton>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    children: (
      <>
        <BaseButton>Primary</BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton variant="link" size="sm">
          Learn More
        </BaseButton>
      </>
    ),
  },
};

export const SmallSpacing: Story = {
  args: {
    spacing: "sm",
    children: (
      <>
        <IconButton icon={<FaPaste />} variant="ghost" />
        <IconButton icon={<FaRegCopy />} variant="ghost" />
        <IconButton icon={<FaAdjust />} variant="ghost" />
      </>
    ),
  },
};

export const MediumSpacing: Story = {
  args: {
    spacing: "md",
    children: (
      <>
        <IconButton icon={<FaPaste />} variant="ghost" />
        <IconButton icon={<FaRegCopy />} variant="ghost" />
        <IconButton icon={<FaAdjust />} variant="ghost" />
      </>
    ),
  },
};

export const LargeSpacing: Story = {
  args: {
    spacing: "lg",
    children: (
      <>
        <IconButton icon={<FaPaste />} variant="ghost" />
        <IconButton icon={<FaRegCopy />} variant="ghost" />
        <IconButton icon={<FaAdjust />} variant="ghost" />
      </>
    ),
  },
};

export const XLargeSpacing: Story = {
  args: {
    spacing: "xl",
    children: (
      <>
        <IconButton icon={<FaPaste />} variant="ghost" />
        <IconButton icon={<FaRegCopy />} variant="ghost" />
        <IconButton icon={<FaAdjust />} variant="ghost" />
      </>
    ),
  },
};

export const WithCustomStyles: Story = {
  args: {
    className: "bg-blue-500",
    children: (
      <>
        <IconButton
          variant="ghost"
          icon={<FaDownload />}
          className="text-white"
        />
        <IconButton
          variant="ghost"
          icon={<FaAngleRight />}
          className="text-white"
        />
        <IconButton
          variant="ghost"
          icon={<FaHamburger />}
          className="text-white"
        />
      </>
    ),
  },
};

export const WithAriaLabel: Story = {
  args: {
    ariaLabel: "Button group example",
    className: "bg-gray-200",
    children: (
      <>
        <IconButton variant="ghost" icon={<FaDownload />} />
        <IconButton variant="ghost" icon={<FaAngleRight />} />
        <IconButton variant="ghost" icon={<FaHamburger />} />
      </>
    ),
  },
};
