import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconButton, { iconButtonSizes } from "./IconButton";
import Icon from "../Icon/Icon";
import { Tooltip } from "react-tooltip";
import { FaChevronCircleDown } from "react-icons/fa";
import { ButtonSize } from "../BaseButton/BaseButton";

describe("IconButton", () => {
  describe("Rendering and Default Attributes", () => {
    const icon = <Icon icon={<FaChevronCircleDown />} />;

    test("should render an IconButton with icon and text", () => {
      render(
        <IconButton icon={icon} tooltip="Tooltip text">
          Click me
        </IconButton>,
      );
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    test("should render an IconButton with only icon", () => {
      render(<IconButton icon={icon} iconOnly tooltip="Tooltip text" />);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument(); // No text should be present
    });

    test("should render with tooltip if tooltip text is provided", () => {
      render(<IconButton icon={icon} tooltip="Tooltip text" />);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-tooltip-content", "Tooltip text");
    });

    test("should render with icon on the left by default", () => {
      render(
        <IconButton icon={icon} tooltip="Tooltip text">
          Click me
        </IconButton>,
      );
      const iconElement = screen.getByTestId("icon"); // Ensure Icon component has test ID
      expect(iconElement).toBeInTheDocument();
    });

    test("should render with icon on the right when specified", () => {
      render(
        <IconButton icon={icon} iconPosition="right" tooltip="Tooltip text">
          Click me
        </IconButton>,
      );
      const iconElement = screen.getByTestId("icon"); // Ensure Icon component has test ID
      expect(iconElement).toBeInTheDocument();
    });

    test("should apply custom className", () => {
      render(
        <IconButton icon={icon} className="custom-class">
          Click me
        </IconButton>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });

    test("should render with the correct size classes", () => {
      const sizes: ButtonSize[] = ["xs", "sm", "md", "lg", "xl", "full"];
      sizes.forEach((size) => {
        const { container } = render(
          <IconButton icon={icon} size={size} iconOnly />,
        );
        const button = container.querySelector("button");
        expect(button).toHaveClass(iconButtonSizes[size]);
      });
    });
  });

  describe("Functionality", () => {
    test("should trigger click event", async () => {
      const onClick = jest.fn();
      render(
        <IconButton
          icon={<Icon icon={<FaChevronCircleDown />} />}
          onClick={onClick}
        >
          Click me
        </IconButton>,
      );
      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    test("should have aria-label set to tooltip text if provided", () => {
      render(
        <IconButton
          icon={<Icon icon={<FaChevronCircleDown />} />}
          tooltip="Tooltip text"
        />,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "Tooltip text");
    });

    test("should have aria-label set to empty string if no tooltip", () => {
      render(<IconButton icon={<Icon icon={<FaChevronCircleDown />} />} />);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "");
    });

    test("should have data-tooltip-place attribute for tooltip position", () => {
      render(
        <IconButton
          icon={<Icon icon={<FaChevronCircleDown />} />}
          tooltip="Tooltip text"
          tooltipPlace="top"
        />,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-tooltip-place", "top");
    });
  });
});
