import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import FloatingActionButton, {
  FabPosition,
  positionClasses,
} from "./FloatingActionButton";
import { FaChevronDown } from "react-icons/fa";
import { ButtonSize, sizeStyles } from "@/components/shared";

// Utility function to verify positioning
const verifyPosition = async (
  position: FabPosition,
  element?: HTMLButtonElement | null,
) => {
  await waitFor(() => {
    const button = element || screen.getByRole("button");
    const expectedClass = positionClasses[position];
    if (!expectedClass) {
      throw new Error(`No class found for position: ${position}`);
    }
    expect(button).toHaveClass(expectedClass);
  });
};

describe("FloatingActionButton", () => {
  it("renders without crashing", async () => {
    render(<FloatingActionButton icon={<FaChevronDown />} />);
    await waitFor(() => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  it("renders the icon correctly", async () => {
    render(<FloatingActionButton icon={<FaChevronDown />} />);
    await waitFor(() => {
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });
  });

  it("applies the correct position classes", () => {
    const positions: FabPosition[] = [
      "top-right",
      "top-left",
      "bottom-right",
      "bottom-left",
      "bottom-center",
      "center",
      "top-center",
      "center-right",
      "center-left",
    ];

    positions.forEach(async (position) => {
      const { container } = render(
        <FloatingActionButton icon={<FaChevronDown />} position={position} />,
      );
      await waitFor(() => {
        const button = container.querySelector("button");
        verifyPosition(position, button);
      });
    });
  });

  it("applies custom class names", async () => {
    render(
      <FloatingActionButton
        icon={<FaChevronDown />}
        className="custom-class"
      />,
    );
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveClass("custom-class");
    });
  });

  it("applies the disabled state", async () => {
    render(<FloatingActionButton icon={<FaChevronDown />} disabled />);
    await waitFor(() => {
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  it("renders with different sizes", () => {
    const sizes: ButtonSize[] = ["sm", "md", "lg"];
    sizes.forEach(async (size) => {
      const { container } = render(
        <FloatingActionButton icon={<FaChevronDown />} size={size} />,
      );
      await waitFor(() => {
        const button = container.querySelector("button");
        expect(button).toHaveClass(sizeStyles[size]);
      });
    });
  });

  it("handles click events", async () => {
    const onClick = jest.fn();
    render(<FloatingActionButton icon={<FaChevronDown />} onClick={onClick} />);
    await waitFor(() => {
      fireEvent.click(screen.getByRole("button"));
    });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
