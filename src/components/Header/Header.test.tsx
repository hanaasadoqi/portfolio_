import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders with navigation bar", () => {
    render(<Header />);
    const navigationMenu = screen.getByRole("navigation");
    expect(navigationMenu).toBeInTheDocument();
  });
});
