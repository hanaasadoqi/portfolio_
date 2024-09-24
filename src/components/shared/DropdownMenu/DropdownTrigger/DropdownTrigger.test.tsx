import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DropdownTrigger from "./DropdownTrigger";
import { FaDownload } from "react-icons/fa";
import { BaseButtonProps, LinkButtonProps, IconButtonProps } from "@/components/shared";
import Link from "../../../../../__mocks__/next/link";

// TO DO: Address navigation error
/*
console.error
Error: Not implemented: navigation (except hash changes)
    at module.exports (/Users/hanaasadoqi/Development/final_projects/portfolio/node_modules/jsdom/lib/jsdom/browser/not-implemented.js:9:17)
    at navigateFetch (/Users/hanaasadoqi/Development/final_projects/portfolio/node_modules/jsdom/lib/jsdom/living/window/navigation.js:77:3)
    at exports.navigate (/Users/hanaasadoqi/Development/final_projects/portfolio/node_modules/jsdom/lib/jsdom/living/window/navigation.js:55:3)
    at Timeout._onTimeout (/Users/hanaasadoqi/Development/final_projects/portfolio/node_modules/jsdom/lib/jsdom/living/nodes/HTMLHyperlinkElementUtils-impl.js:81:7)
    at listOnTimeout (node:internal/timers:573:17)
    at processTimers (node:internal/timers:514:7) {
  type: 'not implemented'
}

at VirtualConsole.<anonymous> (node_modules/jest-environment-jsdom/build/index.js:63:23)
at module.exports (node_modules/jsdom/lib/jsdom/browser/not-implemented.js:12:26)
at navigateFetch (node_modules/jsdom/lib/jsdom/living/window/navigation.js:77:3)
at exports.navigate (node_modules/jsdom/lib/jsdom/living/window/navigation.js:55:3)
at Timeout._onTimeout (node_modules/jsdom/lib/jsdom/living/nodes/HTMLHyperlinkElementUtils-impl.js:81:7)
*/

// Mock components
jest.mock("../../Buttons/IconButton", () => ({
  IconButton: ({ icon, onClick, ...props }: IconButtonProps) => (
    <button onClick={onClick} {...props}>
      {icon}
    </button>
  ),
}));

jest.mock("../../Buttons", () => ({
  BaseButton: ({ ...props }: BaseButtonProps) => (
    <button {...props}>Base Button</button>
  ),
}));

jest.mock("../../Buttons/LinkButton", () => ({
  LinkButton: ({ href = "/", onClick, ...props }: LinkButtonProps) => (
    <Link href={href} onClick={onClick} {...props}>
      Link Button
    </Link>
  ),
}));

describe("DropdownTrigger Component Tests", () => {
  test("renders IconButton with correct props", () => {
    const handleClick = jest.fn();

    render(
      <DropdownTrigger
        ariaExpanded={true}
        ariaControls="icon-button"
        buttonComponentType="icon"
        onClick={handleClick}
        iconButtonProps={{ icon: <FaDownload /> }}
      >
        Icon Button
      </DropdownTrigger>,
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-controls", "icon-button");
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toContainHTML("<svg");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  test("renders BaseButton with correct props", () => {
    render(
      <DropdownTrigger
        ariaExpanded={true}
        ariaControls="base-button"
        buttonComponentType="button"
        buttonProps={{ type: "button" }}
      >
        Base Button
      </DropdownTrigger>,
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-controls", "base-button");
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveTextContent("Base Button");
  });

  test("renders LinkButton with correct props", async () => {
    const handleClick = jest.fn();

    render(
      <DropdownTrigger
        ariaExpanded={true}
        ariaControls="link-button"
        buttonComponentType="link"
        href="https://example.com"
        onClick={handleClick}
        linkButtonProps={{
          href: "https://example.com",
        }}
      >
        Link Button
      </DropdownTrigger>,
    );

    const link = await waitFor(() => screen.getByRole("link"));
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("aria-controls", "link-button");
    expect(link).toHaveAttribute("aria-expanded", "true");

    await waitFor(() => {
      fireEvent.click(link);
      expect(handleClick).toHaveBeenCalled();
    });
  });

  test("renders correct button based on buttonComponentType", async () => {
    const handleClick = jest.fn();

    const { rerender } = render(
      <DropdownTrigger
        ariaExpanded={true}
        ariaControls="icon-button"
        buttonComponentType="icon"
        onClick={handleClick}
        iconButtonProps={{ icon: <FaDownload /> }}
      >
        Icon Button
      </DropdownTrigger>,
    );

    await waitFor(() => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    rerender(
      <DropdownTrigger
        ariaExpanded={true}
        ariaControls="base-button"
        buttonComponentType="button"
        buttonProps={{ type: "button" }}
      >
        Base Button
      </DropdownTrigger>,
    );

    await waitFor(() => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    rerender(
      <DropdownTrigger
        ariaExpanded={true}
        ariaControls="link-button"
        buttonComponentType="link"
        href="https://example.com"
        linkButtonProps={{
          href: "https://example.com",
        }}
      >
        Link Button
      </DropdownTrigger>,
    );

    await waitFor(() => {
      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });
});
