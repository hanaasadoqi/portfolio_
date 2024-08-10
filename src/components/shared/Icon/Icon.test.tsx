import { render, screen, cleanup } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Icon from "./Icon";
import { FaDownload } from "react-icons/fa";

expect.extend(toHaveNoViolations);

// Clean up after each test
afterEach(cleanup);

describe("Icon Component", () => {
  describe("React Icons", () => {
    it("renders icons from react-icons library correctly", () => {
      render(<Icon icon={<FaDownload />} />);
      const iconElement = screen.getByTestId("icon");
      const iconWrapper = screen.getByTestId("icon-wrapper");

      expect(iconElement).toBeInTheDocument();
      expect(iconWrapper).toBeInstanceOf(HTMLSpanElement);
      expect(document.body.contains(iconWrapper)).toBe(true);
      expect(window.getComputedStyle(iconWrapper).display).not.toBe("none");
      expect(window.getComputedStyle(iconWrapper).visibility).not.toBe(
        "hidden",
      );
    });

    it("renders icon with default props", () => {
      render(<Icon type="react-icons" icon={<FaDownload />} />);

      const iconElement = screen.getByTestId("icon");
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveStyle({ color: "currentColor" });
    });

    it("renders icon with custom styles and className", () => {
      const { container } = render(
        <Icon
          type="react-icons"
          icon={<FaDownload />}
          className="custom-class"
          style={{ color: "red" }}
        />,
      );

      expect(container).toMatchSnapshot();

      const iconElement = screen.getByTestId("icon");
      expect(iconElement.parentElement).toHaveClass("custom-class");
    });

    it("adjusts size based on container", () => {
      render(
        <div className="h-10 w-10" data-testid="icon-container">
          <Icon icon={<FaDownload />} size="sm" />
        </div>,
      );

      const iconElement = screen.getByTestId("icon");
      const iconContainer = screen.getByTestId("icon-container");

      const iconStyle = window.getComputedStyle(iconElement);
      const containerStyle = window.getComputedStyle(iconContainer);
      expect(iconStyle.width).toBe(containerStyle.width);
      expect(iconStyle.height).toBe(containerStyle.height);
    });

    it("should render loading icon when loading", () => {
      render(<Icon loading />);

      const iconElement = screen.getByTestId("spinner");

      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass("animate-spin");
      expect(iconElement.parentElement).toHaveAttribute(
        "aria-label",
        "Loading",
      );
    });

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
      expect(iconElement.parentElement).toHaveAttribute(
        "aria-label",
        "Download Icon",
      );
      expect(iconElement).not.toHaveAttribute("aria-hidden");
    });

    it("throws an error when icon is not provided and does not render anything", () => {
      const consoleError = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const renderIcon = () => {
        try {
          render(<Icon type="react-icons" />);
        } catch (error) {
          return error;
        }
      };

      const error = renderIcon();

      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        "Icon component requires an icon prop when type is react-icons",
      );
      expect(consoleError).toHaveBeenCalled();

      consoleError.mockRestore();
    });

    test("accessible icons using react-icons pass axe", async () => {
      const { container } = render(
        <Icon icon={<FaDownload />} ariaLabel="Download" />,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("SVG Icons", () => {
    let svgIcon: React.ReactElement<SVGSVGElement>;

    beforeEach(() => {
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

    it("renders SVG icons correctly", () => {
      render(<Icon type="svg">{svgIcon}</Icon>);
      const svgElement = screen.getByTestId("svg-icon");
      const spanElement = screen.getByTestId("icon-wrapper");

      expect(svgElement).toBeInTheDocument();
      expect(spanElement).toBeInTheDocument();
      expect(spanElement).toHaveClass("icon-wrapper");
    });

    it("renders children within svg correctly", () => {
      const customSvgIcon = (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" stroke="black" strokeWidth="3" fill="green" />
        </svg>
      );

      render(<Icon type="svg">{customSvgIcon}</Icon>);

      const svgElement = screen.getByTestId("svg-icon");
      expect(svgElement).toBeInTheDocument();
      expect(svgElement.firstChild).toContainHTML(
        '<rect x="10" y="10" stroke="black" stroke-width="3" fill="green"></rect>',
      );
    });

    it("renders SVG icon with applied className and styles", () => {
      render(
        <Icon type="svg" className="custom-class" style={{ color: "blue" }}>
          {svgIcon}
        </Icon>,
      );

      const svgElement = screen.getByTestId("svg-icon");
      expect(svgElement.parentElement).toHaveClass("custom-class");
      expect(svgElement).toHaveStyle({ color: "blue" });
    });

    it("adjusts size based on container", () => {
      render(
        <div className="h-10 w-10" data-testid="icon-container">
          <Icon type="svg">{svgIcon}</Icon>
        </div>,
      );

      const svgElement = screen.getByTestId("svg-icon");
      const svgContainer = screen.getByTestId("icon-container");

      const containerRect = svgContainer.getBoundingClientRect();
      const iconRect = svgElement.getBoundingClientRect();
      expect(iconRect.width).toBeCloseTo(containerRect.width, 1);
      expect(iconRect.height).toBeCloseTo(containerRect.height, 1);
    });

    it("includes title element for svg icons when ariaLabel is provided", () => {
      render(
        <Icon type="svg" ariaLabel="SVG Icon">
          {svgIcon}
        </Icon>,
      );

      const svgElement = screen.getByTestId("svg-icon");
      const titleElement = screen.getByText("SVG Icon");

      expect(titleElement).toBeInTheDocument();
      expect(svgElement).toHaveAttribute("aria-labelledby", "svg-title");
      expect(titleElement).toHaveAttribute("id", "svg-title");
    });

    it("throws an error when children is not provided and does not render anything", () => {
      const consoleError = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const renderIcon = () => {
        try {
          render(<Icon type="svg" />);
        } catch (error) {
          return error;
        }
      };

      const error = renderIcon();

      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        "Icon component requires children when type is svg",
      );
      expect(consoleError).toHaveBeenCalled();

      consoleError.mockRestore();
    });

    test("accessible SVG icons pass axe", async () => {
      const { container } = render(
        <Icon type="svg" ariaLabel="Download Icon">
          {svgIcon}
        </Icon>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
