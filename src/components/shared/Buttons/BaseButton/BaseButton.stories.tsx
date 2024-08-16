import type { Meta, StoryObj } from "@storybook/react";
import BaseButton, { BaseButtonProps } from "./BaseButton";

const meta: Meta<typeof BaseButton> = {
  title: "Components/Buttons/BaseButton",
  component: BaseButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: { control: "radio", options: ["button", "reset", "submit"] },
    size: { control: "radio", options: ["xs", "sm", "md", "lg", "xl", "full"] },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text",
  },
};

export const SmallButton: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const MediumButton: Story = {
  args: {
    children: "Medium",
  },
};

export const LargeButton: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const FullWidthButton: Story = {
  render: (args: BaseButtonProps) => (
    <div className="w-64">
      <BaseButton {...args} />
    </div>
  ),
  args: {
    size: "full",
    children: "Full Width",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading",
  },
};
