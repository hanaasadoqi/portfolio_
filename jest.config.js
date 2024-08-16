module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: ["./setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/mocks/(.*)$": "<rootDir>/__mocks__/$1",
  },
  testMatch: ["**/src/components/**/*.test.tsx"],
  testPathIgnorePatterns: ["./node_modules/", "./next/", "./examples/"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.test.json",
    },
  },
};
