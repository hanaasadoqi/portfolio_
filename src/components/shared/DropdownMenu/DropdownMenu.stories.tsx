import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenu, { DropdownMenuProps } from "./DropdownMenu";
import { ReactElement } from "react";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    menuLabel: "Open Menu",
    items: [
      {
        label: "Option 1",
        onClick: () => console.log("Option 1 clicked"),
      },
      {
        label: "Option 2",
        onClick: () => console.log("Option 2 clicked"),
      },
    ],
  },
};
