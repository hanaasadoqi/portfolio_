import "@testing-library/jest-dom";
import "jest-location-mock";

const mockLocation = {
  href: "",
  assign: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  toString: jest.fn(() => ""),
  [Symbol.toStringTag]: "location",
};

Object.defineProperty(window, "location", {
  value: mockLocation,
  writable: true,
});
