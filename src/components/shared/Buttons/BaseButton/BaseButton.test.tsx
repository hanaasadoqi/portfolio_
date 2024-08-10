import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BaseButton, { sizeStyles } from "./BaseButton";

describe("BaseButton", () => {
  describe("Default attributes", () => {
    let button: HTMLElement;
    beforeEach(() => {
      render(<BaseButton>Click me</BaseButton>);
      button = screen.getByRole("button");
    });

    test("should render a button with text content", () => {
      expect(button).toHaveTextContent("Click me");
    });

    test('should render with default type="button"', () => {
      expect(button).toHaveAttribute("type", "button");
    });

    test("should not be disabled by default", () => {
      expect(button).not.toBeDisabled();
    });

    it('should have the role attribute set to "button"', () => {
      expect(button).toHaveAttribute("role", "button");
    });

    it("should have a default tabIndex of 0", () => {
      expect(button).toHaveAttribute("tabIndex", "0");
    });
  });

  describe("Basic attributes", () => {
    test("should render with element children", () => {
      render(
        <BaseButton>
          <span>Click me</span>
        </BaseButton>,
      );
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toContainHTML("<span>Click me</span>");
    });

    test("should apply custom className", () => {
      render(<BaseButton className="custom-class">Click me</BaseButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });

    test("should apply custom id", () => {
      render(<BaseButton id="custom-id">Click me</BaseButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("id", "custom-id");
    });
  });

  describe("Functionality", () => {
    test("should call onClick handler when clicked", () => {
      const handleClick = jest.fn();
      render(<BaseButton onClick={handleClick}>Click me</BaseButton>);
      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("should not call onClick handler when disabled", () => {
      const handleClick = jest.fn();
      render(
        <BaseButton onClick={handleClick} disabled>
          Click me
        </BaseButton>,
      );

      userEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    test("should call onKeyDown handler when key is pressed", () => {
      const handleKeyDown = jest.fn();
      render(<BaseButton onKeyDown={handleKeyDown}>Click me</BaseButton>);
      fireEvent.keyDown(screen.getByRole("button"), {
        key: "Enter",
        code: "Enter",
      });
      expect(handleKeyDown).toHaveBeenCalledTimes(1);
    });

    test("should call onClick handler when Enter or space is pressed", () => {
      const handleClick = jest.fn();
      render(<BaseButton onClick={handleClick}>Click me</BaseButton>);

      fireEvent.keyDown(screen.getByRole("button"), {
        key: "Enter",
        code: "Enter",
      });
      expect(handleClick).toHaveBeenCalledTimes(1);

      fireEvent.keyDown(screen.getByRole("button"), {
        key: " ",
        code: "Space",
      });
      expect(handleClick).toHaveBeenCalledTimes(2);
    });

    test("should show loading state when loading prop is true", () => {
      render(<BaseButton loading>Click me</BaseButton>);
      expect(screen.getByRole("button")).toHaveTextContent("Loading...");
    });
  });

  describe("Accessibility", () => {
    test("should apply aria-label when provided", () => {
      render(<BaseButton ariaLabel="Button">Click me</BaseButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "Button");
    });

    test("should apply aria-expanded when provided", () => {
      render(<BaseButton ariaExpanded={true}>Click me</BaseButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-expanded", "true");
    });

    test("should apply aria-controls when provided", () => {
      render(<BaseButton ariaControls="controls">Click me</BaseButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-controls", "controls");
    });

    test("should apply aria-haspopup when provided", () => {
      render(<BaseButton ariaHasPopup={true}>Click me</BaseButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-haspopup", "true");
    });
  });

  describe("Styling", () => {
    test("should apply size styles based on size prop", () => {
      const { rerender } = render(<BaseButton size="lg">Click me</BaseButton>);
      expect(screen.getByRole("button")).toHaveClass(sizeStyles["lg"]);

      rerender(<BaseButton size="xs">Click me</BaseButton>);
      expect(screen.getByRole("button")).toHaveClass("py-0.5 px-1 gap-1");
    });

    test("should apply variant styles based on variant prop", () => {
      const { rerender } = render(
        <BaseButton variant="outline">Click me</BaseButton>,
      );
      expect(screen.getByRole("button")).toHaveClass(
        "bg-transparent active:bg-gray-100 text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white hover:border-gray-700 focus-visible:bg-gray-600 focus-visible:text-white focus-visible:ring-gray-500 active:bg-gray-900",
      );

      rerender(<BaseButton variant="link">Click me</BaseButton>);
      expect(screen.getByRole("button")).toHaveClass(
        "bg-transparent text-blue-600 hover:text-blue-700 focus-visible:text-blue-800 active:text-blue-900",
      );
    });
  });

  describe("Edge Cases", () => {
    test("should handle extra data attributes", () => {
      render(<BaseButton data-test-id="test-id">Click me</BaseButton>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("data-test-id", "test-id");
    });

    test("should handle iconOnly prop", () => {
      render(<BaseButton iconOnly>Icon</BaseButton>);
      expect(screen.getByRole("button")).toHaveTextContent("Icon");
    });
  });
});
