import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LinkButton, { LinkButtonVariant } from "./LinkButton";
import { colorStyles, outerStyles, sizeStyles } from "@/components";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("LinkButton", () => {
  beforeEach(() => {
    jest.mock("next/link", () => require("@/mocks/next/link"));
  });

  afterEach(() => {
    jest.resetModules(); // Reset module registry to ensure clean slate for each test
  });

  it("renders with default props", () => {
    render(<LinkButton>Default</LinkButton>);
    const linkButton = screen.getByRole("link");
    expect(linkButton).toHaveTextContent("Default");
    expect(linkButton).toHaveAttribute("href", "#");
    expect(linkButton).toHaveAttribute("aria-label", "Link Button");
  });

  const variants: LinkButtonVariant[] = ["text", "ghost", "link"];
  variants.forEach((variant) => {
    it(`applies correct styles for variant "${variant}"`, async () => {
      const { container } = render(
        <LinkButton variant={variant}>Styled Link Buttons</LinkButton>,
      );

      const linkButton = container.querySelector("a");
      await waitFor(() => {
        expect(linkButton).toHaveClass(outerStyles[variant]);
        expect(linkButton).toHaveClass(colorStyles[variant]);
      });
    });
  });

  const sizes: ("xs" | "sm" | "md" | "lg")[] = ["xs", "sm", "md", "lg"];
  sizes.forEach((size) => {
    it(`applies correct size styles for size "${size}"`, async () => {
      const { container } = render(
        <LinkButton size={size}>Sized Button</LinkButton>,
      );
      const linkButton = container.firstChild;
      await waitFor(() => {
        expect(linkButton).toHaveClass(sizeStyles[size]);
      });
    });
  });

  it("should have opacity-50 and cursor-not-allowed when disabled", () => {
    const { container } = render(
      <LinkButton disabled>Disabled Button</LinkButton>,
    );
    const linkButton = container.firstChild;
    expect(linkButton).toHaveClass("opacity-50");
    expect(linkButton).toHaveClass("cursor-not-allowed");
  });

  it("applies aria-current attribute correctly", () => {
    render(<LinkButton ariaCurrent>Current Page</LinkButton>);
    const linkButton = screen.getByRole("link");
    expect(linkButton).toHaveAttribute("aria-current", "page");
  });

  it("renders icon correctly", () => {
    const icon = (
      <svg data-testid="icon">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="red"
        />
      </svg>
    );
    render(<LinkButton icon={icon}>Icon Button</LinkButton>);
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("renders icon only when iconOnly is true", () => {
    const icon = (
      <svg data-testid="icon">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="red"
        />
      </svg>
    );
    render(<LinkButton icon={icon} iconOnly />);
    const linkButton = screen.getByRole("link");
    expect(linkButton).toContainElement(screen.getByTestId("icon"));
    expect(linkButton).not.toHaveTextContent("Icon Only Button");
  });

  it("calls onClick handler when clicked", async () => {
    const onClick = jest.fn();
    render(<LinkButton onClick={onClick}>Clickable Button</LinkButton>);
    await waitFor(() => {
      const linkButton = screen.getByRole("link");
      fireEvent.click(linkButton);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  it("sets target attribute correctly", () => {
    render(<LinkButton target="_blank">Link with Target</LinkButton>);
    const linkButton = screen.getByRole("link");
    expect(linkButton).toHaveAttribute("target", "_blank");
  });

  it("applies custom className", () => {
    render(
      <LinkButton className="custom-class">Custom Class Button</LinkButton>,
    );
    const linkButton = screen.getByRole("link");
    expect(linkButton).toHaveClass("custom-class");
  });

  describe("Accessibility", () => {
    it("should have no accessibility violations with default props", async () => {
      const { container } = render(<LinkButton>Default</LinkButton>);

      await waitFor(async () => {
        expect(await axe(container)).toHaveNoViolations();
      });
    });
  });
});
