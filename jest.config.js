module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['./setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      { tsconfig: '<rootDir>/tsconfig.jest.json' },
    ],
  },
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/mocks/(.*)$': '<rootDir>/__mocks__/$1 font-extralight',
  },
  testMatch: ['**/src/components/**/*.test.tsx'],
  testPathIgnorePatterns: ['./node_modules/', './.next/', './examples/'],
}
