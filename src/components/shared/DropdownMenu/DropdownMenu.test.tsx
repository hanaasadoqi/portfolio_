import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DropdownMenu from "./DropdownMenu";

describe("DropdownMenu", () => {
  const renderComponent = (props = {}) =>
    render(
      <DropdownMenu
        items={[{ label: "Option 1", onClick: jest.fn() }]}
        menuLabel="Menu"
        {...props}
      />,
    );

  it("renders without crashing", () => {
    renderComponent();
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  it("opens the dropdown menu when the button is clicked", async () => {
    renderComponent();

    const button = screen.getByText("Menu");
    fireEvent.click(button);

    await waitFor(() =>
      expect(screen.getByText("Option 1")).toBeInTheDocument(),
    );
  });

  it("calls onClick handler and closes menu on item click", async () => {
    const handleClick = jest.fn();
    renderComponent({ items: [{ label: "Option 1", onClick: handleClick }] });

    const button = await screen.findByText("Menu");
    fireEvent.click(button);

    const option1 = await screen.findByText("Option 1");
    fireEvent.click(option1);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });

  it("does not call onClick handler if event is undefined", async () => {
    const handleClick = jest.fn();
    renderComponent({ items: [{ label: "Option 1", onClick: handleClick }] });

    const button = await screen.findByText("Menu");
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders multiple menu items and calls onClick handler for each", async () => {
    const handleClick1 = jest.fn();
    const handleClick2 = jest.fn();
    renderComponent({
      items: [
        { label: "Option 1", onClick: handleClick1 },
        { label: "Option 2", onClick: handleClick2 },
      ],
    });

    const button = await screen.findByText("Menu");
    fireEvent.click(button);

    const option1 = await screen.findByText("Option 1");
    fireEvent.click(option1);

    expect(handleClick1).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    fireEvent.click(button);

    const option2 = await screen.findByText("Option 2");

    fireEvent.click(option2);
    expect(handleClick2).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
  });

  it("handles asynchronous operations correctly when an item is clicked", async () => {
    const handleClick = jest.fn(
      () => new Promise((resolve) => setTimeout(resolve, 100)),
    );
    renderComponent({ items: [{ label: "Option 1", onClick: handleClick }] });

    const button = await screen.findByText("Menu");
    fireEvent.click(button);

    const option1 = await screen.findByText("Option 1");
    fireEvent.click(option1);

    await waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });

  describe("Edge cases", () => {
    it("renders correctly with no menu items", () => {
      renderComponent({ items: [] });

      expect(screen.getByText("Menu")).toBeInTheDocument();
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA roles and attributes", () => {
      const { container } = render(
        <DropdownMenu
          items={[{ label: "Option 1", onClick: jest.fn() }]}
          menuLabel="Menu"
        />,
      );

      const button = screen.getByText("Menu");

      expect(container.firstChild).toHaveAttribute("aria-haspopup", "true");
      expect(button).toHaveAttribute("aria-expanded", "false");

      fireEvent.click(button);

      expect(button).toHaveAttribute("aria-expanded", "true");

      expect(screen.getByRole("menu")).toBeInTheDocument();
    });

    it("manages focus correctly", async () => {
      renderComponent();

      const button = screen.getByText("Menu");
      button.focus();

      fireEvent.click(button);

      const menu = await screen.findByRole("menu");
      await waitFor(() => expect(menu).toHaveFocus());

      // Simulate closing the menu
      fireEvent.click(screen.getByText("Option 1"));

      await waitFor(() => expect(button).toHaveFocus());
    });

    it("opens the dropdown menu with Enter key", async () => {
      renderComponent();

      const button = screen.getByText("Menu");
      button.focus();
      fireEvent.keyDown(button, { key: "Enter", code: "Enter" });

      expect(await screen.findByText("Option 1")).toBeInTheDocument();
    });
  });
});
