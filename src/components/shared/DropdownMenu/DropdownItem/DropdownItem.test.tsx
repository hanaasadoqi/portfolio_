import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DropdownItem from "./DropdownItem";

jest.mock("../../Buttons", () => ({
  BaseButton: jest.fn(({ children, ...props }) => (
    <button {...props}>{children}</button>
  )),
  IconButton: jest.fn(({ icon, children, ...props }) => (
    <button {...props}>
      {icon}
      {children}
    </button>
  )),
  LinkButton: jest.fn(({ href, children, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )),
}));

describe("DropdownItem", () => {
  test("renders with an icon using IconButton", () => {
    const icon = <svg data-testid="icon" />;
    render(
      <DropdownItem icon={icon} ariaLabel="Icon button">
        Icon Button
      </DropdownItem>,
    );

    const button = screen.getByRole("menuitem");
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(button).toHaveTextContent("Icon Button");
  });

  test("renders with href using LinkButton", async () => {
    render(<DropdownItem href="/some-link" label="Link Button" />);

    const link = screen.getByRole("menuitem");
    await waitFor(() => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("aria-label", "Link Button");
      expect(link).toHaveAttribute("href", "/some-link");
    });
  });

  test("renders without icon and href using BaseButton", async () => {
    render(<DropdownItem label="Base Button" />);

    const button = screen.getByRole("menuitem");
    await waitFor(() => {
      expect(button).toBeInTheDocument();
      expect(button).toContainHTML("Base Button");
    });
  });

  test("handles onClick event", async () => {
    const handleClick = jest.fn();
    render(<DropdownItem onClick={handleClick} label="Clickable Button" />);

    const button = screen.getByRole("menuitem");

    await waitFor(() => {
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  test("applies additional props correctly", () => {
    render(
      <DropdownItem
        ariaLabel="Additional Props Button"
        data-testid="additional-props"
      />,
    );

    const button = screen.getByTestId("additional-props");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "Additional Props Button");
  });
});
