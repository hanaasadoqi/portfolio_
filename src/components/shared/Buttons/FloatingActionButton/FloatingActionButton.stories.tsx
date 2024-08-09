import type { Meta, StoryObj } from "@storybook/react";
import FloatingActionButton from "./FloatingActionButton";
import { FaChevronDown, FaPlus, FaEdit } from "react-icons/fa";

// Define a template for the FloatingActionButton stories
const Template: StoryObj<typeof FloatingActionButton> = {
  render: (args) => (
    <div className="relative h-[50vh] w-screen">
      <FloatingActionButton {...args} />
    </div>
  ),
};

// Define meta information
const meta: Meta<typeof FloatingActionButton> = {
  title: "Components/Buttons/FloatingActionButton",
  component: FloatingActionButton,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    position: {
      control: {
        type: "select",
        options: [
          "top-right",
          "top-left",
          "bottom-right",
          "bottom-left",
          "bottom-center",
          "top-center",
          "center",
          "center-left",
          "center-right",
        ],
      },
    },
    size: {
      control: { type: "select", options: ["sm", "md", "lg"] },
    },
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

export default meta;

// Default story
export const Default: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaChevronDown />,
    children: "Default",
    position: "bottom-right",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default FloatingActionButton positioned at the bottom-right of the screen.",
      },
    },
  },
};

// BottomCenter story
export const BottomCenter: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaChevronDown />,
    position: "bottom-center",
  },
  parameters: {
    docs: {
      description: {
        story: "Positions the button at the bottom center of the screen.",
      },
    },
  },
};

// Additional Position Stories using Template
export const BottomLeft: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaChevronDown />,
    position: "bottom-left",
  },
  parameters: {
    docs: {
      description: {
        story: "Positions the button at the bottom left of the screen.",
      },
    },
  },
};

export const TopLeft: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaChevronDown />,
    position: "top-left",
  },
  parameters: {
    docs: {
      description: {
        story: "Positions the button at the top left of the screen.",
      },
    },
  },
};

export const TopRight: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaChevronDown />,
    position: "top-right",
  },
  parameters: {
    docs: {
      description: {
        story: "Positions the button at the top right of the screen.",
      },
    },
  },
};

export const TopCenter: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaChevronDown />,
    position: "top-center",
  },
  parameters: {
    docs: {
      description: {
        story: "Positions the button at the top center of the screen.",
      },
    },
  },
};

export const Center: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaChevronDown />,
    position: "center",
  },
  parameters: {
    docs: {
      description: {
        story: "Positions the button at the center of the screen.",
      },
    },
  },
};

export const CenterRight: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaChevronDown />,
    position: "center-right",
  },
  parameters: {
    docs: {
      description: {
        story: "Positions the button at the center right of the screen.",
      },
    },
  },
};

export const CenterLeft: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaChevronDown />,
    position: "center-left",
  },
  parameters: {
    docs: {
      description: {
        story: "Positions the button at the center left of the screen.",
      },
    },
  },
};

// Disabled State story
export const Disabled: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaPlus />,
    position: "bottom-right",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the FloatingActionButton in a disabled state.",
      },
    },
  },
};

// Small Size story
export const SmallSize: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaEdit />,
    size: "sm",
    position: "bottom-right",
  },
  parameters: {
    docs: {
      description: {
        story: "Displays the FloatingActionButton with a large size.",
      },
    },
  },
};

// Large Size story
export const LargeSize: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaEdit />,
    size: "lg",
    position: "bottom-right",
  },
  parameters: {
    docs: {
      description: {
        story: "Displays the FloatingActionButton with a large size.",
      },
    },
  },
};

// X-Large Size story
export const XLargeSize: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaEdit />,
    size: "xl",
    position: "bottom-right",
  },
  parameters: {
    docs: {
      description: {
        story: "Displays the FloatingActionButton with a large size.",
      },
    },
  },
};

// Custom Color story
export const CustomColor: StoryObj<typeof FloatingActionButton> = {
  ...Template,
  args: {
    icon: <FaEdit />,
    position: "bottom-right",
    custom: true,
    className:
      "bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600 active:shadow-inner",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the FloatingActionButton with custom background color.",
      },
    },
  },
};
