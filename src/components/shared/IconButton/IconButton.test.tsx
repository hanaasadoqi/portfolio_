import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import IconButton, { iconButtonSizes } from "./IconButton";
import Icon from "../../Icon/Icon";
import { FaChevronCircleDown } from "react-icons/fa";
import { ButtonSize } from "../../BaseButton/BaseButton";

describe("IconButton", () => {
  beforeEach(() => {
    jest.mock("react-tooltip", () => ({
      __esModule: true,
      default: () => null,
    }));
  });

  afterEach(() => {
    jest.resetModules(); // Reset module registry to ensure clean slate for each test
  });

  describe("Rendering and Default Attributes", () => {
    const icon = <Icon icon={<FaChevronCircleDown />} />;

    test("should render an IconButton with icon and text", async () => {
      render(
        <IconButton icon={icon} tooltip="Tooltip text">
          Click me
        </IconButton>,
      );

      await waitFor(() => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(screen.getByText("Click me")).toBeInTheDocument();
      });
    });

    test("should render an IconButton with only icon", async () => {
      render(<IconButton icon={icon} iconOnly tooltip="Tooltip text" />);
      await waitFor(() => {
        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
        expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
      });
    });

    test("should render with tooltip if tooltip text is provided", async () => {
      render(<IconButton icon={icon} tooltip="Tooltip text" />);
      await waitFor(() => {
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("data-tooltip-content", "Tooltip text");
      });
    });

    test("should render with icon on the left by default", async () => {
      render(
        <IconButton icon={icon} tooltip="Tooltip text">
          Click me
        </IconButton>,
      );
      await waitFor(() => {
        const iconElement = screen.getByTestId("icon");
        expect(iconElement).toBeInTheDocument();
      });
    });

    test("should render with icon on the right when specified", async () => {
      render(
        <IconButton icon={icon} iconPosition="right" tooltip="Tooltip text">
          Click me
        </IconButton>,
      );

      await waitFor(() => {
        const iconElement = screen.getByTestId("icon");
        expect(iconElement).toBeInTheDocument();
      });
    });

    test("should apply custom className", async () => {
      render(
        <IconButton icon={icon} className="custom-class">
          Click me
        </IconButton>,
      );
      await waitFor(() => {
        const button = screen.getByRole("button");
        expect(button).toHaveClass("custom-class");
      });
    });

    test("should render with the correct size classes", () => {
      const sizes: ButtonSize[] = ["xs", "sm", "md", "lg", "xl", "full"];
      sizes.forEach(async (size) => {
        const { container } = render(
          <IconButton icon={icon} size={size} iconOnly />,
        );
        await waitFor(() => {
          const button = container.querySelector("button");
          expect(button).toHaveClass(iconButtonSizes[size]);
        });
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
      await waitFor(() => {
        fireEvent.click(button);
      }),
        expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    test("should have aria-label set to tooltip text if provided", async () => {
      render(
        <IconButton
          icon={<Icon icon={<FaChevronCircleDown />} />}
          tooltip="Tooltip text"
        />,
      );
      await waitFor(() => {
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("aria-label", "Tooltip text");
      });
    });

    test("should have aria-label set to empty string if no tooltip", async () => {
      render(<IconButton icon={<Icon icon={<FaChevronCircleDown />} />} />);
      await waitFor(() => {
        const button = screen.getByRole("button");

        expect(button).toHaveAttribute("aria-label", "");
      });
    });

    test("should have data-tooltip-place attribute for tooltip position", async () => {
      render(
        <IconButton
          icon={<Icon icon={<FaChevronCircleDown />} />}
          tooltip="Tooltip text"
          tooltipPlace="top"
        />,
      );
      await waitFor(() => {
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("data-tooltip-place", "top");
      });
    });
  });
});
