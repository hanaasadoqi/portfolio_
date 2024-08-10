import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NavMenu, { NavItem, NavItemProps } from "./NavMenu";
import { FaHamburger } from "react-icons/fa";

// Mock `next/link`
jest.mock("next/link", () => require("@/mocks/next/link"));

// Mock `LinkButton` and `ButtonGroup`
jest.mock("../../shared", () =>
  require("../../../../__mocks__/src/components/shared"),
);

describe("NavMenu", () => {
  afterEach(() => {
    jest.resetModules(); // Reset module registry to ensure clean slate for each test
  });

  test("renders internal links with correct href", () => {
    const navItems = [
      {
        href: "#about",
        label: "About",
      },
      {
        href: "#contact",
        label: "Contact",
      },
    ];
    render(<NavMenu links={navItems} />);

    const about = screen.getByText("About");
    const contact = screen.getByText("Contact");

    expect(about).toBeInTheDocument();
    expect(about).toHaveAttribute("href", "#about");
    expect(contact).toBeInTheDocument();
    expect(contact).toHaveAttribute("href", "#contact");
  });

  test("items have correct aria-labels", () => {
    const navItems = [
      {
        href: "#about",
        label: "About",
      },
      {
        href: "#contact",
        label: "Contact",
      },
    ];
    render(<NavMenu links={navItems} />);

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toHaveAttribute("aria-label", "About");

    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "aria-label",
      "Contact",
    );
  });

  test("NavMenu items have appropriate aria attributes", () => {
    const navItems = [
      {
        href: "#about",
        label: "About",
        ariaLabel: "About Section",
      },
      {
        href: "#contact",
        label: "Contact",
        ariaLabel: "Contact Section",
      },
    ];
    render(<NavMenu links={navItems} />);

    const aboutLink = screen.getByText("About");
    const contactLink = screen.getByText("Contact");

    expect(aboutLink).toHaveAttribute("aria-label", "About Section");
    expect(contactLink).toHaveAttribute("aria-label", "Contact Section");
  });

  test("items are disabled when expected", () => {
    const navItems = [
      {
        href: "#about",
        label: "About",
      },
      {
        href: "#",
        label: "Disabled",
        disabled: true,
      },
    ];
    render(<NavMenu links={navItems} />);

    const homeLink = screen.getByRole("link", { name: "About" });
    expect(homeLink).toHaveAttribute("aria-disabled", "false");

    const disabledLink = screen.getByRole("link", { name: "Disabled" });
    expect(disabledLink).toHaveAttribute("aria-disabled", "true");
  });

  test("items have aria-current set correctly", () => {
    const navItems = [
      {
        href: "#about",
        label: "About",
      },
      {
        href: "#contact",
        label: "Contact",
      },
    ];
    render(<NavMenu links={navItems} />);

    const currentLink = screen.getByRole("link", { name: "About" });
    expect(currentLink).toHaveAttribute("aria-current", "page");
  });

  test("ButtonGroup renders with correct orientation and spacing", () => {
    const navItems = [
      {
        href: "#about",
        label: "About",
      },
      {
        href: "#contact",
        label: "Contact",
      },
    ];
    render(<NavMenu links={navItems} />);

    const buttonGroup = screen.getByRole("group");
    expect(buttonGroup).toHaveClass("inline-flex");
    expect(buttonGroup).toHaveClass("space-x-2");
  });

  test("ButtonGroup is rendered when appropriate", () => {
    const navItems = [
      {
        href: "#about",
        label: "About",
      },
      {
        href: "#contact",
        label: "Contact",
      },
    ];
    render(<NavMenu links={navItems} />);

    const buttonGroup = screen.queryByRole("group");
    expect(buttonGroup).toBeInTheDocument();
  });

  test("Custom className is applied to LinkButton", () => {
    const navItems = [
      {
        href: "#about",
        label: "About",
        className: "custom-class",
      },
      {
        href: "#contact",
        label: "Contact",
      },
    ];
    render(<NavMenu links={navItems} />);

    const homeLink = screen.getByRole("link", { name: "About" });
    expect(homeLink).toHaveClass("custom-class");
  });

  test("ButtonGroup handles custom props", () => {
    const navItems = [
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ];
    render(<NavMenu links={navItems} ariaLabel="Main Navigation" />);

    const buttonGroup = screen.getByRole("group");
    expect(buttonGroup).toHaveAttribute("aria-label", "Main Navigation");
  });

  test("Snapshot test for NavMenu", () => {
    const navItems = [
      {
        href: "#about",
        label: "About",
      },
      {
        href: "#contact",
        label: "Contact",
      },
    ];
    const { asFragment } = render(<NavMenu links={navItems} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe("Error handling and edge cases", () => {
    test("handles empty links array gracefully", () => {
      render(<NavMenu links={[]} />);
      expect(screen.queryByRole("link")).toBeNull();
    });

    test("throws error if NavItem does not have href", () => {
      const spy = jest.spyOn(console, "error").mockImplementation(() => {});
      const navItems = [{ label: "No href" }];

      expect(() => render(<NavMenu links={navItems} />)).toThrow();
      spy.mockRestore();
    });
  });

  describe("Performance testing", () => {
    let navItems: NavItemProps[];

    beforeAll(() => {
      navItems = Array.from({ length: 1000 }, (_, i) => ({
        href: `#item${i}`,
        label: `Item ${i}`,
      }));
    });

    test("NavMenu renders efficiently with many items", () => {
      // Render NavMenu with many items
      const { container } = render(<NavMenu links={navItems} />);

      // Ensure that the container is in the document
      expect(container).toBeInTheDocument();

      navItems.forEach((item) => {
        expect(screen.getByText(item.label)).toBeInTheDocument();
      });
    });

    test("NavItem renders efficiently with large content", () => {
      render(
        <NavItem href="#about" label="About" ariaLabel={"A".repeat(1000)} />,
      );
      expect(screen.getByText("About")).toBeInTheDocument();
    });

    test("NavItem handles long labels gracefully", () => {
      const longLabel = "A".repeat(100);
      render(<NavItem href="#long" label={longLabel} />);
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });
  });
});

describe("NavItem", () => {
  test("renders with correct label", () => {
    render(<NavItem href="#about" label="About" />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  test("throws error if href is missing", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    expect(() => render(<NavItem label="About" />)).toThrow();

    spy.mockRestore();
  });

  test("applies custom aria-label", () => {
    render(<NavItem href="#about" label="About" ariaLabel="Custom Label" />);
    const link = screen.getByText("About");
    expect(link).toHaveAttribute("aria-label", "Custom Label");
  });

  test("renders with custom children", () => {
    render(
      <NavItem href="#about" label="About">
        <span>Custom Content</span>
      </NavItem>,
    );
    expect(screen.getByText("Custom Content")).toBeInTheDocument();
  });

  test("renders with icon if provided", () => {
    render(<NavItem href="#about" label="About" icon={<FaHamburger />} />);
  });

  test("snapshot test for NavItem", () => {
    const { asFragment } = render(<NavItem href="#about" label="About" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("NavItem triggers event handlers correctly", async () => {
    const handleClick = jest.fn();
    render(<NavItem href="#about" label="About" onClick={handleClick} />);
    await waitFor(() => {
      fireEvent.click(screen.getByText("About"));
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
