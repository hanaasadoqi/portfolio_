import { render, screen } from "@testing-library/react";
import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("renders without crashing", () => {
    render(<ButtonGroup>Children</ButtonGroup>);
    expect(screen.getByRole("group")).toBeInTheDocument();
  });

  it("applies the background color", () => {
    render(<ButtonGroup className="bg-blue-500">Children</ButtonGroup>);
    const group = screen.getByRole("group");
    expect(group).toHaveClass("bg-blue-500");
  });

  it("applies the border", () => {
    render(<ButtonGroup border>Children</ButtonGroup>);
    const group = screen.getByRole("group");
    expect(group).toHaveClass("border-2 border-gray-200");
  });

  it("does not apply the border when border is false", () => {
    render(<ButtonGroup border={false}>Children</ButtonGroup>);
    const group = screen.getByRole("group");
    expect(group).not.toHaveClass("border-2 border-gray-200");
  });

  it("applies spacing for vertical orientation", () => {
    render(
      <ButtonGroup orientation="vertical" spacing="lg">
        Children
      </ButtonGroup>,
    );
    const group = screen.getByRole("group");
    expect(group).toHaveClass("space-y-3");
  });

  it("applies spacing for horizontal orientation", () => {
    render(
      <ButtonGroup orientation="horizontal" spacing="lg">
        Children
      </ButtonGroup>,
    );
    const group = screen.getByRole("group");
    expect(group).toHaveClass("space-x-3");
  });

  it("applies orientation classes correctly", () => {
    const { rerender } = render(
      <ButtonGroup orientation="horizontal">Children</ButtonGroup>,
    );
    const group = screen.getByRole("group");
    expect(group).toHaveClass("flex-row");

    rerender(<ButtonGroup orientation="vertical">Children</ButtonGroup>);
    expect(group).toHaveClass("flex-col");
  });

  it("applies the ARIA label", () => {
    render(<ButtonGroup ariaLabel="Button group">Children</ButtonGroup>);
    const group = screen.getByRole("group");
    expect(group).toHaveAttribute("aria-label", "Button group");
  });

  it("applies custom class names", () => {
    render(<ButtonGroup className="custom-class">Children</ButtonGroup>);
    const group = screen.getByRole("group");
    expect(group).toHaveClass("custom-class");
  });
});
