import { render, screen } from "@testing-library/react";
import Icon from "./Icon";
import { FaDownload } from "react-icons/fa";

describe("Icon Component", () => {
  describe("React Icons", () => {
    // Test rendering of icons from the react-icons library
    it("renders icons from react-icons library correctly", () => {
      render(<Icon icon={<FaDownload />} />);

      // Retrieve the icon element by test ID
      const iconElement = screen.getByTestId("icon");
      expect(iconElement).toBeInTheDocument(); // Check if the icon is in the document

      // Retrieve the parent wrapper element by test ID
      const iconWrapper = screen.getByTestId("icon-wrapper");

      // Log computed styles for debugging
      console.log(window.getComputedStyle(iconWrapper));
      console.log(typeof iconWrapper);

      // Check if the wrapper is an instance of HTMLSpanElement
      expect(iconWrapper).toBeInstanceOf(HTMLSpanElement);

      // Verify the icon wrapper is part of the document and visible
      expect(document.body.contains(iconWrapper)).toBe(true);
      expect(window.getComputedStyle(iconWrapper).display).not.toBe("none");
      expect(window.getComputedStyle(iconWrapper).visibility).not.toBe(
        "hidden",
      );
    });

    // Test if icon with applied className and style renders correctly
    it("renders icon with applied className and style", () => {
      const { container } = render(
        <Icon
          type="react-icons"
          icon={<FaDownload />}
          className="custom-class"
          style={{ color: "red" }}
        />,
      );

      expect(container).toMatchSnapshot(); // Snapshot testing for visual consistency

      const iconElement = screen.getByTestId("icon");
      // Check if parent element has the correct className
      expect(iconElement.parentElement).toHaveClass("custom-class");
      // Check if the icon has the correct inline style
      expect(iconElement).toHaveStyle({ color: "red" });
    });

    // Test if the icon size adjusts based on container size
    it("adjusts size based on container", () => {
      render(
        <div className="h-10 w-10" data-testid="icon-container">
          <Icon icon={<FaDownload />} />
        </div>,
      );

      const iconElement = screen.getByTestId("icon");
      const iconContainer = screen.getByTestId("icon-container");

      // Compare the sizes of icon and container to ensure they match
      const iconStyle = window.getComputedStyle(iconElement);
      const containerStyle = window.getComputedStyle(iconContainer);
      expect(iconStyle.width).toBe(containerStyle.width);
      expect(iconStyle.height).toBe(containerStyle.height);
    });

    // Test if aria attributes are applied correctly to the icon
    it("applies aria attributes correctly for react-icons", () => {
      render(
        <Icon
          type="react-icons"
          icon={<FaDownload />}
          ariaLabel="Download Icon"
          ariaHidden={false}
        />,
      );

      const iconElement = screen.getByTestId("icon");
      // Check if parent element has the correct aria-label attribute
      expect(iconElement.parentElement).toHaveAttribute(
        "aria-label",
        "Download Icon",
      );
      // Ensure the icon itself does not have aria-hidden attribute
      expect(iconElement).not.toHaveAttribute("aria-hidden");
    });

    // Test if an error is thrown when icon is not provided
    it("throws an error when icon is not provided and does not render anything", () => {
      const consoleError = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      // Function to capture the thrown error when icon prop is missing
      const renderIcon = () => {
        try {
          render(<Icon type="react-icons" />);
        } catch (error) {
          return error;
        }
      };

      const error = renderIcon();

      // Assert that an error was indeed thrown
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        "Icon component requires an icon prop when type is react-icons",
      );

      // Ensure that console.error was called
      expect(consoleError).toHaveBeenCalled();

      consoleError.mockRestore(); // Restore original console.error implementation
    });
  });

  describe("SVG Icons", () => {
    let svgIcon: React.ReactElement;
    beforeEach(() => {
      // Define a sample SVG icon for testing
      svgIcon = (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
    });

    // Test if SVG icons render correctly
    it("renders SVG icons correctly", () => {
      render(<Icon type="svg">{svgIcon}</Icon>);
      const svgElement = screen.getByTestId("svg-icon");
      expect(svgElement).toBeInTheDocument(); // Check if SVG icon is in the document

      const spanElement = screen.getByTestId("icon-wrapper"); // Ensure this selects the correct span element
      screen.debug(); // Debug output for inspection
      console.log(spanElement);

      expect(spanElement).toBeInTheDocument();

      const parentElement = svgElement.parentElement;

      if (parentElement) {
        // Check if the parent element has the correct className
        expect(parentElement).toHaveClass("icon-wrapper");
      } else {
        throw new Error("Parent element not found");
      }
    });

    // Test if custom SVG content is rendered correctly
    it("renders children within svg correctly", () => {
      const customSvgIcon = (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="black"
            strokeWidth="3"
            fill="green"
          />
        </svg>
      );

      render(<Icon type="svg">{customSvgIcon}</Icon>);

      const svgElement = screen.getByTestId("svg-icon");
      expect(svgElement).toBeInTheDocument();
      // Verify that the SVG contains the expected HTML content
      expect(svgElement).toContainHTML(
        '<rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="3" fill="green"></rect>',
      );
    });

    // Test if SVG icon with className and styles are applied correctly
    it("renders SVG icon with applied className and styles", () => {
      render(
        <Icon type="svg" className="custom-class" style={{ color: "blue" }}>
          {svgIcon}
        </Icon>,
      );

      const svgElement = screen.getByTestId("svg-icon");
      // Check if parent element has the correct className
      expect(svgElement.parentElement).toHaveClass("custom-class");
      // Check if the SVG icon has the correct inline style
      expect(svgElement).toHaveStyle({ color: "blue" });
    });

    // Test if SVG icon size adjusts based on container size
    it("adjusts size based on container", () => {
      render(
        <div className="h-10 w-10" data-testid="icon-container">
          <Icon type="svg">{svgIcon}</Icon>
        </div>,
      );

      const svgElement = screen.getByTestId("svg-icon");
      const svgContainer = screen.getByTestId("icon-container");

      // Verify that SVG icon size matches the container size
      const containerRect = svgContainer.getBoundingClientRect();
      const iconRect = svgElement.getBoundingClientRect();
      expect(iconRect.width).toBeCloseTo(containerRect.width, 1); // Allow some precision for floating-point comparison
      expect(iconRect.height).toBeCloseTo(containerRect.height, 1); // Allow some precision for floating-point comparison
    });

    // Test if SVG icon includes a title element when ariaLabel is provided
    it("includes title element for svg icons when ariaLabel is provided", () => {
      render(
        <Icon type="svg" ariaLabel="SVG Icon">
          {svgIcon}
        </Icon>,
      );

      const svgElement = screen.getByTestId("svg-icon");
      const titleElement = screen.getByText("SVG Icon");

      expect(titleElement).toBeInTheDocument();
      // Ensure the SVG element has the aria-labelledby attribute pointing to the title
      expect(svgElement).toHaveAttribute("aria-labelledby", "svg-title");
    });
  });
});
