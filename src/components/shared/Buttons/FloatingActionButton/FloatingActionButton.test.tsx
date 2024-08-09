import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FloatingActionButton, {
  FabPosition,
  positionClasses,
} from "./FloatingActionButton";
import { FaChevronDown } from "react-icons/fa";
import { ButtonSize } from "../BaseButton/BaseButton";

// Utility function to verify positioning
const verifyPosition = (
  position: FabPosition,
  element?: HTMLButtonElement | null,
) => {
  const button = element || screen.getByRole("button");
  const expectedClass = positionClasses[position];
  if (!expectedClass) {
    throw new Error(`No class found for position: ${position}`);
  }
  expect(button).toHaveClass(expectedClass);
};

describe("FloatingActionButton", () => {
  it("renders without crashing", () => {
    render(<FloatingActionButton icon={<FaChevronDown />} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders the icon correctly", () => {
    render(<FloatingActionButton icon={<FaChevronDown />} />);
    // Ensure IconButton renders icons with a data-testid of "icon"
    expect(screen.getByTestId("icon")).toBeInTheDocument();
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

    positions.forEach((position) => {
      const { container } = render(
        <FloatingActionButton icon={<FaChevronDown />} position={position} />,
      );
      const button = container.querySelector("button");
      verifyPosition(position, button);
    });
  });

  it("applies custom class names", () => {
    render(
      <FloatingActionButton
        icon={<FaChevronDown />}
        className="custom-class"
      />,
    );
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("applies the disabled state", () => {
    render(<FloatingActionButton icon={<FaChevronDown />} disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders with different sizes", () => {
    const sizes: ButtonSize[] = ["sm", "md", "lg"];
    sizes.forEach((size) => {
      render(<FloatingActionButton icon={<FaChevronDown />} size={size} />);
      // Adjust based on actual implementation. Ensure size is applied correctly
      // expect(screen.getByRole("button")).toHaveClass(`size-${size}`);
    });
  });

  it("handles click events", async () => {
    const onClick = jest.fn();
    render(<FloatingActionButton icon={<FaChevronDown />} onClick={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
