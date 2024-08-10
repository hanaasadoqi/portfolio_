import { render, waitFor, screen } from "@testing-library/react";
import Header from "./Header";

// TO DO: Add tests

describe("Header", () => {
  it("renders with navigation bar", async () => {
    render(<Header />);
    await waitFor(() => {
      const navigationMenu = screen.getByRole("navigation");
      expect(navigationMenu).toBeInTheDocument();
    });
  });
});
